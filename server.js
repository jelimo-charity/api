import express from 'express'
import config from './src/db/config'

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req,res)=>{
    res.send("hello there")
})
app.listen(config.port, ()=>{
    console.log("the server is running");
})