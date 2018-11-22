<template>
  <div>
      {{isAcitve}}
  </div>
</template>

<script>
export default {
  name: 'ListenMusic',
  data () {
    return {
      msg: 'ListenMusic组件'
    }
  },
  props: ['select', 'isAcitve', 'ispart'],
  methods: {
  }
}
</script>

<style scoped>

</style>
