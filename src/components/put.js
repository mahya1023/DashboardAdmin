export async function update() {  
    try{
    const response = await fetch('http://localhost:3000/api/users/:id',{
        method:"PUT",
    }) ; 
   const res = await response.json();  
   console.log(res);

    } catch(err) { 
        console.error(err);
  
}
    
}