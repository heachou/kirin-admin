<template>
  <div class="page">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="SSH 实时监控" name="first">
        <telnet />
      </el-tab-pane>
      <el-tab-pane label="Telnet 实时监控" name="second">
        <sftb />
      </el-tab-pane>
      <el-tab-pane label="RDP实时监控" name="third">
        <scp />
      </el-tab-pane>
      <el-tab-pane label="VNC实时监控" name="VNC">
        <vnc />
      </el-tab-pane>
      <el-tab-pane label="应用发布实时监控" name="RDP">
        <rdp />
      </el-tab-pane>
      <el-tab-pane label="WEB在线用户" name="X11">
        <x11 />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Telnet from '../tabs/telnet'
import Sftb from '../tabs/sftp'
import Scp from '../tabs/scp'
import Rdp from '../tabs/rdp'
import Vnc from '../tabs/vnc'
import X11 from '../tabs/x11'

export default {
  name: 'Monitor',
  components: {
    Telnet,
    Sftb,
    Scp,
    Rdp,
    Vnc,
    X11
  },
  data() {
    return {
      activeName: 'first'
    }
  },
  methods: {
    handleClick(key) {
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
