---
title: Paper reading-4 《Self-PU Self Boosted and Calibrated Positive-Unlabeled Training》
date: 2024-09-09
updated: 2024-09-09
categories: Paper-reading
image : https://raw.githubusercontent.com/xjtu-wjz/void2004/main/pics_for_post/frena.webp
tags:
  - PUL
  - 科研
top: 1
---
# self-PU

文章提出了一种新颖的PUL问题框架。先前的PUL方法集中精力于损失敏感上面，直接将未标记样本作为负样本进行损失优化，然后对于未标记样本中各个样本赋予不同权重进行学习。问题也很明显：面对有效容量大，可以过拟合的模型（例如DNN），分类器有严重的负分类倾向，因此有必要另寻出路解决这个问题。self-PU这篇文章提出了经典的取样（resampling method）技术，充当了很多后续工作的baseline和backbone。

总体来说self-PU的大致流程是两阶段：第一阶段，self-paced+self-calibrated。在这一阶段模型会训练两个模型（students model）。这两个模型的主要任务是一边训练，一边识别出未标记样本中可靠的正样本/负样本，加到构建的可信数据集中，我们记作$D_{trust}$。我们约定大数据集$D$指的是所有未标记样本，而$D-D_{trust}$指的是剩下的没有被纳入可信数据集中的未标记样本。可信数据集中的样本标签并不是硬标签（hard label），而是软标签$f(g(x))$，其中$g(x)$是模型对样本x的预测输出，$f$是类似于$sigmoid$之类的函数，将输出映射到$R:[0,1]$之间的一个值。除此之外，我们还根据两个学生模型的特征构造两个教师模型，之后等到$D_{trust}$达到一定规模，我们进入第二阶段，这时候引入两个教师模型，对学生模型进行蒸馏。最后得到教师模型进行PU分类任务。流程图如下：

![alt text](../../materials/image.png)


下面主要讲解的就是三块重点：self-paced,self-calibrated,self-supervised。

# Self-Paced PU-learning

self-PU的第一阶段。两个学生模型的任务都是一边训练，一边修改$D_{trust}$，但是我们事先设置他们选取数据的数量不一样。例如学生模型会选取样本加入$D_{trust}$直到$size(D_{trust})= \gamma size(D)$，学生模型A的$\gamma$是0.4，而B的是0.1。这里设置两个学生模型的损失函数为：

$$LSP = \frac{\sum_{(x,y) \in D_{trust}} LCE(x, y)}{\sum_{(x,y) \in D_{trust}} 1} + \frac{\sum_{x \in D - D_{trust}} LnnPU(x)}{\sum_{x \in D - D_{trust}} 1}$$

其中$L_{SP}$是暂定的在第一阶段的损失函数。$L_{CE}$即为正常的交叉熵损失，后面的是$nnPU$estimator。这段损失函数由两个部分组成，前半段来自可信数据集的样本放入交叉熵损失函数中，后面的未标记样本放入非负损失估计器中。

构造辅助数据集与先前的半监督学习方法的不同之处在于，先前的方法集中于选出可靠负样本，而self-pu这一步还会选出正样本来加强数据集。另一方面，所有进入可靠样本集的样本标签不是固定的，每一轮训练结束之后模型还会对所有$D_{trust}$的样本进行评估，$g(x)$小于阈值就会被重新放入$D-D_{trust}$。

# Self-Calibrated Loss Reweighting

进一步我们来观察学生模型训练的损失函数。直接在不可靠的未标记样本上使用nnPU estimator优化并不是最佳选择。这样直接一刀切地看未标记样本的损失忽略了其中蕴含的丰富信息量。因此self-pu提出了可以自调整的损失。它通过对后半部分的nnPU损失进行修改，结合了交叉熵损失和nnPU得到新的损失估算：
$$l(\xi, w_i) = w_{i,1}LCES(\xi) + w_{i,2}LnnPU(\xi)$$
其中$w$是一套元学习参数。定义元学习参数更新如下：
$$\theta^* = \theta - \delta\nabla_{\theta} \frac{1}{n}\sum_{i=1}^{n} l(\xi_i, y_i, w_i) \quad (4)$$

$$u_i = -\frac{\partial}{\partial w_i} \frac{1}{m}\sum_{j=1}^{m} L^*_{CE}(\xi_{v_j}, y_{v_j})\Bigg|_{w_i=0} \quad (5)$$

$$\tilde{w}_i = \max(u_i, 0), \quad w_{i,1} = \frac{P_{\tilde{w}_{i,1}}}{\sum_{i} \tilde{w}_{i,1}}, \quad w_{i,2} = \frac{P_{\tilde{w}_{i,2}}}{\sum_{i} \tilde{w}_{i,2}} \quad (6)$$

其中$x,y$表示的是预测标签与真实软标签，$\delta$是step size，带星号的$L_{CE}$指的是使用更新之后的参数$\theta$计算得到的损失。但是在计算不可靠样本的损失时，由于软标签可能不够准确，赋予$L_{CE}$过大权重并不是一件好事，因此我们需要调整交叉熵的权重。我们引入参数$\gamma$来调节。
$$T = \sup\{k : \sum_{i=1}^{k} w_i^2 < \gamma n\} \quad (7)$$

$$w_{i,1}^* = w_{i,1} \cdot \mathbb{1}_{\{i<T\}}, \quad w_{i,2}^* = w_{i,2} \cdot \mathbb{1}_{\{i<T\}} + \mathbb{1}_{\{i\geq T\}} \quad (8)$$

由此代入先前的$L_{SP}$中得到最新的损失：
$$LSP_{\text{+Reweight}} = \sum_{(x,y) \in D_{\text{trust}}} LCE(x, y) + \sum_{x \subset (D_U - D_{\text{trust}})} l^*(x) + \sum_{x \in D_P} LnnPU(x) \quad (9)$$

$$\text{where } l^*(x) = \frac{\sum_{i=1}^{n} l(\xi_i, w^*_i)}{n} \quad (10)$$

到这里就是第一阶段的内容，这时候的学生模型已经完成了扩充可靠数据集和进行初步训练的任务。教师模型也随着学生模型更新构造完毕。

#  Self-Supervised Consistency via Distillation
为了加入其他的监督，self-pu引入了新的自监督机制，并采用一套新的知识蒸馏框架。在之前的teacher-student模型基础上，现加入新的正则化损失来加强模型训练效果，增强泛化能力。

在对两个学生模型进行的测试中发现，stu model都对他们构造的$D_{trust}$有着较高的置信度，表现为$MSE$很低，而面对不可靠数据集时的$MSE$都大了几个数量级。为了保证模型具有较强的泛化能力，同时充分利用数据样本的监督信息，加入正则化损失项$L_{student}$:
$$L_{\text{students}} = \sum_{x \in D - D_{\text{trust1}}} l_{\text{stu}}(g_1, g_2, x) + \sum_{x \in D - D_{\text{trust2}}} l_{\text{stu}}(g_2, g_1, x)$$

其中：

$$
l_{\text{stu}}(g_1, g_2, x) = 
\begin{cases} 
LMSE(g_1, g_2, x), & \text{if } LnnPU(x) > \alpha LMSE(g_1, g_2, x) \\
0, & \text{if } LnnPU(x) \leq \alpha LMSE(g_1, g_2, x)
\end{cases}
$$

这是学生模型。我们知道之前还有两套对应的教师模型，他们对学生的特征进行蒸馏提取。可以通过使教师模型强制对齐来进行正则化约束。首先规定教师模型的参数现更新规则如下：

$$\Theta_{1,t} = \beta\theta_{1,t-1} + (1 - \beta)\theta_{1,t} \quad (15)$$
$$\Theta_{2,t} = \beta\theta_{2,t-1} + (1 - \beta)\theta_{2,t} \quad (15)$$

其中例如$\theta_{1,t}$代表$\theta_{1}$在t时刻的值，其他类推。

现引入正则化损失项$L_{teacher}$进行约束：
$$L_{\text{teachers}} = \sum_{x \in D} ||f(G_1(x)) - f(g_1(x))||_2 + \sum_{x \in D} ||f(G_2(x)) - f(g_2(x))||_2 \quad (16)$$

最后两个正则化损失与先前的约束损失一同构成第二阶段学生模型的训练损失：

$$L = L_{\text{SP+Reweight}} + L_{\text{students}} + L_{\text{teachers}} \quad (17)$$

最后收取两个教师模型的结果进行测试。




