import Swal from "sweetalert2";
import { update } from "./put";
import { getUsers } from "./store";
export function edite() {
 const editeUserForm = document.querySelector("#edite");
 edite.addEventListener("click", async(event)=>{
    event.preventDefault(); 
    const id ;  
    const name = document.querySelector('#userName').value;
    const email = document.querySelector('#userEmail').value;
    const phone = document.querySelector('#userPhone').value; 
    const role = document.querySelector('[name="role"]').value; 
    try{
        update()
        await getUsers(); 
        Swal.fire("اطلاعات کاربر ویرایش شد" ," موفق شد" ,"success")
    }catch(err){   
        Swal.fire("",error.message, "error");

    }
  
    

 }) 
} 
