const http=require('http')
const dotenv =require('dotenv')
dotenv.config({path:'config/config.env'})
console.log(process.env.PORT)
let server=http.createServer((req,res)=>{
 res.writeHead(200,{'Content-type':'text/html'})
 res.end('<h1> Hii This is Hemanth</h1>')
})
server.listen(process.env.PORT,()=>{
 console.log(`Server is Runing On PORT No :${process.env.PORT}`)
})