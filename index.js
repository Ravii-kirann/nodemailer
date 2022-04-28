const express =require('express')
const nodemailer = require('nodemailer')
const drafted = require("./modeles/draftSchema");
const req = require('express/lib/request')
const { append } = require('express/lib/response')
const {json,urlencoded} = require('express')
const mongoose = require('mongoose')
const app = express()
app.use(express.json())
app.use(urlencoded({extended:false}))
app.use(express.static('public'))
mongoose.connect('mongodb://localhost:27017/mailapp')
app.get('/',(rerq,res)=>{
    res.sendFile(__dirname+'/public/index.html')
    res.sendFile(__dirname+'/public/style.css')
    res.sendFile(__dirname+ '/public/js/app.js')
})
app.post('/',(req,res)=>{
  const transporter = nodemailer.createTransport({
      service:'gmail',
      auth: {
          user:'ravikiranjayanthi@gmail.com',
          pass:'12345qwerty'
      }
  })
  console.log(req.body)
   const mailOptions = {
       from : req.body.email,
       to:'ravikiranjaynthi@gmail.com',
       subject:`MESSAGE from ${req.body.email}:${req.body.subject}`,
       text:req.body.message
   }
   transporter.sendMail(mailOptions,(err,info)=>{
       if(err){
           console.log(err)
           res.send('err')
       }else{
           console.log('Email sent:'+info.respose)
           res.send('success')

       }
   })
})
app.post("/draft",async(req,res) => {
    try {
        const data = await drafted.create({
            name: req.body.name,
            email:req.body.subject,
            subject:req.body.subject,
            message:req.body.message
        
        })
    }
    catch(err) {
        res.send(err);
        return;
    }
})
app.post("/draftdelete",async(req,res) => {
    try {
        const data = await drafted.delete({
            name: req.body.name,
            email:req.body.subject,
            subject:req.body.subject,
            message:req.body.message
        
        })
    }
    catch(err) {
        res.send(err);
        return;
    }
})

app.listen(5000)