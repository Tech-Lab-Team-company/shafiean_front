<template>
    <div class="container mt-5">
            <div class="d-flex justify-content-between align-items-center">
              <h5 class="title_section">بنك الاسالة</h5>
              <router-link to="/addnewQuestion"  class="btn btn_title_page"
                >+ اضافة سؤال جديد</router-link >
            </div>
            <div class="table_details">
              <!-- Start filters -->
              <div class="filters">
                <div class="form-group">
                  <i class="fa-solid fa-magnifying-glass"></i>
                  <input
                    type="search"
                    name=""
                    id=""
                    class="form-control"
                    placeholder=".ابحث باسم السؤال , المجموعة , المدرس"
                  />
                </div>
                <div class="form-group">
                  <i class="fa-solid fa-calendar-days"></i>
                  <input
                    type="text"
                    class="form-control"
                    name="daterange"
                    value=""
                  />
                  
                </div>
                <div class="form-group">
                  <select
                    name=""
                    id=""
                    class="selectpicker form-control"
                    title="كل المدرسين"
                  >
                    <option value="">..</option>
                    <option value="">..</option>
                    <option value="">..</option>
                  </select>
                </div>
                <div class="form-group">
                  <select
                    name=""
                    id=""
                    class="selectpicker form-control"
                    title="كل المواد"
                  >
                    <option value="">..</option>
                    <option value="">..</option>
                    <option value="">..</option>
                  </select>
                </div>
              </div>
              <!-- End filters -->

              <div class="table-responsive">
                <table class="table" id="table">
                  <thead>
                    <tr class="trAltCizgi">
                      <th></th>
                      <th class="th">رقم السؤال</th>
                      <th class="th">اسم السؤال</th>
                      <th class="th">المادة</th>
                      <th class="th">المرحلة الدراسية</th>
                      <th class="th"></th>
                    </tr>
                  </thead>
                  <tbody class="tbody">
                    <!-- For loop this tr -->
                    <tr v-for="(question, index) in questionsBanks" :key="index">
                      <td class="th"><input class="box" type="checkbox" :value="question.id"  v-model="selectedQuestions" /></td>
                      <td class="id">
                        <!-- <input class="form-check-input" type="checkbox" value="" name="table">  -->
                        {{question.id}}
                      </td>
                      <td>
                        {{ question.name }}
                      </td>
                      <td> {{ question.subject }}</td>
                      <td> {{ question.level }} </td>
                      <td class="flex_mobile">
                        <div class="dropdown">
                          <a
                            class="btn dropdown-toggle"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i class="fa-solid fa-ellipsis-vertical"></i>
                          </a>

                          <ul class="dropdown-menu">
                            <li>
                              <router-link to="/questionbankedit" class="dropdown-item" 
                                >تعديل البيانات</router-link   >
                            </li>
                            <li>
                              <a
                                class="dropdown-item"
                                href="#"
                                @click="blockAlertt(index)"
                                >حذف
                              </a>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                
                  </tbody>
                </table>
            
              </div>
              <button @click="deleteSelected" type="button" class="btn btn-danger">حذف المحدد</button>

            </div>
          </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
    name : 'Questionbank-index',
    data(){
      return {
        selectedQuestions : [],
        questionsBanks : [
          {
            id : 1,
            name : 'اختبار على الجزء الأول من سورة البقرة ( 1- 25) بالتجويد',
            subject : 'القرآن الكريم',
            level : 'الفرقة الاولى',
           
          },
          {
            id : 2,
            name : 'اختبار على الجزء الأول من سورة البقرة ( 1- 25) بالتجويد',
            subject : 'القرآن الكريم',  
            level : 'الفرقة الاولى',
        
          },
          {
            id : 3,
            name : 'اختبار على الجزء الأول من سورة البقرة ( 1- 25) بالتجويد',
            subject : 'القرآن الكريم',
            level : 'الفرقة الاولى',
          },
          {
            id : 4,
            name : 'اختبار على الجزء الأول من سورة البقرة ( 1- 25) بالتجويد',
            subject : 'القرآن الكريم',
            level : 'الفرقة الاولى',
          },
          {
            id : 5,
            name : 'اختبار على الجزء الأول من سورة البقرة ( 1- 25) بالتجويد',
            subject : 'القرآن الكريم',
            level : 'الفرقة الاولى',
          }

        ]
        ,
      }
    },
    methods:{
      blockAlertt(index) {
      Swal.fire({
        html:
          '<h5 class="swal2-title">   هل أنت متأكد من حذف الطالب؟ </h5>' +
          '<p class="swal2-html-container"></p>',
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: "تأكيد الحذف",
        cancelButtonText: "الغاء",
      }).then((result) => {
        if (result.isConfirmed) {
          if (this.questionsBanks.length > index) {
            this.questionsBanks.splice(index, 1);
            Swal.fire("تم الحذف!", "تم حذف الطالب بنجاح.", "success");
          } else {
            Swal.fire("خطأ!", "الطالب غير موجود.", "error");
          }
        }
      });
    },
    deleteSelected() {
      if (this.selectedQuestions.length > 0) {
        this.questionsBanks = this.questionsBanks.filter(
          (question) => !this.selectedQuestions.includes(question.id)
        );
        Swal.fire("تم الحذف!", "تم حذف الطالب/الطلاب بنجاح.", "success");
      } else {
        Swal.fire("خطأ!", "لم يتم تحديد أي طالب.", "error");
      }
      this.selectedQuestions = [];
    },
    }

}
</script>

<style>

</style>