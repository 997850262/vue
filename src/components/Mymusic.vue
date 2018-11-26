<template>
  <div class="MUSIC-all">
    <div class="MyMusic-all">
      <div class="MyMusic-title">
        我的音乐
        <!-- <span class="MyMusic-Subtitle">瓶子</span> -->
      </div>
      <div class="MyMusic-list">
        <div v-for="item in store.entities" v-bind:key="item.id" class="list-all">
          <div v-if="item.id==store.selectid" class="MyMusic-list-all">
            <img src="@/assets/select_music.png" class="singleselect"/>
            {{item.name}}
          </div>
          <div v-else class="MyMusic-list-all" v-on:click="handleoneselect(item)">{{item.name}}</div>
        </div>
      </div>
    </div>
    <div class="RecommendMusic-all">
      <div class="RecommendMusic-title">推荐音乐</div>
      <div class="RecommendMusic-list"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Mymusic',
  data () {
    return {
      msg: 'mymusic组件'
    }
  },
  computed: {
    store () {
      console.log('store')
      var store = this.$store.state
      return store
    }
  },
  methods: {
    handleoneselect: function (event) {
      // console.log(event.id)
      this.$store.dispatch('oneselect', event.id)
    }
  },
  mounted () {
    // axios
    //   .get('https://api.coindesk.com/v1/bpi/currentprice.json')
    //   .then(response => (this.info = response))
    // this.axios.defaults.withCredentials = true//   cookie为true
    // this.axios.get('https://www.apiopen.top/journalismApi', this.qs.stringify({}), {
    //   headers: {
    //     // 'Accept': 'application/json',
    //     // 'Access-Control-Allow-Origin': '*',
    //     // 'Content-Type': 'application/json'
    //     'Content-Type': 'application/x-www-form-urlencoded'
    //   }
    // })
    //   .then(function (res) {
    //     console.log(res.data)
    //   })
    //   .catch(function (err) {
    //     if (err.response) {
    //       console.log(err.response)
    //     }
    //   })
    var url = this.Home + '/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid=36&_=1520777874472%20'
    this.$axios.get(url)
      .then(res => {
        console.log(res.data)
        console.log('axios')
        this.$store.dispatch('music', res.data)
      })
      .catch(error => {
        console.log(error)
      }
      )
  }
}
</script>

<style scoped>
.MUSIC-all{
    height: 70%;
    overflow: auto;
}
.MyMusic-all{
    padding-top: 5px;
}
.MyMusic-title{
  position: relative;
  text-align: left;
  text-indent:10px;
  font-size: 22px;
  font-weight: 550;
}
.MyMusic-list{
  position: relative;
}
.MyMusic-Subtitle{
    float: right;
    font-size: 18px;
    font-weight: 300;
    margin-right: 10px;
}
.MyMusic-list-all{
  position: relative;
  text-align: left;
  text-indent:40px;
  margin-top: 10px;
  width: 100%;
  border-bottom:1px solid #ccc;
}
.moreselect{
    width: 20px;
    height: 20px;
    border-radius:10px;
    background: white;
    border: 1px solid black;
    margin-top: 10px;
}
.list-all{
    display: flex;
    position: relative;
}
.singleselect{
    position: absolute;
    left: 2px;
    bottom: 2px;
    width: 30px;
    height: 30px;
}
.number{
    padding-left: 5px;
}
.RecommendMusic-all{
    margin-top: 35px;
    padding-bottom: 80px;
}
.RecommendMusic-title{
    float: left;
    text-indent:10px;
    font-size: 22px;
    font-weight: 550;
}
.RecommendMusic-list{
    /* padding-left: 30px; */
}
.RecommendMusic-list-all{
    position: relative;
    text-align: left;
    text-indent:30px;
    margin-top: 10px;
    width: 100%;
    border-bottom:1px solid #ccc;
}
</style>
