<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <header>
      <!-- <router-link to="/HelloWorld">HelloWorld</router-link>
      <router-link to="/home">Home</router-link>
      <router-link to="/about">About</router-link> -->
    </header>
    <div class="Music-all">
      <Head />
      <Tabbar />
      <Select :select="select" :handeleselect="handeleselect"/>
      <Mymusic :select="select"/>
      <Footer :select="select" :play="play"/>
      <ListenMusic :select="select" :isAcitve="isAcitve" :ispart="ispart" :close="close"/>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Head from './components/Head'
import Tabbar from './components/Tabbar'
import Select from './components/Select'
import Mymusic from './components/Mymusic'
import Footer from './components/Footer'
import ListenMusic from './components/ListenMusic'

export default {
  name: 'App',
  data () {
    return {
      select: true,
      isAcitve: false,
      ispart: 0
    }
  },
  methods: {
    handeleselect: function () {
      this.select = !this.select
    },
    play: function () {
      this.isAcitve = true
      this.ispart = 1
    },
    close: function () {
      this.isAcitve = false
      this.ispart = 0
    }
  },
  components: {
    Head,
    Tabbar,
    Select,
    Mymusic,
    Footer,
    ListenMusic
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
.Music-all{
    width: 375px;
    margin: 0 auto;
    height: 600px;
    background-color: antiquewhite;
}
</style>
