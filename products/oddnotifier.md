# OddNotify 消息推送服务

[TOC]

## 一、推送服务中间件

### Odd Notify介绍

Odd Notify使用 Onepush 提供消息推送。可接入各种消息平台，例如: 钉钉, 企业微信, Discord, Bark, ServerChan, 邮件等。

### OddNotify演示

- 演示地址：https://x.oddmeta.net/oddnotify
- 使用说明：https://docs.oddmeta.net

## 二、注意事项

在Windows下使用推送服务器，需要设置设备名称为英文（右键此电脑-属性-重命名这台电脑），不然有可能会出现报错。

上面的表格里列示了每种不同类型的推送所需要的参数，及以相关的文档。建议至少看一下你所选择的推送的类型的文档，需要的推送参数，以及其生成和获取方式。

## 三、推送配置

配置为 yaml 格式，需要提供 推送服务名 provider 和对应的参数。

### 1. Bark

#### 文档
说明：Bark is an iOS App which allows you to push custom notifications to your iPhone 
文档：https://github.com/Finb/Bark

#### 调用odd_notifier传入参数

```yaml
provider: bark
key: Vg*******************
```

更多可选参数，例如添加 sound

```yaml
provider: bark
key: Vg*******************
sound: alert
```

Key 的详细获取方式

![](https://kb.oddmeta.net/uploads/oddmeta/images/m_63faebc09209c1bb071485d810125ca5_r.png)

### 2. 钉钉群机器人

#### 文档

https://open.dingtalk.com/document/robots/custom-robot-access

#### 简易步骤
1). 创建一个钉钉群
2). 为这个钉钉群添加一个机器人

![](https://kb.oddmeta.net/uploads/oddmeta/images/m_7f1cbd9260afa71034004d09f81cc554_r.png)

3). 在群里选择你添加的机器人，然后点开设置，如下图所示。

![](https://kb.oddmeta.net/uploads/oddmeta/images/m_85ab7ccfa06186d08ec8c5588447ec17_r.png)

4). Webhook的地址由钉钉生成，新版本加了个安全设置，那里设置一个自定义关键词(推送的内容里必须有这个关键词，否则消息会被丢掉）。
5). 将Webhook地址里后面的一长串内容拷贝下来，然后填到yaml的token里。
6). 如果你设置了关键词，请**务必在你发送的内容里加上这个关键词**。

```yaml
provider: dingtalk
token: xxxxxxxx
```

#### 推送频率限制
由于消息发送太频繁会严重影响群的使用体验，因此自定义机器人发送消息的频率限制如下：
**每个机器人每分钟最多发送20条消息到群里**，如果超过20条，会限流10分钟。
*如果你有大量发消息的场景（譬如系统监控报警）可以将这些信息进行整合，通过markdown消息以摘要的形式发送到群里。*

### 3. 企业微信机器人

#### 文档

https://work.weixin.qq.com/api/doc/90000/90136/91770

#### 简易步骤
1). 创建一个企业微信群
2). 为这个群添加一个机器人
3). 在群里选择你添加的机器人，然后点开设置，如下图所示。

![](https://kb.oddmeta.net/uploads/oddmeta/images/m_92d1a48fdf5408dcc53d4a4888628cd7_r.png)

4). 将send?key=后面的一长串内容拷贝下来，然后填到yaml的key里。

注意是key=后面的内容，以上面的截图为例，内容应该是：be94-------8

```yaml
provider: wechatworkbot
key: xxxxxxxx
```

可支持@特定的人，或者@所有人。示例发送格式：
{
    "msgtype": "text",
    "text": {
        "content": "广州今日天气：29度，大部分多云，降雨概率：60%",
		"mentioned_list":["wangqing","@all"],
		"mentioned_mobile_list":["13800001111","@all"]
    }
}

#### 推送频率限制
每个机器人发送的消息不能超过20条/分钟。

### 4. 企业微信应用

#### 文档
https://work.weixin.qq.com/api/doc/90000/90135/90236

```yaml
provider: wechatworkapp
corpid: xxxxxxxx
corpsecret: xxxxxxxx
agentid: 10001
```

#### 频率限制
每应用不可超过账号上限数*200人次/天（注：若调用api一次发给1000人，算1000人次；若企业账号上限是500人，则每个应用每天可发送100000人次的消息）。每应用对同一个成员不可超过30次/分钟，1000次/小时，超过部分会被丢弃不下发

### 5. 邮件

#### 示例邮件配置

```yaml
provider: smtp
host: smtp.oddmeta.com         # smtp 服务器地址
user: catherine@oddmeta.com    # 用户名，通常是你的邮箱。
password: Passw0rd!       # 登录密码，一般为需要单独申请的授权码。
port: 465                 # smtp 服务器端口，如果有提供ssl端口(465)建议使用。不填写时默认为 25
# ssl: true               # 显式指定使用ssl连接，端口是465时默认为true。
```

```yaml
provider: smtp
host: smtp.gmail.com
user: your@gmail.com
password: Passw0rd!
port: 587
ssl: true
```

#### 常见邮箱
    163邮箱: https://note.youdao.com/ynoteshare/index.html?id=f9fef46114fb922b45460f4f55d96853
        host: smtp.163.com
        port: 465

    qq邮箱: https://service.mail.qq.com/cgi-bin/help?subtype=1&&no=166&&id=28
        host: smtp.qq.com
        port: 465

    gmail: https://support.google.com/mail/answer/7104828?hl=zh-Hans
        host: smtp.gmail.com
        port: 587
        ssl: true

### 6. Pushplus
官网： https://www.pushplus.plus/

```yaml
provider: pushplus
token: ********************
```

### 7. Pushdeer

官网: https://www.pushdeer.com/product.html

```yaml
provider: pushdeer
pushkey: **********************
```

### 8. Server 酱 Turbo 版

官网: https://sct.ftqq.com/
Server 酱已停止运行，需使用 Turbo 版，免费版每天限制五条。

```yaml
provider: serverchanturbo 
sctkey: SCT16*************************
```

### 9. Discord Webhook

Document: https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks

```yaml
provider: discord 
webhook: https://discord.com/api/webhooks/12345678912345678900/verylongstring_veryveryverylongrandomstring
```

### 10. Telegram Bot

Document: https://core.telegram.org/bots/api#sendmessage

```yaml
provider: telegram
token: 16xxxxxxx:xxxxxxxxxxx       # 从 @BotFather 获取
userid: 10000000                   # 从 @userinfobot 获取
api_url: api.telegram.org          # 国内需使用反代 API 或网络代理
```

### 11. go-cqhttp

文档：https://docs.go-cqhttp.org/api/#%E5%8F%91%E9%80%81%E6%B6%88%E6%81%AF

```yaml
provider: gocqhttp
endpoint: http://cqhttp.example.com:5700
token: YOUR_TOKEN       # 设置了 access_token 时需要
message_type: private          # private 为私聊消息，group 为群聊消息
# user_id: 12345678             # message_type 为 private 时需要
# group_id: 12345678            # message_type 为 group 时需要
```

### 12. gotify

文档：https://gotify.net/docs/pushmsg

```yaml
provider: gotify
url: http://gotify.example.com
token: YOUR_TOKEN       # Applications Token
```

### 13. 自定义 Webhook

```yaml
provider: custom
url: https://your.web.hook/path
method: post                      # http 请求方法
data:                             # data 字典
  your_arg: aaa
  your_arg2: bbb
```


## 四、测试推送
在你选定了你要的推送类型，并获取了推送配置后，你可以在[OddNotify的测试网页](https://x.oddmeta.net/oddnotify "OddNotify的测试网页")上先测试一下，若是没问题了，你再登录到 [小落同学的管理后台](https://x.oddmeta.net/admin/ "小落同学的管理后台")，将你的推送配置保存到你自己的虚拟人上，那样当有人跟 小落同学里的你的虚拟人对话时，你就能收到对话的推送。

## 五、进阶参数说明

支持所推送服务。

<table>
<tr><td>推送服务名</td><td>推送地址</td><td>推送API文档</td><td>参数</td></tr>

<tr><td>bark</td><td>https://api.day.app/{}</td><td>https://apps.apple.com/us/app/bark-customed-notifications/id1403753865</td><td>{
        'required': ['key'],
        'optional': [
            'title', 'content', 'sound', 'isarchive', 'icon', 'group', 'url', 'copy',
            'autocopy', 'cipherkey', 'ciphermethod',
        ]
    }</td></tr>
<tr><td>dingtalk</td><td>https://oapi.dingtalk.com/robot/send?access_token={}</td><td>https://developers.dingtalk.com/document/app/custom-robot-access</td><td>{
        'required': ['token'],
        'optional': ['title', 'content', 'secret', 'markdown']
    }</td></tr>

<tr><td>wechatworkbot</td><td>https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key={}</td><td>https://work.weixin.qq.com/api/doc/90000/90136/91770</td><td>{
        'required': ['key'],
        'optional': ['title', 'content', 'markdown']
    }</td></tr>

<tr><td>wechatworkapp</td><td>https://qyapi.weixin.qq.com/cgi-bin/message/send?access_token={}</td><td>https://work.weixin.qq.com/api/doc/90000/90135/90236</td><td>{
        'required': ['corpid', 'corpsecret', 'agentid'],
        'optional': ['title', 'content', 'touser', 'markdown', 'media_id']
    }</td></tr>

<tr><td>custom</td><td>N/A</td><td>N/A</td><td>{'required': ['url'], 'optional': ['method', 'datatype', 'data']}</td></tr>
<tr><td>gocqhttp</td><td>https://docs.go-cqhttp.org</td><td>N/A</td><td>{
        'required': ['endpoint'],
        'optional': [
            'title', 'content', 'path', 'token', 'message_type', 'user_id',
            'group_id', 'auto_escape'
        ]
    }</td></tr>
<tr><td>discord</td><td>https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks</td><td>N/A</td><td>{
        'required': ['webhook'],
        'optional': ['title', 'content', 'username', 'avatar_url', 'color']
    }</td></tr>
<tr><td>pushplus</td><td>https://www.pushplus.plus</td><td>https://www.pushplus.plus/doc</td><td>{
        'required': ['token'],
        'optional': ['title', 'content', 'topic']
    }</td></tr>
<tr><td>pushdeer</td><td>https://www.pushdeer.com</td><td>https://www.pushdeer.com/api/doc</td><td>{
        'required': ['token', 'content'],
        'optional': ['title', 'topic', 'markdown', 'channel', 'webhook', 'callbackUrl']
    }</td></tr>
<tr><td>pushdeer</td><td>https://api2.pushdeer.com/message/push</td><td>https://www.pushdeer.com/official.html</td><td>{
        'required': ['pushkey', 'content'],
        'optional': ['url', 'title', 'type']
    }</td></tr>
<tr><td>qmsg</td><td>https://qmsg.zendee.cn/{}/{}</td><td>https://qmsg.zendee.cn/docs/api</td><td>{
        'required': ['key'],
        'optional': ['title', 'content', 'mode', 'qq']
    }</td></tr>
<tr><td>serverchan</td><td>https://sc.ftqq.com/{}.send</td><td>https://sc.ftqq.com/3.version</td><td>{'required': ['sckey', 'title'], 'optional': ['content']}</td></tr>
<tr><td>serverchanturbo</td><td>https://sctapi.ftqq.com/{}.send</td><td>https://sct.ftqq.com</td><td>{
        'required': ['sctkey', 'title'],
        'optional': ['content', 'channel', 'openid']
    }</td></tr>
<tr><td>SMTP</td><td>https://docs.python.org/3/library/smtplib.html</td><td>N/A</td><td>{
        "required": ["host", "user", "password"],
        "optional": ["port", "ssl", "starttls", "msg", "subject", "title", "content", "From", "To"],
    }</td></tr>
<tr><td>telegram</td><td>https://{}/bot{}/sendMessage</td><td>https://core.telegram.org/bots</td><td>{
        'required': ['token', 'userid'],
        'optional': ['title', 'content', 'api_url']
    }</td></tr>
<tr><td>lark</td><td>N/A</td><td>N/A</td><td>{
        'required': ['webhook', 'content'],
        'optional': ['keyword', 'sign']
    }</td></tr>
<tr><td>gotify</td><td>N/A</td><td>N/A</td><td>{
        'required': ['url', 'content', 'token'],
        'optional': ['title', 'priority']
    }</td></tr>
<tr><td>ntfy</td><td>N/A</td><td>N/A</td><td>{
        'required': ['url', 'content', 'topic'],
        'optional': ['token', 'title', 'tags', 'priority', 'actions', 'click', 'attach', 'markdown', 'icon', 'filename', 'delay', 'email', 'call', 'username', 'password']
    }</td></tr>
</table>


如果对消息推送有什么问题或者需求，可在 我的博客 https://oddmeta.net 发帖提需求。