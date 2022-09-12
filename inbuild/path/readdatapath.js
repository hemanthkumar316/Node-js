const path=require('path')
const fs=require('fs')
/* console.log(`${__dirname}`)
console.log(path.join(`${__dirname}`,'user','user.json')) */
fs.readFile(path.join(`${__dirname}`,'User','userdata.json'),'utf-8',(err,data)=>{
 if(err) throw err
 console.log(data)
 fs.writeFile('write.txt',data,(err)=>{
  if(err) throw err
 })
})
console.log('path data write.txt file is succesfully')