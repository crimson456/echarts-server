module.exports=async (ctx,next) => {
  ctx.set('Content-Type','application/json; charset=utf-8')
  ctx.set('Access-Control-Allow-Origin','*')
  ctx.set('Access-Control-Allow-Methods','GET,POST,PUT,DELETE,OPTIONS')
  await next()
}