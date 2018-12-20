module.exports = (option,app) => {
	return async function printdate(ctx,next){
		console.log(option);
		console.log(new Date());
		await next();
	}
}