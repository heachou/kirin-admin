<template>
  <div class="loginForm">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="授权明细" name="1">
        <AuthInfo v-if="activeName=='1'" />
      </el-tab-pane>
      <el-tab-pane label="登录统计" name="2">
        <LoginInfo v-if="activeName=='2'" />
      </el-tab-pane>
      <el-tab-pane label="登录尝试" name="3">
        <LoginTry v-if="activeName=='3'" />
      </el-tab-pane>
      <el-tab-pane label="系统登录报表" name="4">
        <SysLogin v-if="activeName=='4'" />
      </el-tab-pane>
      <el-tab-pane label="最后登录时间" name="5">
        <LastLogin v-if="activeName=='5'" />
      </el-tab-pane>
      <el-tab-pane label="应用登录报表" name="6">
        <AppLogin v-if="activeName=='6'" />
      </el-tab-pane>
      <el-tab-pane label="审批报表" name="7">
        <Approval v-if="activeName=='7'" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import AuthInfo from './authInfo'
import LoginInfo from './loginInfo'
import LoginTry from './loginTry'
import SysLogin from './sysLogin'
import LastLogin from './lastLogin'
import AppLogin from './appLogin'
import Approval from './approval'
export default {
  name: 'loginForm',
  components: {
    AuthInfo,
    LoginInfo,
    LoginTry,
    SysLogin,
    LastLogin,
    AppLogin,
    Approval
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
.loginForm{
  background: #fff;
  padding:20px;
  ::v-deep .el-tabs{
    .el-tabs__header{
      margin:0;
    }
  }
}
</style>
