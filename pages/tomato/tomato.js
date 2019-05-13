// pages/tomato/tomato.js
Page({

  /**
   * 页面的初始数据
   */
  timer: null,
  data: {
    defalutSecond: 10,
    time: "",
    tmierStatus: 'stop',
    finishConfirmVisible: false,
    againButtonVisible: false,
    confirmVisible: false,
  },
  onShow: function () {
    this.startTimer()
  },
  startTimer() {
    this.setData({ tmierStatus: 'start' })
    this.changeTime()
    this.timer = setInterval(() => {
      this.data.defalutSecond = this.data.defalutSecond - 1
      this.changeTime()
      if (this.data.defalutSecond === 0) {
        this.setData({
          againButtonVisible: true,
          finishConfirmVisible: true,
        })
        return this.clearTimer()
      }

    }, 1000)
  },
  againTimer() {
    this.setData({
      defalutSecond: 10
    })
    this.startTimer()
  },
  clearTimer() {
    clearInterval(this.timer)
    this.timer = null
    this.setData({
      tmierStatus: 'stop'
    })
  },
  changeTime() {
    let m = Math.floor(this.data.defalutSecond / 60)
    let s = Math.floor(this.data.defalutSecond % 60)
    if (s === 0) {
      s = "00"
    }
    if ((s + "").length === 1) {
      s = "0" + s
    }
    if ((m + "").length === 1) {
      m = "0" + m
    }
    this.setData({
      time: `${m}:${s}`
    })
  },
  confirmFinish(event){
    let content = event.detail
  },

  confirmCancel() {
    this.setData({
      finishConfirmVisible: false
      })
  },
  confirmAbandon(event) {
    let content = event.detail
wx.navigateBack({
  to:-1
})
  },
  showConfirm() {
    this.setData({ confirmVisible: true })
    this.clearTimer()
  },
  hideAbandon() {
    this.setData({
      confirmVisible: false
    })
  }
})