// 'use strict';
module.exports = appInfo => {
	const config = exports = {};

	// use for cookie sign key, should change to your own and keep security
	config.keys = appInfo.name + '_1541725738622_8996';
	config.api4public = "http://www.mxnzp.com/api";
	// 取消安全token 校验
	config.security = {
		csrf: {
			enable: false,
		},
	};
	// 全局错误捕获
	config.onerror = {
		all(err, ctx) {
			ctx.body = {
				code : 500 ,
				tip  : "api错误",
				detail : err
			};
		},
		josn(err,ctx){
			ctx.body = {
				code : 500 ,
				tip  : "api错误",
				detail : err
			};
			ctx.status = 500;
		},
	};
	// config.middleware = ['printdate'];
	// config.printdate = {
	// 	"@Author" : "GongZx"
	// }

	return config;
};


