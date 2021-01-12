<template>
  <div class="page">
    <el-tabs v-model="activeName">
      <el-tab-pane label="添加用户" name="first">
        <add-by-form />
      </el-tab-pane>
      <el-tab-pane label="批量添加" name="second">
        <add-multiple />
      </el-tab-pane>
      <el-tab-pane label="文件导入" name="third">
        <add-by-file />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import AddByForm from './add-by-form'
import AddByFile from './add-by-file'
import AddMultiple from './add-multiple'

export default {
  name: 'WebUserAdd',
  components: {
    AddByForm,
    AddByFile,
    AddMultiple
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
