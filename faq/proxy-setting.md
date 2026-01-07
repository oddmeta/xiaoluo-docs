# ubuntu设置终端代理和清除代理命令

## 1、添加代理

### 命令

```bash
export http_proxy=http://proxyAddress:port
export https_proxy=http://proxyAddress:port
```

### 说明
在linux系统中负责代理设置的变量有：

http_proxy
HTTP_PROXY
https_proxy
HTTPS_PROXY
ftp_proxy
FTP_PROXY
all_proxy
ALL_PROXY
no_proxy
NO_PROXY

由于操作系统的变量设置区分大小写，而且不同的应用读写变量时有的是根据大写的变量，有的是根据小写的变量，因此在设置时需要大小写变量都进行设置。

还有all_proxy和ALL_PROXY的权限是最低的，如果其他的proxy环境变量有进行设置则优先读取其他变量的设置。

### 示例
```bash
export http_proxy=http://172.16.129.127:7890/
export HTTP_PROXY=http://172.16.129.127:7890/

export https_proxy=http://172.16.129.127:7890/
export HTTPS_PROXY=http://172.16.129.127:7890/

export all_proxy=socks://172.16.129.127:7890/
export ALL_PROXY=socks://172.16.129.127:7890/

export no_proxy=localhost,127.0.0.0/8,::1
export NO_PROXY=localhost,127.0.0.0/8,::1
```

## 2、查看代理

```bash
env |grep -i proxy
```

## 3、清除代理

```bash
unset http_proxy
unset https_proxy
```

## 4、通过图形界面设置的代理清除
 改3个文件

```bash
sudo vi /etc/apt/apt.conf
sudo vi ~/.bashrc
sudo vi /etc/enviroment
```


## 5、其中
### docker的代理设置
方法一：在/etc/systemd/system/docker.service.d/目录下的http-proxy.conf文件中
方法二：
vi /lib/systemd/system/docker.service

