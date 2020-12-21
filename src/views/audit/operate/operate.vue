<template>
  <div class="page">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="Telnet/SSH" name="first">Telnet/SSH</el-tab-pane>
      <el-tab-pane label="SFTP" name="second">SFTP</el-tab-pane>
      <el-tab-pane label="SCP" name="third">SCP</el-tab-pane>
      <el-tab-pane label="FTP" name="FTP">FTP</el-tab-pane>
      <el-tab-pane label="RDP" name="RDP">RDP</el-tab-pane>
      <el-tab-pane label="VNC" name="VNC">VNC</el-tab-pane>
      <el-tab-pane label="X11" name="X11">X11</el-tab-pane>
      <el-tab-pane label="流程审批" name="流程审批">流程审批</el-tab-pane>
    </el-tabs>
    <Pagination
      :total="page.total"
      :page-num="page.pageNum"
      :page-size="page.pageSize"
      @paginationChange="paginationChange"
    />
  </div>
</template>

<script>
import Pagination from '@/components/pagination'
import pageMixin from '@/mixins/page'
export default {
  name: 'Operate',
  components: {
    Pagination
  },
  mixins: [pageMixin],
  data() {
    return {
      activeName: 'first'
    }
  },
  methods: {
    handleClick(key) {
      console.log(key)
    },
    paginationChange(params) {
      this.page.pageSize = params.pageSize
      this.page.pageNum = params.pageNum
      console.log(params)
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
