<template>
  <div class=''>
    <span>{{name}}</span>
    <router-link :to="{path:'search'}">点我</router-link>
  </div>
</template>
</style>
 <script type='text/ecmascript-6'>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  methods: {
  }
}
</script>

