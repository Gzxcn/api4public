'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
	const { router, controller } = app;
	const validate = app.middleware.validate;
	router.get("/api/aim_lottery", validate(["expect"]), controller.api.aim_lottery)
	router.get("/api/aim_lottery", controller.api.latest)

}