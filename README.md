# folded_menu
侧边栏可折叠菜单

> JS+ jQuery 实现侧边栏点开收拢导航菜单。
>
> 效果如下：
>
> ![folded_menu](https://raw.githubusercontent.com/weily22/BlogImgs/master/readme_image/weily_menu.gif)
>
> 布局参考（简要，具体见代码）：
>
> ```html
> <!--   menu_item：   一级目录
>  menu_item_child：   子级目录
> 	     sidebar：   侧边栏对应菜单
> 	    main_con：   左边菜单对应的内容
>    main_con_item：   对应一级目录  
> main_con_item ul：   对应子级目录 -->
> <div class="main_wrapper">
>   <div class="sidebar">
> 	 <ul class="menu">
>        	<li class="menu_item">
>           <a>开始前必读</a>
>           <ul class="menu_item_child">
>             <li>威廉 · 莎士比亚</li>
>           </ul>	
>        </li>
>        	<li class="menu_item">
>           <a>四大喜剧</a>
>           <ul class="menu_item_child">
>             <li>仲夏夜之梦</li>
>             <li>皆大欢喜</li>
>             <li>第十二夜</li>
>             <li>威尼斯商人</li>
>           </ul>
>        </li>
>        	<li class="menu_item">
>           <a>四大悲剧</a>
>           <ul class="menu_item_child">
>             <li>哈姆雷特</li>
>             <li>奥瑟罗</li>
>             <li>李尔王</li>
>             <li>麦克白</li>
>           </ul>
>        </li>
>      </ul>
>   </div>
>   <div class="main_con">
>      <ul class="main_con_ul">
>          <li class="main_con_item">   
>            	<ul>
>              	<li>William Shakespeare</li>
>            	</ul>
>        	 </li>
>        	 <li>
>            <ul>
>              	<li>A Midsummer Night's Dream</li>
>              	<li>As you like it</li>
>              	<li>Twelfth</li>
>              	<li>The Merchant of Venice</li>
>            	</ul>
>        	 </li>
>        	 <li>
>            <ul>
>              	<li>哈姆雷特</li>
>              	<li>奥瑟罗</li>
>              	<li>李尔王</li>
>              	<li>麦克白</li>
>            	</ul>
>        	 </li>
>      </ul>
>   </div>
> </div>
>
> ```
>
> JS + jQuery实现原理：
>
> 左边折叠实现：鼠标点击`menu_item`下的`a` 判断下一个元素即它的子级是显示或隐藏状态，实现切换隐藏。
>
> 右边对应内容实现：
>
> 1. 鼠标点击`menu_item_child`下的`li`获取当前子级目录的索引 `index`，以及对应的父级目录的索引为`Pindex`。
>
> 2. 获取`menu_item_child` 对应的 第Pindex 个选中，同时其下的li对应第index个显示出来。
>
> 3. ```js
>    $('.main_con_item').eq(Pindex).show().siblings().hide()   // 先隐藏一级目录对应展开的项
>    $('.main_con_item').eq(Pindex).find('li').eq(index).show().siblings().hide()  //显示隐藏二级目录对应的项
>    ```
>
> 具体细节阅读源码：(＾－＾)V。。。
>
> #### 改写成jQ插件方式
>
> js文件：index_extend.js
>
> 实例：index_extend.html
>
> 源代码：V1.0_jq_extend 分支
>
> ```html
> 默认调用方式： $('.main_wrapper').foldedMenu()
> 默认样式见：index_extend.css
> 默认布局方式：
> <div class="main_wrapper">
>   	<ul class="menu">
>       	<li class="menu_item menu_show">
>           	<a><h2>四大喜剧</h2></a>
>           	<ul class="menu_item_child">
>               <li class="check"><span>仲夏夜之梦</span></li>
>               <li><span>皆大欢喜</span></li>
>               <li><span>第十二夜</span></li>
>               <li><span>威尼斯商人</span></li>
>           	</ul>
>       	</li>
>     </ul>
>   	<ul>
>       	<li class="main_con_item">
>           	<ul>
>                <li>A Midsummer Night's Dream</li>
>                <li>As you like it</li>
>                <li>Twelfth</li>
>                <li>The Merchant of Venice</li>
>           	</ul>
>       	</li>
>   	</ul>
> </div>
> <script>
> // 自定义调用： 
> // .main_wrapper  容器
> $('.main_wrapper').foldedMenu({
>    'topMenu': '.menu_item',      // 如上html布局中的menu_item
>    'topMenuTitle': 'h2',		// menu_item下的h2标题
>    'topMenuClick': '.menu_item a',        // menu_item下的点击元素
>    'childMenu': '.menu_item_child',		 // menu_item下的子级元素
>    'childMenuClick': '.menu_item_child li',  // menu_item下的子级点击元素
>    'menuShow': 'menu_show',		         //一级菜单展开的样式			
>    'menuCheck': 'check',				//子级菜单展开的样式
>    'mainConItem': '.main_con_item',      // 左边栏菜单点击对应内容容器
>    'mainConItemChild': 'li'				// 菜单对应内容对应的索引的标签(main_con_item下的li)
> });
> </script>	
> ```
>
> 
>
> 