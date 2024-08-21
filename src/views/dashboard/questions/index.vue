<template>
    <div class="container mt-5">
            <div class="d-flex justify-content-between align-items-center">
              <h5 class="title_section">الأسألة التفاعلية</h5>
              <router-link to="/addQuestion"
                class="btn btn_title_page"
                >+ اضافة سؤال جديد</router-link
              >
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
                    placeholder="ابحث باسم السؤال......"
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
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                  </select>
                </div>
                <div class="form-group">
                  <select
                    name=""
                    id=""
                    class="selectpicker form-control"
                    title="كل المواد"
                  >
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                  </select>
                </div>
              </div>
              <!-- End filters -->

              <div class="table-responsive">
                <table class="table" id="table">
                  <thead>
                    <tr class="trAltCizgi">
                      <th><input class="box" type="checkbox" /></th>
                      <th class="th">رقم السؤال</th>
                      <th class="th">اسم السؤال</th>
                      <th class="th">المادة</th>
                      <th class="th">المرحلة الدراسية</th>
                      <th class="th"></th>
                    </tr>
                  </thead>
                  <tbody class="tbody">
                    <!-- For loop this tr -->
                    <tr v-for="(question , index) in questions" :key="index">
                      <td class="th"><input class="box" type="checkbox" :value="question.id" v-model="selectedQuestions" /></td>
                      <td class="id">{{ question.id }}</td>
                      <td>
                      {{ question.name }} 
                       </td>
                      <td>{{ question.subject }} </td>
                      <td> {{ question.level }}</td>
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
                              <a
                                class="dropdown-item"
                                
                                >تعديل البيانات</a
                              >
                            </li>
                            <li>
                              <a
                                class="dropdown-item"

                                
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
  name: "questions-index",
  data() {
    return {
      selectedQuestions: [],
      questions: [
        {
          id: 1,
          name: "اختبار على الجزء الأول من سورة البقرة ( 1- 25) بالتجويد",
          teacher: "القرآن الكريم",
          level: "الفرقة الاولى",
        },
        {
          id: 2,
          name: "اختبار على الجزء الأول من سورة البقرة ( 1- 25) بالتجويد",
          teacher: "القرآن الكريم",
          level: "الفرقة الاولى",
        },
        {
          id: 3,
          name: "اختبار على الجزء الأول من سورة البقرة ( 1- 25) بالتجويد",
          teacher: "القرآن الكريم",
          level: "الفرقة الاولى",
        },
        {
          id: 4,
          name: "اختبار على الجزء الأول من سورة البقرة ( 1- 25) بالتجويد",
          teacher: "القرآن الكريم",
          level: "الفرقة الاولى", 

        },
        {
          id: 5,
          name: "اختبار على الجزء الأول من سورة البقرة ( 1- 25) بالتجويد",
          teacher: "القرآن الكريم",
          level: "الفرقة الاولى",
        }
      ],
    };
  },
  methods: {
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
          if (this.questions.length > index) {
            this.questions.splice(index, 1);
            Swal.fire("تم الحذف!", "تم حذف الطالب بنجاح.", "success");
          } else {
            Swal.fire("خطأ!", "الطالب غير موجود.", "error");
          }
        }
      });
    },
    deleteSelected() {
      if (this.selectedQuestions.length > 0) {
        this.questions = this.questions.filter(
          (question) => !this.selectedQuestions.includes(question.id)
        );
        Swal.fire("تم الحذف!", "تم حذف الطالب/الطلاب بنجاح.", "success");
      } else {
        Swal.fire("خطأ!", "لم يتم تحديد أي طالب.", "error");
      }
      this.selectedQuestions = [];
    },
  },
};
</script>

<style>
</style>