## Live2d模型文件压缩包上传注意事项

1. Live2D模型文件在上传的时候必须用zip压缩。
2. 压缩包上传上去后，后台会自动做解压缩。
3. zip压缩包必须：
1）所有文件放在一个文件压中，.moc或者.moc3文件直接在该文件夹下面（不可以在子目录下）
2）索引的json文件，其文件名必须是index.json
3）用zip以该文件压为单位来进行压缩
4）压缩后的zip文件的名字必须是以该文件夹命名的。

## 压缩包打包示例

![](https://kb.oddmeta.net/uploads/omassistant/images/m_bd5b47d6a6bfc03ea0d8bdcecd521f12_r.png)

1. 模型文件目录结构
如上图所示，现有一个模型叫biaoqiang，该模型文件类型为.moc3，而模型文件biaoqiang.moc3直接位于biaoqiang目录下。
2. 改名索引文件为index.json
如上图所示，biaoqiang.model3.json为索引文件，这个文件需要改名为index.json
3. 压缩模型包
文件浏览器中选择biaoqiang目录，右键来用zip对该目录进行压缩打包。
4. 压缩包的命名
压缩后的压缩包的名字必须是以目录名为名，以本示例来说，压缩后的zip包的名字将是 ： biaoqiang.zip

## 补充说明
压缩包上传上去后，后台会自动解压缩，然后在第一层目录下查找.moc3文件和index.json文件，如果两个文件中有任何一个没找到，就会返回上传错误。请再检查一下您的压缩包，确认都按上面的要求来打包了即可上传成功。

