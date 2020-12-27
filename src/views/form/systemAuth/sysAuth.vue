<template>
  <div class="sysAuth">
    <div class="tips">
      说明：查找系统权限,留空表示无限制
    </div>
    <el-form label-width="auto" :model="form" size="small" :inline="true">
      <el-form-item label="运维用户">
        <el-select v-model="form.region" style="margin-right:20px;">
          <el-option label="区域一" value="shanghai" />
          <el-option label="区域二" value="beijing" />
        </el-select>
        <el-checkbox>实名</el-checkbox>
      </el-form-item>
      <el-form-item label="系统用户">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="设备ip">
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
import { sysAuthColumns } from './static-data'
export default {
  components: {
    Pagination,
    CustomTable
  },
  mixins: [pageMixin],
  data() {
    return {
      columns: sysAuthColumns,
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
.sysAuth{
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
