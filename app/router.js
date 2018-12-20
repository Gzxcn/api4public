'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  require("./router/api")(app);

  
  // const printdate = app.middleware.printdate({'@author':"GongZx"});
  // router.get('/', printdate ,controller.home.index);



  // login 
  // router.get("/login/login/:id",controller.login.login);
};
