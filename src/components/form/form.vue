<template>
  <div class="form">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'iForm',
    props: {
      model: {
        type: Object,
        default: () => {},
      },
      rules: {
        type: Object,
        default: () => {},
      },
    },
    provide() {
      return {
        form: this,
      };
    },
    data() {
      return {
        fields: [],
      };
    },
    created() {
      // form-item 实例收集与移除
      this.$on('on-form-item-add', field => {
        if (field) this.fields.push(field);
      });
      this.$on('on-form-item-remove', field => {
        if (field.prop) this.fields.splice(this.fields.indexOf(field), 1);
      });
    },
    methods: {
      // 公开方法：全部重置数据
      resetFields() {
        this.fields.forEach(field => {
          field.resetField();
        });
      },
      // 公开方法：全部校验数据，支持 Promise
      validate(callback) {
        return new Promise(resolve => {
          let valid = true;
          let count = 0;
          this.fields.forEach(field => {
            field.validate('', errors => {
              if (errors) {
                valid = false;
              }
              if (++count === this.fields.length) {
                // 全部完成
                resolve(valid);
                if (typeof callback === 'function') {
                  callback(valid);
                }
              }
            });
          });
        });
      },
    },
  };
</script>
