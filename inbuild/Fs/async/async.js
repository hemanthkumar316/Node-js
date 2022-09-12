/* const fs =require('fs')
fs.readFile('data.json','utf-8',(err,data)=>{
 console.log(data)
 fs.writeFile('a.text',data,(err)=>{
  if(err) throw err
 })
}) */
const fs=require('fs')
fs.readFile('data.json','utf-8',(err,data)=>{
 console.log(data)
 fs.writeFile('writedata.txt',data,(err)=>{
  if(err) throw err
 })
})