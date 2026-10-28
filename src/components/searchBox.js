import { userTable } from "./userTable"; 
import { users } from "./store";
export function searchBox(placeholder) { 
    return `<search>
    <input id="valuecode" class="inputSearch w-full min-w-0 
     sm-flex-1 p-3 rounded-lg border-1 border-white/20 outline-none bg-[#0B1120]hover:scale-[1.1] transition-all duration-300  " 
     type="search" placeholder="${placeholder}"></search> `;
} 
export function searchMethod(inputid , Myarray , table) { 
    const valueInput = document.querySelector(inputid);
    console.log(valueInput);
    console.log(valueInput.value)
    const searchValue = valueInput.value.trim().toLowerCase();
    const result = Myarray?.filter(item =>
         item.name.includes(searchValue) || 
         item.role.includes(searchValue) || 
         item.email.includes(searchValue) || 
         item.phone.includes(searchValue)
    ); 
    if (result.length > 0) {  
    
     table.innerHTML = userTable(result); 
     console.log(table.innerHTML) ; 
     console.log(result);
     console.log(userTable(result));

    } else if(result.length == 0)  { 
        console.log("hi");
        table.innerHTML = userTable(users); 
    }
    
}