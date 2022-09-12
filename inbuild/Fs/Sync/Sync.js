/* const fs=require('fs')
let data=fs.readFileSync('./abc.txt','utf-8')
console.log(data)
fs.writeFileSync('xyz.txt',data,'utf-8') */
const fs=require('fs')
let data=fs.readFileSync('./xyz.txt','utf-8')
console.log(data)
fs.writeFileSync('write.txt',data,'utf-8')