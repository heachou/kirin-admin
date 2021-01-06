<template>
  <el-table
    v-loading="loading"
    :data="data"
    border
    style="width: 100%"
    :header-cell-style="{background:'rgb(236, 245, 255)'}"
    v-bind="$props"
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
