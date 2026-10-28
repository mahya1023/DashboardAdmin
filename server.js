
import express from 'express' ;
 import cors from 'cors';
 import connection from './db.js';

const app = express(); 
app.use(cors()) ;
app.use(express.json()); 
app.get ('/' , (req , res )=>{
    res.send('سرور فعال است ');
})  
//get at database user 
app.get('/api/users', (req , res)=>{
    connection.query('SELECT * FROM user_table' , (error , result)=>{
        if(error){
            console.error("query failed :", error.message); 
            return res.status(500).json({
                message : 'دریافت اطلاعات کاربران ناموفق بود '
            });
        }  
        console.log(result);
        res.json(result);
    }) 
}) 

//post to database user 
app.post('/api/users', async (req,res)=>{
    console.log(req.body);
    const {name , phone , email , role} = req.body;  
    //validate 
    if(!name || name.length < 2 ) {
        return res.status(422).json({message: " نام کاربری نامعتبر است "})
    } 
    if(!/^09\d{9}$/.test(phone)){
        return res.status(422).json({messege: " شماره تلفن نامعتبر است "})
    } 
    if(!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
         return res.status(422).json({messege: " ایمیل نامعتبر است"})

    }  
    // insert in database
    try { 
        const [result] = await connection.promise().execute(
            'INSERT INTO user_table (name , phone  , email, role) VALUE (?,?,?,?)',[name , phone , email , role ]
        ); 
        const user = {
            id:result.insertId, 
            name , 
            email , 
            phone , 
            role ,
        } 
        res.status(201).json({
            success:true, 
            message:"ثبت شد", 
            data: user
        })

    } catch(err) { 
        console.error('DB Error:' , err); 
        if (err.code === 'ER_DUP_ENTRY'){
            return res.status(422).json({
                success: false , 
                message: " قبلا این ایمیل ثبت شده است "
            }) 

        } 
        res.status(500).json({
            success:false, 
            message:'خطا سرور'
        })

    }
})
app. listen(3000, ()=>{
    console.log("server on 3000 port ");
})