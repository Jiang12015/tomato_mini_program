// components/confirm/confirm.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    placeholder:{
      type: String,
      value:""
    },
    visible:{
      type:Boolean,
      value:false
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
   value:""
  },

  /**
   * 组件的方法列表
   */
  methods: {
   confirm(){
     this.triggerEvent('confirm',this.data.value)
   },
   cancel(){
     this.triggerEvent('cancel', '取消')
   },
   watchValue(event){
     this.data.value = event.detail.value
   }
  }
})
