const http=require('http')
let server=http.createServer((request,response)=>{
 response.writeHead(200,{'Content-type':'text/html'})
// response.end('hii everyone')
response.end('<h1>Hii Everyone how are you all</h1>')
})
server.listen(8080,(err)=>{
 if(err) throw err
 console.log('server is runing port! 8080')
}) 