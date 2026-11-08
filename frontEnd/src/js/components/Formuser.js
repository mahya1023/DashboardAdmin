export async function MyformUser(){ 
    console.log("Form.j loaded");
    return ` <form action="/api/users" method="POST" id="addUserForm" class="space-y-4" novalidate> 
                <div>
                  <label for="userName" class="mb-1.5 block text-sm text-slate-400">نام کاربری</label>
                <input type="text" placeholder="" name="name" id="userName" class="w-full rounded-lg 
                border border-white/10 bg-[#111B2E] text-sm text-white px-3 py-2.5 outline-none transition focus:border-violet-500">
                                  <label for="phone" class="mb-1.5 block text-sm text-slate-400">شماره همراه</label>
                <input type="text" placeholder="0917621**9" id="userPhone" name="phone"class="w-full rounded-lg 
                border border-white/10 bg-[#111B2E] text-sm text-white px-3 py-2.5 outline-none transition focus:border-violet-500" >
                                  <label for="email" class="mb-1.5 block text-sm text-slate-400">ایمیل</label>
                <input type="email" placeholder="mm@gmail.com" id="userEmail" name="email"class="w-full rounded-lg 
                border border-white/10 bg-[#111B2E] text-sm text-white px-3 py-2.5 outline-none transition focus:border-violet-500" > 
                <div id="inputradio" class="inputradio my-4 flex items-center gap-4 ">
                 <label class=" flex items-center gap-2 text-sm text-slate-300" for="user">
                  <input type="radio"  name="role" value="user" class=" role accent-violet-500"  />
                  کاربر
                 </label>
                 <label for="admin" class=" flex items-center gap-2 text-sm text-slate-300">
                  <input type="radio"  name="role" value="Admin" class="role accent-violet-500" />
                  مدیر
                 </label>
                </div> 
                <button type="submit" class="btn_submit text-center rounded-lg bg-violet-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-violet-500">ثبت کاربر</button>
              </form> `
}