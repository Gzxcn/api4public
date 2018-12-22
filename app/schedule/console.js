const Subscription = require('egg').Subscription;

class Console extends Subscription {
    // 通过 schedule 属性来设置定时任务的执行间隔等配置
    static get schedule() {
      return {
        interval: '12h', // 1 分钟间隔
        type: 'all', // 指定所有的 woker 都需要执行
      };
    }
  
    // subscribe 是真正定时任务执行时被运行的函数
    async subscribe() {
      console.log("this is a schedule");
    }
  }
  
  module.exports = Console;