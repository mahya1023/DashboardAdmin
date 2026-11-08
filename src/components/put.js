export async function update(userData) {   
    const response = await fetch(`http://localhost:3000/api/users/${id}`,{
        method:"PUT", 
        headers:{
            "Content-Type" : "application/json"
        } ,
        body:JSON.stringify(userData)
    }) ; 
   if(!response.ok){
    throw new Error ("ویرایش کاربر ناموفق بود")
   }
    
}