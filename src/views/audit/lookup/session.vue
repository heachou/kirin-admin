<template>
  <el-row>
    <el-col span="10">
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="查找会话内容">
          <el-radio-group v-model="form.type">
            <el-radio label="telnet/ssh会话" name="type" />
            <el-radio label="rdp会话" name="type" />
            <el-radio label="vnc会话" name="type" />
            <el-radio label="Ftp会话" name="type" />
            <el-radio label="SFtp会话" name="type" />
            <el-radio label="应用会话" name="type" />
            <el-radio label="SQL查询" name="type" />
            <el-radio label="应用URL" name="type" />
            <el-radio label="SCP" name="type" />
          </el-radio-group>
        </el-form-item>
        <el-form-item label="排序方式">
          <el-select v-model="form.region" placeholder="请选择排序方式">
            <el-option label="升序" value="shanghai" />
            <el-option label="降序" value="beijing" />
          </el-select>
        </el-form-item>
        <el-form-item label="排序字段">
          <el-select v-model="form.txt" placeholder="请选择排序字段">
            <el-option label="默认" value="默认" />
            <el-option label="设备地址" value="设备地址" />
            <el-option label="会话类型" value="会话类型" />
            <el-option label="用户名" value="用户名" />
            <el-option label="会话开始时间" value="会话开始时间" />
            <el-option label="会话结束时间" value="会话结束时间" />
          </el-select>
        </el-form-item>
        <el-form-item label="运维用户">
          <el-select v-model="form.txt" placeholder="请选择运维用户">
            <el-option label="所有用户" value="所有用户" />
            <el-option label="123" value="123" />
            <el-option label="admin" value="admin" />
            <el-option label="audit" value="audit" />
            <el-option label="operator" value="operator" />
            <el-option label="password" value="password" />
          </el-select>
        </el-form-item>
        <el-form-item label="实名">
          <el-switch v-model="form.delivery" />
        </el-form-item>
        <el-form-item label="本地用户">
          <el-input v-model="form.desc" />
        </el-form-item>
        <el-form-item label="=设备地址">
          <el-select v-model="form.address" placeholder="请选择设备地址">
            <el-option label="112.126.75.34" value="112.126.75.34" />
            <el-option label="114.242.62.26" value="114.242.62.26" />
            <el-option label="49.4.159.168" value="49.4.159.168" />
          </el-select>
        </el-form-item>
        <el-form-item label="会话类型">
          <el-select v-model="form.address" placeholder="请选择会话类型">
            <el-option label="所有" value="所有" />
            <el-option label="ssh" value="ssh" />
            <el-option label="telnet" value="telnet" />
          </el-select>
        </el-form-item>
        <el-form-item label="起止时间">
          <el-col :span="11">
            <el-date-picker v-model="form.date1" type="date" placeholder="选择日期" />
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-time-picker v-model="form.date2" placeholder="选择时间" />
          </el-col>
        </el-form-item>
        <el-form-item label="运行过的命令">
          <el-input v-model="form.cmd" type="textarea" />
        </el-form-item>
        <el-form-item label="来源地址">
          <el-input v-model="form.resource" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'Session',
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    }
  }
}
</script>

<style>

</style>
