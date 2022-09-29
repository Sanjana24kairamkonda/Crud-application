const express=require('express')
const bodyParser=require('body-parser')

const mongoose=require('mongoose')
const cors=require('cors')
const app=express()

const url='mongodb://localhost/CricDBex'
mongoose.connect(url,{useNewUrlParser:true})

const con=mongoose.connection
con.on('open',()=>{  
console.log("connected")
})
app.use(express.json())

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))

const cricRouter=require('./routes/players')
app.use('/players',cricRouter)
app.listen(9005, () => {
    console.log("hey app is listening now ");
});