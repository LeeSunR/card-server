import process from 'process'
import dotenv from 'dotenv';
import path from 'path';

if (process.argv[2] === 'developer') dotenv.config({ path: path.join(process.cwd(), './config/.env') });
else if (process.argv[2] === 'production') dotenv.config({ path: path.join(process.cwd(), './config/.env') });
else process.exit;

import express from 'express'
import router from './router'
import bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

app.use('/',(req,_,next)=>{
    console.log(`HTTP ${req.method} ${req.path}`)
    next()    
})

app.use(router)

app.listen(process.env.PORT, ()=>{
    console.log(`server listening at ${process.env.PORT}`)
})