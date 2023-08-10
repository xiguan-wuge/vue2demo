/**
 * 由一个组件，向上查找指定组件
 * @param {Object} context 组件实例
 * @param {String} componentName 目标组件名
 */
export function findComponentUpward(context, componentName) {
  let parent = context.$parent;
  let name = parent.$options.name;

  while (parent && (!name || [componentName].indexOf(name) < 0)) {
    parent = parent.$parent;
    if (parent) {
      name = parent.$options.name;
    }
  }

  return parent;
}

/**
 * 向上查找所有的指定组件
 * @param {*} context
 * @param {*} componentName
 */
export function findComponentsUpward(context, componentName) {
  const parents = [];
  const parent = context.$parent;

  if (parent) {
    if (parent.$options.name === componentName) parents.push(parent);
    return parents.concat(findComponentsUpload(parent, componentName));
  }

  return [];
}
// 由一个组件，向下找到最近的指定组件
export function findComponentDownward(context, componentName) {
  const childrens = context.$children;
  let children = null;

  if (childrens.length) {
    for (const child of childrens) {
      const name = child.$options.name;

      if (name === componentName) {
        children = child;
        break;
      } else {
        children = findComponentDownward(child, componentName);
        if (children) break;
      }
    }
  }
  return children;
}

// 由一个组件，向下找到所有指定的组件
export function findComponentsDownward(context, componentName) {
  return context.$children.reduce((components, child) => {
    if (child.$options.name === componentName) components.push(child);
    const foundChilds = findComponentsDownward(child, componentName);
    return components.concat(foundChilds);
  }, []);
}

// 由一个组件，找到指定组件的兄弟组件
export function findBrothersComponents(context, componentName, exceptMe = true) {
  const res = context.$parent.$children.filter(item => {
    return item.$options.name === componentName;
  });
  const index = res.findIndex(item => {
    return item._uid === context._uid;
  });
  if (exceptMe) res.splice(index, 1);
  return res;
}
