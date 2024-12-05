---
title: 使用Determined-AI 的bug集散地
date: 2024-12-04
updated: 2024-12-04
excerpt: 使用集群管理工具Determined-AI的quick start
categories: Tech
image: https://raw.githubusercontent.com/xjtu-wjz/void2004/refs/heads/main/pics_for_post/Pasted%20image%2020241205090412.webp
tags:
  - 科研
  - Tech
top: 1
---

组里使用Determined AI管理集群，比原来使用conda管理环境麻烦超级多，但是也规范很多。尽管学长们写了很多文档了，但对于一个新上手的小白来说要想快速学会如何创建环境然后跑自己的代码还是非常有难度的。

本文作为一个quick start，可以在最短的时间提供搭建起一个能运行的环境，至于更深的细节我也还在学习，用到再更新。

# 编写dockerfile

没有接触过docker可以先去[docker的官方文档](https://docs.docker.com/)看看。一句话概括，docker就是将你的代码和运行环境打包在一起，这样你就可以在任何地方运行你的代码了。像虚拟机，但是不像虚拟机一样还打包一个操作系统，所以非常轻量。显然地，本来使用conda管理环境的话，我们要用conda来下载各种包，现在我们就将对各种包的需求写在叫做**Dockerfile**的文件里,然后由docker按照这个文件去下载对应的包，为我们搭建好环境。这个环境叫做**container**,container没有运行的时候叫做**image**。

提供一个dockerfile的模板：
```
# Determined AI's base image
FROM harbor.lins.lab/determinedai/environments:cuda-11.8-pytorch-2.0-gpu-mpi-0.31.1
# Another one of their base images, with newer CUDA and pytorch
# FROM determinedai/environments:cuda-11.8-pytorch-2.0-gpu-mpi-0.27.1
# You can check out their images here: https://hub.docker.com/r/determinedai/environments/

# Some important environment variables in Dockerfile
ARG DEBIAN_FRONTEND=noninteractive
ENV TZ=Asia/Shanghai LANG=C.UTF-8 LC_ALL=C.UTF-8 PIP_NO_CACHE_DIR=1
# Custom Configuration
RUN sed -i  "s/archive.ubuntu.com/mirrors.ustc.edu.cn/g" /etc/apt/sources.list && \
    sed -i  "s/security.ubuntu.com/mirrors.ustc.edu.cn/g" /etc/apt/sources.list && \
    rm -f /etc/apt/sources.list.d/* && \
    apt-get update && \
    apt-get -y install tzdata && \
    apt-get install -y unzip python-opencv graphviz && \
    apt-get clean
COPY environment.yml /tmp/environment.yml
COPY pip_requirements.txt /tmp/pip_requirements.txt
RUN conda env update --name base --file /tmp/environment.yml
RUN conda clean --all --force-pkgs-dirs --yes
RUN eval "$(conda shell.bash hook)" && \
    conda activate base && \
    pip config set global.index-url https://mirrors.bfsu.edu.cn/pypi/web/simple &&\
    pip install --requirement /tmp/pip_requirements.txt
```

如果我们下载的项目中有一个对应的requirements.txt/setup.py等诸如此类的文件，就将他们填到这份dockerfile的对应位置中。

接着运行：

```
DOCKER_BUILDKIT=0 docker build -t my_image:v1.0 .
```
就可以创建一个叫做**my_image**的image，版本为v1.0。前面的**DOCKER_BUILDKIT=0**是可选的，如果设置为1，则docker会使用buildkit来加速构建，但是会报错，所以还是设置为0。因为我现在使用的是组里的私有注册表。

使用
```
docker images
```
就可以看到我们刚刚创建的image。

# 建立yaml文件

yaml文件是Determined AI用来管理集群的配置文件，我们只需要在文件中指定我们刚刚创建的image，然后填上代码和数据的路径就可以创建对应的container运行代码了。

要方便地管理yaml文件可以在命令行中使用**cli**工具。先下载：

```
pip install determined
```

接着登录：

```
det user login <username>
```

初始是没有密码的，但是可以通过change-password命令设置密码。

还是提供一份yaml文件的模板：

```
description: <task_name>
resources:
    slots: 1
    resource_pool: 64c128t_512_3090
    shm_size: 4G
bind_mounts:
    - host_path: /home/<username>/
      container_path: /run/determined/workdir/home/
    - host_path: /labdata0/<project_name>/
      container_path: /run/determined/workdir/data/
environment:
    image: determinedai/environments:cuda-11.3-pytorch-1.10-tf-2.8-gpu-0.19.4
```
可以看见在这里**environment**中我们填入了我们刚刚创建的image。在第一个host_path中我们填入**代码所在的绝对路径**，第二个host中填入**数据所在的绝对路径**。数据路径一般默认使用组里已经下载好的大路径。

接着运行：

```
    det shell start --config-file test_task.yaml
```

就可以创建一个container运行代码了。当然注意yaml文件之类的名称要根据自己的情况改变。
