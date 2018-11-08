<template>
  <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
    <el-form-item label="名称">
      <el-input v-model="formLabelAlign.name"></el-input>
    </el-form-item>
    <el-form-item label="活动区域">
      <el-input v-model="formLabelAlign.region"></el-input>
    </el-form-item>
    <el-form-item label="活动形式">
      <el-input v-model="formLabelAlign.type"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" >提交</el-button>
    </el-form-item>
</el-form>
</template>

<script>
export default {
  data () {
    return {
      formLabelAlign: {
        name: '',
        region: '',
        type: ''
      }
    }
  },
  components: { // 组件

  },
  computed: { // 计算

  },
  methods: { // 方法事件

  },
  mounted () { // 加载完成

  },
  created () { // 创建

  }
}
</script>

<style lang='less'>

</style>
