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

[使用](https://segmentfault.com/a/1190000005090828)

- nginx -h 显示配置
- sudo brew services start nginx
- nginx -s reload / nginx -s stop
- Docroot is: /usr/local/var/www
- /usr/local/etc/nginx/nginx.conf
- nginx will load all files in /usr/local/etc/nginx/servers/.

# 启动 nginx服务
sudo nginx

# 重新加载配置|重启|停止|退出 nginx
nginx -s reload|reopen|stop|quit

#测试配置是否有语法错误
nginx -t

```bash
sudo nginx (启动)
sudo nginx -s stop
brew services list
brew services stop nginx
// reload start
```
### [awesome-finder](https://github.com/mingrammer/awesome-finder)

### php
https://www.jianshu.com/p/2ba7820883ba

```bash
## To enable PHP in Apache add the following to httpd.conf and restart Apache:
##    LoadModule php7_module /usr/local/opt/php@7.1/lib/httpd/modules/libphp7.so

##    <FilesMatch \.php$>
##        SetHandler application/x-httpd-php
##    </FilesMatch>

##Finally, check DirectoryIndex includes index.php
##    DirectoryIndex index.php index.html

##The php.ini and php-fpm.ini file can be found in:
##    /usr/local/etc/php/7.1/
## To have launched start php@7.1 now and restart at login:
brew services start php@7.1
## Or, if you don't want/need a background service you can just run:
  php-fpm
```

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
- curl --compressed -o- -L https://yarnpkg.com/install.sh | bash

### travis T7ffeKKZWXGx9LIdrL95LQ

### mariadb.db lee123
