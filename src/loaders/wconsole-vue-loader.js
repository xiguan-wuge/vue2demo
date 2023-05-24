const { getOptions } = require('loader-utils');

module.exports = function(source) {
  const options = getOptions(this);
  const htmlTag = '<m-console></m-console>';
  const scriptImport = 'import { mConsole as console } from "@/utils/index"';

  // 获取当前文件的绝对路径
  const filePath = this.resourcePath;
  // 判断是否为目标文件, 目标文件添加 html tag
  if (filePath.indexOf('/src/App.vue') > -1) {
    // 使用正则表达式替换template中的内容
    source = source.replace(/(<template>[\s\S]*?<\/template>)/, match => {
      if (match.indexOf(htmlTag) === -1) {
        const endDIVIndex = match.lastIndexOf('</div>');
        const prev = match.slice(0, endDIVIndex);
        const next = match.slice(endDIVIndex);
        match = prev + htmlTag + next;
      }
      return match;
    });
  }

  // 非目标文件，添加 import 引入
  // 为script 中添加 mConsole的引入
  source = source.replace(/(<script>[\s\S]*?export default)/, match => {
    if (match.indexOf(scriptImport) === -1) {
      const next = match.slice(8);
      match = `<script>\n${  scriptImport  }${next}`;
    }
    return match;
  });
  return source;
};
