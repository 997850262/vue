<template>
  <div class="Head-all">
    <div class="Head-back">
      <img src="@/assets/return.png" class="Head-img" />
      <div @click="add">我</div>
    </div>
    <div class="Head-name">{{store.data.nick}} {{store.count}}</div>
    <div class="Head-over" @click="decrement">完成</div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'Head',
  data () {
    return {
      msg: 'Head组件'
    }
  },
  computed: {
    store () {
      var store = this.$store.state
      return store
    }
  },
  methods: {
    ...mapActions(['decrement']),
    ...mapActions({
      add: 'increment'
    })
  },
  beforeCreate () {
    console.log('beforeCreate')
  },
  created () {
    console.log('created')
  },
  beforeMount () {
    console.log('beforeMount')
  },
  mounted () {
    console.log('mounted')
  },
  beforeUpdate () {
    console.log('beforeUpdate')
  },
  updated () {
    console.log('updated')
  },
  beforeDestory () {
    console.log('beforeDestory')
  },
  destoryed () {
    console.log('destoryed')
  }
}
</script>

<style scoped>
.Head-all{
    display: flex;
    margin-left: 10px;
}
.Head-back{
    font-size: 25px;
    width: 50px;
    color: rgb(243, 32, 138);
    margin-bottom: 20px;
    display: flex;
}
.Head-img{
    width: 25px;
    height: 30px;
}
.Head-name{
    margin: 0 auto;
    font-size: 20px;
    font-weight: 600;
}
.Head-over{
    font-size: 20px;
    color: rgb(243, 32, 138);
    margin-right: 10px;
}
</style>
