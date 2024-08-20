<template>
  <div class="container mt-5">
    <div class="d-flex justify-content-between align-items-center">
      <h5 class="title_section">الطلاب</h5>
      <router-link to="/addStudent" class="btn btn_title_page"
        >+ اضافة طالب جديد</router-link
      >
    </div>
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
        <select
          name=""
          id=""
          class="selectpicker form-control"
          title="كل المجموعات"
        >
          <option value="">العهد الحديث</option>
          <option value="">العهد الحديث</option>
          <option value="">العهد الحديث</option>
        </select>
      </div>
      <div class="form-group">
        <select
          name=""
          id=""
          class="selectpicker form-control"
          title="كل الطلاب"
        >
          <option value="">ابتدائي</option>
          <option value="">اعدادي</option>
          <option value="">ثانوي</option>
        </select>
      </div>
    </div>
    <!-- End filters -->

    <div class="table-responsive">
      <table
        class="table"
        id="table"
      >
        <thead>
          <tr class="trAltCizgi">
            <th><input class="box" type="checkbox" /></th>
            <th class="th">رقم الطالب</th>
            <th class="th">اسم الطالب</th>
            <th class="th">رقم الهاتف</th>
            <th class="th">نوع الاعاقة</th>
            <th class="th">المجموعة</th>
            <th class="th">تاريخ الانضمام</th>
            <th class="th"></th>
          </tr>
        </thead>
        <tbody class="tbody">
          <!-- For loop this tr -->
          <tr 
            v-for="(student, index) in students"
            :key="index">
            <td class="th"><input class="box" type="checkbox" /></td>
            <td class="id">
              <!-- <input class="form-check-input" type="checkbox" value="" name="table">  -->
              1
            </td>
            <td>{{ student.name }}</td>
            <td>{{ student.phone }}</td>
            <td>{{ student.group }}</td>
            <td>{{ student.from }}</td>
            <td>{{ student.date }}</td>
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
                    <router-link to="/detailsStudent" class="dropdown-item"
                      >عرض التفاصيل</router-link
                    >
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#changeGroupModal"
                      >نقل الى مجموعة اخري</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item" href="edit-student.html"
                      >تعديل البيانات</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item" href="#" @click="blockAlert(index)"
                      >حذف</a
                    >
                  </li>
                </ul>
              </div>
            </td>
          </tr>
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
    <div class="cc">
      <button type="button" class="btn btn-danger">حذف المحدد</button>
      <button
        type="button"
        class="btn btn-success"
        data-bs-toggle="modal"
        data-bs-target="#move-student"
      >
        نقل المحدد الي مجموعه
      </button>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  name: "students-index",
  data() {
    return {
      students: [
        {
          name: "أحمد على",
          phone: "0102566544",
          group: "إعاقة سمعية",
          from: "العهد الحديث",
          date: "22 مايو, 2023",
        },
        {
          name: "أحمد على",
          phone: "0102566544",
          group: "إعاقة سمعية",
          from: "العهد الحديث",
          date: "22 مايو, 2023",
        },
        {
          name: "أحمد على",
          phone: "0102566544",
          group: "إعاقة سمعية",
          from: "العهد الحديث",
          date: "22 مايو, 2023",
        },
        {
          name: "أحمد على",
          phone: "0102566544",
          group: "إعاقة سمعية",
          from: "العهد الحديث",
          date: "22 مايو, 2023",
        },
        {
          name: "أحمد على",
          phone: "0102566544",
          group: "إعاقة سمعية",
          from: "العهد الحديث",
          date: "22 مايو, 2023",
        },
      ],
    };
  },
  methods: {
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
          if (this.students && this.students.length > index) {
            this.students.splice(index, 1);
            Swal.fire("تم الحذف!", "تم حذف الطالب بنجاح.", "success");
          } else {
            Swal.fire("خطأ!", "الطالب غير موجود.", "error");
          }
        }
      });
    },
  },
};
</script>

<style>
</style>