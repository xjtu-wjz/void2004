---
title: Paper reading--《EduChat: A Large-Scale Language Model-based Chatbot System
 for Intelligent Education》
date: 2024-10-27
updated: 2024-10-27
categories: Paper-reading
tags:
  - 科研
  - LLM
top: 1
---
华东师范大学提出的一款面向基础教育的苏格拉底式大模型。

# 教育大模型面对的问题
在多类领域LLMs已经取得了瞩目的成就，但是在教育领域LLM的表现依然欠佳，主要有如下原因：
- 大模型基于基础数据集预训练，针对具体的教育场景功能不够强大，对学生的教育功能比较欠缺；
- 教育数据实时更新，但基于LLM现有的训练框架无法考虑动态更新的信息。同时LLM也欠缺对教育数据辨伪的能力，无法有效区分知识的正误。

因此需要研发新的训练范式并为LLM训练流程加入自检模块提升教育场景特化功能。


