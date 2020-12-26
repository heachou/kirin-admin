<template>
  <el-table
    v-loading="loading"
    :data="data"
    border
    :size="size"
    style="width: 100%"
  >
    <slot />
  </el-table>
</template>

<script>
export default {
  name: 'CustomTable',
  props: {
    data: {
      type: Array,
      required: true,
      default: () => []
    },
    columns: {
      type: Array,
      required: true,
      default: () => []
    },
    size: {
      type: String,
      required: false,
      default: () => 'medium'
    },
    loading: {
      type: Boolean,
      required: false,
      default: () => false
    }
  }
}
</script>

<style>

</style>
