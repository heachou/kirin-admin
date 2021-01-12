<template>
  <el-form
    :inline="true"
    :model="formInline"
    size="small"
    class="demo-form-inline"
  >
    <el-form-item label="组名">
      <el-input v-model="formInline.user" placeholder="组名" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">查询</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'SearchWeb',
  data() {
    return {
      formInline: {
        user: '',
        region: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
