// pages/request/request_try.js
Page({
  data:{
    title:'',
    raceList:null,
    gameId:0,
    issueNo:''
  },
  onLoad:function(options){
    this.setData({
      title:options.title
    })
  },
  onReady:function(){
    var that = this;
    // 页面渲染完成
    wx.request({
      url: 'https://open-daily.aicai.com//v2/support/lcmatchlist.do',
      data: {
        base:{agentId:17999,sid:"CFF31BBD52C22E2524744C6399ACB4CF-280085",
        version:"iostm_4.1.6",clientType:8,
       imei:"775f27bd36000d5cf26f9166c391e490054ee91b",appType:1, timestamp:"3145081482915839908"},
       buzz:{
         gameId:4065,
         pn:1,
         matchType:0,
         isToday:true,
         showNba:false,
         playType:0,
         ps:30
       },
      format:'json',
      sign:"K3/4ZlWEpDv7G4vRYPBwgX7Nj40="
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
      var data =   res.data;
      var resp = data.resp;
      var ro = data.ro;
      if(ro.respCode=="0000"){
       // console.log(resp) ;
        that.setData({
           raceList:resp.list,
           gameId:resp.gameId,
           issueNo:resp.issueNo
        })

      }
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }

})