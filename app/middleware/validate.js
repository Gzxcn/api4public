module.exports = (option, app) => {
    return async function validate(ctx, next) {
        let data;
        switch (ctx.request.method) {
            case "GET" : data = ctx.query;break;
            case "POST" : ;
            case "PUT" : ;
            case "DELETE": data = ctx.request.body; break;
            default : data = ctx.query; break;
        }
        let loss = [];
        if ( option instanceof Array) {
           await option.forEach( async (i, v) => {
                if (i[0] !== "?") {
                    let r = data.hasOwnProperty(i);
                    if (!r || r && !data[`${i}`] && data[`${i}`] != '0') {
                        loss.push(i);
                    }
                }
            })
        }
        if (!loss.length) {
            await next();
        } else {
            ctx.body = {
                code : 400,
                tip  : `缺少参数${loss.join(",")}`
            }
        }
    }
}
