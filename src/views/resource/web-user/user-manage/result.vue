<template>
  <div>
    <div class="tools">
      <div>
        <el-button
          size="small"
          type="success"
        >编辑选中</el-button>
        <el-button
          size="small"
          type="info"
        >批量编辑</el-button>
        <el-button
          size="small"
          type="info"
        >AD编辑</el-button>
        <el-button
          size="small"
          type="warning"
        >锁定</el-button>
        <el-button
          size="small"
          type="danger"
        >删除用户</el-button>
      </div>
      <div>
        <el-button
          size="small"
          type="primary"
        >添加用户</el-button>
        <el-button
          size="small"
          type="primary"
        >导出</el-button>
      </div>
    </div>
    <custom-table
      :data="tableData"
      :columns="columns"
      size="small"
      :loading="loading"
    >
      <el-table-column
        type="selection"
        width="55"
      />
      <el-table-column
        v-for="column in columns"
        :key="column.label"
        :label="column.label"
        :prop="column.prop"
        v-bind="column"
      />
      <el-table-column label="详细">
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
import { webUserColumns } from '../static-data'
import Pagination from '@/components/Pagination'
import pageMixin from '@/mixins/page'
import CustomTable from '@/components/Table'
import { getSFTBList } from '@/api/audit'

export default {
  components: {
    Pagination,
    CustomTable
  },
  mixins: [pageMixin],
  data() {
    return {
      tableData: [],
      columns: webUserColumns,
      loading: false
    }
  },
  methods: {
    async getList() {
      const params = {
        type: 'x11',
        ...this.page
      }
      this.loading = true
      const res = await getSFTBList(params)
      this.tableData = res.data || []
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

<style lang="scss" scoped>
.tools {
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
}
</style>
