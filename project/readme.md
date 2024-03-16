## 怎么介绍项目

- 可以安排的
- 我的项目是一个全栈项目
  - vue全家桶 重点做
  - 使用node 后端api服务，使用koa/express 登录 + post 表
  - ElementPlus 文章列表页 登录页

- 介绍项目
  - 后端API服务
    - sql 设计
      - user表
        - CREATE TABLE `user` (
          `id` int(11) NOT NULL AUTO_INCREMENT,
          `username` varchar(255) NOT NULL,
          `password` varchar(255) NOT NULL, /*密码 不能明文存储*/
          PRIMARY KEY (`id`),
          UNIQUE KEY `name` (`name`)
        ) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4; /*utf8mb4 支持emoji*/
        user 尽量简单，最重要的，将次要内容分表设计，有利于性能优化
    - avatar 头像表
      - CREATE TABLE `avatar`(
        `id` int(11) NOT NULL AUTO_INCREMENT,
        `mimetype` varchar(255) NOT NULL,
        `filename` varchar(255) NOT NULL,
        `size` int(11) NOT NULL,
        `user_id` int(11) NOT NULL,
        PRIMARY KEY (`id`),
        KEY `user_id` (`user_id`), /*索引*/
        CONSTRAINT `avatar_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
      )

      索引meet 查询

- sql是后端项目的核心
- 面试官心态 考察索引
  - 主键索引 id auto_increment
  - 唯一索引 name 不重复
  - 普通索引
    - 索引是为了提升查询的速度，所以项目里面用到了哪些查询，就需要加索引
    - 分配相应的空间和数据结构 来加速查询 索引是数据库的主要性能瓶颈
  - 外键索引

  CREATE TABLE `comment` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `content` longtext NOT NULL,
    `postId` int(11) NOT NULL,
    `userId` int(11) NOT NULL,
    `parentId` int(11) DEFAULT NULL,
    PRIMARY KEY (`id`),
    KEY `postId` (`postId`),
    KEY `userId` (`userId`),
    KEY `parentId` (`parentId`),
  )