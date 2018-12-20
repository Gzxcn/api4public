'use strict';


// had enabled by egg
// exports.static = true;


// 捕获全局错误 
exports.onerror = {
    enable: true,
    package: 'egg-onerror',
};

// 校验
exports.validate = {
  enable: true,
  package: 'egg-validate',
};