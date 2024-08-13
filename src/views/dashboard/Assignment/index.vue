<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-lg-8 col-md-12 col-12">
        <div class="d-flex justify-content-between align-items-center">
          <h5 class="title_section">تفاصيل الواجب</h5>
        </div>
      </div>
      <div class="col-lg-4 col-md-12 col-12">
        <a href="#" class="btn btn_title_page export m-1"> تصدير كملف اكسل</a>
        <router-link to="/addAssignment" class="btn btn_title_page m-1"
          >+ اضافة واجب جديد</router-link
        >
      </div>
    </div>
    <div class="details_exam_card">
      <div class="d-flex justify-content-between align-items-center">
        <h5 class="title_section">
          اختبار اول سورة البقرة الجزء الأول من الاية ( 1 - 25 )
        </h5>
        <span class="status not_done">اختبار منتهي</span>
      </div>
      <ul class="list_details">
        <li>
          <p class="title">المادة</p>
          <p class="text">مادة القرآن الكريم</p>
        </li>
        <li>
          <p class="title">المعلم</p>
          <p class="text">الشيخ/ أحمد عادل</p>
        </li>
        <li>
          <p class="title">عدد الأسألة</p>
          <p class="text">5</p>
        </li>
        <li>
          <p class="title">وقت الامتحان</p>
          <p class="text">22 مايو , 2023 - 12:00 م</p>
        </li>
        <li>
          <p class="title">المجموعة</p>
          <p class="text">مجموعة العهد الحديث</p>
        </li>
      </ul>
    </div>
    <h5 class="title_section " style="text-align: start" >الطلاب</h5>
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
              <th></th>
              <th class="th">رقم الطالب</th>
              <th class="th">اسم الطالب</th>
              <th class="th">انجاز الامتحان</th>
              <th class="th">المجموعة</th>
              <th class="th">الدرجة</th>
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
              <td>أحمد على</td>
              <td>
                <span class="status not_done">لم يجتاز الامتحان</span>
              </td>
              <td>مجموعة العهد الحديث</td>
              <td>---</td>
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
                      <a class="dropdown-item" href="#">عرض تفاصيل الواجب</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">عرض تفاصيل الطالب</a>
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
              <td>أحمد على</td>
              <td><span class="status done">اجتاز الامتحان</span></td>
              <td>مجموعة العهد الحديث</td>
              <td>50 / 80</td>
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
                      <a class="dropdown-item" href="#">عرض تفاصيل الواجب</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">عرض تفاصيل الطالب</a>
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
              <td>أحمد على</td>
              <td>
                <span class="status not_done">لم يجتاز الامتحان</span>
              </td>
              <td>مجموعة العهد الحديث</td>
              <td>50 / 80</td>
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
                      <a class="dropdown-item" href="#">عرض تفاصيل الواجب</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">عرض تفاصيل الطالب</a>
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
              <td>أحمد على</td>
              <td><span class="status done">اجتاز الامتحان</span></td>
              <td>مجموعة العهد الحديث</td>
              <td>50 / 80</td>
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
                      <a class="dropdown-item" href="#">عرض تفاصيل الواجب</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">عرض تفاصيل الطالب</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <!-- For loop this tr -->
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Assignment-index',
};
</script>

<style>
</style>
