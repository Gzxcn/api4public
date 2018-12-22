// 'use strict';
const axios = require("axios");
const { URL } = require('url');
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

    async kuaidi(){
        let url = "http://www.kuaidi100.com/query?";
        let get_data = this.ctx.query;
        let data = await axios.get(url + "type=" + get_data.type + "&postid=" + get_data.postid)
        let d = data.data 
        if (d.status == 200) {
            console.log(d.data)
            this.ctx.body = {
                code : 200,
                tip  : "成功",
                data : d.data
            }
        } else {
            this.ctx.body = {
                code : 400 ,
                tip  : d.message
            }
        }
    }

    async weather(){
        let url = "https://www.tianqiapi.com/api/?version=v1&";
        let get_data = this.ctx.query;
        let k = Object.keys(get_data);
        let query = [];
        k.forEach( async (i,v)=>{
            query.push(i + "=" + get_data[`${i}`])
        })
        if (query.length) {
            query = query.join('&');
            let r = await axios.get(url + query);
            this.ctx.body = {
                code : 200,
                tip  : "成功",
                data : r.data
            }
        } else {
            this.ctx.body = {
                code : 400 ,
                tip  : "参数错误"
            }
        }
    }

    
}


module.exports = IndexController;
