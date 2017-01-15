// pages/audio/music/playMusic.js
Page({
  data:{
    poster:"http://p3.music.126.net/dezC5zAbgISxdrnjdGjMMg==/3264450024433088.jpg?param=130y130",
    src:" http://m10.music.126.net/20170111105011/992a5214899115b2ef35d2ec4466911f/ymusic/81e8/35c0/2c3f/e66093dd7aad182e9580ff6e8cdd4cd3.mp3",
    author:"Various Artists",
    name:"Here We Are Again (《喜剧之王》插曲)",
    title:''

  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    this.setData({
      title: options.title
    })
  },
  onReady:function(e){
    this.audioCtx = wx.createAudioContext("myMusicAudio")
  },
   audioPlay: function () {
    this.audioCtx.play()
  },
  audioPause: function () {
    this.audioCtx.pause()
  },
  audio14: function () {
    this.audioCtx.seek(14)
  },
  audioStart: function () {
    this.audioCtx.seek(0)
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