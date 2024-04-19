<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>test1</p>
    <!-- <checkbox-demo></checkbox-demo> -->
    <!-- <form-demo></form-demo> -->
    <!-- <div class="hhh">张三呢</div>
    <div @click="obj.c.d = 44444444444">点击修改： {{ obj.c.d }}</div>
    <input v-focus value="" placeholder="请输入昵称" />
    <hr>
    <input type="password" name="密码" v-focus>
    <p>vue指令参数介绍</p>
    <div v-demo:foo.a.b="message" class="text-left"></div> -->
    <el-select
      multiple
      collapse-tags
      v-model="selectedArray"
      @change="changeSelect"
      @remove-tag="removeTag"
      placeholder="请选择"
    >
      <el-option label="全选" value="全选" @click.native="selectAll"></el-option>
      <el-option
        v-for="(item, index) in options"
        :key="index"
        :label="item.name"
        :value="item.name"
      ></el-option>
    </el-select>
  </div>
</template>

<script>
  import { log } from '@/utils/index';
  import { tempFn } from '@/utils/temp';
  import formDemo from './form/demo';
  import checkboxDemo from './checkbox/demo.vue';
  import { Select, Option } from 'element-ui';
  import 'element-ui/lib/theme-chalk/index.css';

  tempFn();
  console.log('mConsole');
  export default {
    name: 'HelloWorld',
    components: {
      formDemo,
      checkboxDemo,
      ElSelect: Select,
      ElOption: Option,
    },
    props: {
      msg: String,
    },
    data() {
      return {
        obj: {
          a: 1,
          c: {
            d: 222,
          },
        },
        message: 'hello directive',
        selectedArray: [],
        options: [
          { name: '一一', label: 'one' },
          { name: '二二', label: 'tow' },
          { name: '三三', label: 'three' },
          { name: '四四', label: 'four' },
          { name: '五五', label: 'five' },
        ],
      };
    },
    watch: {
      obj: {
        handler(val, old) {
          console.log('val', val);
          console.log('old', old);
        },
        deep: true,
      },
    },
    mounted() {
      console.log('------------', log);
      log('helloWorld mounted');
    },
    methods: {
      selectAll() {
        console.log('selectAll');
        if (this.selectedArray.length < this.options.length) {
          this.selectedArray = [];
          this.options.map(item => {
            this.selectedArray.push(item.name);
          });
          this.selectedArray.unshift('全选');
        } else {
          this.selectedArray = [];
        }
        console.log('this.selectedArray', this.selectedArray);
      },
      changeSelect(val) {
        console.log('changeSelect', val);
        if (!val.includes('全选') && val.length === this.options.length) {
          this.selectedArray.unshift('全选');
        } else if (val.includes('全选') && val.length - 1 < this.options.length) {
          this.selectedArray = this.selectedArray.filter(item => {
            return item !== '全选';
          });
        }
      },
      removeTag(val) {
        if (val === '全选') {
          this.selectedArray = [];
        }
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
