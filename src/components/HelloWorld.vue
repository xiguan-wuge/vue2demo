<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>test1</p>
    <checkbox-demo></checkbox-demo>
    <!-- <form-demo></form-demo> -->
    <!-- <div class="hhh">张三呢</div>
    <div @click="obj.c.d = 44444444444">点击修改： {{ obj.c.d }}</div>
    <input v-focus value="" placeholder="请输入昵称" />
    <hr>
    <input type="password" name="密码" v-focus>
    <p>vue指令参数介绍</p>
    <div v-demo:foo.a.b="message" class="text-left"></div> -->
  </div>
</template>

<script>
  import { log } from '@/utils/index';
  import { tempFn } from '@/utils/temp';
  import formDemo from './form/demo';
  import checkboxDemo from './checkbox/demo.vue';

  tempFn();
  console.log('mConsole');
  export default {
    name: 'HelloWorld',
    components: {
      formDemo,
      checkboxDemo,
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
