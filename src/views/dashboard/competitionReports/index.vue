<template>
  <div class="container mt-5">
    <div style="text-align: right;" class="head-name">تقارير المسابقات</div>
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
            placeholder="ابحث باسم المسابقة......"
          />
        </div>

        <div class="form-group">
          <i class="fa-solid fa-calendar-days"></i>
          <input type="text" class="form-control" name="daterange" value="" />
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
            title="تحديد المجموعه"
          >
            <option value="">.</option>
            <option value="">.</option>
            <option value="">.</option>
          </select>
        </div>
        <div class="form-group">
          <select
            name=""
            id=""
            class="selectpicker form-control"
            title="نوع المسابقة"
          >
            <option value="">.</option>
            <option value="">.</option>
            <option value="">.</option>
          </select>
        </div>
      </div>
      <!-- End filters -->

      <div class="table-responsive">
        <table class="table" id="table">
          <thead>
            <tr class="trAltCizgi">
              <th><input class="box" type="checkbox" /></th>
              <th class="th">اسم المسابقه</th>
              <th class="th">تاريخ الأنشاء</th>
              <th class="th">تاريخ الأنتهاء</th>
              <th class="th">المده</th>
              <th class="th">الحاله</th>
              <th class="th">عدد المشتركين</th>
              <th></th>
            </tr>
          </thead>
          <tbody class="tbody">
            <!-- For loop this tr -->
            <tr>
              <td><input class="box" type="checkbox" /></td>
              <td>الحفظ والتجويد</td>
              <td>11/2/2024</td>
              <td>25/2/2024</td>
              <td>شهر</td>
              <td class="end">...</td>
              <td class="end">30</td>
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
                      <router-link to="/resultcompetitionReports" class="dropdown-item" 
                        >النتائج</router-link >
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <!-- For loop this tr -->
            <tr>
              <td><input class="box" type="checkbox" /></td>
              <td>الحفظ والتجويد</td>
              <td>11/2/2024</td>
              <td>25/2/2024</td>
              <td>شهر</td>
              <td class="end">...</td>
              <td class="end">30</td>
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
                      <router-link to="/resultcompetitionReports" class="dropdown-item" 
                        >النتائج</router-link >
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <!-- For loop this tr -->
            <tr>
              <td><input class="box" type="checkbox" /></td>
              <td>الحفظ والتجويد</td>
              <td>11/2/2024</td>
              <td>25/2/2024</td>
              <td>شهر</td>
              <td class="end">...</td>
              <td class="end">30</td>
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
                      <router-link to="/resultcompetitionReports" class="dropdown-item" 
                        >النتائج</router-link >
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <!-- For loop this tr -->
            <tr>
              <td><input class="box" type="checkbox" /></td>
              <td>الحفظ والتجويد</td>
              <td>11/2/2024</td>
              <td>25/2/2024</td>
              <td>شهر</td>
              <td class="end">...</td>
              <td class="end">30</td>
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
                      <router-link to="/resultcompetitionReports" class="dropdown-item" 
                        >النتائج</router-link >
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <!-- For loop this tr -->
            <tr>
              <td><input class="box" type="checkbox" /></td>
              <td>الحفظ والتجويد</td>
              <td>11/2/2024</td>
              <td>25/2/2024</td>
              <td>شهر</td>
              <td class="end">...</td>
              <td class="end">30</td>
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
                      <router-link to="/resultcompetitionReports" class="dropdown-item" 
                        >النتائج</router-link >
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <!-- For loop this tr -->
            <tr>
              <td><input class="box" type="checkbox" /></td>
              <td>الحفظ والتجويد</td>
              <td>11/2/2024</td>
              <td>25/2/2024</td>
              <td>شهر</td>
              <td class="end">...</td>
              <td class="end">30</td>
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
                      <router-link to="/resultcompetitionReports" class="dropdown-item" 
                        >النتائج</router-link >
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <!-- For loop this tr -->
            <tr>
              <td><input class="box" type="checkbox" /></td>
              <td>الحفظ والتجويد</td>
              <td>11/2/2024</td>
              <td>25/2/2024</td>
              <td>شهر</td>
              <td class="end">...</td>
              <td class="end">30</td>
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
                      <router-link to="/resultcompetitionReports" class="dropdown-item" 
                        >النتائج</router-link >
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <!-- For loop this tr -->
          </tbody>
        </table>
        <button @click="blockAlert()"  type="button" class="btn btn-danger">حذف المحدد</button>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
    name: "competitionReports-index",
    methods:{
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
    }

 
};
</script>

<style>
</style>