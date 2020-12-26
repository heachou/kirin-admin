<template>
  <div class="page">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="应用发布" name="first">
        <app-list />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import AppList from './app_list'

export default {
  name: 'Application',
  components: {
    AppList
  },
  data() {
    return {
      activeName: 'first'
    }
  },
  methods: {
    handleClick(key) {
      console.log(key)
    },
    paginationChange(params) {
      this.page.pageSize = params.pageSize
      this.page.pageNum = params.pageNum
      console.log(params)
    }
  }
}
</script>

<style lang='scss' scope>
.page{
  padding: 16px;
  background: #fff;
}
</style>
