<template>
      <div class="container mt-5">
            <div class="d-flex justify-content-between align-items-center">
              <h5 class="title_section">تفاصيل المجموعة</h5>
            </div>
            <div class="row">
              <div class="col-lg-3 col-md-12 col-12">
                <div class="details_group">
                  <img src="../../../assets/media/Diaa.jpeg" alt="group_img" />
                  <h5 class="title">مجموعة العهد الحديث</h5>
                  <p class="division">الفرقة الدراسية الاولى</p>
                  <div class="details">
                    <p class="info">
                      <i class="fa-solid fa-user-graduate"></i>
                      المعلم : أحمد عادل
                    </p>
                    <p class="info">
                      <i class="fa-solid fa-users"></i>
                      عدد الطلاب : 20
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-9 col-md-12 col-12">
                <div class="table_details">
                  <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                    
                        <button
                        class="nav-link active"
                        id="lessons-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#lessons-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="lessons-tab-pane"
                        aria-selected="true"
                      >
                        الدروس
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link"
                        id="students-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#students-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="students-tab-pane"
                        aria-selected="false"
                      >
                        الطلاب
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link"
                        id="exams-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#exams-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="exams-tab-pane"
                        aria-selected="false"
                      >
                        الاختبارات
                      </button>
                    </li>
                  </ul>
                  <div class="tab-content" id="myTabContent">
                    <div
                      class="tab-pane fade show active"
                      id="lessons-tab-pane"
                      role="tabpanel"
                      aria-labelledby="lessons-tab"
                      tabindex="0"
                    >
                      <div
                        class="d-flex justify-content-between align-items-center p-3"
                      >
                        <h5 class="title_section">كل الدروس</h5>
                        <router-link to="/addlessons" class="btn btn_title_page"
                          >+ اضافة درس جديد</router-link
                        >
                      </div>

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
                      </div>
                      <!-- End filters -->

                      <div class="table-responsive ">
                        <table class="table " id="table ">
                          <thead>
                            <tr class="trAltCizgi">
                              <th></th>
                              <th class="th">رقم الدرس</th>
                              <th class="th">اسم الدرس</th>
                              <th class="th">موعد الدرس</th>
                              <th class="th"></th>
                            </tr>
                          </thead>
                          <tbody class="tbody">
                            <!-- For loop this tr -->
                            <tr>
                              <td class="th">
                                <input class="box" type="checkbox" />
                              </td>
                              <td class="id">
                                <!-- <input class="form-check-input" type="checkbox" value="" name="table">  -->
                                1
                              </td>
                              <td>
                                درس على الجزء الأول من سورة البقرة ( 1- 25)
                                بالتجويد
                              </td>
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
                                    <i
                                      class="fa-solid fa-ellipsis-vertical"
                                    ></i>
                                  </a>

                                  <ul class="dropdown-menu">
                                    <li>
                                      <a
                                        class="dropdown-item"
                                        href="edit-lesson.html"
                                        >تعديل</a
                                      >
                                    </li>
                                    <li>
                                      <a
                                        class="dropdown-item"
                                        href="#"
                                        onclick="blockAlert()"
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
                              <td class="th">
                                <input class="box" type="checkbox" />
                              </td>
                              <td class="id">
                                <!-- <input class="form-check-input" type="checkbox" value="" name="table">  -->
                                1
                              </td>
                              <td>
                                درس على الجزء الأول من سورة البقرة ( 1- 25)
                                بالتجويد
                              </td>
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
                                    <i
                                      class="fa-solid fa-ellipsis-vertical"
                                    ></i>
                                  </a>

                                  <ul class="dropdown-menu">
                                    <li>
                                      <a
                                        class="dropdown-item"
                                        href="edit-lesson.html"
                                        >تعديل</a
                                      >
                                    </li>
                                    <li>
                                      <a
                                        class="dropdown-item"
                                        href="#"
                                        onclick="blockAlert()"
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

                        <!-- <script>
                          $(document).ready(function () {
                            $("#table tbody").on("click", "tr", function () {
                              $(this).toggleClass("selected");
                            });
                          });
                        </script> -->
                      </div>
                    </div>
                    <div
                      class="tab-pane fade"
                      id="students-tab-pane"
                      role="tabpanel"
                      aria-labelledby="students-tab"
                      tabindex="0"
                    >
                      <div
                        class="d-flex justify-content-between align-items-center p-3"
                      >
                        <h5 class="title_section">كل الطلاب</h5>
                        <router-link to="/addStudent" class="btn btn_title_page"
                          >+ اضافة طالب جديد</router-link
                        >
                      </div>

                      <!-- Start filters -->
                      <div class="filters">
                        <div class="form-group">
                          <i class="fa-solid fa-magnifying-glass"></i>
                          <input
                            type="search"
                            name=""
                            id=""
                            class="form-control"
                            placeholder=".ابحث باسم الطالب"
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
                      </div>
                      <!-- End filters -->

                      <div class="table-responsive">
                        <table class="table" id="table">
                          <thead>
                            <tr class="trAltCizgi">
                              <th></th>
                              <th class="th">رقم الطالب</th>
                              <th class="th">اسم الطالب</th>
                              <th class="th">نوع الاعاقة</th>
                              <th class="th">رقم الهاتف</th>
                              <th class="th"></th>
                            </tr>
                          </thead>
                          <tbody class="tbody">
                            <!-- For loop this tr -->
                            <tr>
                              <td class="th">
                                <input class="box" type="checkbox" />
                              </td>
                              <td class="id">
                                <!-- <input class="form-check-input" type="checkbox" value="" name="table">  -->
                                1
                              </td>
                              <td>أحمد حوام</td>
                              <td>إعاقة نظر</td>
                              <td class="phone">010 2555 222 5</td>
                              <td class="flex_mobile">
                                <div class="dropdown">
                                  <a
                                    class="btn dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i
                                      class="fa-solid fa-ellipsis-vertical"
                                    ></i>
                                  </a>

                                  <ul class="dropdown-menu">
                                    <li>
                                      <a
                                        class="dropdown-item"
                                        href="details_student.html"
                                        >تفاصيل الطالب</a
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
                                      <a
                                        class="dropdown-item"
                                        href="edit-student.html"
                                        >تعديل</a
                                      >
                                    </li>
                                    <li>
                                      <a
                                        class="dropdown-item"
                                        href="#"
                                        onclick="blockAlert()"
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
                              <td class="th">
                                <input class="box" type="checkbox" />
                              </td>
                              <td class="id">
                                <!-- <input class="form-check-input" type="checkbox" value="" name="table">  -->
                                1
                              </td>
                              <td>أحمد حوام</td>
                              <td>إعاقة نظر</td>
                              <td class="phone">010 2555 222 5</td>
                              <td class="flex_mobile">
                                <div class="dropdown">
                                  <a
                                    class="btn dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i
                                      class="fa-solid fa-ellipsis-vertical"
                                    ></i>
                                  </a>

                                  <ul class="dropdown-menu">
                                    <li>
                                      <a
                                        class="dropdown-item"
                                        href="details_student.html"
                                        >تفاصيل الطالب</a
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
                                      <a
                                        class="dropdown-item"
                                        href="edit-student.html"
                                        >تعديل</a
                                      >
                                    </li>
                                    <li>
                                      <a
                                        class="dropdown-item"
                                        href="#"
                                        onclick="blockAlert()"
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
                      </div>
                    </div>
                    <div
                      class="tab-pane fade"
                      id="exams-tab-pane"
                      role="tabpanel"
                      aria-labelledby="exams-tab"
                      tabindex="0"
                    >
                      <div
                        class="d-flex justify-content-between align-items-center p-3"
                      >
                        <h5 class="title_section">كل الاختبارت</h5>
                        <router-link to="/addExam" class="btn btn_title_page"
                          >+ اضافة اختبار جديد</router-link
                        >
                      </div>

                      <!-- Start filters -->
                      <div class="filters">
                        <div class="form-group">
                          <i class="fa-solid fa-magnifying-glass"></i>
                          <input
                            type="search"
                            name=""
                            id=""
                            class="form-control"
                            placeholder=".ابحث باسم الطالب"
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
                        
                        </div>
                      </div>
                      <!-- End filters -->

                      <div class="table-responsive">
                        <table class="table" id="table">
                          <thead>
                            <tr class="trAltCizgi">
                              <th></th>
                              <th class="th">رقم الدرس</th>
                              <th class="th">اسم الاختبار</th>
                              <th class="th">موعد الاختبار</th>
                              <th class="th">الحالة</th>
                              <th class="th"></th>
                            </tr>
                          </thead>
                          <tbody class="tbody">
                            <!-- For loop this tr -->
                            <tr>
                              <td class="th">
                                <input class="box" type="checkbox" />
                              </td>
                              <td class="id">
                                <!-- <input class="form-check-input" type="checkbox" value="" name="table">  -->
                                1
                              </td>
                              <td>
                                درس على الجزء الأول من سورة البقرة ( 1- 25)
                                بالتجويد
                              </td>
                              <td>مايو 22 , 2022 - 2:30 م</td>
                              <td>
                                <span class="status done"
                                  ><i class="fa-regular fa-circle-check"></i>
                                  منتهي</span
                                >
                              </td>
                              <td class="flex_mobile">
                                <div class="dropdown">
                                  <a
                                    class="btn dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i
                                      class="fa-solid fa-ellipsis-vertical"
                                    ></i>
                                  </a>

                                  <ul class="dropdown-menu">
                                    <li>
                                      <a
                                        class="dropdown-item"
                                        href="details_exam.html"
                                        >تفاصيل الاختبار</a
                                      >
                                    </li>
                                    <li>
                                      <a
                                        class="dropdown-item"
                                        href="#"
                                        onclick="blockAlert()"
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
</template>

<script>
export default {

}
</script>

<style>

</style>