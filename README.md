## 这是什么代码仓库

- 真实袒露的[[第二大脑]]。是个人每日阅读、笔记和写作的完整实时的过程与结果的全盘分享。
- 未经美化的[[数字花园]]。避免为了正式发表而过度修葺美化文章，保留了最真实完备的细节。

## 为什么要开源笔记

- 用[[双链笔记]]做笔记很像编程。软件源码可以开源，我的笔记有何不可？各种博客，只能看到局部的他，这个仓库，算是几近整体的我。
- 新手也许从本库中，获取如何基于双链笔记构建知识管理系统的[[内容、工具与方法论]]三位一体的实质性参考。而大部分『抛开内容谈方法论，抛开方法论谈工具』的高屋建瓴式的文章，也许很难让你直观感受到双链笔记的魅力。
- 除了个人隐私，我的全部思考和想法，或短暂或永恒，或黑暗或光明，都可以公之于众，也许没有人看，但这是我的态度。其实这个事儿，有一位编程界的大佬已经做了，吾仰望之：[Andyʼs working notes](https://notes.andymatuschak.org/About_these_notes)

## 快速开始

- 看。访问本库的实时在线版本，随意漫游，感受[[双链笔记]]和[[《卡片笔记写作法》|卡片笔记]]的魅力：[oldwinter的知识花园](https://oldwinter.github.io/knowledge-garden/)。
- 用。若简单漫游后，还算感兴趣，则`git clone`本库，并用[[obsidian]]、[[logseq]]或[[vscode]][^1]任意一款app打开本库后进行编辑和进一步探索。
- 悟。确定先只使用obsidian，结合[[《卡片笔记写作法》]]的方法论，建立自己的[[个人知识管理|PKM(personal knowledge management)]]体系，打造自己的[[第二大脑]]。
- 玩。obsidian是[[平台+插件]]理念加持下的操作系统级的笔记软件，可以看看本库使用的[[obsidian插件]]，并评估自己的需求进行增删，让插件更好地为自己服务。
- 合。工具和方法论都熟悉了以后，不妨开始尝试结合[[logseq]]和[[vscode]]，共同完成一些obsidian实现起来不便的操作。

## 本库涉及app及作用

- [[obsidian]]主用
	- 基于[[markdown]]，进行阅读、笔记和写作。即[[闪念笔记]]、[[文献笔记]]、[[永久笔记]]。
	- 当前阶段聚焦项目的[[文件夹和标签]]式的管理。即[[项目笔记]]。
	- 多端同步。借用第三方[[remotely save]]插件由[[onedrive]]负责云存储和同步。
- [[logseq]]备用
	- 发布至[[github]]。使用[[github action]]自动定时发布。即[oldwinter的知识花园](https://oldwinter.github.io/knowledge-garden/)。
- [[vscode]]辅助
	- 文本和文件的批量[[正则表达式]]编辑和删除
	- 管理dot隐藏文件等非md配置文件
	- 借用[[copilot]]插件进行AI写作

## 周边app的联动与配合

- 本库聚焦于[[个人知识管理|PKM]]，而完整的[[数字时代如何更好地工作与生活 - MOC|工作和生活的效率体系建设]]，在我看来，共有4项
	- [[个人信息管理系统]]。以[[devonthink]]为中心。
	- [[个人任务管理系统]]。以[[滴答清单]]为中心。
	- [[个人知识笔记系统]] 。以[[obsidian]]为中心。即本库。
	- [[个人输出发布系统]]。以[[notion]]为中心。
- 各个系统之间的联动与配合，参见[[效率系统4大子系统联动与配合]]

## 找我从诗词歌赋，谈到人生哲学

- 微信：oldwinter2

[^1]: vscode需额外安装foam插件后，便支持[[双链笔记]]的`[[`语法
