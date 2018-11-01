// pages/userInfo/userInfo.js
const app = getApp()


Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName: ''
  },

  /**
   * 生命周期函数--监听页面加载
   * 页面加载时触发。一个页面只会调用一次，可以在 onLoad 的参数中获取打开当前页面路径中的参数。
   */
  onLoad: function (options) {
    if (app.globalData.userInfo) {
      console.log("app.globalData.userInfo", app.globalData.userInfo)
      this.setData({
        userName: app.globalData.userInfo.nickName
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   * 页面初次渲染完成时触发。一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互。
   * 注意：对界面内容进行设置的 API 如wx.setNavigationBarTitle，请在onReady之后进行。
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   * 页面显示/切入前台时触发。
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   * 页面隐藏/切入后台时触发。
   * 如 navigateTo 或底部 tab 切换到其他页面，小程序切入后台等。
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   * 页面卸载时触发。如redirectTo或navigateBack到其他页面时。
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 监听用户滑动页面事件。
   */
  onPageScroll: function () {

  },

  /**
   * 用户点击右上角分享
   * 监听用户点击页面内转发按钮（<button> 组件 open-type="share"）或右上角菜单“转发”按钮的行为，并自定义转发内容。
   */
  onShareAppMessage: function () {

  },

  toAccountInfo () {
    wx.navigateTo({
      url: '/pages/accountInfo/accountInfo',
    })
  }
})