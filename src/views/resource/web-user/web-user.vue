<template>
  <div class="page">
    <el-tabs>
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
import UserManage from './tabs/user-manage'
import UserGroupManage from './tabs/user-group-manage.vue'
import User3A from './tabs/user-3A.vue'
import UserAttr from './tabs/user-attr.vue'

export default {
  name: 'WebUser',
  components: {
    UserManage,
    UserGroupManage,
    UserAttr,
    User3A
  }
}
</script>

<style lang="scss">

</style>
