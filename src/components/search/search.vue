<template>
  <div class=''>
    <span>{{name}}</span>
    <div>
      <input type="text" placeholder="请输入新姓名" ref="newValue">
      <input type="button" @click="updateName" value='修改'>
    </div>
  </div>
</template>
<style scoped lang='stylus' rel='stylesheet/stylus'>
  
</style>
<script type='text/ecmascript-6'>
import { mapGetters, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  methods: {
    updateName() {
      let val = this.$refs.newValue.value
      this.setName(val)
    },
    ...mapMutations({
      setName: 'SET_NAME'
    })
  }
}
</script>
