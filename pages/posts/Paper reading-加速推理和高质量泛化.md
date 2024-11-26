---
title: Paper reading--扩散模型推理加速与高质量生成
date: 2024-11-25
updated: 2023-11-25
categories: Paper-reading
image: https://raw.githubusercontent.com/xjtu-wjz/void2004/refs/heads/main/pics_for_post/_2024-11-12%20111031.webp
tags:
  - 科研
  - Generative Models
top: 1
---

# The Surprising Effectiveness of Skip-Tuning in Diffusion Sampling
正式开始之前首先我们需要先学习目前有很多ODE-based 扩散模型使用了U-net来帮助预测噪声。在这种结构下，时间信号被转换为time-embedding送入U-net的输出，这样U-net就能预测针对原图像和不同时段，加在图片上的噪声。

U-net中的skip-connection加强了U-net的拟合能力，但是我们必须意识到，这同时也埋下了隐患。U-net的最高输入层和最低输出层直接相连，这可能导致U-net的非线性拟合能力下降（最高和最低层的skip-conncetion可以认为在某种程度上将模型弱化为了一个线性模型，直接输入并直接输出）。

中间做了一下具体测试，对DMP中U-net分别收集下采样特征向量（编码器部分）和上采样特征向量（解码器部分）的范数之比：

$$prop_{i} = ||d_{i}||_{2} / ||u_{i}||_{2}$$

得到如下图：

![alt text](../../materials/EF1.png)

可以看见在众多ODE-based diffusion model中，尤其是在经过蒸馏的ODE-based model中，下采样特征向量的范数明显弱于上采样过程。这对于push-forward transformation不利。为了克服这种影响，便提出对U-net的每一层进行加权：

$$\Delta\rho = \frac{(\rho_{top} - \rho_{bottom})}{k}, \quad \rho_i = \rho_{bottom} + \Delta\rho \cdot i.$$

本质上是对U-net的不同层加以不同权重，来缓解由于skip-connection导致的对push-forward的影响。


# DeepCache: Accelerating Diffusion Models for Free
我们已经基本了解了U-net在扩散模型中的应用--主要用于学习噪声，在采样过程中去噪。对于采样过程中U-net的去噪学习过程而言，我们还是认为计算损失太大了，U——net的多层结构，经过层层计算的开销还是不小。与此同时我们发现在去噪过程中，相邻几步的U-net学习到的噪声特征，尤其是在深层，几乎是一样的，这篇论文基于这个发现提出了一种方法：使用一个cache结构存储$x_{t}$步时对应的U-net深层得到的特征，在后面相邻的k步直接使用cache存储的特征去噪，就不用再额外学习了。

示意图如下：

![alt text](../../materials/DC1.png)


# ANALYTIC-DPM-- AN ANALYTIC ESTIMATE OF THE OPTIMAL REVERSE VARIANCE IN DIFFUSION PROBABILISTIC MODELS

扩散模型高昂的计算成本主要来自于逆扩散中的方差估计，这一步需要迭代上千个时间周期。本论文提出了反向扩散中的方差和KL散度都有关于其得分函数的解析形式。在此基础上论文提出一种免预训练的框架--解析DPM，使用蒙特卡洛方法和已经经过预训练的基于得分的模型来估计方差和KL散度的解析形式。

首先提出了最优均值和方差的解析值如下：

$$\mu_n^*(x_n) = \tilde{\mu}_n ( x_n, \frac{1}{\sqrt{\alpha_n}} (x_n + \bar{\beta}_n \nabla_{x_n} \log q_n(x_n)))$$

$$\sigma_n^{*2} = \lambda_n^2 + ( \sqrt{\frac{\bar{\beta}_n}{\alpha_n}} - \sqrt{\bar{\beta}_{n-1}} - \lambda_n^2 )^2 ( 1 - \bar{\beta}_n \mathbb{E}_{q_n(\boldsymbol{x}_n)} \frac{|| \nabla_{\boldsymbol{x}_n} \log q_n(\boldsymbol{x}_n) ||^2}{d} )$$

使用分数函数和参数$\alpha，\beta$给出解析形式。方差使用基础方差$\lambda^2$和分数函数平方范数的期望与$\alpha和\beta$加以限制。

分数函数$\nabla_{x} logq(x)$指示数据分布的对数似然对数据本身的梯度，通常也可以用一个分数模型$s(x)$来学习，表示。分数函数指导去噪过程中的方向。在实际中分数函数的期望均方范数可以用蒙特卡洛采样来代替：

$$\hat{T} = \frac{1}{M} \sum_{m=1}^{M} \|s(x_m)\|^2, \quad 其中 \; x_m \sim q(x)$$

回带得到：

$$\hat{\sigma}_n^2 = \lambda_n^2 + \left( \sqrt{\frac{\beta_n}{\alpha_n}} - \sqrt{\beta_{n-1}} - \lambda_n^2 \right)^2 \left( 1 - \bar{\beta}_n \Gamma_n \right)$$

针对每一个预训练分数模型和下游任务，蒙特卡洛采样只需要进行一次即可。

经过使用蒙特卡洛采样之后，我们得到预测方差和系统方差之间的差值为：

$$
|\sigma_n^{*2} - \hat{\sigma}_n^2| = 
\underbrace{
\left(
\sqrt{\frac{\beta_n}{\alpha_n}} - \sqrt{\beta_{n-1}} - \lambda_n^2
\right)^2}_{\text{Coefficient}}
\underbrace{
\overline{\beta_n}
\left|
\Gamma_n - \mathbb{E}_{q_n(x_n)} \frac{||\nabla x_n \log q_n(x_n)||^2}{d}
\right|
}_{\text{Approximation error}}.
$$

我们还可以得到最优反向方差的上下界：

$$
\lambda_n^2 \leq \sigma_n^2 \leq \lambda_n^2 + \left( \sqrt{\frac{\beta_n}{\alpha_n}} - \sqrt{\beta_{n-1} - \lambda_n^2} \right)^2 .
$$

这段为原本方差加上我们给的参数限制。如果数据分布有界，则还可以推出这样的上界：

$$
\sigma_n^2 \leq \lambda_n^2 + \left( \sqrt{\alpha_{n-1}} - \sqrt{\beta_{n-1} - \lambda_n^2} \cdot \sqrt{\frac{\alpha_n}{\beta_n}} \right)^2 \left( \frac{b-a}{2} \right)^2 .
$$

假设数据分布$q(x_0)$有界，在$[a,b]^d$区域内。

针对具体下游任务的数据分布情况，选择较小的上界来约束。

我们得到了关于均值和方差的解析估计和上下界估计，现在我们讨论如何利用解析最优估计轨迹来优化模型推理。

反向扩散过程可以表示成如下过程：

$$p(\boldsymbol{x}_0, \boldsymbol{x}_{\tau_1}, \cdots, \boldsymbol{x}_{\tau_K}) = p(\boldsymbol{x}_{\tau_K}) \prod_{k=1}^{K} p(\boldsymbol{x}_{\tau_{k-1}} | \boldsymbol{x}_{\tau_k})$$

其中：

$$p(\boldsymbol{x}_{\tau_{k-1}} | \boldsymbol{x}_{\tau_k}) = \mathcal{N}(\boldsymbol{x}_{\tau_{k-1}} | \boldsymbol{\mu}_{\tau_{k-1}|\tau_k}(\boldsymbol{x}_{\tau_k}), \sigma^2_{\tau_{k-1}|\tau_k} \boldsymbol{I})$$

同样的正向扩散过程可以表示成如下：

$$q(\boldsymbol{x}_{\tau_{k-1}} | \boldsymbol{x}_{\tau_k}, \boldsymbol{x}_0) = \mathcal{N}(\boldsymbol{x}_{\tau_{k-1}} | \tilde{\boldsymbol{\mu}}_{\tau_{k-1}|\tau_k}(\boldsymbol{x}_{\tau_k}, \boldsymbol{x}_0), \lambda^2_{\tau_{k-1}|\tau_k} \boldsymbol{I})$$

$$\tilde{\boldsymbol{\mu}}_{\tau_{k-1}|\tau_k}(\boldsymbol{x}_{\tau_k}, \boldsymbol{x}_0) = \sqrt{\alpha_{\tau_{k-1}}} \boldsymbol{x}_0 + \frac{\sqrt{\beta_{\tau_k}} - \lambda^2_{\tau_{k-1}|\tau_k}}{\sqrt{\beta_{\tau_k}}} \cdot \frac{\boldsymbol{x}_{\tau_k} - \sqrt{\alpha_{\tau_k}} \boldsymbol{x}_0}{\sqrt{\beta_{\tau_k}}}$$


借用之前的结论，使用一个已经预训练好的分数模型来预测分数函数均方范数梯度可以将方差计算公式简化如下：

$$\hat{\sigma}^2_{\tau_{k-1}|\tau_k} = \lambda^2_{\tau_{k-1}|\tau_k} + \left( \sqrt{\frac{\bar{\beta}_{\tau_k}}{\alpha_{\tau_k|\tau_{k-1}}}} - \sqrt{\bar{\beta}_{\tau_{k-1}}} - \lambda^2_{\tau_{k-1}|\tau_k} \right)^2 (1 - \bar{\beta}_{\tau_k} \Gamma_{\tau_k})$$

现在要进行训练，我们只需要优化正向反向路径$q和p$的KL散度：

$$\min_{\tau_1,\cdots,\tau_K} D_{KL}(q(\boldsymbol{x}_0, \boldsymbol{x}_{\tau_1}, \cdots, \boldsymbol{x}_{\tau_K}) \| p^*(\boldsymbol{x}_0, \boldsymbol{x}_{\tau_1}, \cdots, \boldsymbol{x}_{\tau_K})) = \frac{d}{2} \sum_{k=2}^{K} J(\tau_{k-1}, \tau_k) + c,$$

其中

$$J(\tau_{k-1}, \tau_k) \approx \log (\hat{\sigma}^2_{\tau_{k-1}|\tau_k} / \lambda^2_{\tau_{k-1}|\tau_k})$$

简单来说，这个方法将轨迹优化问题转化为了一个有向图上的最短路径问题，成本函数就是$J(.,.)$.每一个成本函数都可以直接简单计算得到，不需要复杂的网络训练。对于连续时间步长的扩散模型，依然可以将KL散度优化过程拆分成不同时间段分数函数的项值的和，因此依然适用。

