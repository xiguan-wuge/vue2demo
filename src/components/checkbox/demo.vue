<template>
  <div>
    <i-checkbox v-model="single">单独选项</i-checkbox>

    <p>checkbox-group</p>
    <i-checkbox-group v-model="multiple">
      <i-checkbox label="option1">选项 1</i-checkbox>
      <i-checkbox label="option2">选项 2</i-checkbox>
      <!-- <i-checkbox label="option3">选项 3</i-checkbox> -->
      <!-- <i-checkbox label="option4">选项 4</i-checkbox> -->
    </i-checkbox-group>
  </div>
</template>

<script>
  import iCheckbox from './checkbox.vue';
  import iCheckboxGroup from './checkbox-group.vue';
  export default {
    components: {
      iCheckbox,
      iCheckboxGroup,
    },
    data() {
      return {
        single: false,
        multiple: ['option1'],
      };
    },
  };
</script>
