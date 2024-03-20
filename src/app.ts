import express from 'express'
import AppDatasource from "./Connection/database";

AppDatasource.initialize().then(() =>{
  console.log("Connection to database established")
}).catch((err) => {
  console.log(err)
})

const app = express()

export default app