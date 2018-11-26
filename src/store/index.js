import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

var store = new Vuex.Store({
  plugins: [createPersistedState()],
  debug: true,
  state: {
    data: { token: 1, nick: '刘凯' }, // 个人数据
    entities: {},
    result: [],
    recommendresult: [],
    selectid: 0, // 存单选id
    selectmoreid: [] // 存多选id
  },
  mutations: {
    Music (state, musicdata) {
      console.log('musicaction')
      console.log(1, musicdata)
      musicdata.songlist.map((item, index) => {
        state.result.push(item.cur_count)
      })
      const newresult = Array.from(new Set(state.result))
      state.result = newresult
      state.result.map((d, i) => {
        const res = musicdata.songlist[i].cur_count
        const url = 'http://ws.stream.qqmusic.qq.com/C100' + musicdata.songlist[i].data.songmid + '.m4a?fromtag=0&guid=126548448'
        const a = {[res]: {id: res, name: musicdata.songlist[i].data.songname, m_url: url}}
        state.entities = Object.assign(state.entities, a)
        return state
      })
      console.log(state)
    },
    Oneselect (state, data) {
      state.selectid = data
    }
  },
  actions: {
    music (context, musicdata) {
      console.log('musicactions')
      context.commit('Music', musicdata)
    },
    oneselect (context, data) {
      context.commit('Oneselect', data)
    }
  }
})
export default store
