<template>
  <div>
    <search-user />
    <result />
  </div>
</template>

<script>
import SearchUser from './search'
import Result from './result'

export default {
  name: 'UserManage',
  components: {
    SearchUser,
    Result
  }
}
</script>

<style>

</style>
