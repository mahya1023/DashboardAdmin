

export const users = [
    {
        name:"علی محمدی " , 
        email:'ali@gamil.com', 
        phone:"09176217276",
        role:"کاربر", 
        statuse:"فعال",
    } , 
     {
        name:" سارا احمدی" , 
        email:'ali@gamil.com', 
        phone:"09176217276",
        role:"مدیر", 
        statuse:"فعال",
    } ,
     {
        name: "زهرا غفاری", 
        email:'ali@gamil.com', 
        phone:"09176217276",
        role:"مدیر", 
        statuse:"کاربر",
    } ,

] 
export async function getUsers() { 
    try{
     const response = await fetch('/api/users'); 
    const result = await response.json() ;
    if(!response.ok) {
        throw new Error (result.message || 'دریافت کاربران ناموفق است ')
    } 
    return result.data; 
}catch(error){  
console.error("FRONTEND_ERROR:" , error.message);
return [];

}
}
export let box = [{
    Name:"کاربران" , 
    value:245682 ,  
    icon:"../../../public/assent/icon/user.svg" , 
    chang: 24,
},{
    Name:"درآمد" , 
    value:12343050 ,  
    icon:"../../../public/assent/icon/doller.svg" , 
    chang: 24,
}, 
 {
    Name:"فروش" , 
    value:1543 ,  
    icon:"../../../public/assent/icon/basket.svg" , 
    chang: 24,
},
]; 