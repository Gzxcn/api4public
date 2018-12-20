'use strict';
console.log('prod\n');
module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
	config.keys = appInfo.name + '_1541725738622_8992';
	config.api4public = "http://www.mxnzp.com/api"
  // add your config here
	config.middleware = [];

  // mysql login detail
	return config;
};



