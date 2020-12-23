<template>
  <div class="home">
    <Tab :tabList="tabList"></Tab>
    <div class="home-container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Tab from "@/components/Tab/index"
import { mapGetters } from 'vuex'

export default {
  name: 'home',
  components:{
    Tab
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  data(){
    return{
      tabList:[
        {
          name:"服务状态",
          url:"/home/service"
        },
        {
          name:"系统状态",
          url:"/home/sys"
        },
        {
          name:"双机配置",
          url:"/home/dbMashine"
        },
        {
          name:"配置备份",
          url:"/home/setCopy"
        },
        {
          name:"数据同步",
          url:"/home/dataSync"
        },
        {
          name:"软件升级",
          url:"/home/swUpgrade"
        },
        {
          name:"定时任务",
          url:"/home/timedTask"
        },
        {
          name:"图标上传",
          url:"/home/iconUpload"
        },
         {
          name:"系统通知",
          url:"/home/sysNotice"
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.home{
  width:100%;
  padding:16px;
  box-sizing: border-box;
  background: #fff;
  display: flex;
  flex-direction: column;
  &-container{
    height:calc(100% - 54px)
  }

}
</style>
