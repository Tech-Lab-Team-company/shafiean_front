<template>
  <div class="container mt-5">
            <div class="d-flex justify-content-between align-items-center">
              <h5 class="title_section">تفاصيل الاختبار</h5>
              <router-link to="/addExam" class="btn btn_title_page"
                >+ اضافة اختبار جديد</router-link
              >
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
            <h5 class="title_section">الطلاب</h5>
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
                              <a
                                class="dropdown-item"
                                data-bs-toggle="modal"
                                data-bs-target="#add"
                                href="#"
                                >عرض تفاصيل الاختبار</a
                              >
                            </li>
                            <li>
                              <a
                                class="dropdown-item"
                                href="details_student.html"
                                >عرض تفاصيل الطالب</a
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
                              <a
                                class="dropdown-item"
                                data-bs-toggle="modal"
                                data-bs-target="#add"
                                href="#"
                                >عرض تفاصيل الاختبار</a
                              >
                            </li>
                            <li>
                              <a
                                class="dropdown-item"
                                href="details_student.html"
                                >عرض تفاصيل الطالب</a
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
                              <a
                                class="dropdown-item"
                                data-bs-toggle="modal"
                                data-bs-target="#add"
                                href="#"
                                >عرض تفاصيل الاختبار</a
                              >
                            </li>
                            <li>
                              <a
                                class="dropdown-item"
                                href="details_student.html"
                                >عرض تفاصيل الطالب</a
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
                              <a
                                class="dropdown-item"
                                data-bs-toggle="modal"
                                data-bs-target="#add"
                                href="#"
                                >عرض تفاصيل الاختبار</a
                              >
                            </li>
                            <li>
                              <a
                                class="dropdown-item"
                                href="details_student.html"
                                >عرض تفاصيل الطالب</a
                              >
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <!-- For loop this tr -->
                  </tbody>
                </table>
                <div class="modal" id="add" tabindex="-1">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title">تفاصيل الاختبار للطالب</h5>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">
                        <div class="main-model">
                          <h4>
                            واجب على الجزء الأول من سورة البقرة ( 1- 25)
                            بالتجويد
                          </h4>
                          <div class="home-work">
                            <h3>
                              <i
                                class="fa-solid fa-user"
                                style="margin-inline-end: 10px; color: #b2d23f"
                              ></i
                              >المعلم المسئول<span>: أحمد عادل</span>
                            </h3>
                            <h3>
                              <i
                                class="fa-regular fa-calendar"
                                style="margin-inline-end: 10px; color: #b2d23f"
                              ></i
                              >تاريخ الإنجاز<span> :مارس - 30:8م </span>
                            </h3>
                            <h3>
                              <i
                                class="fa-regular fa-circle-check"
                                style="margin-inline-end: 10px; color: #b2d23f"
                              ></i
                              >الإجابات الصحيحة <span> : 10 </span>
                            </h3>
                            <h3>
                              <i
                                class="fa-solid fa-trophy"
                                style="margin-inline-end: 10px; color: #b2d23f"
                              ></i
                              >الدرجة النهائية <span> : 30 / 40 </span>
                            </h3>
                          </div>
                        </div>
                        <h4>الإجابات الخاطئة</h4>

                        <div class="lest-model">
                          <div class="step"></div>
                          <h3>
                            جاءت ( تِلْكَ حُدُودُ اللَّهِ .. ) في أول موضع
                          </h3>
                          <p>فلا تقربوها</p>
                          <h5>الإجابة الصحيحة : فلا تعتدوها</h5>
                        </div>
                        <div class="lest-model-1">
                          <h3>سورة البقرة تعتبر سورة</h3>
                          <p>مكية</p>
                          <h5>الإجابة الصحيحة : مدنية</h5>
                        </div>
                      </div>
                      <div class="modal-footer"></div>
                    </div>
                  </div>
                </div>

                <!-- <script>
                  $(document).ready(function () {
                    $("#table tbody").on("click", "tr", function () {
                      $(this).toggleClass("selected");
                    });
                  });
                </script> -->
              </div>
              <button type="button" class="btn btn-danger">حذف المحدد</button>
            </div>
          </div>
</template>

<script>
export default {
  name: "examdetails-index",
}
</script>

<style>

</style>