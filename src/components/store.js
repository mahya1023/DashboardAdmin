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
    const response = await fetch('http://localhost:3000/api/users');
    if(!response.ok) {
        throw new Error ('دریافت کاربران ناموفق است ')
    } 
    return await response.json();
}