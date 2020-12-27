<template>
  <div class="systemAuth">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="系统权限" name="1">
        <SysAuth v-if="activeName=='1'" />
      </el-tab-pane>
      <el-tab-pane label="应用权限" name="2">
        <AppAuth v-if="activeName=='2'" />
      </el-tab-pane>
      <el-tab-pane label="系统账号" name="3">
        <SysAccount v-if="activeName=='3'" />
      </el-tab-pane>
      <el-tab-pane label="应用账号" name="4">
        <AppAccount v-if="activeName=='4'" />
      </el-tab-pane>
      <el-tab-pane label="变更报表" name="5">
        <ChangeForm v-if="activeName=='5'" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import SysAuth from './sysAuth'
import AppAuth from './appAuth'
import SysAccount from './sysAccount'
import AppAccount from './appAccount'
import ChangeForm from './changeForm'
export default {
  name: 'SystemAuth',
  components: {
    SysAuth,
    AppAuth,
    SysAccount,
    AppAccount,
    ChangeForm
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
.systemAuth{
  background: #fff;
  padding:20px;
  ::v-deep .el-tabs{
    .el-tabs__header{
      margin:0;
    }
  }
}
</style>
