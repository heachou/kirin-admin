<template>
  <div>
    <search />
    <custom-table
      :data="tableData"
      :columns="columns"
      :loading="loading"
    >
      <el-table-column
        v-for="column in columns"
        :key="column.label"
        :label="column.label"
        :prop="column.prop"
        v-bind="column"
      />
      <el-table-column
        label="详细"
      >
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span style="margin-left: 10px">详细 未实现{{ scope.sid }}</span>
        </template>
      </el-table-column>
    </custom-table>
    <div class="pagination">
      <pagination
        v-bind="page"
        @paginationChange="paginationChange"
      />
    </div>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination'
import pageMixin from '@/mixins/page'
import Search from '../comp/search'
import CustomTable from '@/components/Table'
import { getSSHList } from '@/api/audit'
import { sshTableColumns } from '../static-data'

export default {
  components: {
    Pagination,
    Search,
    CustomTable
  },
  mixins: [pageMixin],
  data() {
    return {
      tableData: [],
      columns: sshTableColumns,
      loading: false
    }
  },
  created() {
    this.getList()
  },
  methods: {
    async getList() {
      const params = {
        type: 'ssh',
        ...this.page
      }
      this.loading = true
      const res = await getSSHList(params)
      this.tableData = res.data
      this.page.total = res.rows ? Number(res.rows) : 0
      this.loading = false
    },
    paginationChange(params) {
      this.page = {
        ...this.page,
        ...params
      }
      this.getList()
    }
  }
}
</script>

<style lang='scss'>
</style>
