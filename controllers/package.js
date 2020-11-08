const pool = require('../mySQl/connections')
const mysql = require('mysql')


let getPackage = (req,res)=>{
  let sql = "SELECT * FROM package"

  pool.query(sql,(err,rows)=>{
    return res.json(rows)
  })
}

let createPackage = (req,res)=>{
  let packageName = req.params.packageName
  let packageInfo = req.params.packageInfo
  
  let sql = ("INSERT INTO package VALUES(DEFAULT,?,?)")
  sql = mysql.format(sql,[packageName,packageInfo])
  pool.query(sql,(err,rows)=>{
    return res.json(rows)
  })
}


module.exports ={getPackage, createPackage}