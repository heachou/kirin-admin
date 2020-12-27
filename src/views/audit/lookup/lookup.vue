<template>
  <div class="page">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="会话搜索" name="first">
        <session />
      </el-tab-pane>
      <el-tab-pane label="内容搜索" name="second">
        <content-tab />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import ContentTab from './content'
import Session from './session'

export default {
  name: 'Lookup',
  components: {
    Session,
    ContentTab
  },
  data() {
    return {
      activeName: 'first'
    }
  },
  methods: {
    handleClick(key) {
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
