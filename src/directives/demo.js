// 指令demo
export default {
  name: 'demo',
  options: {
    bind(el, binding, vnode) {
      const s = JSON.stringify;
      const { name, value, expression, arg, modifiers } = binding;
      el.innerHTML = `
name: ${s(name)};<br/>
arguments: ${s(arg)};<br/>
modifiers: ${s(modifiers)};<br/>
expression: ${s(expression)};<br/>

value: ${s(value)};<br/>
vnode keys: ${Object.keys(vnode).join(', ')}<br/>
      `;
    },
  },
};
