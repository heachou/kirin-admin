<template>
  <div class="changeForm">
    <el-form label-width="auto" :model="form" size="mini" label-position="top">
      <el-row :gutter="10">
        <el-col :span="3">
          <el-form-item label="管理员">
            <el-input v-model="form.name" />
          </el-form-item>
        </el-col>
        <el-col :span="3">
          <el-form-item label="运维用户">
            <el-input v-model="form.name" />
          </el-form-item>
        </el-col>
        <el-col :span="3">
          <el-form-item label="资源用户">
            <el-input v-model="form.name" />
          </el-form-item>
        </el-col>
        <el-col :span="3">
          <el-form-item label="操作">
            <el-select v-model="form.region" style="width:100%">
              <el-option label="区域一" value="shanghai" />
              <el-option label="区域二" value="beijing" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="3">
          <el-form-item label="资源">
            <el-input v-model="form.name" />
          </el-form-item>
        </el-col>
        <el-col :span="3">
          <el-form-item label="开始日期">
            <el-date-picker v-model="form.value1" type="date" placeholder="选择日期" value-format="yyyy-MM-dd" style="width:100%" />
          </el-form-item>
        </el-col>
        <el-col :span="3">
          <el-form-item label="结束日期">
            <el-date-picker v-model="form.value1" type="date" placeholder="选择日期" value-format="yyyy-MM-dd" style="width:100%" />
          </el-form-item>
        </el-col>
        <el-col :span="1">
          <el-form-item>
            <el-button type="primary" @click="listVisible = true" style="margin-top:38px"> 查 找 </el-button>
          </el-form-item>

        </el-col>

      </el-row>

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
import { changeFormColumns } from './static-data'
export default {
  components: {
    Pagination,
    CustomTable
  },
  mixins: [pageMixin],
  data() {
    return {
      columns: changeFormColumns,
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
.changeForm{
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

}

</style>
