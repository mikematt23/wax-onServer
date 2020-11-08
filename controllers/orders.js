const pool = require('../mySQl/connections')
const mysql = require('mysql')


const uploadOrder = (req,res)=>{
  console.log(req.params)
   let userID = req.params.user_id
   let level = req.params.service_level
   let date = req.params.date
   let time = req.params.time
   let now = req.params.now

   let id = parseInt(userID)
   let levelNumber = parseInt(level)
   console.log(id,levelNumber)

   let sql = ("INSERT INTO orders VALUES (DEFAULT,?,?,?,?,?)")
   sql = mysql.format(sql,[id,levelNumber,date,time,now]) 

  pool.query(sql,(err,results)=>{
    return res.json(results)
  })
}


module.exports = {uploadOrder}