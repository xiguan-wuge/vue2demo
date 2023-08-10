<template>
  <div class="m-console" @click="toggle">
    <div class="name">mconsole</div>
    <div class="mask" v-show="open"></div>
  </div>
</template>

<script>
  export default {
    name: 'mConsole',
    data() {
      return {
        open: false,
      };
    },
    methods: {
      toggle() {
        this.open = !this.open;
        console.log('open', this.open);
      },
    },
  };
</script>
<style scoped>
  .m-console {
  }
  .name {
    padding: 4px 8px;
    background-color: lightgreen;
    color: white;
    border-radius: 2px;
    font-size: 14px;
    line-height: 1.2;
    z-index: 2001;
    cursor: pointer;
    position: fixed;
    bottom: 40px;
    right: 20px;
    user-select: none;
  }
  .mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 2000;
  }
</style>
