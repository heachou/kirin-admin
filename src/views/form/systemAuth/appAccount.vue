<template>
  <div class="appAccount">
    <CustomTable :data="tableData" :columns="columns" :loading="loading">
      <el-table-column v-for="column in columns" :key="column.label" :label="column.label" :prop="column.prop" v-bind="column" />
    </CustomTable>
    <div class="pagination">
      <pagination
        v-bind="page"
        @paginationChange="paginationChange"
      />
    </div>
  </div>
</template>

<script>
import CustomTable from '@/components/Table'
import Pagination from '@/components/Pagination'
import pageMixin from '@/mixins/page'
import { appAccountColumns } from './static-data'
export default {
  components: {
    Pagination,
    CustomTable
  },
  mixins: [pageMixin],
  data() {
    return {
      columns: appAccountColumns,
      tableData: [],
      loading: false
    }
  },
  methods: {
    getList() {

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
.appAccount{
   border:1px solid #EBEEF5;
    padding:20px;

}

</style>

