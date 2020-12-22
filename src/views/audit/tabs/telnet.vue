<template>
  <div>
    <search />
    <el-table
      :data="tableData"
      border
      style="width: 100%"
    >
      <el-table-column
        prop="date"
        label="日期"
        width="180"
      />
      <el-table-column
        prop="name"
        label="姓名"
        width="180"
      />
      <el-table-column
        prop="address"
        label="地址"
      />
    </el-table>
    <div class="pagination">
      <pagination
        :total="page.total"
        :page-num="page.pageNum"
        :page-size="page.pageSize"
        @paginationChange="paginationChange"
      />
    </div>
  </div>
</template>

<script>
import Pagination from '@/components/pagination'
import pageMixin from '@/mixins/page'
import Search from '../comp/search'

export default {
  components: {
    Pagination,
    Search
  },
  mixins: [pageMixin],
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  }
}
</script>

<style lang='scss'>
</style>
