import express from 'express'  ; 
import {creatUser , updateUser , DeletUser , getAlluser} from '../controllers/users.controller.js' ;
import {validateUser}from "../validatore/user.validator.js" ; 

const router = express.Router();  

router.get('/', getAlluser);
router.post ('/' , validateUser , creatUser); 
router.put('/:id', updateUser); 
router.delete("/:d" , DeletUser); 

export default router;
