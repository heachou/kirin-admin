<template>
  <div class="operateForm">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="命令总计" name="1">
        <OrderAll v-if="activeName=='1'" />
      </el-tab-pane>
      <el-tab-pane label="命令统计" name="2">
        <OrderCount v-if="activeName=='2'" />
      </el-tab-pane>
      <el-tab-pane label="命令列表" name="3">
        <OrderList v-if="activeName=='3'" />
      </el-tab-pane>
      <el-tab-pane label="应用报表" name="4">
        <AppForm v-if="activeName=='4'" />
      </el-tab-pane>
      <el-tab-pane label="SFTP命令报表" name="5">
        <Sftp v-if="activeName=='5'" />
      </el-tab-pane>
       <el-tab-pane label="FTP命令报表" name="6">
        <Ftp v-if="activeName=='6'" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import OrderAll from './orderAll'
import OrderCount from './orderCount'
import OrderList from './orderList'
import AppForm from './appForm'
import Sftp from './sftp'
import Ftp from './ftp'

export default {
  name: 'operateForm',
  components: {
    OrderAll,
    OrderCount,
    OrderList,
    AppForm,
    Sftp,
    Ftp
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
.operateForm{
  background: #fff;
  padding:20px;
  ::v-deep .el-tabs{
    .el-tabs__header{
      margin:0;
    }
  }
}
</style>
