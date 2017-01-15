var util = require('../../utils/util.js')

Page({
  data: {
    title: '',
    create_time:''
  },
  onLoad: function (options) {
    
    console.log(options)
    var id = options.id

    var s_title = wx.getStorageSync('s_title')
    if(!id){
        return false;
    }
    var title = '';
    title = s_title[id].title;
    var create_time = s_title[id].create_time;
    this.setData({
      title: title,
      create_time:create_time
    })
  }
})
