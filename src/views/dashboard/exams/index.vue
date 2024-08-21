<template>
  <div class="container mt-5">
    <div class="d-flex justify-content-between align-items-center">
      <h5 class="title_section">الاختبارات</h5>
      <router-link to="/addExam" class="btn btn_title_page"
        >+ اضافة اختبار جديد</router-link
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
            placeholder="ابحث باسم الاختبار , المجموعة , المدرس"
          />
        </div>
        <div class="form-group">
          <i class="fa-solid fa-calendar-days"></i>
          <input type="text" class="form-control" name="daterange" value="" />
        </div>
        <div class="form-group">
          <select
            name=""
            id=""
            class="selectpicker form-control"
            title="كل المدرسين"
          >
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
              <th><input class="box" type="checkbox" /></th>
              <th class="th">رقم الاختبار</th>
              <th class="th">اسم الاختبار</th>
              <th class="th">حالة الامتحان</th>
              <th class="th">المجموعة</th>
              <th class="th">عدد الأسألة</th>
              <th class="th"></th>
            </tr>
          </thead>
          <tbody class="tbody">
            <!-- For loop this tr -->
            <tr v-for="exam in exams" :key="exam">
              <td class="th"><input class="box" type="checkbox" :value="exam.id" v-model="selectedExams" /></td>
              <td class="id">
                <!-- <input class="form-check-input" type="checkbox" value="" name="table">  -->
                {{ exam.id }}
              </td>
              <td>{{ exam.name }}</td>
              <td>
                <span class="exam_status done">{{ exam.status }}</span>
              </td>
              <td>{{ exam.group }}</td>
              <td>{{ exam.questions }}</td>
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
                      <router-link to="/examdetails" class="dropdown-item"
                        >تفاصيل الاختبار</router-link
                      >
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <!-- For loop this tr -->

            <!-- For loop this tr -->

            <!-- For loop this tr -->
          </tbody>
        </table>

        <button @click="deleteSelectedStudents" type="button" class="btn btn-danger">حذف المحدد</button>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';
export default {

  name: "exams-index",
  data(){
    return{
      selectedExams: [],

      exams : [
        {
          id: 1,
          name: "اختبار على الجزء الأول من سورة البقرة ( 1- 25) بالتجويد",
          status: "امتحان منتهي",
          group: "مجموعة العهد الحديث",
          questions: 20

        },
        {
          id: 2,
          name: "اختبار على الجزء الأول من سورة البقرة ( 1- 25) بالتجويد",
          status: "امتحان منتهي",
          group: "مجموعة العهد الحديث",
          questions: 20
        },
        {
          id: 3,
          name: "اختبار على الجزء الأول من سورة البقرة ( 1- 25) بالتجويد",
          status: "امتحان منتهي",
          group: "مجموعة العهد الحديث",
          questions: 20


        },
        {
          id: 4,
          name: "اختبار على الجزء الأول من سورة البقرة ( 1- 25) بالتجويد",
          status: "امتحان منتهي",
          group: "مجموعة العهد الحديث",
          questions: 20
        },
        {
          id: 5,
          name: "اختبار على الجزء الأول من سورة البقرة ( 1- 25) بالتجويد",
          status: "امتحان منتهي", 
          group: "مجموعة العهد الحديث",
          questions: 20
        }
      ]

    }
  },
  methods:{
    deleteSelectedStudents() {
      if (this.selectedExams.length > 0) {
        this.exams = this.exams.filter(
          (exam) => !this.selectedExams.includes(exam.id)
        );
        Swal.fire("تم الحذف!", "تم حذف الاختبار بنجاح.", "success");
      } else {
        Swal.fire("خطأ!", "لم يتم تحديد أي اختبار.", "error");
      }
      this.selectedExams = [];
  }

  }
};  
</script>

<style></style>
