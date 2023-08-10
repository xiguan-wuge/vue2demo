// 自动聚焦
const directive = {
  name: 'focus',
  options: {
    inserted: function(el) {
      el.focus();
    },
  },
};

export default directive;
