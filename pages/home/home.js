// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lists: [
      { id: 1, text: "任务1", finished: true },
      { id: 2, text: "任务2", finished: true },
      { id: 3, text: "任务3", finished: false },
      { id: 4, text: "任务4", finished: true },
      { id: 5, text: "任务5", finished: false },
    ],
    visible: false
  },
  confirm(event) {
    console.log(event)
  },
  confirmCreate(event) {
    let content = event.detail
    if (content) {
      let todo = [{ id: this.data.lists.length + 1, text: content, finished: false }]
      this.data.lists = todo.concat(this.data.lists)
      this.setData({
        lists: this.data.lists
      })
      this.hideConfirm()
    }
  },
  destroyTodo(event) {
    console.log(event)
    let id = event.currentTarget.dataset.id
    let index = event.currentTarget.dataset.index
    this.data.lists[index].finished = false
    this.setData({
      lists: this.data.lists
    })
  },
  hideConfirm(event) {
    this.setData({ visible: false })
  },
  showConfirm() {
    this.setData({ visible: true })
  }
})