<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- <van-area title="标题" :area-list="areaList" /> -->
  </div>
</template>

<script>
  import { log } from '@/utils/index';
  import { tempFn } from '@/utils/temp';
  tempFn();
  console.log('mConsole');
  export default {
    name: 'HelloWorld',
    props: {
      msg: String,
    },
    data() {
      return {};
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
