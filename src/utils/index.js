function log() {
  return console.log(...arguments);
}
/** 自定义mConsole */
const mConsole = {
  log: function() {
    console.log('mConsole---start');
    console.log(...arguments);
    console.log('mConsole---end');
  },
};

export { log, mConsole };
