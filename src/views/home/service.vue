<template>
  <div class="service">
    <CustomTable :data="tableData" :columns="columns" :loading="loading">
      <el-table-column v-for="column in columns" :key="column.label" :label="column.label" :prop="column.prop" v-bind="column" />
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="text" @click="restart(scope.row)">重启</el-button>
          <el-button type="text" @click="stop(scope.row)">停止</el-button>
        </template>
      </el-table-column>
    </CustomTable>
    <div class="downLog">
      <el-button type="primary" size="medium">日志下载</el-button>
    </div>
  </div>
</template>

<script>
import CustomTable from '@/components/Table'
import { getSFTBList } from '@/api/audit'
import { serviceTableColumns } from './static-data'

export default {
  components: {
    CustomTable
  },
  data() {
    return {
      tableData: [],
      columns: serviceTableColumns,
      loading: false
    }
  },
  created() {
    this.getList()
  },
  methods: {
    async getList() {
      const params = {
        type: 'ftpcommands',
        ...this.page
      }
      this.loading = true
      const res = await getSFTBList(params)
      this.tableData = res.data || []
      this.loading = false
    },
    restart() {

    },
    stop() {

    }
  }
}
</script>

<style lang="scss" scoped>
.service{
  .downLog{
    margin-top:20px;
    text-align: right;
  }

}
</style>
