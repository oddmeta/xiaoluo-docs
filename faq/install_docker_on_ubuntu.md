# Ubuntu 24.04上安装 Docker
[TOC]
## 一些准备工作
- 卸载旧版包：确保系统中没有旧版本的 Docker。
- 设置 Docker 官方 APT 存储库：
    - 更新系统包：`sudo apt update`
    - 安装必要的依赖：`sudo apt install apt-transport-https ca-certificates curl software-properties-common`
    - 添加 Docker 的官方 GPG 密钥：`curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -`
    - 添加 Docker 仓库：`sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"`

## 更换为清华镜像源
为了提高国内用户的下载速度，可以将源切换到清华镜像：

```bash
sudo sed -i 's/\(cn.archive\|security\).ubuntu.com/mirrors.tuna.tsinghua.edu.cn/g' /etc/apt/sources.list.d/ubuntu.sources
```

## 安装 Docker
更新包索引：`sudo apt update`
安装 Docker CE：`sudo apt install docker-ce`

## 验证安装

使用 `docker --version` 命令检查 Docker 是否安装成功。

## 一些收尾工作

### 更换 Docker 镜像源
Docker 默认从 Docker Hub 拉取镜像，国内网络访问 Docker Hub 可能较慢，你可以配置国内的 Docker 镜像源来加速拉取。

#### Linux
编辑 /etc/docker/daemon.json 文件，如果文件不存在则创建它，添加以下内容：
```json
{
  "registry-mirrors": [
    "https://registry.docker-cn.com",
    "https://mirror.baidubce.com",
    "https://docker.mirrors.ustc.edu.cn"
  ]
}
```
保存文件后，重启 Docker 服务：
```bash
sudo systemctl restart docker
```

#### Windows
如果你使用的是 Docker Desktop for Windows，右键点击系统托盘中的 Docker 图标，选择 Settings -> Docker Engine，在 JSON 配置中添加以下内容：

```json
{
  "registry-mirrors": [
    "https://registry.docker-cn.com",
    "https://mirror.baidubce.com",
    "https://docker.mirrors.ustc.edu.cn"
  ]
}
```
点击 Apply & Restart 重启 Docker。


## 附录：一些常用的docker命令

- 查看运行中的容器: `docker ps`
- 查看运行中的容器日志: `docker logs -t oddasr-cpu`
- 进入运行中的容器的bash: `docker exec -it oddasr-cpu bash`
- 停止运行中的容器: `docker stop oddasr-cpu`
- 删除容器: `docker rm oddasr-cpu`
- 查看镜像images: `docker images`
- 删除镜像image: `docker rmi IMAGE-ID`. `IMAGE-ID` is the image id, you can get it from `docker images`
