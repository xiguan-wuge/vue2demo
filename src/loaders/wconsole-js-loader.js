const { getOptions } = require('loader-utils');

module.exports = function(source) {
  const options = getOptions(this);
  const scriptImport = 'import { mConsole as console } from "@/utils/index"';
  const targetFileTag = '/** 自定义mConsole */';

  // 获取当前文件的绝对路径
  const filePath = this.resourcePath;
  // console.log('filePath-js', filePath);

  // 过滤目标文件
  const hadImported = source.indexOf(scriptImport) === -1;
  const targetFile = source.indexOf(targetFileTag) === -1;
  if (filePath.indexOf('/src/utils.index.js') === -1 && hadImported && targetFile) {
    source = `${scriptImport  }\n${  source}`;
  }

  return source;
};
