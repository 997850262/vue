<template>
  <div v-if="isAcitve==true" class="ListenMusic-all">
      <div class="mask">
        <div class="Body">
          <div class="close" v-on:click="onclose">关闭</div>
          <div class="title">{{store.entities[store.selectid].name}}</div>
          <div> {{currentTime}}/{{alltime}} </div>
          <div class="silder-all">
            <img src="@/assets/btn_pause.png" class="playbtn"/>
            <input type="range" value="0" class="silder"/>
            <audio :src="store.entities[store.selectid].m_url" autoplay id="myAudio" @canplay="playing()" @timeupdate="timeupdate()"/>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ListenMusic',
  data () {
    return {
      msg: 'ListenMusic组件',
      alltime: 0,
      currentTime: 0
    }
  },
  computed: {
    store () {
      var store = this.$store.state
      return store
    }
  },
  props: ['select', 'isAcitve', 'ispart', 'close'],
  methods: {
    onclose: function (event) {
      this.close()
    },
    playing: function (event) {
      const myVideo = document.getElementById('myAudio')
      // console.log(myVideo.duration)
      const minute = parseInt(myVideo.duration / 60)
      const second = parseInt(myVideo.duration % 60)
      // console.log(minute,second)
      this.alltime = minute + ':' + second
    },
    timeupdate: function (event) {
      if (this.ispart === 1) {
        const myVideo = document.getElementById('myAudio')
        const minute = parseInt(myVideo.currentTime / 60)
        const second = parseInt(myVideo.currentTime % 60)
        this.currentTime = minute + ':' + second
      }
    }
  }
}
</script>

<style scoped>
.ListenMusic-all {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.mask {
    position: relative;
    width: 375px;
    height: 600px;
    margin: 0 auto;
    background: rgba(0, 0, 0, .6);
    transition: opacity .3s ease-in;
}
.Body {
  position: fixed;
  width: 375px;
  height: 150px;
  bottom:0;
  background:white;
  z-index: 100;
}
.close{
  width: 50px;
  height: 25px;
  border-radius: 15px;
  background: rgb(38, 199, 99);
  float: right;
}
.title{
  margin-top: 25px;
}
.silder-all{
  display: flex;
}
.playbtn{
  position: relative;
  width:25px ;
  height:30px ;
  left: 20px;
  top: 20px;
}
.silder{
  position: relative;
  left: 25px;
  top: 20px;
}
input[type=range] {
    -webkit-appearance: none;
    width: 300px;
    border-radius: 10px; /*这个属性设置使填充进度条时的图形为圆角*/
}
input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
}
input[type=range]::-webkit-slider-runnable-track {
    height: 15px;
    border-radius: 10px; /*将轨道设为圆角的*/
    box-shadow: 0 1px 1px #def3f8, inset 0 .125em .125em #0d1112; /*轨道内置阴影效果*/
}
input[type=range]:focus {
    outline: none;
}
input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 25px;
    width: 25px;
    margin-top: -5px; /*使滑块超出轨道部分的偏移量相等*/
    background: #ffffff;
    border-radius: 50%; /*外观设置为圆形*/
    border: solid 0.125em rgba(205, 224, 230, 0.5); /*设置边框*/
    box-shadow: 0 .125em .125em #3b4547; /*添加底部阴影*/
}
</style>
