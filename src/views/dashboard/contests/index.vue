<template>
     <div class="container mt-5">
            <div class="d-flex justify-content-between align-items-center">
              <h5 class="title_section">المسابقات</h5>
              <router-link to="/addcontests" class="btn btn_title_page"
                >+ اضافة مسابقة جديدة</router-link
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
                  <input
                    type="text"
                    class="form-control"
                    name="daterange"
                    value=""
                  />
                  <!-- <script>
                    $(function () {
                      $('input[name="daterange"]').daterangepicker(
                        {
                          opens: "left",
                        },
                        function (start, end, label) {
                          console.log(
                            "A new date selection was made: " +
                              start.format("YYYY-MM-DD") +
                              " to " +
                              end.format("YYYY-MM-DD")
                          );
                        }
                      );
                    });
                  </script> -->
                </div>
                <div class="form-group">
                  <select
                    name=""
                    id=""
                    class="selectpicker form-control"
                    title="المرحلة الدراسية"
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
                      <th class="th">رقم المسابقة</th>
                      <th class="th">اسم المسابقة</th>
                      <th class="th">حالة المسابقة</th>
                      <th class="th">تاريخ البداية</th>
                      <th class="th">تاريخ الانتهاء</th>
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
                      <td>
                        مسابقة على الجزء الأول من سورة البقرة ( 1- 25) بالتجويد
                      </td>
                      <td><p class="end">انتهت</p></td>
                      <td>22 مايو ,2023</td>
                      <td>مايو ,22 2023</td>
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
                                href="Contest-details.html"
                                >تفاصيل المسابقة</a
                              >
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <!-- For loop this tr -->

                    <!-- For loop this tr -->
                    <tr>
                      <td class="th"><input class="box" type="checkbox" /></td>
                      <td class="id">
                        <!-- <input class="form-check-input" type="checkbox" value="" name="table">  -->
                        1
                      </td>
                      <td>
                        مسابقة على الجزء الأول من سورة البقرة ( 1- 25) بالتجويد
                      </td>
                      <td><p class="cont">قائمة</p></td>
                      <td>22 مايو ,2023</td>
                      <td>مايو ,22 2023</td>
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
                                href="Contest-details.html"
                                >تفاصيل المسابقة</a
                              >
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <!-- For loop this tr -->

                    <!-- For loop this tr -->
                    <tr>
                      <td class="th"><input class="box" type="checkbox" /></td>
                      <td class="id">
                        <!-- <input class="form-check-input" type="checkbox" value="" name="table">  -->
                        1
                      </td>
                      <td>
                        مسابقة على الجزء الأول من سورة البقرة ( 1- 25) بالتجويد
                      </td>
                      <td><p class="end">انتهت</p></td>
                      <td>22 مايو ,2023</td>
                      <td>مايو ,22 2023</td>
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
                                href="Contest-details.html"
                                >تفاصيل المسابقة</a
                              >
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <!-- For loop this tr -->

                    <!-- For loop this tr -->
                    <tr>
                      <td class="th"><input class="box" type="checkbox" /></td>
                      <td class="id">
                        <!-- <input class="form-check-input" type="checkbox" value="" name="table">  -->
                        1
                      </td>
                      <td>
                        مسابقة على الجزء الأول من سورة البقرة ( 1- 25) بالتجويد
                      </td>
                      <td><p class="cont">قائمة</p></td>
                      <td>22 مايو ,2023</td>
                      <td>مايو ,22 2023</td>
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
                                href="Contest-details.html"
                                >تفاصيل المسابقة</a
                              >
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <!-- For loop this tr -->
                  </tbody>
                </table>

                <!-- <script>
                  $(document).ready(function () {
                    $("#table tbody").on("click", "tr", function () {
                      $(this).toggleClass("selected");
                    });
                  });
                </script> -->
              </div>
              <button @click="blockAlert()"   type="button" class="btn btn-danger">حذف المحدد</button>
            </div>
          </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
    name :'contests-index',
    methods:{
        blockAlert() {
                    Swal.fire({
                      html:
                        '<h5 class="swal2-title">   هل أنت متأكد من حذف المجموعه؟ </h5>' +
                        '<p class="swal2-html-container">  </p>',

                      showCancelButton: true,
                      focusConfirm: false,
                      confirmButtonText: "تأكيد الحذف",
                      confirmButtonAriaLabel: "Thumbs up, great!",
                      cancelButtonText: "الغاء",
                      cancelButtonAriaLabel: "Thumbs down",
                    });
                  },
                  
    }

}
</script>

<style>

</style>