import connection from '../config/db.js' ; 

export const getAlluser =  async( req , res ) =>{  
    try{
    console.log(res)
    const [rows] = await connection.promise().query('SELECT * FROM user_table ' );
       res.status(200).json({ 
        success:true, 
        data : rows,

       });
    }catch(error){
         console.error(" messege :" , error.message );
            res.status(500).json({
                seccess:false,
                message:"دریافت اطلاعات به درستی انجام نشده است "
            }) 

    }
    
} 
export const creatUser= async(req,res)=>{  
    const {name , phone , email , role } = req.body;
    try{
    const [result] = await connection.promise().execute(
      'INSERT INTO user_table (name , phone  , email, role) VALUE (?,?,?,?)',[name , phone , email , role ]);
      res.status(201).json({ 
        seccess:true,
        message:"اطلاعات به درستی ذخیره گردید" , 
        data :{ 
            id:result.insertId, 
            name, 
            phone, 
            email, 
            role

        }
      })

    } catch(error){
         console.error(" messege :" , error.message ); 
         if(error.code ==='ER_DUP_ENTRY' ){
            res.status(409).json({
                seccess:false, 
                message:"ایمیل قبلا ثبت شده است "
            })
         }
            res.status(500).json({
                seccess:false,
                message:"اطلاعات به درستی در دیتابیس ذخیره نشده است "
            })
  }
} 

export const updateUser = async(req, res) =>{
    const {id} = req.params; 
     const {name , phone , email , role } = req.body;
     try{
     const [result] = await connection.promise().execute(
        "UPDATE user_table SET name=? , phon = ? , email= ? , role = ? WHERE id = ? ",
         [name , phone , email , role , id ]
     ) 
     if(result.affectedRows === 0) {
        return res.status(404).json({
            success:true,  
            message:"کاربر پیدا نشد"
        }) 
         
        res.status(200).json({
            success:true, 
            message:"کابر مورد نظر آپدیت شد "
        })
     } 
    }catch(err){
        console.error(" update message:", err.message); 
        if(err.code ==='ER_DUP_ENTRY' ){
            res.status(409).json({
                seccess:false, 
                message:"ایمیل قبلا ثبت شده است "
            })
         }
            res.status(500).json({
                seccess:false,
                message:"اطلاعات به درستی در دیتابیس ذخیره نشده است "
            })

    }
} 
export const DeletUser = async(req, res)=> {
    const {id} = req.params; 
     
     try{
     const [result] = await connection.promise().execute(
        "DELETE FROM user_table SET WHERE id = ? ",
         [id]
     ); 
     if(result.affectedRows === 0) {
        return res.status(404).json({
            success:true,  
            message:"کاربر پیدا نشد"
        }) 
         
        res.status(200).json({
            success:true, 
            message:"کابر مورد با موفقیت حذف شد "
        })
     } 
    }catch(err){
        console.error(" delete message:", err.message); 
        if(err.code ==='ER_DUP_ENTRY' ){
            res.status(409).json({
                seccess:false, 
                message:"ایمیل قبلا ثبت شده است "
            })
         }
            res.status(500).json({
                seccess:false,
                message:"اطلاعات به درستی در دیتابیس ذخیره نشده است "
            })

    }
} 