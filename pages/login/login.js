const {
  http
} = require('../../utils/http.js')
const {
  app_id,
  app_secret
} = getApp().globalData

Page({
  data: {

  },
  //点击按钮 => 调用小程序原生的 wx.login => 参数 => http.post => 返回 user
  // => 保存user => 返回首页
  login(event) {
    let encrypted_data = event.detail.encryptedData
    let iv = event.detail.iv
    this.wxLogin(encrypted_data, iv)
  },
  wxLogin(encrypted_data, iv) {
    wx.login({
      success: (res) => {
        this.loginMe(res.code, iv, encrypted_data)
      }
    })
  },
  loginMe(code, iv, encrypted_data) {
    //登录
    http.post('/sign_in/mini_program_user', {
        code,
        iv,
        encrypted_data,
        app_id,
        app_secret
      })
      .then((res) => {
        this.saveMessage(res)
        wx.reLaunch({
          url: "/pages/home/home"
        })
      })
  },
  saveMessage(res) {
    wx.setStorageSync('me', res.data.detail)
    wx.setStorageSync('X-token', res.header["X-token"])
  }
})