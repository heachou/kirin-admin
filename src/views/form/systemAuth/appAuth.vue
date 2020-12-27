<template>
  <div class="appAuth">
    <div class="tips">
      说明：查找应用权限,留空表示无限制
    </div>
    <el-form label-width="auto" :model="form" size="small" :inline="true">
      <el-form-item label="运维用户">
        <el-select v-model="form.region" style="margin-right:20px">
          <el-option label="区域一" value="shanghai" />
          <el-option label="区域二" value="beijing" />
        </el-select>
        <el-checkbox>实名</el-checkbox>
      </el-form-item>
      <el-form-item label="应用发布ip">
        <el-select v-model="form.region">
          <el-option label="区域一" value="shanghai" />
          <el-option label="区域二" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="本地用户">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="listVisible = true"> 查 找 </el-button>
      </el-form-item>
    </el-form>

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
import { appAuthColumns } from './static-data'
export default {
  components: {
    Pagination,
    CustomTable
  },
  mixins: [pageMixin],
  data() {
    return {
      columns: appAuthColumns,
      form: {

      },
      tableData: [],
      loading: false,
      listVisible: false
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
.appAuth{
  border:1px solid #EBEEF5;
   padding:20px;
    .tips{
        font-size: 14px;
        text-align: center;
        background:rgba(#409EFF,0.6);
        color:#fff;
        height:40px;
        line-height: 40px;
    }
    .el-form{
        padding:20px 0 0 20px;
    }
}

</style>
