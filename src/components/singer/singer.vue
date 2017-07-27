<template>
  <div class='singer'>
    <list-view @select="selectSinger" :data="singers"></list-view>
    <router-view></router-view>
  </div>
</template>
<style scoped lang='stylus' rel='stylesheet/stylus'>
  .singer
    Position:fixed
    top:88px
    bottom:0
    width:100% 
</style>
<script type='text/ecmascript-6'>
import { getSingerList } from 'api/singer'
import { ERR_OK } from 'api/config'
import Singer from 'common/js/singer'
import ListView from 'base/listview/listview'
import { mapMutations } from 'vuex'
const HOT_NAME = '热门'
const HOT_SINGER_LEN = 10

export default {
  mounted() {
    console.log('singeMounted')
  },
  data() {
    return {
      singers: []
    }
  },
  created() {
    this._getSingerList()
    console.log('singer实例化')
  },
  methods: {
    _getSingerList() {
      getSingerList().then((response) => {
        if (ERR_OK === response.code) {
          this.singers = this._normalizeSinger(response.data.list)
        }
      })
    },
    _normalizeSinger(list) {
      let map = {
        hot: {
          title: HOT_NAME,
          items: []
        }
      }
      list.forEach((item, index) => {
        if (index < HOT_SINGER_LEN) {
          map.hot.items.push(new Singer({
            id: item.Fsinger_mid,
            name: item.Fsinger_name
          }))
        }
        const key = item.Findex
        if (!map[key]) {
          map[key] = {
            title: key,
            items: []
          }
        }
        map[key].items.push(new Singer({
          id: item.Fsinger_mid,
          name: item.Fsinger_name
        }))
      })
      let hot = []
      let ret = []
      for (let key in map) {
        if (key === 'hot') {
          hot.push(map[key])
        } else if (key.match(/[a-zA-Z]/g)) {
          ret.push(map[key])
        }
      }
      ret.sort((a, b) => {
        return a.title.charCodeAt(0) - b.title.charCodeAt(0)
      })
      return hot.concat(ret)
    },
    selectSinger(singer) {
      this.$router.push({
        path: `/singer/${singer.id}`
      })
      this.setSinger(singer)
    },
    ...mapMutations({
      setSinger: 'SET_SINGER'
    })
  },
  components: {
    ListView
  }
}
</script>
