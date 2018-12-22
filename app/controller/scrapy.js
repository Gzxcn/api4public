// 'use strict';
const axios = require("axios");
const cheerio = require('cheerio');
const Controller = require('egg').Controller;

class ScrapyController extends Controller {
    async hotnews() {
        let r = await axios.get("http://news.sina.com.cn/hotnews/");
        console.log(r);
        
    }   
}

module.exports = ScrapyController;