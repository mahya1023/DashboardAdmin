import '../../style/style.css';
import {searchBox} from'../components/searchBox' ;
import {searchMethod} from'../components/searchBox' ;
import { userTable } from '../components/userTable'; 
import {getUsers} from '../components/store';
import { box } from '../components/store'; 
import { Mainbox } from '../components/partOf/box';
//import { users } from '../components/store'; 
import {MyformUser} from "../components/FormUser.js";
import {createUserValidator} from '../components/validate.js';  

window.addEventListener ("load", async ()=>{ 
const main =document.querySelector(".box") ; 
const users = await getUsers();

Mainbox(main , box); 

const search = document.querySelector('.search-box'); 
const table = document.querySelector(".user-table");
 //form 
 const formUser =  document.querySelector("#formContainer") ; 
 formUser.innerHTML = await MyformUser(); 
 const validator=await createUserValidator();
 //table
table.innerHTML = userTable(users); 
//search box 
search.innerHTML = searchBox("کاربر را پیدا کن");
search.addEventListener("keydown",()=>{ searchMethod("#valuecode" ,users ,table)});

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
//validate add user front 
