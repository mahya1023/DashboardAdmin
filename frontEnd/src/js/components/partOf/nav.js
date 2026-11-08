
export function Topnavbar ()
    { return `<div class="profile flex item-center justify-center gap-3">
           <img src="../../public/assent/image/img.jpg" alt="profile" class="w-12 h-12 rounded-full object-cover hover:scale-[1.1] transition-all duration-300 " /> 
          <div>
          <h3 class=" text-sm font-semibold self-start"> نام و نام خانوادگی </h3>
          <p class="text-sm self-end flex-row flex text-white/40">سمت ادمین <img src="../../public/assent/icon/down.svg" alt="down" class="w-4"></p>
          </div>
          <div class="notification self-center ">
          <img src="../../public/assent/icon/notifection.svg" alt="notifection" class="h-5 text-xl  ">
         </div>
         </div>  
         <div flex items-center gap-2 justify-center flex-row> 
          <input class="inputSearch w-32 sm:w-48 lg:w-64 px-4 py-2 rounded-lg border-1 border-white/20 outline-none bg-[#0B1120]hover:scale-[1.1] transition-all duration-300  "  type="search" placeholder="جستجو کن ....">
        `
    } 
    export function aside() {
        return `<div class="h-20 flex flex-row item-center border-b w-full border-white/20 justify-center gap-2 pt-3">
                  <img src="../../public/assent/icon/logo.svg"  class="w-8 h-8 hover:scale-[1.1] transition-all duration-300" alt="logo">
                  <h1 class=" hidden lg:block text-3xl translate-y-1">عدالتنامه</h1>
                </div>
                <nav>
                  <ul class="space-y-3 ">
                   <li class="flex flex-row hover:bg-[#7C3AED] transition-all duration-300">
                       <a href="/" class="flex item-center gap-2 p-3">
                        <img src="../../public/assent/icon/dashboard.svg" alt="dashboard" class="w-6 h-6 shrink-0"> 
                        <span class=" hidden lg:block">داشبورد</span>
                       </a>
                    </li>
                    
                      <li class="flex flex-row hover:bg-[#7C3AED] transition-all duration-300">
                        <a href="../../../../user.html" class="flex item-center gap-2 p-3">
                        <img src="/../../public/assent/icon/user.svg" alt="user" class="w-6 h-6 shrink-0"> 
                        <span class=" hidden lg:block">مدیریت کاربران</span>
                       </a>
                    </li>
                      <li class="flex flex-row hover:bg-[#7C3AED] transition-all duration-300">
                       <a href="../order.html" class="flex item-center gap-2 p-3">
                        <img src="../../public/assent/icon/order.svg" alt="order" class="w-6 h-6 shrink-0"> 
                        <span class=" hidden lg:block">سفارشات</span>
                       </a>
                    </li>
                      <li class="flex flex-row hover:bg-[#7C3AED] transition-all duration-300 ">
                        <a href="../article.html" class="flex item-center gap-2 p-3">
                        <img  src="../../public/assent/icon/article.svg" alt="article" class="w-6 h-6 shrink-0"> 
                        <span class=" hidden lg:block">مقالات</span>
                       </a>
                    </li>
                      <li class="flex flex-row  hover:bg-[#7C3AED] transition-all duration-300"> 
                        <a href="../setting.html" class="flex item-center gap-2 p-3">
                        <img src="../../public/assent/icon/setting.svg" alt="setting" class="w-6 h-6 shrink-0"> 
                        <span class=" hidden lg:block">تنظیمات</span>
                       </a>
                    </li>
                  </ul>
                </nav>`
    }