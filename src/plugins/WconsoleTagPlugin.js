const { RawSource } = require('webpack').sources;

const nodeModulesRegx = /\/node_modules\//;
const isMConsoleVueFileRegx = /\src\/components\/mConsole.vue/;
const isMConsoleJsFileRegx = /\/src\/utils\/index.js/;
const isAppVueFileRegx = /\/src\/App.vue/;
const isVueFileRegx = /.vue/;
const isVueFileTemplatePartRegx = /vue&type=template/;
const isVueFileScriptPartRegx = /vue&type=script/;

function checkIsNodeModuleFile(src) {
  return nodeModulesRegx.test(src);
}
function checkIsMConsoleVueFile(src) {
  return isMConsoleVueFileRegx.test(src);
}
function checkIsAppVueFile(src) {
  return isAppVueFileRegx.test(src);
}
function checkIsMConsoleJsFile(src) {
  return isMConsoleJsFileRegx.test(src);
}
function checkIsVueFile(str) {
  return isVueFileRegx.test(str);
}
function checkIsVueTemplatePart(str) {
  return isVueFileTemplatePartRegx.test(str);
}

class WconsoleTagPlugin {
  apply(compiler) {
    console.log('apply------------------------');
    compiler.hooks.afterPlugins.tap('WconsoleTagPlugin', compiler => {
      console.log('22222222222222222222222222');
      console.log('compiler', Object.keys(compiler));
      console.log('options', compiler.options.module.rules);
      const rules = compiler.options.module.rules;
      rules.forEach(rule => {
        console.log('rule', JSON.stringify(rule));
      });
      // callback()
    });
    // compiler.hooks.beforeCompile.tapAsync('WconsoleTagPlugin', (compilation, callback) => {
    //   // 遍历每个构建产物
    //   console.log('kyes', Object.keys(compilation))
    //   // compilation.modules.forEach(module => {
    //   //   console.log('module', module);
    //   // })
    //   // compilation.chunks.forEach(chunk => {
    //   //   // 遍历chunk的模块列表
    //   //   chunk.modulesIterable.forEach(module => {
    //   //     // console.log('module------------- \n', module.resource);
    //   //     // module.resource && console.log('isNodeModuleFile', checkIsNodeModuleFile(module.resource));

    //   //     // 判断模块是否为Vue文件
    //   //     if (module.resource
    //   //         && !checkIsNodeModuleFile(module.resource)
    //   //         && checkIsVueFile(module.resource)
    //   //         && !checkIsMConsoleVueFile(module.resource)) {
    //   //       // 获取原始的源码
    //   //       // const originalSource = module.originalSource().source();

    //   //       // console.log('originalSource', originalSource);
    //   //       let modifiedSource = ''
    //   //       if (checkIsAppVueFile(module.resource)) {
    //   //         // console.log('isApp', originalSource);
    //   //         console.log('module.resource: \n', module.resource);

    //   //         if (checkIsVueTemplatePart(module.resource)) {
    //   //           console.log('is template');
    //   //           console.log('module \n', module);
    //   //         } else {
    //   //           console.log('not template');
    //   //         }

    //   //       const originalSource = module._source._value;

    //   //         // modifiedSource = originalSource.replace(/(<template>[\s\S]*?<\/template>)/, match => {
    //   //         //   if (match.indexOf(htmlTag) === -1) {
    //   //         //     const endDIVIndex = match.lastIndexOf('</div>');
    //   //         //     const prev = match.slice(0, endDIVIndex);
    //   //         //     const next = match.slice(endDIVIndex);
    //   //         //     match = prev + htmlTag + next;
    //   //         //   }
    //   //         //   return match;
    //   //         // });
    //   //         console.log('modifiedSource', modifiedSource);
    //   //       }

    //   //       // 使用正则表达式替换template中的内容
    //   //       // const modifiedSource = originalSource.replace(
    //   //       //   /(<template>[\s\S]*?<\/template>)/,
    //   //       //   match => {
    //   //       //     return `${match}\n  <div>console</div>`;
    //   //       //   }
    //   //       // );

    //   //       // 使用`RawSource`替换模块的源码
    //   //       module._source = new RawSource(modifiedSource);
    //   //     }
    //   //   });
    //   // });

    //   callback();
    // });
  }
}

module.exports = WconsoleTagPlugin;
