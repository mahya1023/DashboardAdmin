import mysql from 'mysql2';
import 'dotenv/config'

const connection= mysql.createConnection({
    host: process.env.DB_HOST, 
    user: process.env.DB_USER, 
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
}); 
connection.connect((error)=>{
    if(error) {
        console.error('connection failed', error.message) ; 
        return ; 
    } 
    console.log('connected to my sql!'); 

    
}) 
 
export default connection;