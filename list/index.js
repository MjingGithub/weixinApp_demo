 var untils = require('../utils/util.js')
 var test = require('../utils/test.js')
 var app = getApp()

const date = new Date()
const years = []
const months = []
const days = []

for (let i = 1990; i <= date.getFullYear(); i++) {
  years.push(i)
}

for (let i = 1 ; i <= 12; i++) {
  months.push(i)
}

for (let i = 1 ; i <= 31; i++) {
  days.push(i)
}

Page({
    data:{
        inputVal:'',
        items:[],
        years: years,
        year: date.getFullYear(),
        months: months,
        month: 2,
        days: days,
        day: 2,
        value: [date.getFullYear(),2,2]
    },
    bindChange: function(e) {
        const val = e.detail.value
        this.setData({
        year: this.data.years[val[0]],
        month: this.data.months[val[1]],
        day: this.data.days[val[2]],
        value:[this.data.years[val[0]],this.data.months[val[1]],this.data.days[val[2]]]
        })
    },
    bindDel:function(e){
        var id = e.target.dataset.id;
        var s_title = wx.getStorageSync('s_title')
        var parentThis = this;
        wx.showModal({
            title: '删除',
            content: '是否确认删除',
            success: function(res) {
                if (res.confirm) {
                    s_title.splice(id, 1);
                    wx.setStorageSync('s_title', s_title)
                    wx.showToast({
                        title: '成功',
                        icon: 'success',
                        duration: 1000
                    })
                    parentThis.setData({
                        inputVal: '',
                        items:s_title
                    })   
                }else{
                    return false;
                }
            }
            })
    },
    formSubmit: function(e) {
        var input = e.detail.value.input;
        var array =  e.detail.value.picker_time;
        console.log('form发生了submit事件，携带数据为：', e.detail.value);
        if(!input||!array){
            wx.showToast({
                title: '失败',
                icon: 'loading',
                duration: 1000
            })
            return false;
        }
        var s_title = wx.getStorageSync('s_title') || []
        var length = s_title.length;
        input = test.getFullChars(input)
        s_title.unshift({id:length + 1,title:input,create_time:array.join("-")})
        wx.setStorageSync('s_title', s_title)
        wx.showToast({
            title: '成功',
            icon: 'success',
            duration: 1000
        })
        wx.redirectTo({
            url: '../list/index'
         })
    },
    formReset: function() {
        console.log('form发生了reset事件')
    },
    onLoad: function () {
    var s_title = wx.getStorageSync('s_title') || [];
    this.setData({
            inputVal: '',
            items:s_title
          })
  }
})

