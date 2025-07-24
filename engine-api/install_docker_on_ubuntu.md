
# Ubuntu 24.04上安装 Docker

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
