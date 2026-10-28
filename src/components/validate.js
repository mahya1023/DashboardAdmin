import justValidate from 'just-validate'; 
import Swal from 'sweetalert2';

const validator = new justValidate('#addUserForm',{
    errorLabelCssClass:'text-red-400 text-xs mt-1',
    focusInvalidField:true,
}); 
validator.addField("#userName",[
    {
        rule:"required",
        errorMessage:" نام کاربری خود را وارد کنید",
    },
    {
        rule:"minLength",
        value:2 ,
        errorMessage:"حداقل دو کارکتر را وارد کنید "
    },
]).addField("#userEmail",[
    {
        rule:"required", 
        errorMessage:"لطفا ایمیل را وارد کنید "
    },
   { 
       rule:"email" , 
       errorMessage:"ایمیل نامعتبر می باشد"
  }
]).addField("#userPhone",[
    {
        rule:"required",
        errorMessage:"لطفا شماره تلفن خود را وارد کنید "
    },
    {
        rule:"customRegexp", 
        value:/^09\d{9}$/, 
        errorMessage:"شماره تلفن معتبر نمی باشد"
    }
]).onSuccess(async (event)=>{
     
    const myform = document.querySelector("#addUserForm");
    const btnSubmit =document.querySelector(".btn_submit")  ;
    
    //get data form 
        console.log(" we are here");
        event.preventDefault(); 
        const formData = new FormData(myform); 
        console.log("my Form:",formData);  
        const user = Object.fromEntries(formData.entries());
        console.log(user); 
        btnSubmit.disabled = true ;  
        btnSubmit.textContent=" در حال ارسال....";
        try{ 
            const response = await fetch('http://localhost:3000/api/users',{
                method:'POST', 
                headers:{
                    'content-Type' : 'application/json'
                } ,
                body:JSON.stringify(user)
            }); 
               const text = await response.text();   
               let data = {}
               if(text) {
                try{
                     data = JSON.parse(text);
                }catch(e) { 
                    console.error(text.slice(0,200));

                }
               }
               // const data = text ? JSON.parse(text) : {} ;  
                console.log("Status:" , response.status + "URL :" , response.url + "Header :" , [...response.headers.entries()]) ; 

                console.log("body :" , JSON.stringify(text));
            if(!response.ok){
              
                throw new Error(data.message || 'خطا در ارسال')
            }
            await Swal.fire({ icon:"success", title:" با موفقیت ارسال شد" , text:data.message || "ثبت شد"}) 
            myform.reset(); 
            getUsers();

    validator.refresh();
        } catch(err) { 
            Swal.fire({
                title:"خطا",
                text: err.message || "مشکلی پیش امده ",
                icon:"error", 
                theme:"dark"
            })
        } finally {
            btnSubmit.disabled = false;
        }

    
  
}) 

export default validator;