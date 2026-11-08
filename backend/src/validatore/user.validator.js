import {body , validationResult } from 'express-validator' 

export const validateUser = [
    body('name').trim().notEmpty().withMessage("نام کاربری الزامی است ").isLength({min : 2 , max: 50}).withMessage('نام باید بین دو الی 50 کارکتر باشد'), 
    body('phone').trim().notEmpty().withMessage("شماره همراه خود را وارد کنید").matches(/^09\d{9}$/).withMessage(" شماره همراه شما نامعتبر می باشد "),
    body('email').trim().isEmail().withMessage("ایمیل شما نامعتبر می باشد").normalizeEmail(), 
    body('role').isIn(['user', 'admin']).withMessage(' یکی از گزیته ها را انتخاب کنید '), 
    (req, res , next)=>{
        const error = validationResult(req); 
        console.log(error);
        if(!error.isEmpty()) {
            return res.status(422).json({
                success: false ,  
                message:" اطلاعات درست وارد نشده" ,
                errors: error.array().map(err => ({
                    field: err.path, 
                    message:err.msg,
                }))
            });
        } 
        next();
        
    }
]