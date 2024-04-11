const express = require('express')
const app = express()
const morgan =require('morgan')
const mongoose=require('mongoose')

app.use(express.json())
app.use(morgan('dev'))

mongoose.set('strictQuery, false')
mongoose.connect("")


app.use((err, req, res, next) => {
  console.log(err)
  return res.send({errMsg: err.message})
})

app.listen(8018, () => {
  console.log('the server is running on port 8018')
});