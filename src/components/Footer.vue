<template>
  <div class="Footer-all">
    <div class="Footer-1" v-on:click="onplay">
      <img src="@/assets/button_new_play.png" class="Footer-img" /><br />
      <span>播放</span>
    </div>
    <div class="Footer-2">
      <img src="@/assets/button_rename_red.png" class="Footer-img2" /><br />
      <span>重命名</span>
    </div>
    <div class="Footer-3">
      <img src="@/assets/button_cut.png" class="Footer-img3" /><br />
      <span>选择片段</span>
    </div>
    <div class="Footer-4">
      <img src="@/assets/button_share.png" class="Footer-img4" /><br />
      <span>送给朋友</span>
    </div>
    <div class="Footer-5">
      <img src="@/assets/button_delete.png" class="Footer-img5" /><br />
      <span>删除</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      msg: 'Footer组件'
    }
  },
  props: ['select', 'play'],
  computed: {
    store () {
      var store = this.$store.state
      return store
    }
  },
  methods: {
    onplay: function () {
      this.play()
    }
  }
}
</script>

<style scoped>
.Footer-all{
  background: rgb(240, 237, 237);
  width: 375px;
  height: 80px;
  position: fixed;
  bottom: 0px;
  opacity: 1;
}
.Footer-1{
    position: relative;
    float: left;
    font-size: 18px;
    margin-left: 15px;
    padding-top: 10px;
}
.Footer-2{
    position: relative;
    float: left;
    font-size: 18px;
    margin-left: 15px;
    padding-top: 10px;
}
.Footer-3{
    position: relative;
    float: left;
    font-size: 18px;
    margin-left: 15px;
    padding-top: 10px;
}
.Footer-4{
    position: relative;
    float: left;
    font-size: 18px;
    margin-left: 15px;
    padding-top: 10px;
}
.Footer-5{
    position: relative;
    float: left;
    font-size: 18px;
    margin-left: 15px;
    padding-top: 10px;
}
.Footer-img{
    width: 30px;
    height: 30px;
    margin-left: 3px;
}
.Footer-img2{
    width: 30px;
    height: 30px;
    margin-left: 10px;
}
.Footer-img3{
    width: 30px;
    height: 30px;
    margin-left: 20px;
}
.Footer-img4{
    width: 30px;
    height: 30px;
    margin-left: 20px;
}
.Footer-img5{
    width: 30px;
    height: 30px;
    margin-left: 3px;
}
</style>
