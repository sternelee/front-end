### 全局环境安装

- brew install node
- brew install yarn
- yarn global add pm2
- yarn global add typings
- brew install mysql
    + 启动 mysql.server start
    + 停止 mysql.server stop
    + 重启 mysql.server restart
    + 密码为空
    + 登陆 mysql -uroot
- brew install redis
    + 启动 redis-server /usr/local/etc/redis.conf

- dir EACCES目录权限问题
    ```
    $ sudo chown -R $USER /Users/nexus/.yarn-cache
    ```

### nginx

- nginx -h 显示配置
- sudo brew services start nginx
- nginx -s reload / nginx -s stop
- Docroot is: /usr/local/var/www
- /usr/local/etc/nginx/nginx.conf
- nginx will load all files in /usr/local/etc/nginx/servers/.

```bash
sudo nginx (启动)
sudo nginx -s stop
brew services list
brew services stop nginx
// reload start
```
### [awesome-finder](https://github.com/mingrammer/awesome-finder)


### 常用快捷键

- Command + Control + Spacebar（空格） Emoji输入法
- 简体拼音输入法下按快捷键 shift ＋ 6 颜文字
- 全屏截图 shift ＋ command ＋ 3 （＋号为依次按下）

鼠标截图 shift ＋ command ＋ 4

窗口截图 shift ＋ command ＋ 4 ＋ 空格键

截图，并且图保存在剪贴板 shift ＋ control ＋ command ＋3/4

### bash

- brew linkapps
- 更改终端打开应用的命令方式 `sudo ln -s /Applications/Sublime\ Text.app/Contents/SharedSupport/bin/subl /usr/bin/subl` 或者更新zsh的全局变量

- 隐藏文件 shift+cmmand+.