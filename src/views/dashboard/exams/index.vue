<template>
  <div class="container">
    <div class="d-flex justify-content-between align-items-center">
      <h5 class="title_section">الاختبارات</h5>
      <router-link to="/addExam" class="btn btn_title_page">+ اضافة اختبار جديد</router-link>
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
            <tr>
              <td class="th"><input class="box" type="checkbox" /></td>
              <td class="id">
                <!-- <input class="form-check-input" type="checkbox" value="" name="table">  -->
                1
              </td>
              <td>اختبار على الجزء الأول من سورة البقرة ( 1- 25) بالتجويد</td>
              <td>
                <span class="exam_status done">امتحان منتهي</span>
              </td>
              <td>مجموعة العهد الحديث</td>
              <td>20</td>
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
                      <a class="dropdown-item" href="details_exam.html"
                        >تفاصيل الاختبار</a
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
              <td>اختبار على الجزء الأول من سورة البقرة ( 1- 25) بالتجويد</td>
              <td><span class="exam_status now">امتحان حالى</span></td>
              <td>مجموعة العهد الحديث</td>
              <td>20</td>
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
                      <a class="dropdown-item" href="details_exam.html"
                        >تفاصيل الاختبار</a
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
              <td>اختبار على الجزء الأول من سورة البقرة ( 1- 25) بالتجويد</td>
              <td><span class="exam_status now">امتحان حالى</span></td>
              <td>مجموعة العهد الحديث</td>
              <td>20</td>
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
                      <a class="dropdown-item" href="details_exam.html"
                        >تفاصيل الاختبار</a
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
              <td>اختبار على الجزء الأول من سورة البقرة ( 1- 25) بالتجويد</td>
              <td>
                <span class="exam_status done">امتحان منتهي</span>
              </td>
              <td>مجموعة العهد الحديث</td>
              <td>20</td>
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
                      <a class="dropdown-item" href="details_exam.html"
                        >تفاصيل الاختبار</a
                      >
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <!-- For loop this tr -->
          </tbody>
        </table>

        <button type="button" class="btn btn-danger">حذف المحدد</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "exams-index",
};
</script>

<style></style>
