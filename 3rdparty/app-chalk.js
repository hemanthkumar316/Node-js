const http=require('http')
const dotenv =require('dotenv')
const chalk =require('chalk')
dotenv.config({path :'./config/config.env'})
console.log(chalk.green(process.env.PORT))
let server=http.createServer((request,response)=>{
 response.writeHead(200,{'content-type':'text,html'})
 response.end('<h1> I Created the server</h1>')
})
server.listen(8080,(err)=>{
 if(err) throw err
 console.log(chalk.blue(`server is running on port no ${process.env.PORT}`))
})
console.log((chalk.yellow(' console is colured using chalk')))