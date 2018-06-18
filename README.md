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