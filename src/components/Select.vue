<template>
  <div class="Select-all">
    <div class="oneselect" v-on:click="oneselect" :style="{background:this.color1}"/>单选
    <div class="moreselect" v-on:click="moreselect" :style="{background:this.color2}"/>多选
  </div>
</template>

<script>
export default {
  name: 'Select',
  data () {
    return {
      msg: 'Select组件',
      color1: 'red',
      color2: 'white'
    }
  },
  props: ['select', 'handeleselect'],
  methods: {
    oneselect: function (event) {
      // `this` 在方法里指向当前 Vue 实例
      // `event` 是原生 DOM 事件
      if (event) {
        this.color1 = 'red'
        this.color2 = 'white'
        this.handeleselect()
      }
    },
    moreselect: function (event) {
      if (event) {
        this.color1 = 'white'
        this.color2 = 'red'
        this.handeleselect()
      }
    }
  }
}
</script>

<style scoped>
.Select-all{
    display: flex;
    margin-top:10px;
    height: 30px;
}
.oneselect{
    margin-left: 20px;
    width: 20px;
    height: 20px;
    border-radius:10px;
    background: white;
    border: 1px solid black;
    /* animation-fill-mode:forwards */
}
.moreselect{
    margin-left: 30px;
    width: 20px;
    height: 20px;
    border-radius:10px;
    background: white;
    border: 1px solid black;
    /* animation-fill-mode:forwards */
}
.Select-1-true{
    margin-left: 20px;
    width: 20px;
    height: 20px;
    border-radius:10px;
    background: white;
    border: 1px solid black;
    /* animation-fill-mode:forwards */
}
.Select-1-false{
    margin-left: 20px;
    width: 20px;
    height: 20px;
    border-radius:10px;
    background: white;
    border: 1px solid black;
    animation-fill-mode:forwards
}

.Select-2-false{
    margin-left: 30px;
    width: 20px;
    height: 20px;
    border-radius:10px;
    background: white;
    border: 1px solid black;
    animation-fill-mode:forwards
}
.Select-2-true{
    margin-left: 30px;
    width: 20px;
    height: 20px;
    border-radius:10px;
    background: white;
    border: 1px solid black;
    animation-fill-mode:forwards
}
</style>
