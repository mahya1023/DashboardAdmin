import './style.css';
import {searchBox} from'./components/searchBox' ;
import {searchMethod} from'./components/searchBox' ;
import { userTable } from './components/userTable'; 
import {getUsers} from './components/store';
import validator from './components/validate';
window.addEventListener ("load", async ()=>{
  const users = await getUsers();
let box = [{
    Name:"کاربران" , 
    value:245682 ,  
    icon:"./src/assets/users.svg" , 
},{
    Name:"کاربران فعال" , 
    value:12343050 ,  
    icon:"./src/assets/users.svg" , 

}, 
 {
    Name:"کاربران جدیده " , 
    value:1543 ,  
    icon:"./src/assets/users.svg" , 
   },
   {
    Name:"مسدود شده" , 
    value:1543 ,  
    icon:"./src/assets/users.svg" , 
   }, 
]; 
const main =document.querySelector(".box") ; 

box.forEach( (stat) =>{
const div = document.createElement("div") ; 
  const value = stat.value.toLocaleString('fa-IR').replace(/٬/g, ".");
div.classList.add(
    'glass-card', 
    'bg-[#131A2B]',
    'rounded-2xl' ,
    'flex', 
    'shadow-[0_15px_35px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.05)]',
    'border-white/40','w-full', 'sm:w-[calc(50%-8px)]', 'lg:flex-1', 'gap-4'

    
);
div.innerHTML = 
`<div class="p-6 flex justify-center"> 
<div class="flex flex-row gap-6 rounded-xl shadow-lg   ">
<span class="w-12 h-12 bg-[#c084fc] flex justify-center rounded-sm" >
  <img src="${stat.icon}">
  </span>
  <div class="flex flex-col">
  <h3 class=" text-lg font-bold ">${stat.Name}</h3> 
 <strong>${value}</strong> 
 </div>
  </div>
  <div class="flex flex-row gap-25 h-16" >
  </div>
</div>`

main.appendChild(div);   
const search = document.querySelector('.search-box');
const table = document.querySelector(".user-table");

table.innerHTML = userTable(users);
search.innerHTML = searchBox("کاربر را پیدا کن");
search.addEventListener("keydown",()=>{ searchMethod("#valuecode" ,users ,table)});

}) 
})  
//close form 
const closeBtn = document.querySelector("#closeUserModal");
const newForm = document.querySelector("#newUser");
const openForm = document.querySelector("#clickbtn");  

closeBtn.addEventListener("click" , ()=>{
newForm.classList.toggle('hidden');  
}); 
// open form 
openForm.addEventListener("click" , ()=>{
newForm.classList.toggle('hidden')  ;
}); 