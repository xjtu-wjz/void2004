import{_ as u}from"./ValaxyMain.vue_vue_type_script_setup_true_lang-D6WepyqT.js";import{b as d,e as m,w as a,f as h,a as g,p as c,r as l,g as s,h as n}from"./app-B5BMfZs9.js";const _=s("p",null,"组里使用Determined AI管理集群，比原来使用conda管理环境麻烦超级多，但是也规范很多。尽管学长们写了很多文档了，但对于一个新上手的小白来说要想快速学会如何创建环境然后跑自己的代码还是非常有难度的。",-1),b=s("p",null,"本文作为一个quick start，可以在最短的时间提供搭建起一个能运行的环境，至于更深的细节我也还在学习，用到再更新。",-1),v=s("h1",{id:"编写dockerfile",tabindex:"-1"},[n("编写dockerfile "),s("a",{class:"header-anchor",href:"#编写dockerfile","aria-label":'Permalink to "编写dockerfile"'},"​")],-1),k=s("p",null,[n("没有接触过docker可以先去"),s("a",{href:"https://docs.docker.com/",target:"_blank",rel:"noreferrer"},"docker的官方文档"),n("看看。一句话概括，docker就是将你的代码和运行环境打包在一起，这样你就可以在任何地方运行你的代码了。像虚拟机，但是不像虚拟机一样还打包一个操作系统，所以非常轻量。显然地，本来使用conda管理环境的话，我们要用conda来下载各种包，现在我们就将对各种包的需求写在叫做"),s("strong",null,"Dockerfile"),n("的文件里,然后由docker按照这个文件去下载对应的包，为我们搭建好环境。这个环境叫做"),s("strong",null,"container"),n(",container没有运行的时候叫做"),s("strong",null,"image"),n("。")],-1),y=s("p",null,"提供一个我的简单手搓dockerfile的模板：",-1),f=s("div",{class:"language- vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes material-theme-darker material-theme-lighter vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"# Determined AI's base image")]),n(`
`),s("span",{class:"line"},[s("span",null,"FROM harbor.lins.lab/determinedai/environments:cuda-11.8-pytorch-2.0-gpu-mpi-0.31.1")]),n(`
`),s("span",{class:"line"},[s("span",null,"# Another one of their base images, with newer CUDA and pytorch")]),n(`
`),s("span",{class:"line"},[s("span",null,"# FROM determinedai/environments:cuda-11.8-pytorch-2.0-gpu-mpi-0.27.1")]),n(`
`),s("span",{class:"line"},[s("span",null,"# You can check out their images here: https://hub.docker.com/r/determinedai/environments/")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"# Some important environment variables in Dockerfile")]),n(`
`),s("span",{class:"line"},[s("span",null,"ARG DEBIAN_FRONTEND=noninteractive")]),n(`
`),s("span",{class:"line"},[s("span",null,"ENV TZ=Asia/Shanghai LANG=C.UTF-8 LC_ALL=C.UTF-8 PIP_NO_CACHE_DIR=1")]),n(`
`),s("span",{class:"line"},[s("span",null,"# Custom Configuration")]),n(`
`),s("span",{class:"line"},[s("span",null,'RUN sed -i  "s/archive.ubuntu.com/mirrors.ustc.edu.cn/g" /etc/apt/sources.list && \\')]),n(`
`),s("span",{class:"line"},[s("span",null,'    sed -i  "s/security.ubuntu.com/mirrors.ustc.edu.cn/g" /etc/apt/sources.list && \\')]),n(`
`),s("span",{class:"line"},[s("span",null,"    rm -f /etc/apt/sources.list.d/* && \\")]),n(`
`),s("span",{class:"line"},[s("span",null,"    apt-get update && \\")]),n(`
`),s("span",{class:"line"},[s("span",null,"    apt-get -y install tzdata && \\")]),n(`
`),s("span",{class:"line"},[s("span",null,"    apt-get install -y unzip python-opencv graphviz && \\")]),n(`
`),s("span",{class:"line"},[s("span",null,"    apt-get clean")]),n(`
`),s("span",{class:"line"},[s("span",null,"COPY environment.yml /tmp/environment.yml")]),n(`
`),s("span",{class:"line"},[s("span",null,"COPY pip_requirements.txt /tmp/pip_requirements.txt")]),n(`
`),s("span",{class:"line"},[s("span",null,"RUN conda env update --name base --file /tmp/environment.yml")]),n(`
`),s("span",{class:"line"},[s("span",null,"RUN conda clean --all --force-pkgs-dirs --yes")]),n(`
`),s("span",{class:"line"},[s("span",null,'RUN eval "$(conda shell.bash hook)" && \\')]),n(`
`),s("span",{class:"line"},[s("span",null,"    conda activate base && \\")]),n(`
`),s("span",{class:"line"},[s("span",null,"    pip config set global.index-url https://mirrors.bfsu.edu.cn/pypi/web/simple &&\\")]),n(`
`),s("span",{class:"line"},[s("span",null,"    pip install --requirement /tmp/pip_requirements.txt")])])]),s("button",{class:"collapse"})],-1),E=s("p",null,"和一个使用nvidia的mini template:",-1),A=s("div",{class:"language- vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes material-theme-darker material-theme-lighter vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"#! ----EDIT HERE TO CHANGE BASE IMAGE----")]),n(`
`),s("span",{class:"line"},[s("span",null,"FROM nvcr.io/nvidia/cuda:11.8.0-cudnn8-devel-ubuntu22.04")]),n(`
`),s("span",{class:"line"},[s("span",null,"# COMMENT ABOVE & UNCOMMENT BELOW TO USE BASE IMAGE WITH PYTORCH:")]),n(`
`),s("span",{class:"line"},[s("span",null,"# FROM nvcr.io/nvidia/pytorch:22.12-py3")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"# Environment variables")]),n(`
`),s("span",{class:"line"},[s("span",null,"ARG PYTHON_VERSION=3.8.12")]),n(`
`),s("span",{class:"line"},[s("span",null,"ARG DEBIAN_FRONTEND=noninteractive")]),n(`
`),s("span",{class:"line"},[s("span",null,"ENV TZ=Asia/Shanghai LANG=C.UTF-8 LC_ALL=C.UTF-8 PIP_NO_CACHE_DIR=1")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"# Install apt packages")]),n(`
`),s("span",{class:"line"},[s("span",null,'RUN sed -i "s/archive.ubuntu.com/mirrors.ustc.edu.cn/g" /etc/apt/sources.list &&\\')]),n(`
`),s("span",{class:"line"},[s("span",null,'    sed -i "s/security.ubuntu.com/mirrors.ustc.edu.cn/g" /etc/apt/sources.list &&\\')]),n(`
`),s("span",{class:"line"},[s("span",null,"    rm -f /etc/apt/sources.list.d/* &&\\")]),n(`
`),s("span",{class:"line"},[s("span",null,"    apt-get update && apt-get upgrade -y &&\\")]),n(`
`),s("span",{class:"line"},[s("span",null,"    apt-get install -y --no-install-recommends \\")]),n(`
`),s("span",{class:"line"},[s("span",null,"        # Determined requirements and common tools")]),n(`
`),s("span",{class:"line"},[s("span",null,"        autoconf automake autotools-dev build-essential ca-certificates \\")]),n(`
`),s("span",{class:"line"},[s("span",null,"        make cmake ninja-build pkg-config g++ ccache yasm \\")]),n(`
`),s("span",{class:"line"},[s("span",null,"        ccache doxygen graphviz plantuml \\")]),n(`
`),s("span",{class:"line"},[s("span",null,"        daemontools krb5-user ibverbs-providers libibverbs1 \\")]),n(`
`),s("span",{class:"line"},[s("span",null,"        libkrb5-dev librdmacm1 libssl-dev libtool \\")]),n(`
`),s("span",{class:"line"},[s("span",null,"        libnuma1 libnuma-dev libpmi2-0-dev \\")]),n(`
`),s("span",{class:"line"},[s("span",null,"        openssh-server openssh-client pkg-config nfs-common \\")]),n(`
`),s("span",{class:"line"},[s("span",null,"        ## Tools")]),n(`
`),s("span",{class:"line"},[s("span",null,"        git curl wget unzip nano net-tools sudo htop iotop \\")]),n(`
`),s("span",{class:"line"},[s("span",null,"        cloc rsync xz-utils software-properties-common \\")]),n(`
`),s("span",{class:"line"},[s("span",null,"    && rm /etc/ssh/ssh_host_ecdsa_key \\")]),n(`
`),s("span",{class:"line"},[s("span",null,"    && rm /etc/ssh/ssh_host_ed25519_key \\")]),n(`
`),s("span",{class:"line"},[s("span",null,"    && rm /etc/ssh/ssh_host_rsa_key \\")]),n(`
`),s("span",{class:"line"},[s("span",null,"    && cp /etc/ssh/sshd_config /etc/ssh/sshd_config_bak \\")]),n(`
`),s("span",{class:"line"},[s("span",null,'    && sed -i "s/^.*X11Forwarding.*$/X11Forwarding yes/" /etc/ssh/sshd_config \\')]),n(`
`),s("span",{class:"line"},[s("span",null,'    && sed -i "s/^.*X11UseLocalhost.*$/X11UseLocalhost no/" /etc/ssh/sshd_config \\')]),n(`
`),s("span",{class:"line"},[s("span",null,'    && grep "^X11UseLocalhost" /etc/ssh/sshd_config || echo "X11UseLocalhost no" >> /etc/ssh/sshd_config \\')]),n(`
`),s("span",{class:"line"},[s("span",null,"    && apt-get clean \\")]),n(`
`),s("span",{class:"line"},[s("span",null,"    && rm -rf /var/lib/apt/lists/*")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"# Install Conda and Determined AI stuff")]),n(`
`),s("span",{class:"line"},[s("span",null,"#! ---EDIT notebook-requirements.txt TO ADD PYPI PACKAGES----")]),n(`
`),s("span",{class:"line"},[s("span",null,"WORKDIR /tmp")]),n(`
`),s("span",{class:"line"},[s("span",null,'ENV PATH="/opt/conda/bin:${PATH}"')]),n(`
`),s("span",{class:"line"},[s("span",null,"ENV PYTHONUNBUFFERED=1 PYTHONFAULTHANDLER=1 PYTHONHASHSEED=0")]),n(`
`),s("span",{class:"line"},[s("span",null,"ENV JUPYTER_CONFIG_DIR=/run/determined/jupyter/config")]),n(`
`),s("span",{class:"line"},[s("span",null,"ENV JUPYTER_DATA_DIR=/run/determined/jupyter/data")]),n(`
`),s("span",{class:"line"},[s("span",null,"ENV JUPYTER_RUNTIME_DIR=/run/determined/jupyter/runtime")]),n(`
`),s("span",{class:"line"},[s("span",null,"RUN git clone https://github.com/LingzheZhao/determinedai-container-scripts &&\\")]),n(`
`),s("span",{class:"line"},[s("span",null,"    cd determinedai-container-scripts &&\\")]),n(`
`),s("span",{class:"line"},[s("span",null,"    git checkout v0.2.2 &&\\")]),n(`
`),s("span",{class:"line"},[s("span",null,"    ./install_python.sh ${PYTHON_VERSION} &&\\")]),n(`
`),s("span",{class:"line"},[s("span",null,"    cp .condarc /opt/conda/.condarc &&\\")]),n(`
`),s("span",{class:"line"},[s("span",null,"    pip config set global.index-url https://mirrors.bfsu.edu.cn/pypi/web/simple &&\\")]),n(`
`),s("span",{class:"line"},[s("span",null,"    pip install determined && pip uninstall -y determined &&\\")]),n(`
`),s("span",{class:"line"},[s("span",null,"    pip install -r notebook-requirements.txt &&\\")]),n(`
`),s("span",{class:"line"},[s("span",null,"    pip install -r additional-requirements.txt &&\\")]),n(`
`),s("span",{class:"line"},[s("span",null,'    jupyter labextension disable "@jupyterlab/apputils-extension:announcements" &&\\')]),n(`
`),s("span",{class:"line"},[s("span",null,"    ./add_det_nobody_user.sh &&\\")]),n(`
`),s("span",{class:"line"},[s("span",null,"    ./install_libnss_determined.sh &&\\")]),n(`
`),s("span",{class:"line"},[s("span",null,"    rm -rf /tmp/*")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"#! ----EDIT HERE TO INSTALL CONDA PACKAGES----")]),n(`
`),s("span",{class:"line"},[s("span",null,"# Example: PyTorch w/ cuda 11.6")]),n(`
`),s("span",{class:"line"},[s("span",null,"# RUN conda install pytorch torchvision torchaudio cudatoolkit=11.6 -c pytorch -c conda-forge")]),n(`
`),s("span",{class:"line"},[s("span",null,"# Example: Jax")]),n(`
`),s("span",{class:"line"},[s("span",null,"# RUN conda install -c conda-forge jax")]),n(`
`),s("span",{class:"line"},[s("span",null,"# Example: OpenCV")]),n(`
`),s("span",{class:"line"},[s("span",null,"# RUN conda install -c conda-forge opencv")])])]),s("button",{class:"collapse"})],-1),T=s("p",null,"如果我们下载的项目中有一个对应的requirements.txt/setup.py等诸如此类的文件，就将他们填到这份dockerfile的对应位置中。",-1),N=s("p",null,"接着运行：",-1),C=s("div",{class:"language- vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes material-theme-darker material-theme-lighter vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"DOCKER_BUILDKIT=0 docker build -t my_image:v1.0 .")])])]),s("button",{class:"collapse"})],-1),I=s("p",null,[n("就可以创建一个叫做"),s("strong",null,"my_image"),n("的image，版本为v1.0。前面的"),s("strong",null,"DOCKER_BUILDKIT=0"),n("是可选的，如果设置为1，则docker会使用buildkit来加速构建，但是会报错，所以还是设置为0。因为我现在使用的是组里的私有注册表。")],-1),D=s("p",null,"使用",-1),R=s("div",{class:"language- vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes material-theme-darker material-theme-lighter vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"docker images")])])]),s("button",{class:"collapse"})],-1),P=s("p",null,"就可以看到我们刚刚创建的image。",-1),O=s("h1",{id:"建立yaml文件",tabindex:"-1"},[n("建立yaml文件 "),s("a",{class:"header-anchor",href:"#建立yaml文件","aria-label":'Permalink to "建立yaml文件"'},"​")],-1),U=s("p",null,"yaml文件是Determined AI用来管理集群的配置文件，我们只需要在文件中指定我们刚刚创建的image，然后填上代码和数据的路径就可以创建对应的container运行代码了。",-1),G=s("p",null,[n("要方便地管理yaml文件可以在命令行中使用"),s("strong",null,"cli"),n("工具。先下载：")],-1),L=s("div",{class:"language- vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes material-theme-darker material-theme-lighter vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"pip install determined")])])]),s("button",{class:"collapse"})],-1),M=s("p",null,"接着登录：",-1),$=s("div",{class:"language- vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes material-theme-darker material-theme-lighter vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"det user login <username>")])])]),s("button",{class:"collapse"})],-1),w=s("p",null,"初始是没有密码的，但是可以通过change-password命令设置密码。",-1),x=s("p",null,"还是提供一份yaml文件的模板：",-1),S=s("div",{class:"language- vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes material-theme-darker material-theme-lighter vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"description: <task_name>")]),n(`
`),s("span",{class:"line"},[s("span",null,"resources:")]),n(`
`),s("span",{class:"line"},[s("span",null,"    slots: 1")]),n(`
`),s("span",{class:"line"},[s("span",null,"    resource_pool: 64c128t_512_3090")]),n(`
`),s("span",{class:"line"},[s("span",null,"    shm_size: 4G")]),n(`
`),s("span",{class:"line"},[s("span",null,"bind_mounts:")]),n(`
`),s("span",{class:"line"},[s("span",null,"    - host_path: /home/<username>/")]),n(`
`),s("span",{class:"line"},[s("span",null,"      container_path: /run/determined/workdir/home/")]),n(`
`),s("span",{class:"line"},[s("span",null,"    - host_path: /labdata0/<project_name>/")]),n(`
`),s("span",{class:"line"},[s("span",null,"      container_path: /run/determined/workdir/data/")]),n(`
`),s("span",{class:"line"},[s("span",null,"environment:")]),n(`
`),s("span",{class:"line"},[s("span",null,"    image: determinedai/environments:cuda-11.3-pytorch-1.10-tf-2.8-gpu-0.19.4")])])]),s("button",{class:"collapse"})],-1),F=s("p",null,[n("可以看见在这里"),s("strong",null,"environment"),n("中我们填入了我们刚刚创建的image。在第一个host_path中我们填入"),s("strong",null,"代码所在的绝对路径"),n("，第二个host中填入"),s("strong",null,"数据所在的绝对路径"),n("。数据路径一般默认使用组里已经下载好的大路径。")],-1),H=s("p",null,"接着运行：",-1),B=s("div",{class:"language- vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes material-theme-darker material-theme-lighter vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"    det shell start --config-file test_task.yaml")])])]),s("button",{class:"collapse"})],-1),K=s("p",null,"就可以创建一个container运行代码了。当然注意yaml文件之类的名称要根据自己的情况改变。",-1),V=s("h1",{id:"比较模板的样式",tabindex:"-1"},[n("比较模板的样式 "),s("a",{class:"header-anchor",href:"#比较模板的样式","aria-label":'Permalink to "比较模板的样式"'},"​")],-1),X=s("p",null,"上面提供的方案是我比较喜欢的一种，但是如果你还是希望少折腾，用一张已定义程度比较高的板子的话，也可以参考这一套。",-1),j=s("p",null,"首先在项目文件夹，和例如setup.py/yaml/requirement.txt文件同一目录下创建一个image_builder.sh：",-1),q=s("div",{class:"language- vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes material-theme-darker material-theme-lighter vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,'SOURCE_IMAGE_NAME="public_vision:v1.2"')]),n(`
`),s("span",{class:"line"},[s("span",null,"# Name of the source Docker image that will be used as the base image.")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,'TARGET_IMAGE_NAME="public_vision:v1.3"')]),n(`
`),s("span",{class:"line"},[s("span",null,"# Name of the target Docker image that will be created after applying changes.")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,'INSTALL_PACKAGES="seaborn numpy"')]),n(`
`),s("span",{class:"line"},[s("span",null,"# List of Python packages to be installed using pip.")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,'UPGRADE_PACKAGES="lightly pandas"')]),n(`
`),s("span",{class:"line"},[s("span",null,"# List of Python packages to be upgraded to their latest versions.")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"# Create a temporary file in the system's temporary directory.")]),n(`
`),s("span",{class:"line"},[s("span",null,"TEMP_FILE=$(mktemp /tmp/temp_Dockerfile.XXXXXX.txt)")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"# Populate the temporary Dockerfile with the base image and package installation commands.")]),n(`
`),s("span",{class:"line"},[s("span",null,'cat > "$TEMP_FILE" << EOF')]),n(`
`),s("span",{class:"line"},[s("span",null,"FROM harbor.lins.lab/library/$SOURCE_IMAGE_NAME")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"RUN pip install $INSTALL_PACKAGES")]),n(`
`),s("span",{class:"line"},[s("span",null,"# Install the specified packages using pip.")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"RUN pip install --upgrade $UPGRADE_PACKAGES")]),n(`
`),s("span",{class:"line"},[s("span",null,"# Upgrade the specified packages to their latest versions using pip.")]),n(`
`),s("span",{class:"line"},[s("span",null,"EOF")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"# Build a new Docker image with the specified tag, disabling BuildKit and using specific proxy settings.")]),n(`
`),s("span",{class:"line"},[s("span",null,"DOCKER_BUILDKIT=0 docker build -t $TARGET_IMAGE_NAME -f $TEMP_FILE --build-arg http_proxy=http://192.168.123.169:18889 --build-arg https_proxy=http://192.168.123.169:18889 .")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"# Tag the newly built Docker image with the target name in the specified Docker registry.")]),n(`
`),s("span",{class:"line"},[s("span",null,"docker tag $TARGET_IMAGE_NAME harbor.lins.lab/library/$TARGET_IMAGE_NAME")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"# Push the tagged Docker image to the specified Docker registry.")]),n(`
`),s("span",{class:"line"},[s("span",null,"docker push harbor.lins.lab/library/$TARGET_IMAGE_NAME")])])]),s("button",{class:"collapse"})],-1),Y=s("p",null,"将内容填写其中。名字和需求都可以自己自定义。接着bash这个脚本，你就能在docker hubs中看见这张创建出来的image。",-1),z=s("p",null,"接着我们需要上传到实验室的hub。在det登录一次之后就不需要再登陆了，使用：",-1),J=s("div",{class:"language- vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes material-theme-darker material-theme-lighter vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"det tag <your_image> harbor.lins.lab/library/<your_image>")])])]),s("button",{class:"collapse"})],-1),W=s("p",null,"为image打上规范的实验室tag，然后",-1),Z=s("div",{class:"language- vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes material-theme-darker material-theme-lighter vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"docker push harbor.lins.lab/library/your_image:vX.X")])])]),s("button",{class:"collapse"})],-1),Q=s("p",null,"就可以将image送入hub中。之后直接在创建环境脚本中替换image名称即可。",-1),ts={__name:"Determined AI的bug集散地",setup(ss,{expose:o}){const t=JSON.parse('{"title":"使用Determined-AI 的bug集散地","description":"","frontmatter":{"title":"使用Determined-AI 的bug集散地","date":"2024-12-04","updated":"2024-12-04","excerpt":"使用集群管理工具Determined-AI的quick start","categories":"Tech","image":"https://raw.githubusercontent.com/xjtu-wjz/void2004/refs/heads/main/pics_for_post/Pasted%20image%2020241205090412.webp","tags":["科研","Tech"],"top":1},"headers":[],"relativePath":"pages/posts/Determined AI的bug集散地.md","path":"/home/runner/work/void2004/void2004/pages/posts/Determined AI的bug集散地.md","lastUpdated":1736184181000}'),p=g(),i=t.frontmatter||{};return p.meta.frontmatter=Object.assign(p.meta.frontmatter||{},t.frontmatter||{}),c("pageData",t),c("valaxy:frontmatter",i),globalThis.$frontmatter=i,o({frontmatter:{title:"使用Determined-AI 的bug集散地",date:"2024-12-04",updated:"2024-12-04",excerpt:"使用集群管理工具Determined-AI的quick start",categories:"Tech",image:"https://raw.githubusercontent.com/xjtu-wjz/void2004/refs/heads/main/pics_for_post/Pasted%20image%2020241205090412.webp",tags:["科研","Tech"],top:1}}),(e,as)=>{const r=u;return d(),m(r,{frontmatter:h(i)},{"main-content-md":a(()=>[_,b,v,k,y,f,E,A,T,N,C,I,D,R,P,O,U,G,L,M,$,w,x,S,F,H,B,K,V,X,j,q,Y,z,J,W,Z,Q]),"main-header":a(()=>[l(e.$slots,"main-header")]),"main-header-after":a(()=>[l(e.$slots,"main-header-after")]),"main-nav":a(()=>[l(e.$slots,"main-nav")]),"main-content":a(()=>[l(e.$slots,"main-content")]),"main-content-after":a(()=>[l(e.$slots,"main-content-after")]),"main-nav-before":a(()=>[l(e.$slots,"main-nav-before")]),"main-nav-after":a(()=>[l(e.$slots,"main-nav-after")]),comment:a(()=>[l(e.$slots,"comment")]),footer:a(()=>[l(e.$slots,"footer")]),aside:a(()=>[l(e.$slots,"aside")]),"aside-custom":a(()=>[l(e.$slots,"aside-custom")]),default:a(()=>[l(e.$slots,"default")]),_:3},8,["frontmatter"])}}};export{ts as default};
