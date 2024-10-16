---
title: Paper reading--《Learning From Positive and Unlabeled Data-A Survey》
date: 2024-09-03
updated: 2022-09-03
categories: Paper-reading
image: https://raw.githubusercontent.com/xjtu-wjz/void2004/main/pics_for_post/saber.webp
tags:
  - 科研
  - PUL
top: 1
---


论文通篇简述了PU-learning几个经典的问题，并且详细介绍了PUL到底是什么。

# PU-learning与传统半监督学习

PU-learning是传统半监督学习的变种，与传统半监督学习不同，传统半监督学习的数据集涵盖带标记的正样本与负样本，但是PU中只有部分稳定正样本。这与部分领域的核心情况是类似的，例如medical diagnose ， 广告推荐系统，。PU这边会把未标记样本考虑进入学习过程中。

# PUL领域的几个关键问题

论文的核心。PUL领域的核心就是如何解决这些问题。

#### 基本假设

- SCAR（selec completely at random） 假设，假设构造PU数据集时正样本和负样本在一个数据集内，而且选取正样本构成P类是完全随机的。那么这时候我们可以得到样本标记概率和样本为正样本的概率之间有一个简单的线性关系：

$Pr(s=1|x)=\frac{Pr(y=1|x)}{c}$  其中$c是正样本被打上正标签的概率，在SCAR下我们假设是一个常数。$
SCAR使得要学习的分类器转化成了一个特殊分类器。现在$classifier'$的任务是识别出样本被标记的概率有多大，其他的样本统一当做负样本处理即可。

- SAR（select at random）假设，假设选取样本构造数据集的过程是随机但不至于完全随机。在选取正样本构造数据集的过程中会有部分labeled bias，例如与负样本差距过大的样本会比其他正样本更容易被标记。这时被标记的概率分数就不是一个常数，我们这样定义：
$e(x)=Pr(s=1|x,y=1)$

我们不妨再引入一个概念：probabilistic gap用于量化样本被标记为正类与负类之间的概率差距。$\Delta Pr=Pr(y=1|x)-Pr(y=0|x)$
因此正样本最终被打上标签的概率$e(x)$其实是一个和probabilistic gap相关的函数：

$e(x)=f(\Delta Pr)$

#### 先验概率

先验概率即在数据集中正样本大概占总样本的比例。尽管很多方法都用到了这个指标，但很多时候由于label frequency较小或者本身数据集中prior probability就很小所以其实是不可知的。为了具体区分几种情况，我们通过这几个假设将情况具体区分：



#### PU-learning具体方法

- 二阶段法：分为两个阶段。第一阶段识别出稳定的负样本和标记正样本一起构成完整数据集，第二阶段利用已经打上标签的数据集进行训练。之后可以加第三阶段选取出最好的分类器。二阶段方法在于讲究数据的可分性（正负样本确实可以完全分开）和平滑性