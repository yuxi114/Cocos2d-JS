#Cocos2d-JS介绍
Cocos2d-JS 是跨全平台的游戏引擎，采用原生JavaScript语言，可发布到包括Web平台，iOS，Android，Windows Phone8，Mac，Windows等平台，引擎基于MIT开源协议，完全开源，免费，易学易用，拥有活跃的社区支持。Cocos2d-JS让2D的游戏编程门槛更低，使用更加容易和高效。和其他类似游戏框架相比，它定义了更加清晰的2D游戏编程的基本组件，采用易学易用的API设计，并采用全球领先、具备原生性能的脚本绑定解决方案实现游戏的跨原生平台发布，开发效率更高，使用上最简单。

Cocos2d-JS是Cocos2d-x的JavaScript版本，融合了Cocos2d-HTML5和Cocos2d-x JavaScript Bindings（JSB）。它支持Cocos2d-x的所有核心特性并提供更简单易用的JavaScript风格API，基于Cocos2d-JS的框架，您可以方便的使用JavaScript语言进行游戏开发，快速构建原型进行验证，并让您的游戏跑在所有支持HTML5规范的浏览器上。由于Cocos2d-html5的API和Cocos2d-x JSB的API高度一致，可让您的游戏不用修改代码或者修改少量代码就可打包为原生性能表现的混合游戏，发布到原生应用市场，从而实现，一次编码全平台部署的效果。

#环境搭建(Mac、Windows、Linux)
1. 去官网下载Cocos2d-JS的SDK，网址：http://www.cocos.com/download.  
2. Cocos2d-JS是基于Python开发，所以，需要先安装Python，因为Mac自带，所以，直接跳过这步.
3. 准备Android开发相关SDK(JDK、Android SDK、Android NDK、ant).
4. 安装Cocos2d-JS的SDK，进入SKD所在目录，输入python setup.py运行，目的是把cocos2d console加入命令行指令中，并设置其他的相关的SDK路径.
5. 运行python setup.py，console要求输入ADT的位置，本期暂不考虑在Android上运行，就直接按Enter跳过即可.

#开发工具
1. VScode、Sublime、WebStrom、CocosCreator(功能异常强大)

#建立第一个程序
1. cocos new -l test(cocos入口命令，new新建项目，-l后续的js是我们需要建立的项目类型，test项目名称)
![](/Users/yuxishixiong/study/Cocos2d-JS/res/newTest.png)
2. 打开项目，运行index.html(Error)
3. 安装本地server，npm install -g serve，运行进入项目所在目录，serve -o
![](/Users/yuxishixiong/study/Cocos2d-JS/res/serve.png)

#目录及文件结构
![](/Users/yuxishixiong/study/Cocos2d-JS/res/picture.png)  
1. frameworks/cocos2d-html5 目录包含了所有Cocos2d-html5的引擎模块,例如引擎核心模块、音频模块、外部物理引擎库,CocosBuilder Reader,CocoStudio Reader和其他的模块。所有的模块都用JS实现并且可以在WEB环境中运行  
2. frameworks/cocos2d-x 包含cocos2d-x引擎模块,用于编译原生版本程序(Android、iOS)  
3. frameworks/runtime-src 存放在各个平台的项目文件(Android、ios、Mac、Linux、Win32)  
4. res 用于存放项目的资源文件(图片、音频)  
5. src 存放项目的目录代码  
6. CMakeLists.txt .cocos-project.json 是Cocos2d console编译或运行游戏时所依赖的文件，一般情况下，我们可以忽略  
7. index.html 承载HTML5版本的游戏网页   
8. main.js 程序入口，所有代码从这里开始执行，由index.html加载  
9. project.json 配置文件
![](/Users/yuxishixiong/study/Cocos2d-JS/res/project.png)

#运行机制
![](/Users/yuxishixiong/study/Cocos2d-JS/res/run.png)  
1. 加载CCBoot.js，预加载html5中类库  
2. 拉取项目配置文件project.json中的信息  
3. 预加载resource.js(定义资源的全局变量)，app.js(包含模板的第一个场景代码)  
4. 进入程序入口，main.js  
5. 加载该场景下所需资源  
6. 运行游戏

#小游戏
###1. 准备项目和资源
###2. 创建游戏场景
###3. 设置场景图像  
	(1). 添加背景  
	(2). 修改背景尺寸  
	(3). 添加地面  
	(4). 添加主角  
###4. 编写主角脚本(Player.js)  
	(1). 编写组件属性
	(2). 编写跳跃和移动代码  
	(3). 移动控制  
###5. 制作星星(Game.js)
	(1). 制作Prefab(预制资源)---需要重复生成的节点
	(2). 添加游戏控制脚本
	(3). 在随机位置生成星星
	(4). 添加主角碰触收集星星的行为
###6. 添加得分
	(1). 添加分数文字(Label)
	(2). 在 Game 脚本中添加得分逻辑(Game.js)
	(3). 在 Star 脚本中调用 Game 中的得分逻辑(Star.js)
###7. 失败判定和重新开始  
	(1). 为星星加入计时消失的逻辑(Game.js)  
###8. 加入音效(Player.js)  
	(1). 跳跃音效  
	(2). 得分音效

