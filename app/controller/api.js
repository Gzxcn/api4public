// 'use strict';
const axios = require("axios");

const Controller = require('egg').Controller;
class IndexController extends Controller {
  
    async aim_lottery() {
        let url = this.config.api4public + "/lottery/ssq/aim_lottery?expect=";
        let get_data = this.ctx.query;
        let data = await axios.get(url + get_data.expect);
        let res = data.data;
        if (res.code == 1) {
            this.ctx.body = {
                code : 200,
                data : res.data,
                tip : "成功"
            }
        } else {
            this.ctx.body = {
                code: 400,
                tip: "没有找到" + get_data.expect + "期" 
            }
        }
    }

    async latest() {

    }
}

module.exports = IndexController;
