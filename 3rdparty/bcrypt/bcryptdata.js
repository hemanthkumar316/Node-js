const bcrypt =require('bcrypt')
let user={
 name:'hemanth',
 user_name:'hemanth@gmail.com',
 password:'123456789'
}
// reading the object data
/* console.log(user.user_name)
console.log(user.password) */

// converting user senstive data to hash format
let salt=bcrypt.genSaltSync(10)
let new_username=bcrypt.hashSync(user.user_name,salt)
//console.log(new_username)
 let new_password=bcrypt.hashSync(user.password,salt)
//console.log(new_password)

// comparing old values to new entered values
let flag=bcrypt.compareSync("hemanth@gmail.com",new_username)
console.log(flag)
let flag1=bcrypt.compareSync('123',new_password)
console.log(flag1)