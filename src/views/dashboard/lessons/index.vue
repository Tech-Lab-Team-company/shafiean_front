<template>
  <div class="container mt-5">
    <div class="d-flex justify-content-between align-items-center">
      <h5 class="title_section">الدروس</h5>
      <router-link to="/addlessons" class="btn btn_title_page"
        >+ اضافة درس جديد</router-link
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
            placeholder=".ابحث باسم السؤال , المجموعة , المدرس"
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
              <th class="th"><input class="box" type="checkbox" /></th>
              <th class="th">رقم الدرس</th>
              <th class="th">اسم الدرس</th>
              <th class="th">موعد الدرس</th>
              <th class="th">المجموعة</th>
              <th class="th"></th>
            </tr>
          </thead>
          <tbody class="tbody">
            <!-- For loop this tr -->
            <tr v-for="(lesson, index) in lessons" :key="index">
              <td class="th"><input class="box" type="checkbox" /></td>
              <td class="id">
                <!-- <input class="form-check-input" type="checkbox" value="" name="table">  -->
                {{lesson.id}}
              </td>
              <td>{{ lesson.name }} </td>
              <td>{{ lesson.data }}</td>
              <td>{{ lesson.group }}</td>
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
                      <router-link to="/detailslessons" class="dropdown-item" 
                        >تفاصيل الدرس</router-link
                      >
                    </li>
                    <li>
                      <router-link to="/editlessons" class="dropdown-item"
                        >تعديل الدرس</router-link
                      >
                    </li>
                    <li>
                      <router-link to="/addLessons"
                        class="dropdown-item"
                      
                        >تحضير الدرس</router-link
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" href="#" @click="blockAlert(index)"
                        >حذف الدرس
                      </a>
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
      </div>
      <button type="button" class="btn btn-danger">حذف المحدد</button>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';
export default {
  name: "lessons-index",

  data(){
    return{
      lessons:[
        {
          id:1,
          name:"درس على الجزء الأول من سورة البقرة ( 1- 25) بالتجويد",
          date:"مايو 22 , 2022 - 2:30 م",
          group:"مجموعة العهد الحديث",

        },
        {

          id:2,
          name:"درس على الجزء الأول من سورة البقرة ( 1- 25) بالتجويد",  
          date:"مايو 22 , 2022 - 2:30 م",
          group:"مجموعة العهد الحديث",
        },
        {

          id:3,
          name:"درس على الجزء الأول من سورة البقرة ( 1- 25) بالتجويد",
          date:"مايو 22 , 2022 - 2:30 م",
          group:"مجموعة العهد الحديث",

        },
        {

          id:4,
          name:"درس على الجزء الأول من سورة البقرة ( 1- 25) بالتجويد",
          date:"مايو 22 , 2022 - 2:30 م",
          group:"مجموعة العهد الحديث",
        }
      ]
    }
  },
  methods:{
    blockAlert(index) {
      Swal.fire({
        html:
          '<h5 class="swal2-title">   هل أنت متأكد من حذف الطالب؟ </h5>' +
          '<p class="swal2-html-container">  </p>',

        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: "تأكيد الحذف",
        confirmButtonAriaLabel: "Thumbs up, great!",
        cancelButtonText: "الغاء",
        cancelButtonAriaLabel: "Thumbs down",
      }).then((result) => {
        if (result.isConfirmed) {
          if (this.lessons && this.lessons.length > index) {
            this.lessons.splice(index, 1);
            Swal.fire("تم الحذف!", "تم حذف الطالب بنجاح.", "success");
          } else {
            Swal.fire("خطأ!", "الطالب غير موجود.", "error");
          }
        }
      });
    },
  }
};
</script>

<style>
</style>