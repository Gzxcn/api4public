'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
	const { router, controller } = app;
	const validate = app.middleware.validate;
	router.get("/api/aim_lottery", validate(["expect"]), controller.api.aim_lottery)
	router.get("/api/aim_lottery", controller.api.latest)
	/**
	 * type : 快递单号 ： 申通 shentong  等。 
	 * postid ： 快递号
	 */
	router.get("/api/kuaidi",validate(["type","postid"]),controller.api.kuaidi)

	router.get("/api/weather", validate(["?city", "?cityid"]), controller.api.weather)
}