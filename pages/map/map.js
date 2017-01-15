// pages/map/map.js
Page({
  data:{
    title:"",
    markers: [{
      iconPath: "../../image/icon_component.png",
      id: 0,
      latitude: 22.543099,
      longitude: 114.057868,
      width: 50,
      height: 50
    }],
    polyline: [{
      points: [{
        longitude: 114.057868,
        latitude: 22.543099
      }, {
        longitude: 114.3245200,
        latitude: 22.543088
      }],
      color:"#FF0000DD",
      width: 2,
      dottedLine: true
    }],
    controls: [{
      id: 1,
      iconPath: '../../image/icon_API.png',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  
  },
  onLoad:function(options){
    wx.getLocation({
      type: 'wgs84', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
      success: function(res){
       var culatitude = res.latitude 
       var culongitude = res.longitude
       var speed = res.speed
       var accuracy = res.accuracy
       wx.openLocation({
      latitude: culatitude,
      longitude: culongitude,
      scale: 28
    })
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
    this.setData({
      title:options.title

    })
    
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  }
})