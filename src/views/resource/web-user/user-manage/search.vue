<template>
  <el-form
    :inline="true"
    :model="formInline"
    size="small"
    class="demo-form-inline"
  >
    <el-form-item label="资源组">
      <el-input v-model="formInline.user" placeholder="请选择资源组" />
    </el-form-item>
    <el-form-item label="服务器地址">
      <el-input v-model="formInline.ip" placeholder="来源地址" />
    </el-form-item>
    <el-form-item label="堡垒机用户">
      <el-input v-model="formInline.user" placeholder="堡垒机用户" />
    </el-form-item>
    <el-form-item label="起止时间">
      <el-date-picker
        v-model="formInline.time"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        style="width: 240px"
      />
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
