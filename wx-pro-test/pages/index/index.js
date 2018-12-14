//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    search: '',
    seen: true,
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    inputOne: '',
    inputTwo: '',
    inputThree: '',
    checkList: [
      { value: 'banana', label: '香蕉', checked: 'true'},
      { value: 'apple', label: '苹果'},
      { value: 'watermelon', label: '西瓜'},
      // { value: 'pineapple', label: '菠萝'}
    ],
    radioList: [
      { value: 'banana', label: '香蕉'},
      { value: 'apple', label: '苹果'},
      { value: 'watermelon', label: '西瓜'},
      // { value: 'pineapple', label: '菠萝'}
    ],
    checkData: 'banana',
    radioData: 'banana',
    sex: 'male',
    date: '2019-01-01',
    textarea: ''
  },
  sth: 'someThing',
  updateData (e) {
    console.log("e", e)
    console.log("e.detail.keyCode", e.detail.keyCode)
    console.log("this", this)
    let tag = e.currentTarget.dataset.tag
    this.setData({
      [tag]: e.detail.value
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  toUserInfo: function() {
    wx.navigateTo({
      url: '../userInfo/userInfo',
    })
  },
  bindKeyInput (e) {
    this.setData({
      search: e.detail.value
    })
  },
  switchChangeOne (e) {
    console.log("e.detai.value", e.detail.value)
    this.setData({
      seen : !this.data.seen
    })
  },
  bindChangeData (e) {
    console.log("bindChangeData", e)
    let tag = e.currentTarget.dataset.tag
    this.setData({
      [tag] : e.detail.value
    })
  }
})
