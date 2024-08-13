<template>
  <div class="container">
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
            <tr>
              <td class="th"><input class="box" type="checkbox" /></td>
              <td class="id">
                <!-- <input class="form-check-input" type="checkbox" value="" name="table">  -->
                1
              </td>
              <td>درس على الجزء الأول من سورة البقرة ( 1- 25) بالتجويد</td>
              <td>مايو 22 , 2022 - 2:30 م</td>
              <td>مجموعة العهد الحديث</td>
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
                      <a class="dropdown-item" href="details-lesson.html"
                        >تفاصيل الدرس</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" href="edit-lesson.html"
                        >تعديل الدرس</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="Add-lesson-preparation.html"
                        >تحضير الدرس</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" href="#" onclick="blockAlert()"
                        >حذف الدرس
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
              <td class="id">
                <!-- <input class="form-check-input" type="checkbox" value="" name="table">  -->
                1
              </td>
              <td>درس على الجزء الأول من سورة البقرة ( 1- 25) بالتجويد</td>
              <td>مايو 22 , 2022 - 2:30 م</td>
              <td>مجموعة العهد الحديث</td>
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
                      <a class="dropdown-item" href="details-lesson.html"
                        >تفاصيل الدرس</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" href="edit-lesson.html"
                        >تعديل الدرس</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="Add-lesson-preparation.html"
                        >تحضير الدرس</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" href="#" onclick="blockAlert()"
                        >حذف الدرس
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
              <td class="id">
                <!-- <input class="form-check-input" type="checkbox" value="" name="table">  -->
                1
              </td>
              <td>درس على الجزء الأول من سورة البقرة ( 1- 25) بالتجويد</td>
              <td>مايو 22 , 2022 - 2:30 م</td>
              <td>مجموعة العهد الحديث</td>
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
                      <a class="dropdown-item" href="details-lesson.html"
                        >تفاصيل الدرس</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" href="edit-lesson.html"
                        >تعديل الدرس</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="Add-lesson-preparation.html"
                        >تحضير الدرس</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" href="#" onclick="blockAlert()"
                        >حذف الدرس
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
              <td class="id">
                <!-- <input class="form-check-input" type="checkbox" value="" name="table">  -->
                1
              </td>
              <td>درس على الجزء الأول من سورة البقرة ( 1- 25) بالتجويد</td>
              <td>مايو 22 , 2022 - 2:30 م</td>
              <td>مجموعة العهد الحديث</td>
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
                      <a class="dropdown-item" href="details-lesson.html"
                        >تفاصيل الدرس</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" href="edit-lesson.html"
                        >تعديل الدرس</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="Add-lesson-preparation.html"
                        >تحضير الدرس</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" href="#" onclick="blockAlert()"
                        >حذف الدرس
                      </a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <!-- For loop this tr -->
          </tbody>
        </table>
      </div>
      <button type="button" class="btn btn-danger">حذف المحدد</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "lessons-index",
};
</script>

<style>
</style>