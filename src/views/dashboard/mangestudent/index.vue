<template>
      <div class="container mt-5">
          <div class="d-flex justify-content-between align-items-center">
            <h5 class="title_section">ادارة طلابات التسجيل</h5>
        </div>
            </div>
            <div class="table_details">
                <!-- Start filters -->
                <div class="filters">
                    <div class="form-group">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <input type="search" name="" id="" class="form-control"
                            placeholder=".ابحث باسم السؤال , المجموعة , المدرس">
                    </div>
                    <div class="form-group">
                      <select name="" id="" class="selectpicker form-control" title="الكل">
                          <option value="">الكل</option>
                          <option value="">ذكور</option>
                          <option value="">اناث</option>
                      </select>
                  </div>
                    <div class="form-group">
                        <i class="fa-solid fa-calendar-days"></i>
                        <input type="text" class="form-control" name="daterange" value="" />
                    
                    </div>
                    <div class="form-group">
                      <select name="" id="" class="selectpicker form-control" title="كل المجموعات">
                          <option value="">العهد الحديث</option>
                          <option value="">العهد الحديث</option>
                          <option value="">العهد الحديث</option>
                      </select>
                  </div>
                    <div class="form-group">
                        <select name="" id="" class="selectpicker form-control" title="كل الطلاب">
                            <option value="">ابتدائي</option>
                            <option value="">اعدادي</option>
                            <option value="">ثانوي</option>
                        </select>
                    </div>
                </div>
                <!-- End filters -->
                
                <div class="table-responsive">
                    <table class="table" id="table">
                        <thead>
                            <tr class="trAltCizgi">
                              <th><input class="box" type="checkbox"></th>
                                <th class="th">رقم الطالب</th>
                                <th class="th">اسم الطالب</th>
                                <th class="th">رقم الهاتف</th>
                                <th class="th">نوع الاعاقة</th>
                                <th class="th">المجموعة</th>
                                <th class="th">تاريخ الانضمام</th>
                                <th class="th">نوع الانضمام</th>
                                <td>المرحله الدراسيه</td>
                                <th class="th"></th>
                            </tr>
                        </thead>
                        <tbody class="tbody">
                            <!-- For loop this tr -->
                            <tr>
                                <td class="th"><input class="box" type="checkbox"></td>                                <td class="id">
                                      <!-- <input class="form-check-input" type="checkbox" value="" name="table">  -->
                                      1
                                  </td>
                                  <td>أحمد على</td>
                                  <td>0102566544</td>
                                  <td>إعاقة سمعية</td>
                                  <td>العهد الحديث</td>
                                  <td>22 مايو, 2023</td>
                                  <td>تطبيق</td>
                                  <td>	المرحلة الاولى</td>
                                 
                                  <td class="flex_mobile">
                                      <div class="dropdown">
                                          <a class="btn dropdown-toggle" href="#" role="button"
                                              data-bs-toggle="dropdown" aria-expanded="false">
                                              <i class="fa-solid fa-ellipsis-vertical"></i>
                                          </a>
  
                                          <ul class="dropdown-menu">
                                              <li>
                                                  <a
                                                    class="dropdown-item"
                                                    href="#"
                                                   
                                                    >قبول</a
                                                  >
                                                </li> 
                                                <li>
                                                  <a
                                                    class="dropdown-item"
                                                    href="#"
                                                   
                                                    >رفض</a
                                                  >
                                                </li> 
                                              <li>
                                                <a
                                                  class="dropdown-item"
                                                  href="#"
                                                  data-bs-toggle="modal"
                                                  data-bs-target="#changeGroupModal"
                                                  >نقل الى مجموعة </a
                                                >
                                              </li>                                            
                                          </ul>
                                      </div>
                                  </td>
                              </tr>
                            <!-- For loop this tr -->

                            <!-- For loop this tr -->
                            <tr>
                                <td class="th"><input class="box" type="checkbox"></td>                                <td class="id">
                                      <!-- <input class="form-check-input" type="checkbox" value="" name="table">  -->
                                      1
                                  </td>
                                  <td>أحمد على</td>
                                  <td>0102566544</td>
                                  <td>إعاقة سمعية</td>
                                  <td>العهد الحديث</td>
                                  <td>22 مايو, 2023</td>
                                  <td>تطبيق</td>
                                  <td>	المرحلة الاولى</td>
                                 
                                  <td class="flex_mobile">
                                      <div class="dropdown">
                                          <a class="btn dropdown-toggle" href="#" role="button"
                                              data-bs-toggle="dropdown" aria-expanded="false">
                                              <i class="fa-solid fa-ellipsis-vertical"></i>
                                          </a>
  
                                          <ul class="dropdown-menu">
                                              <li>
                                                  <a
                                                    class="dropdown-item"
                                                    href="#"
                                                   
                                                    >قبول</a
                                                  >
                                                </li> 
                                                <li>
                                                  <a
                                                    class="dropdown-item"
                                                    href="#"
                                                   
                                                    >رفض</a
                                                  >
                                                </li> 
                                              <li>
                                                <a
                                                  class="dropdown-item"
                                                  href="#"
                                                  data-bs-toggle="modal"
                                                  data-bs-target="#changeGroupModal"
                                                  >نقل الى مجموعة </a
                                                >
                                              </li>                                            
                                          </ul>
                                      </div>
                                  </td>
                              </tr>
                            <!-- For loop this tr -->

                            <!-- For loop this tr -->
                            <tr>
                                <td class="th"><input class="box" type="checkbox"></td>                                <td class="id">
                                      <!-- <input class="form-check-input" type="checkbox" value="" name="table">  -->
                                      1
                                  </td>
                                  <td>أحمد على</td>
                                  <td>0102566544</td>
                                  <td>إعاقة سمعية</td>
                                  <td>العهد الحديث</td>
                                  <td>22 مايو, 2023</td>
                                  <td>تطبيق</td>
                                  <td>	المرحلة الاولى</td>
                                 
                                  <td class="flex_mobile">
                                      <div class="dropdown">
                                          <a class="btn dropdown-toggle" href="#" role="button"
                                              data-bs-toggle="dropdown" aria-expanded="false">
                                              <i class="fa-solid fa-ellipsis-vertical"></i>
                                          </a>
  
                                          <ul class="dropdown-menu">
                                              <li>
                                                  <a
                                                    class="dropdown-item"
                                                    href="#"
                                                   
                                                    >قبول</a
                                                  >
                                                </li> 
                                                <li>
                                                  <a
                                                    class="dropdown-item"
                                                    href="#"
                                                   
                                                    >رفض</a
                                                  >
                                                </li> 
                                              <li>
                                                <a
                                                  class="dropdown-item"
                                                  href="#"
                                                  data-bs-toggle="modal"
                                                  data-bs-target="#changeGroupModal"
                                                  >نقل الى مجموعة </a
                                                >
                                              </li>                                            
                                          </ul>
                                      </div>
                                  </td>
                              </tr>
                            <!-- For loop this tr -->

                            <!-- For loop this tr -->
                            <tr>
                                <td class="th"><input class="box" type="checkbox"></td>                                <td class="id">
                                      <!-- <input class="form-check-input" type="checkbox" value="" name="table">  -->
                                      1
                                  </td>
                                  <td>أحمد على</td>
                                  <td>0102566544</td>
                                  <td>إعاقة سمعية</td>
                                  <td>العهد الحديث</td>
                                  <td>22 مايو, 2023</td>
                                  <td>تطبيق</td>
                                  <td>	المرحلة الاولى</td>
                                 
                                  <td class="flex_mobile">
                                      <div class="dropdown">
                                          <a class="btn dropdown-toggle" href="#" role="button"
                                              data-bs-toggle="dropdown" aria-expanded="false">
                                              <i class="fa-solid fa-ellipsis-vertical"></i>
                                          </a>
  
                                          <ul class="dropdown-menu">
                                              <li>
                                                  <a
                                                    class="dropdown-item"
                                                    href="#"
                                                   
                                                    >قبول</a
                                                  >
                                                </li> 
                                                <li>
                                                  <a
                                                    class="dropdown-item"
                                                    href="#"
                                                   
                                                    >رفض</a
                                                  >
                                                </li> 
                                              <li>
                                                <a
                                                  class="dropdown-item"
                                                  href="#"
                                                  data-bs-toggle="modal"
                                                  data-bs-target="#changeGroupModal"
                                                  >نقل الى مجموعة </a
                                                >
                                              </li>                                            
                                          </ul>
                                      </div>
                                  </td>
                              </tr>
                            <!-- For loop this tr -->
                        </tbody>
                    </table>
                     <!-- Modal chnage student grroup -->
                     <div
                     class="modal fade"
                     id="changeGroupModal"
                     tabindex="-1"
                     aria-labelledby="changeGroupModalLabel"
                     aria-hidden="true"
                   >
                     <div class="modal-dialog modal-dialog-centered">
                       <div class="modal-content">
                         <form class="modal-body">
                           <h5 class="title_section">
                             اختر المجموعة التي تريد نقل الطالب اليها
                           </h5>
                           <div class="form-group">
                             <label for="">المجموعة</label>
                             <select
                               name=""
                               id=""
                               class="form-control selectpicker"
                               title="اختر المجموعة"
                             >
                               <option value="">مجموعة 1</option>
                               <option value="">مجموعة 2</option>
                             </select>
                           </div>
                           <button type="submit" class="btn PrimaryButton">
                             تأكيد النقل
                           </button>
                         </form>
                       </div>
                     </div>
                   </div>
                   <!-- Modal chnage student grroup -->
                            <!-- sweetalrt -->
   
       <!-- sweetalrt -->

            
                </div>
              


            </div>
</template>

<script>
export default {
  name : 'mangestudent-index',
    data(){
        return{

        }
    },
    methods : {



  
    }

}
</script>

<style>

</style>