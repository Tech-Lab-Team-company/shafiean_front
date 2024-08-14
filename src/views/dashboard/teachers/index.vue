<template>
  <div class="container mt-5">
    <div class="d-flex justify-content-between align-items-center">
      <h5 class="title_section">المعلمين</h5>
      <router-link to="/addTeachers" class="btn btn_title_page"
        >+ اضافة معلم جديد</router-link
      >
    </div>
    <div class="table_details">
      <!-- Start filters -->
      <div class="filters">
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
            <option value="">مدرس 1</option>
            <option value="">مدرس 2</option>
            <option value="">مدرس 3</option>
          </select>
        </div>
        <div class="form-group">
          <select
            name=""
            id=""
            class="selectpicker form-control"
            title="اختر مجموعه"
          >
            <option value="">مجموعه 1</option>
            <option value="">مجموعه 2</option>
            <option value="">مجموعه 3</option>
          </select>
        </div>
      </div>
      <!-- End filters -->

      <div class="table-responsive">
        <table class="table" id="table">
          <thead>
            <tr class="trAltCizgi">
              <th><input class="box" type="checkbox" /></th>
              <th class="th">رقم المعلم</th>
              <th class="th">اسم المعلم</th>
              <th class="th">التخصص</th>
              <th class="th">البريد الالكتروني</th>
              <th class="th">تاريخ الاضافة</th>
              <th class="th"></th>
            </tr>
          </thead>
          <tbody class="tbody">
            <!-- For loop this tr -->
            <tr>
              <td class="th"><input class="box" type="checkbox" /></td>
              <td class="id">
                <!-- <input class="form-check-input" type="checkbox" value="" name="table">  -->
                1
              </td>
              <td>أحمد خالد</td>
              <td>قرأن كريم</td>
              <td>ah@gmail.com</td>
              <td>مايو 22 , 2022 - 2:30 م</td>
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
                      <a class="dropdown-item" href="details_teacher.html"
                        >تفاصيل المعلم</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" href="edit-teacher.html"
                        >تعديل</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" href="#" @click="blockAlert()"
                        >حذف
                      </a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <!-- For loop this tr -->

            <!-- For loop this tr -->
            <tr>
              <td class="th"><input class="box" type="checkbox" /></td>
              <td class="id">1</td>
              <td>أحمد خالد</td>
              <td>قرأن كريم</td>
              <td>ah@gmail.com</td>
              <td>مايو 22 , 2022 - 2:30 م</td>
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
                      <a class="dropdown-item" href="details_teacher.html"
                        >تفاصيل المعلم</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" href="edit-teacher.html"
                        >تعديل</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" href="#" @click="blockAlert()"
                        >حذف
                      </a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <!-- For loop this tr -->

            <!-- For loop this tr -->
            <tr>
              <td class="th"><input class="box" type="checkbox" /></td>
              <td class="id">1</td>
              <td>أحمد خالد</td>
              <td>قرأن كريم</td>
              <td>ah@gmail.com</td>
              <td>مايو 22 , 2022 - 2:30 م</td>
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
                      <a class="dropdown-item" href="details_teacher.html"
                        >تفاصيل المعلم</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" href="edit-teacher.html"
                        >تعديل</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" href="#" @click="blockAlert()"
                        >حذف
                      </a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <!-- For loop this tr -->

            <!-- For loop this tr -->
            <tr>
              <td class="th"><input class="box" type="checkbox" /></td>
              <td class="id">1</td>
              <td>أحمد خالد</td>
              <td>قرأن كريم</td>
              <td>ah@gmail.com</td>
              <td>مايو 22 , 2022 - 2:30 م</td>
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
                      <a class="dropdown-item" href="details_teacher.html"
                        >تفاصيل المعلم</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" href="edit-teacher.html"
                        >تعديل</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" href="#" @click="blockAlert()"
                        >حذف
                      </a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <!-- For loop this tr -->

            <!-- For loop this tr -->
            <tr>
              <td class="th"><input class="box" type="checkbox" /></td>
              <td class="id">1</td>
              <td>أحمد خالد</td>
              <td>قرأن كريم</td>
              <td>ah@gmail.com</td>
              <td>مايو 22 , 2022 - 2:30 م</td>
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
                      <a class="dropdown-item" href="details_teacher.html"
                        >تفاصيل المعلم</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" href="edit-teacher.html"
                        >تعديل</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" href="#" @click="blockAlert()"
                        >حذف
                      </a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <!-- For loop this tr -->
          </tbody>
        </table>
        <!-- sweetalrt -->

        <!-- sweetalrt -->
      </div>
      <button type="button" class="btn btn-danger">حذف المحدد</button>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  name: "teachers-index",
  methods: {
    blockAlert() {
      Swal.fire({
        html:
          '<h5 class="swal2-title">   هل أنت متأكد من حذف المعلم؟ </h5>' +
          '<p class="swal2-html-container">  </p>',

        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: "تأكيد الحذف",
        confirmButtonAriaLabel: "Thumbs up, great!",
        cancelButtonText: "الغاء",
        cancelButtonAriaLabel: "Thumbs down",
      });
    },
  },
};
</script>

<style>
</style>