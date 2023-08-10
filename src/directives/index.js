import Vue from 'vue';

import focus from './focus';
import demo from './demo';

const directives = [focus, demo];
directives.forEach(directive => {
  Vue.directive(directive.name, directive.options);
});
