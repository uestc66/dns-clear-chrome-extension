## 综述

日常开发中，本地调试代码时常需要频繁修改 host 代理来切换当前环境以调试后端接口，这样每次还要打开 “chrome://net-internals/#sockets” 手动清除 dns 缓存。 dns-clear-chrome-extension 就是帮助清除 chrome dns 的插件。

## 先决条件

google 浏览器必须配置如下启动参数：

- --enable-benchmarking : 启用基准测试扩展
- --enable-net-benchmarking : 启用网络基准测试扩展
- --remote-debugging-port=9222 : 开启远程调试

### 配置 macOS

1. 切换 Google 安装目录

```
 cd "/Applications/Google Chrome.app/Contents/MacOS/"
```

2. 重命名的启动脚本

```
sudo mv "Google Chrome" Google.real
```

3. 编辑启动脚本

```
vim "Google Chrome"
```

4. 键入启动参数

```
#!/bin/bash
cd "/Applications/Google Chrome.app/Contents/MacOS"
"/Applications/Google Chrome.app/Contents/MacOS/Google.real" --enable-benchmarking --enable-net-benchmarkin
```
