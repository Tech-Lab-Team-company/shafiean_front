<template>
  <div class="container mt-5">
    <div class="d-flex justify-content-between align-items-center">
      <h5 class="title_section">المواد</h5>
      <router-link to="addSubject" class="btn btn_title_page"
        >+ اضافة مادة جديدة</router-link
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
            placeholder="ابحث باسم المادة , المدرس"
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
            title="كل الفرق"
          >
            <option value="">فرقة 1</option>
            <option value="">فرقة 2</option>
            <option value="">فرقة 3</option>
          </select>
        </div>
      </div>
      <!-- End filters -->

      <div class="table-responsive">
        <table class="table" id="table">
          <thead>
            <tr class="trAltCizgi" >
              <th><input class="box" type="checkbox" /></th>
              <th class="th">رقم </th>
              <th class="th">اسم المادة</th>
              <th class="th">المرحلة الدراسية</th>
              <th class="th">تاريخ الاضافة</th>
              <th class="th"></th>
            </tr>
          </thead>
          <tbody class="tbody">
            <!-- For loop this tr -->
            <tr v-for="(subject,index) in subjects" :key="index">
             
              <td class="th" ><input class="box" type="checkbox" /></td>
              <td class="id">{{subject.id}}</td>
              <td>{{ subject.name }} </td>
              <td> {{ subject.level }}</td>
              <td> {{ subject.date }} </td>
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
                      <router-link to="editSubject" class="dropdown-item"
                        >تعديل</router-link  >
                    </li>
                    <li>
                      <a class="dropdown-item" href="#" @click="blockAlertt(index)"
                        >حذف
                      </a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>

          </tbody>
        </table>

        <button type="button" class="btn btn-danger">حذف المحدد</button>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  name: "subjects-index",
  data(){
    return{
      subjects:[
        {
        id:1,
        name:"مادة الفقة",
        level:"الفرقة الاولى",
        date:"مايو 22 , 2022 - 2:30 م"
      },
      {
        id:2,
        name:"مادة الفقة",
        level:"الفرقة الاولى",
        date:"مايو 22 , 2022 - 2:30 م"
      },
      {
        id:3,
        name:"مادة الفقة",
        level:"الفرقة الاولى",
        date:"مايو 22 , 2022 - 2:30 م"
      },
      {
        id:4,
        name:"مادة الفقة",
        level:"الفرقة الاولى",
        date:"مايو 22 , 2022 - 2:30 م"
      },
      { 
        id:5,
        name:"مادة الفقة",
        level:"الفرقة الاولى",
        date:"مايو 22 , 2022 - 2:30 م"
      }
    ]
    }
  },
  methods:{
    blockAlertt(index) {
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
          if (this.subjects && this.subjects.length > index) {
            this.subjects.splice(index, 1);
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