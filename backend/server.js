
import express from 'express' ;
 import cors from 'cors';
 import 'dotenv/config'
 import connection from './src/config/db.js';
import router from './src/route/user.route.js'; 

const app = express(); 

//middleware
app.use(cors()) ;
app.use(express.json()); 

//main Route 
app.get ('/' , (req , res )=>{
    res.send('سرور فعال است ');
})   
 app.use('/api/users', router);

 //404 handler 
 app.use((req,res)=>{
    res.status(404).json({
        seccess:false, 
        message:"مسیر مورد نظر پیدا نشد "
    })
 }) 
 // start server 
const port = process.env.PORT || 3000 ;
app. listen( port , ()=>{
    console.log(`server on ${port} port `);
})