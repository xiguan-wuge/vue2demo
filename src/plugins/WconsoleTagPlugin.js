const { RawSource } = require('webpack').sources;

class WconsoleTagPlugin {
  apply(compiler) {
    compiler.hooks.emit.tapAsync('WconsoleTagPlugin', (compilation, callback) => {
      // 遍历每个构建产物
      compilation.chunks.forEach(chunk => {
        console.log('chunk');
        // 遍历chunk的模块列表
        chunk.modulesIterable.forEach(module => {
          console.log('module', module.type);
          // 判断模块是否为Vue文件
          if (module.resource && module.resource.endsWith('.vue')) {
            console.log('is vue', module.resource);
            // 获取原始的源码
            // const originalSource = module.originalSource().source();
            const originalSource = module._source._value;
            console.log('originalSource----------------------------------- \n', originalSource);
            console.log('------------------------- \n');
            // 使用正则表达式替换template中的内容
            const modifiedSource = originalSource.replace(
              /(<template>[\s\S]*?<\/template>)/,
              match => {
                return `${match}\n  <div>console</div>`;
              }
            );

            // 使用`RawSource`替换模块的源码
            module._source = new RawSource(modifiedSource);
          }
        });
      });

      callback();
    });
  }
}

module.exports = WconsoleTagPlugin;
