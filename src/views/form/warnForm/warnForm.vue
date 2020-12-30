<template>
  <div class="warnForm">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="告警统计" name="1">
        <Statistics v-if="activeName=='1'" />
      </el-tab-pane>
      <el-tab-pane label="告警操作" name="2">
        <Operate v-if="activeName=='2'" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Statistics from './statistics'
import Operate from './operate'

export default {
  name: 'WarnForm',
  components: {
    Statistics,
    Operate,
  },
  data() {
    return {
      activeName: '1'
    }
  },
  methods: {
    handleClick() {

    }

  }
}
</script>

<style lang="scss" scoped>
.warnForm{
  background: #fff;
  padding:20px;
  ::v-deep .el-tabs{
    .el-tabs__header{
      margin:0;
    }
  }
}
</style>
