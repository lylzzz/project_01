// 可以使用 clear 清除屏幕信息

// 查看状态精简命令：git status -s
// ？？这个表示当前文件未被追踪的意思

// 查看所有历史记录：git log（中途退出显示按q quiet）
// 只展示最新的两条历史记录：git log -2
// 在一行上显示最近两条提交历史的信息：git log -2 --pretty=oneline
// 在一行上显示最近两条历史信息，并自定义输出的格式
// %h 提交的简写哈希值  %an 作者名字  %ar 作者修订日志  %s 提交说明
// git log -2 --pretty=format:"%h | %an | %ar | %s" 

// 回退到指定版本

// 要添加追踪文件：git add 你要追踪的文件
// 其中可以先书写两个字母，然后摁下 tab 键，可以补齐路径
// A 表示当前文件已处于追踪文件了

// M 表示当前文件已经修改了

// git commit -m '描述信息'
// -m 就是表示 message 的意思，命令后面的描述信息，一定要写
// 一次性添加多个文件到暂存区：git add .
// 跳过暂存区，从工作区直接提交到git仓库  工作区 -> git仓库 ，是 git add和 git commit两个命令的复合写法，git commit -a -m '描述信息'（用的比较多）

// 暂存已修改的文件 再去 git add 你要追踪的文件一次

// 取消暂存文件：git reset HEAD 你要取消的文件（了解一下）
// 移除文件（包括工作区和git仓库）：git rm -f 你要移除的文件（rm -> remove f -> force强制的意思）
// 只移除仓库里的文件，保留工作区的文件：git rm --cached 你要移除的文件

// .gitignore 忽略文件

// 在使用https 协议去推送的时候，可能会出现问题
// 1.正常会弹出账号和密码的输入框（只有一次输入机会）
// 如果输入错误，需要自行去 控制面板\用户账户\凭据管理器，把对应网站里面记录的登录信息移除掉

// 账号和密码正确的前提下，还需要生成一个个人的登录 token（2021813，七夕节）
// 七夕的前一天，Github不支持个人密码认证，都要使用personal access token（个人访问令牌）认证。

// 查看本地工程关联的远程仓库是哪个：git remote -v

// 1. git remote add origin https://github.com/lylzzz/project_01.git
// remote：表示远程的意思
// add：添加
// origin：就是后面的git地址的别名
// 远程仓库的地址：https://github.com/lyzzz/project_01.git

// 2. git branch -M main（把默认的master分支名改成了main）


// 3. git push -u origin main，表示第一次本次存储朝远程仓库提交的时候，必须这么写
// push：表示推送的意思
// -u：表示第一次推送的时候，必须加 -u 参数
// origin：就是表示你要把工程往哪推，这个名字代表的地址就是你要推送的地址
// main：表示上面那个地址所有的某一个点（房间，分支）

// 4.除第一次以外再修改代码需要再次提交的时候，只需要走 git push 就可以让本地仓库最新的代码推送到远程的git仓库中了