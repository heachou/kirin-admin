<template>
  <el-pagination
    background
    :current-page="page"
    :page-size="items_per_page"
    layout="total,prev, pager, next, sizes,jumper"
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
    page: {
      required: true,
      type: Number
    },
    // eslint-disable-next-line vue/prop-name-casing
    items_per_page: {
      required: false,
      type: Number,
      default: 20
    }
  },
  methods: {
    handleSizeChange(val) {
      this.$emit('paginationChange', {
        items_per_page: val,
        page: 1
      })
    },
    handleCurrentChange(val) {
      this.$emit('paginationChange', {
        items_per_page: this.items_per_page,
        page: val
      })
    }
  }
}
</script>

<style>
</style>
