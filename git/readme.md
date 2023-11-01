# git 大厂代码提交原则

- 开发目录
  PWD （Linux命令）当前的目录地址 一切皆是文件
  git init
  初始化代码目录为代码仓库
  - 反馈成功初始化一个代码仓库
        git 仓库不能嵌套
        .git文件夹 包含仓库的实现功能，不要去动它
- git提交后：本地代码仓库
- git 是一个分布式版本控制系统，开源的软件
  仓库里面放着文件的多个版本
- 为什么把一个文件添加到仓库需要
  git add
  git commit 两步？
  严格的代码提交
  git add 添加一个文件/修改 单位是文件
  如果 html css js 三个文件夹一起构成一次任务，login页的开发
  git commit  -m 'login页开发完成'
  git add和git commit是1:n 的关系
  git add 把文件添加进暂存区 stage
  git commit 确认提交仓库了

- git 是一个分布式的
    本地仓库
    远程仓库
    合作伙伴的仓库

- 严格
  代码提交之前，一定要人间清醒
  当前的修改和上一次的修改，改了哪些地方
  git diff 比较修改 在提交前用

- commit -m 不能乱写，写清楚完成了什么任务
  - leader以后就看-m 后的东西了解我们的工作
- git status 随时使用这个命令了解我们当前仓库状态
- git log
    打印所有的提交(git log --oneline)只显示一行
    包含唯一的id hash
    在最后一次的提交有 HEAD指针，指向最后一次的提交
    master代表分支同 main
    默认master/main是主分支
    HEAD指针指向当前的提交
    有暂存区和仓库两部分

- git reset --hard HEAD^
    表示将提交的版本强制返回到上一个版本，还想返回到再上一个版本需要HEAD^^
    version control 秒懂
- git reset --hard
    可以回到指定的版本
- git reflog
    显示提交过的所有操作记录

- changes + untracked(没有添加到暂存区)