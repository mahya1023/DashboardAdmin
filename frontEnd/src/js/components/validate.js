import justValidate from 'just-validate'; 
import Swal from 'sweetalert2';

export function createUserValidator(){  
  
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
]).addRequiredGroup("#inputradio", "لطفا نقش کاربر رو انتخاب کنید").onFail((fields)=>{
    console.log('FAILED FIELD:' , fields);
})
.onSuccess(async (event)=>{ 
    console.log("Validation is sueccessful");
       event.preventDefault(); 
    const myform = document.querySelector("#addUserForm");
    const btnSubmit =document.querySelector(".btn_submit")  
    //get data form 
      
        const formData = new FormData(myform); 
        console.log("my Form:",formData);  
        const user = Object.fromEntries(formData.entries());
        btnSubmit.disabled = true ;  
        btnSubmit.textContent=" در حال ارسال....";
        console.log(" you near to fetch");
        try{ 
            const response = await fetch('/api/users',{
                method:'POST', 
                headers:{
                    'content-Type' : 'application/json'
                } ,
                body:JSON.stringify(user)
            }); 
               const text = await response.text();  
               console.log(text)  
               let data = {}
               if(text) {
                try{
                     data = JSON.parse(text); 
                     console.log(data)
                }catch(e) { 
                    console.error(text.slice(0,200));

                }
               }
               // const data = text ? JSON.parse(text) : {} ;  
                console.log("Status:" , response.status + "URL :" , response.url + "Header :" , [...response.headers.entries()]) ; 

                console.log("body :" , JSON.stringify(text));
            if(!response.ok){ 
                if(data.errors){
                    data.errors.forEach(error => { 
                        console.error(error.path , error.msg)
                    });
                }
              console.log ("422 body " , data.message );
                throw new Error(data.message || 'خطا در ارسال')
            }
            await Swal.fire({ icon:"success", title:" با موفقیت ارسال شد" , text:data.message || "ثبت شد"}) 
            myform.reset(); 
          validator.refresh();
        } catch(err) {  
            console.error("server response :", err.message);
            Swal.fire({
                title:"خطا",
                text: err.message || "مشکلی پیش امده ",
                icon:"error", 
                theme:"dark"
            })
        } finally {
            btnSubmit.disabled = false; 
             btnSubmit.textContent=" ثبت کاربر";
        } 
})  
 
return validator;

}