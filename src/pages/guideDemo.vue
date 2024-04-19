<template>
  <div>
    this guide demo

    <p class="p1">this is p1</p>

    <guide ref="guideRef" :steps="steps"></guide>
    <button @click="openGuide">开启新功能引导</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        steps: [
          {
            target: '.p1',
            content: 'this is step 1',
          },
        ],
      };
    },
    methods: {
      openGuide() {
        this.$refs.guideRef.start();
      },
    },
  };
</script>
