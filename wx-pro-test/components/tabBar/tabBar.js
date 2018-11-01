// components/tabBar/tabBar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    index: {
      type: Number,
      value: 1,
      observer: function (newVal, oldVal, changedPath) {

      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  attached() {
  },
  ready: function () {
  },
  /**
   * 组件的方法列表
   */
  methods: {
    toIndex() {
      if (this.data.index == 1) {
        return
      }
      this.setData({
        index: 1
      })
      wx.reLaunch({
        url: '../index/index'
      })
    },
    toUserInfo() {
      if (this.data.index == 2) {
        return
      } 
      this.setData({
        index: 2
      })
      wx.reLaunch({
        url: '../userInfo/userInfo'
      })
    },
    onMyButtonTap: function () {
      this.setData({
        // 更新属性和数据的方法与更新页面数据的方法类似
      })
    }
  }
})
