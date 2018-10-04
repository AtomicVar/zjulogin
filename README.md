# zjulogin

适用于电脑不会自动弹出登录窗口并且觉得打开浏览器登录太麻烦的同学。

## 使用方法

如果没有安装Node，可以使用Powershell；

推荐使用Node（更快）。

### Powershell

将`login.ps1`中最后一句`action=login&username=316010XXXX&password=XXXXXXXX&ac_id=3&user_ip=&nas_ip=&user_mac=&save_me=0&ajax=1`中的`username`和`password`改成自己的。

### Node

安装：
```
$ git clone https://github.com/ZJUGuoShuai/zjulogin.git
$ cd zjulogin
$ npm install
```

之后更改代码中的学号和密码。

运行：
```
$ node login.js
```
