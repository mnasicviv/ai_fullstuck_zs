# 路虎4s店小程序开发

- 需求来自4s店 
    看车 一键询问 
    非常的接地气 ， 微信小程序生态

- html + css + js 
    wxml 

- 小程序的基本知识
    page 来写 
        index  首页 目录  直接帮我们分层了
            index.wxml     html      view   div 小程序有那些标签？ 
            index.js       js 
            index.wxss     css 
            index.json 
    
- swiper组件
    幻灯片
    + swiper-item 
    定时器
    chatgpt
    看开发文档的思想  AI英文
    调试工具的使用

- 相对单位
    - 解决适配的问题
        PC 手机  平板 
    - rpx  小程序里少用或不用px 
        retina 3倍retina  1rpx = 3px 
        vh  view height  视窗高度
        vw   视窗宽度  
        100 满屏 

        -小程序有时候会卡一下---重启
        -给元素多个类名，在选择的需求上，让代码更加复用和维护。
        white...给别的元素用
        hero 主题
        section
    - 从外到内
       盒子 而不是标签  页面的布局
    -元素的类型两种  行内和块级
    -取类名是个技术活
      -用最简单的单词
      -选择器前加限定
    -js
     -data 里面的数据可以绑定到页面上
     -模板不是静态页面， 有数据驱动的动态

-小程序架构思想
   -让开发简单， 小程序来了以下预设，关注业务
   -pages的概念
      wxml/wxss/js/json 组成
    -wxml 模板
        标签是小程序自带标签  view swiper html是没有的
        不是页面，他是活的，动态部分绑定了数据{{}}和指令wx:for的
        只要数据发生改变，它会自动刷新
    -js  data  可以绑定到模板的数据 {{}} 
         onload 生命周期   wx.resquest 去取下数据（后台）
         this.setData({
           slides: res.data.slides
         })



