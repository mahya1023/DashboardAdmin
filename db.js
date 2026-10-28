import mysql from 'mysql2';

const connection= mysql.createConnection({
    host:'localhost', 
    user:'root', 
    password: "",
    database:'admin_dashboard',
}); 
connection.connect((error)=>{
    if(error) {
        console.error('connection failed', error.message) ; 
        retrun ; 
    } 
    console.log('connected to my sql!'); 

    
}) 
 
export default connection;