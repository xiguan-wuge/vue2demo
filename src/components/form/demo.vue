<template>
  <div class="form-demo">
    <h3>具有数据校验功能的表单组件——Form</h3>
    <i-form :model="formData" :rules="formRules" ref="form">
      <i-form-item label="user" prop="name">
        <i-input type="text" v-model="formData.name" />
      </i-form-item>
      <i-form-item label="email" prop="email">
        <i-input type="text" v-model="formData.email" />
      </i-form-item>
    </i-form>
    <button @click="handleSubmit">提交</button>
    <button @click="handleReset">重置</button>
  </div>
</template>

<script>
  import iForm from './form.vue';
  import iFormItem from './formItem.vue';
  import iInput from './input.vue';

  export default {
    name: 'formDemo',
    components: {
      iForm,
      iFormItem,
      iInput,
    },
    data() {
      return {
        formData: {
          name: 'zhangsan',
          email: 'xxx@163.com',
        },
        formRules: {
          name: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
          mail: [
            { required: true, message: '邮箱不能为空', trigger: 'blur' },
            { type: 'email', message: '邮箱格式不正确', trigger: 'blur' },
          ],
        },
      };
    },
    methods: {
      handleSubmit() {
        this.$refs.form.validate(valid => {
          console.log('valid', valid);
          if (valid) {
            window.alert('提交成功');
          } else {
            window.alert('表单校验失败');
          }
        });
      },
      handleReset() {
        this.$refs.form.resetFields();
      },
    },
  };
</script>
<style>
  .form-demo {
    background-color: lightblue;
  }
</style>
