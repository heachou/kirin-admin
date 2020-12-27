<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane v-for="(v,i) in tabList" :key="i" :label="v.name" :name="v.url" />
  </el-tabs>
</template>

<script>
export default {
  name: 'Tab',
  props: {
    tabList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      activeName: null
    }
  },
  methods: {
    handleClick(v) {
      this.$router.push({ path: v.name })
    }
  }

}
</script>

<style lang="scss" scoped>

</style>
