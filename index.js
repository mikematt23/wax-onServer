const express = require('express')
const app = express()
const user = require('./routes/user')
const package = require('./routes/package')
const order = require("./routes/order")
const cors = require('cors')
const PORT = process.env.PORT || 5000

app.use(package)
app.use(user)
app.use(order)
app.use(cors({
   origin: 'http://localhost:3000'
}))

app.get('/',(req,res)=>{
  res.send("Welcome")
})

app.listen(PORT, ()=>{console.log(`Sever Started On Port: ${PORT}`)})