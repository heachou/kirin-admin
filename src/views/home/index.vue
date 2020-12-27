<template>
  <div class="home">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="服务状态" name="1">
        <Service />
      </el-tab-pane>
      <el-tab-pane label="系统状态" name="2">
        <Sys />
      </el-tab-pane>
      <el-tab-pane label="双机配置" name="3">
        <DbMashine />
      </el-tab-pane>
      <el-tab-pane label="配置备份" name="4">
        <SetCopy />
      </el-tab-pane>
      <el-tab-pane label="数据同步" name="5">
        <DataSync />
      </el-tab-pane>
      <el-tab-pane label="软件升级" name="6">
        <SwUpgrade />
      </el-tab-pane>
      <el-tab-pane label="定时任务" name="7">
        <TimedTask />
      </el-tab-pane>
      <el-tab-pane label="图标上传" name="8">
        <IconUpload />
      </el-tab-pane>
      <el-tab-pane label="系统通知" name="9">
        <SysNotice />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Service from './service'
import Sys from './sys'
import DbMashine from './dbMashine'
import SetCopy from './setCopy'
import DataSync from './dataSync'
import SwUpgrade from './swUpgrade'
import TimedTask from './timedTask'
import IconUpload from './iconUpload'
import SysNotice from './sysNotice'

import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    Service,
    Sys,
    DbMashine,
    SetCopy,
    DataSync,
    SwUpgrade,
    TimedTask,
    IconUpload,
    SysNotice
  },
  computed: {
    ...mapGetters(['name'])
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
.home {
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
  background: #fff;
  display: flex;
  flex-direction: column;
  &-container {
    height: calc(100% - 54px);
  }
}
</style>
