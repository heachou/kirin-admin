<template>
  <div class="page">
    <el-tabs v-model="activeName">
      <el-tab-pane label="用户管理" name="first">
        <user-manage />
      </el-tab-pane>
      <el-tab-pane label="用户组管理" name="second">
        <user-group-manage />
      </el-tab-pane>
      <el-tab-pane label="AAA用户" name="third">
        <user-3-a />
      </el-tab-pane>
      <el-tab-pane label="用户属性" name="four">
        <user-attr />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import UserManage from './user-manage/user-manage'
import UserGroupManage from './tabs/user-group-manage'
import User3A from './tabs/user-3A'
import UserAttr from './tabs/user-attr'

export default {
  name: 'WebUser',
  components: {
    UserManage,
    UserGroupManage,
    UserAttr,
    User3A
  },
  data() {
    return {
      activeName: 'first'
    }
  }
}
</script>

<style lang="scss">
.page{
  padding: 16px;
  background: #fff;
}
</style>
