// 'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
  	let res = await this.app.mysql.query("select * from daily_nba_data");
    this.ctx.body = res;
  }
}

module.exports = HomeController;
