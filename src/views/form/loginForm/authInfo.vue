<template>
  <div class="authInfo">
    <el-form label-width="auto" :model="form" size="small" :inline="true" label-position="left">
      <el-form-item label="资源组">
        <el-select v-model="form.region" style="margin-right:20px">
          <el-option label="区域一" value="shanghai" />
          <el-option label="区域二" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="登录协议">
        <el-select v-model="form.region" style="margin-right:20px">
          <el-option label="区域一" value="shanghai" />
          <el-option label="区域二" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="来源地址">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="主机地址">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="运维用户">
        <el-input v-model="form.name" />
      </el-form-item>
       <el-form-item label="系统用户">
        <el-input v-model="form.name" />
      </el-form-item>
       <el-form-item label="开始日期">
         <el-date-picker v-model="form.name" type="date" placeholder="选择日期" value-format="yyyy-MM-dd"> </el-date-picker>
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
import { authInfoColumns } from './static-data'
export default {
  components: {
    Pagination,
    CustomTable
  },
  mixins: [pageMixin],
  data() {
    return {
      columns: authInfoColumns,
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
.authInfo{
   border:1px solid #EBEEF5;
    padding:20px;

}

</style>
