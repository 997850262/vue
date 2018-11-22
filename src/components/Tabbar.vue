<template>
  <div>
    <div class="Tabbar-all">
      <!-- <router-link to="/HelloWorld"> -->
        <div
          class="Tabbar-1"
        >
      我的音乐
        </div>
        <!-- </router-link> -->
        <div
          class="Tabbar-2"
        >
      搜索音乐
        </div>
        <div
          class="Tabbar-3"
        >
      上传音乐
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tabbar',
  data () {
    return {
      aboutMsg: 'Tabbar组件',
      color1: 'red',
      color2: 'red',
      color3: 'red',
      linecolor1: 'red',
      linecolor2: 'red',
      linecolor3: 'red'
    }
  },
  computed: {
    store () {
      var store = this.$store.state
      return store
    }
  },
  methods: {
    // ...mapActions(['decrement']),
    // ...mapActions({
    //   add: 'increment'
    // })
  }
}
</script>

<style scoped>
.Tabbar-all{
    display: flex;
    justify-content:space-around;
    height: 28px;
}
.Tabbar-1{
    font-size: 20px;
    display: block
}
.Tabbar-2{
    font-size: 20px;
}
.Tabbar-3{
    font-size: 20px;
}
a{
    text-decoration: none;
}
</style>
