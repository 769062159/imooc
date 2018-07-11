const express = require ('express')
const mongoose =require('mongoose')
//链接mongo并且使用imooc这个集合
const DB_URL = 'mongodb://127.0.0.1:27017/imooc'
mongoose.connect(DB_URL)
mongoose.connection.on('connected',function () {
    console.log('mongo connect success')
})
//类似于mysql的表 mongo里的表，字段的概念
const User =mongoose.model('user',new mongoose.Schema({
    user:{type:String,require:true},
    age:{type:Number,require:true}
}))
//新增数据
User.create({
    user:'asdf ',
    age:12
},function (err,doc) {
    if(!err){
        console.log(doc)
    }else{
        console.log(err)
    }
})
//删除字段
/*User.remove({age:24},function (err,doc) {
    console.log(doc)
})*/

//更新字段
User.update({'user':'asdf '},{'$set':{age:26}},function (err,doc) {
    console.log(doc)
})
const app=express()

app.get('/',function (req,res) {
    res.send('<h1>Hello world</h1>')
})
app.get('/data',function (req,res) {
    User.findOne({user:'asdf '},function (err,doc) {
        res.json(doc)
    })
})
app.listen(9093,function () {
    console.log('node app start at port 9093')
})