<template>
  <div>
    <div class="tools">
      <div>
        <el-button
          size="small"
          type="primary"
          @click="toAdd"
        >添加新节点</el-button>
      </div>
    </div>
    <el-table
      :data="tableData"
      :columns="columns"
      size="small"
      :loading="loading"
    >
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
    </el-table>
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
import { getSFTBList } from '@/api/audit'

export default {
  components: {
    Pagination
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
    },
    toAdd() {
      this.$router.push('/resource/webUser/add')
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
