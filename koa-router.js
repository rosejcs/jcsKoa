const Koa = require('koa')
// 注意: require('koa-router')返回的函数
const router = require('koa-router')()
const bodyParser = require('koa-bodyparser')


const app = new Koa()
// koa-bodyparser必须在router之前被注册到app对象上
app.use(bodyParser())

// log request URL
app.use(async (ctx, next)=>{
  console.log(`Process ${ctx.request.method} ${ctx.request.url}...`)
  await next()
})

// add url-route
router.get('/hello/:name',async (ctx, next)=>{
  let name = ctx.params.name
  ctx.response.body = `<h1>Hello, ${name}</h1>`
})

router.get('/', async (ctx, next)=>{
  ctx.response.body="<h1>Index</h1>"
})
// add router middleware
app.use(router.routes())

app.listen(3000)
console.log(`app started at port 3000...`)