
export function userTable(users){
    return ` 
    <div class="w-full rounded-xl border min-w-0 border-white/10 overflow-x-auto"> 
     <table class="w-full min-w-[800px] text-right border-collapse border border-gray-400/30 text-b">
      <thead class="bg-[#1B2438] text-gray-300  "> 
        <tr class="class="brder-b rounded-lg border-1 border-white/20 hover:bg-white/5 transition-colors"> 
          <th class="px-5 py-4 font-medium "> 
            کاربر 
          </th> 
          <th class="px-5 py-4 font-medium"> 
            ایمیل
          </th> 
          <th class="px-5 py-4 font-medium" > 
            شماره تماس
          </th> 
          <th class="px-5 py-4 font-medium" > 
            وضعیت
          </th> 
          <th class="px-5 py-4 pr-12 font-medium"> 
            عملیات
          </th>
        </tr> 
      </thead> 
      <tbody id="datas"> 
        ${users.map(user => `
            <tr class="border-b border-white/20 "> 
                <td class="px-5 py-4">${user.name} </td>
                <td class="px-5 py-4">${user.email}</td>
                 <td class="px-5 py-4">${user.phone}</td>
                  <td class="px-5 py-4">${user.role}</td>
                   <td class="px-5 py-4 font-medium ">
                   
                   <button class=" edite-btn text-purple-400 p-2" data-id="0" id="edite" > ویرایش</button>
                   <button class="delete-btn text-red-400 p-2" id="delete">حذف</button> 
                   
                   </td>
            </tr>
            `).join("")}
      </tbody>
     </table>
    </div>
    `;
        } 
