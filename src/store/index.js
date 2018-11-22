import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

var store = new Vuex.Store({
  plugins: [createPersistedState({
    storage: window.sessionStorage
  })],
  debug: true,
  state: {
    data: { token: 1, nick: '刘凯' }, // 个人数据
    entities: {},
    result: [],
    recommendresult: [],
    selectid: 0, // 存单选id
    selectmoreid: [], // 存多选id
    count: 0
  },
  mutations: {
    // 加1
    INCREMENT (state) {
      state.count++
    },
    // 减1
    DECREMENT (state) {
      state.count--
    },
    Music (state, data) {
      console.log(1, data)
      data.songlist.map((data, index) => {
        return state.result.push(data.cur_count)
      })
      console.log(state)
      state.result.map((d, i) => {
        const res = data.songlist[i].cur_count
        const url = 'http://ws.stream.qqmusic.qq.com/C100' + data.songlist[i].data.songmid + '.m4a?fromtag=0&guid=126548448'
        const a = {[res]: {id: res, name: data.songlist[i].data.songname, m_url: url}}
        state.entities = Object.assign(state.entities, a)
      })
      console.log(state)
    },
    Oneselect (state, data) {
      state.selectid = data
    }
  },
  actions: {
    increment (context) {
      context.commit('INCREMENT')
    },
    decrement (context) {
      context.commit('DECREMENT')
    },
    music (context, data) {
      context.commit('Music', data)
    },
    oneselect (context, data) {
      context.commit('Oneselect', data)
    }
  }
})
export default store
