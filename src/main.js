import './style.css'
import Chart from "chart.js/auto"
window.addEventListener ("load", ()=>{
let box = [{
    Name:"کاربران" , 
    value:245682 ,  
    icon:"./src/assets/user.svg" , 
    chang: 24,
},{
    Name:"درآمد" , 
    value:12343050 ,  
    icon:"./src/assets/doller.svg" , 
    chang: 24,
}, 
 {
    Name:"فروش" , 
    value:1543 ,  
    icon:"./src/assets/basket.svg" , 
    chang: 24,
},
]; 
const asid =document.getElementById("asid");
const main =document.querySelector(".group") ; 
const asidediv = document.createElement("div") ;
const navdiv = document.createElement("div") ;
const navb= document.querySelector(".navbar") ; 

asidediv.innerHTML =`<div class="h-20 flex flex-row item-center border-b w-full border-white/20 justify-center gap-2 pt-3">
          <img src="./src/assets/logo.svg"  class="w-8 h-8 hover:scale-[1.1] transition-all duration-300" alt="logo">
          <h1 class=" hidden lg:block text-3xl translate-y-1">عدالتنامه</h1>
        </div>
        <nav>
          <ul class="space-y-3 ">
           <li class="flex flex-row hover:bg-[#7C3AED] transition-all duration-300">
               <a href="/" class="flex item-center gap-2 p-3">
                <img src="./src/assets/dashboard.svg" alt="dashboard" class="w-6 h-6 shrink-0"> 
                <span class=" hidden lg:block">داشبورد</span>
               </a>
            </li>
            
              <li class="flex flex-row hover:bg-[#7C3AED] transition-all duration-300">
                <a href="./user.html" class="flex item-center gap-2 p-3">
                <img src="./src/assets/user.svg" alt="user" class="w-6 h-6 shrink-0"> 
                <span class=" hidden lg:block">مدیریت کاربران</span>
               </a>
            </li>
              <li class="flex flex-row hover:bg-[#7C3AED] transition-all duration-300">
               <a href="./order.html" class="flex item-center gap-2 p-3">
                <img src="./src/assets/order.svg" alt="order" class="w-6 h-6 shrink-0"> 
                <span class=" hidden lg:block">سفارشات</span>
               </a>
            </li>
              <li class="flex flex-row hover:bg-[#7C3AED] transition-all duration-300 ">
                <a href="./article.html" class="flex item-center gap-2 p-3">
                <img  src="./src/assets/article.svg" alt="article" class="w-6 h-6 shrink-0"> 
                <span class=" hidden lg:block">مقالات</span>
               </a>
            </li>
              <li class="flex flex-row  hover:bg-[#7C3AED] transition-all duration-300"> 
                <a href="./setting.html" class="flex item-center gap-2 p-3">
                <img src="./src/assets/setting.svg" alt="setting" class="w-6 h-6 shrink-0"> 
                <span class=" hidden lg:block">تنظیمات</span>
               </a>
            </li>
          </ul>
        </nav>`; 
navb.innerHTML = `<div class="profile flex item-center justify-center gap-3">
           <img src="./src/img.jpg" alt="profile" class="w-12 h-12 rounded-full object-cover hover:scale-[1.1] transition-all duration-300 " /> 
          <div>
          <h3 class=" text-sm font-semibold self-start"> نام و نام خانوادگی </h3>
          <p class="text-sm self-end flex-row flex text-white/40">سمت ادمین <img src="./src/assets/down.svg" alt="down" class="w-4"></p>
          </div>
          <div class="notification self-center ">
          <img src="./src/assets/notifection.svg" alt="notifection" class="h-5 text-xl  ">
        </div>
        </div>  
        <div flex items-center gap-2 justify-center flex-row> 
          <input class="inputSearch w-32 sm:w-48 lg:w-64 px-4 py-2 rounded-lg border-1 border-white/20 outline-none bg-[#0B1120]hover:scale-[1.1] transition-all duration-300  "  type="search" placeholder="جستجو کن ....">
        `; 
        console.log(navb) ;
asid?.appendChild(asidediv);
box.forEach( (stat) =>{
const div = document.createElement("div") ; 
  const value = stat.value.toLocaleString('fa-IR').replace(/٬/g, ".");
div.classList.add(
    'glass-card', 
    'bg-[#131A2B]',
    'rounded-2xl' ,
    'flex', 
    'shadow-[0_15px_35px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.05)]',
    'border-white/40'

    
);
div.innerHTML = 
`<div class=" p-5 "> 
<div class="flex flex-row gap-6 rounded-xl shadow-lg   ">
<span class="w-12 h-12 bg-[#3B82F6] flex justify-center rounded-sm" >
  <img src="${stat.icon}" >
  </span>
  <div class="flex flex-col">
  <h3 class=" text-lg font-bold ">${stat.Name}</h3> 
 <strong>${value}</strong> 
 </div>
  </div>
  <div class="flex flex-row gap-25 h-16" >
 
  <span class="text-green-500">${stat.chang}%</span>
   <img src="./src/assets/statistics.svg" class="h-20 w-60 " >
  </div>
</div>`

main.appendChild(div);  
})
 
}) 

// chart 
const sale = [
    {month: "فروردین" , value : 20} ,
    {month: "اریبهشت" , value : 120} ,
    {month: "خرداد" , value : 40} ,
    {month: "تیر" , value : 60} ,
    {month: "مرداد" , value : 80} ,
    {month: "شهریور" , value : 90} ,
    {month: "مهر" , value : 100} ,
    {month: "آبان" , value : 20} ,
    {month: "آذر" , value : 40} ,
    {month: "دی" , value : 70} ,
    {month: "بهمن" , value : 70} ,
    {month: "اسفند" , value : 50} ,

] ;

const income = [
    {month: "فروردین" , value : 12000000} ,
    {month: "اریبهشت" , value : 290000000} ,
    {month: "خرداد" , value : 447000000} ,
    {month: "تیر" , value : 600000000} ,
    {month: "مرداد" , value : 800000000} ,
    {month: "شهریور" , value : 900000000} ,
    {month: "مهر" , value : 10000000000} ,
    {month: "آبان" , value : 200000000} ,
    {month: "آذر" , value : 400000000} ,
    {month: "دی" , value : 70000000000} ,
    {month: "بهمن" , value : 700000000} ,
    {month: "اسفند" , value : 50000000000} ,

];

const saleChart= document.getElementById('saleChart'); 
new Chart(saleChart , {
    type:"line" , 
    data :{
        labels:sale.map(item=> item.month), 
        datasets:[
           {labels:"فروش ماهیانه", 
            data: sale.map(item => item.value),
            data: sale.map(item => item.value), 
            borderColor:"#8B5Cf6", 
            backgroundColor:"#8B5CF6",
            borderWidth:2,
            pointRadius:4,
            pointHoverRadius:6,
            tension:0.4 
           }

        ]
    },
     options: {
        responsive:true,
        plugins:{
            legend:{
                display:false
            }
        },
        tooltip:{ 
            callback:{
                label:function(context){
                    return context.row.toLocaleString("fa-IR").replaceAll("",",")+"تومان";
                }
            }

        },
        scales:{
            y:{
                grid:{
                    color: " rgba(255,255,255,0.05)"
                }
            },
            x:{
                grid:{
                    display:false 
                }
            }
        }
    }
}); 

const incomeCart= document.getElementById('incomeCart'); 
new Chart(incomeCart , {
    type:"line" , 
    data :{
        labels:sale.map(item=> item.month), 
        datasets:[
           {labels:"درامد ماهیانه ", 
            data: sale.map(item => item.value), 
            borderColor:"#8B5Cf6", 
            backgroundColor:"#8B5CF6",
            borderWidth:2,
            pointRadius:4,
            pointHoverRadius:6,
            tension:0.4 
           }

        ]
    } ,
    options: {
        responsive:true,

        plugins:{
            legend:{
                display:false
            }
        },
        tooltip:{ 
            callback:{
                label:function(context){
                    return context.row.toLocaleString("fa-IR").replaceAll("",",")+"تومان";
                }
            }

        },
        scales:{
            y:{
                grid:{
                    color: " rgba(255,255,255,0.05)"
                }
            },
            x:{
                grid:{
                    display:false 
                }
            }
        }
    }

}); 
