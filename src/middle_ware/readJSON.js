const fs=require('fs')
const path=require('path')

module.exports=async(ctx,next)=>{
    const url = ctx.req.url
    let filePath = path.join(__dirname,'../json_data'+url+'.json')
    try{
        let content = fs.readFileSync(filePath,'utf-8')
        ctx.body=content
    }catch(e){
        ctx.status=404
        ctx.body=e
    }
    await next()
}