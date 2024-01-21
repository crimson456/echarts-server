const Koa = require("koa");
const http=require('http')

const app = new Koa();

// logger
app.use(require('./middle_ware/logger'));
// x-response-time
app.use(require('./middle_ware/resTime'));
// set response header
app.use(require('./middle_ware/setHeader'));
app.use(require('./middle_ware/readJSON'))

const server = http.createServer(app.callback())

module.exports=server