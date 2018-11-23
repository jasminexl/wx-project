// components/alert/alert.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    alertOption: {
      type: Object,
      value: {
        isShow: false,
        text: ''
      },
      observer (newVal, oldVal, changedPath) {

      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    cancleAlert () {
      this.data.alertOption.isShow = false
      this.setData({
        alertOption: this.data.alertOption
      })
      this.triggerEvent('cancleAlert')
    },
    sureAlert (e) {
      this.data.alertOption.isShow = false
      this.setData({
        alertOption: this.data.alertOption
      })
      this.triggerEvent('sureAlert', {event: e})
    }
  }
})
