<template>
  <el-pagination
    background
    :current-page="pageNum"
    :page-size="pageSize"
    layout="prev, pager, next, sizes,jumper"
    :total="total"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  />
</template>

<script>
export default {
  props: {
    total: {
      required: true,
      type: Number
    },
    pageNum: {
      required: true,
      type: Number
    },
    pageSize: {
      required: false,
      type: Number,
      default: 20
    }
  },
  methods: {
    handleSizeChange(val) {
      this.$emit('paginationChange', {
        pageSize: val,
        pageNum: 1
      })
    },
    handleCurrentChange(val) {
      this.$emit('paginationChange', {
        pageSize: this.pageSize,
        pageNum: val
      })
    }
  }
}
</script>

<style>
</style>
