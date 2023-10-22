// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    //数据区域
    slides:[{
            "id": 5,
            "image":"https://resources.ninghao.net/landrover/discover-1.jpg",
            "header": "全新一代发现",
            "sub_header": "Discovery",
            "description": "全尺寸7座SUV,现已接受预定"
          },{
            "id": 5,
            "image":"https://resources.ninghao.net/landrover/discover-1.jpg",
            "header": "全新一代发现",
            "sub_header": "Discovery",
            "description": "全尺寸7座SUV,现已接受预定"
          }, {
            "id": 5,
            "image":"https://resources.ninghao.net/landrover/discover-1.jpg",
            "header": "全新一代发现",
            "sub_header": "Discovery",
            "description": "全尺寸7座SUV,现已接受预定"
          }]
  },
  onLoad() {
   //页面加载时，去后台取数据
   //小程序提供的接口请求API
   wx.request({
     url:'https://resources.ninghao.net/wxapp-case/db.json',
     success:(res)=>{
       console.log(res.data.slides)
       this.setData({
         slides:res.data.slides
       })
     }
   })
  }   
})
    
  
