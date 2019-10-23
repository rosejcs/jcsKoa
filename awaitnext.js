const Koa = require('koa')
const app = new Koa()

app.use(async (ctx,next)=>{
  if(await checkUserPermission(ctx)) {
    await next()
  } else {
    ctx.response.status = 403
  }
})