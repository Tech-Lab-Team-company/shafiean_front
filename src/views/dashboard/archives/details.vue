<template >
        <div class="container mt-5" style="background-color: #fafafa">
            <div class="d-flex justify-content-between align-items-center">
              <h5 class="title_section mt-5">تفاصيل الطالب</h5>
            </div>
            <div class="row">
              <div class="col-lg-4 col-md-12 col-12">
                <div class="details_student">
                  <img src="../../../assets/media/image/student.png" alt="group_img" />
                  <h5 class="title">أحمد أمجد</h5>
                  <p class="text">إعاقة زهنية</p>
                  <div class="details">
                    <p class="info date">
                      <i class="fa-solid fa-calendar-days"></i>
                      تاريخ الانضمام : 22 مايو, 2023
                    </p>
                    <p class="info">
                      <i class="fa-solid fa-paste"></i>
                      اجمالى الواجبات : 40
                    </p>
                    <p class="info">
                      <i class="fa-solid fa-paste"></i>
                      اجمالى الاختبارات : 22
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-8 col-md-12 col-12">
                <div class="basic_information">
                  <h4 class="title" style="text-align: right;">البيانات الاساسية</h4>
                  <div class="info">
                    <p class="title">البريد الالكتروني</p>
                    <p class="text">someone@gmail.com</p>
                  </div>
                  <div class="info">
                    <p class="title">رقم لجوال</p>
                    <p class="text">+966 2536 255 22</p>
                  </div>
                  <div class="info">
                    <p class="title">النوع</p>
                    <p class="text">ذكر</p>
                  </div>
                  <div class="info">
                    <p class="title">الاعاقة</p>
                    <p class="text">اعاقة سمعية</p>
                  </div>
                  <div class="info">
                    <p class="title">المجموعة</p>
                    <p class="text">مجموعة العهد الحديث</p>
                  </div>
                  <div class="info">
                    <p class="title">المعلم</p>
                    <p class="text">أحمد ابراهيم</p>
                  </div>
                  <div class="info">
                    <p class="title">ولى الامر</p>
                    <p class="text">أمجد عمر</p>
                  </div>
                  <div class="info">
                    <p class="title">رقم جوال ولى الامر</p>
                    <p class="text">+966 2536 255 22</p>
                  </div>
                </div>
                <div class="table_details">
                  <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link active"
                        id="achievement-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#achievement-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="achievement-tab-pane"
                        aria-selected="true"
                      >
                        الانجازات
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link"
                        id="report-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#report-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="report-tab-pane"
                        aria-selected="false"
                      >
                        التقارير
                      </button>
                    </li>
                  </ul>
                  <div class="tab-content" id="myTabContent">
                    <div
                      class="tab-pane fade show active"
                      id="achievement-tab-pane"
                      role="tabpanel"
                      aria-labelledby="achievement-tab"
                      tabindex="0"
                    >
                      <div
                        class="d-flex justify-content-between align-items-center"
                      >
                        <h5 class="title_section my-3 m-3">كل الانجازات</h5>
                        <div class="filters">
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
                      </div>

                      <div class="table-responsive m-3">
                        <table class="table" id="table" style="text-align: right">
                          <thead>
                            <tr class="trAltCizgi">
                              <th class="th">الانجاز</th>
                              <th class="th">المجموعة</th>
                              <th class="th">الحالة</th>
                              <th class="th"></th>
                            </tr>
                          </thead>
                          <tbody class="tbody">
                            <!-- For loop this tr -->
                            <tr>
                              <td class="id">
                                واجب الجزء الاول من سورة البقرة بالتجويد من
                                الاية 1 حتي 12
                              </td>
                              <td>مجموعة العهد الحديث</td>
                              <td>
                                <span class="status done">واجب مكتمل</span>
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
                                        data-bs-toggle="modal"
                                        data-bs-target="#add"
                                        href="#"
                                        >عرض تفاصيل الانجاز</a
                                      >
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                            <!-- For loop this tr -->

                            <!-- For loop this tr -->
                            <tr>
                              <td class="id">
                                واجب الجزء الاول من سورة البقرة بالتجويد من
                                الاية 1 حتي 12
                              </td>
                              <td>مجموعة العهد الحديث</td>
                              <td>
                                <span class="status not_done"
                                  >لم يكتمل بعد</span
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
                                        data-bs-toggle="modal"
                                        data-bs-target="#add"
                                        href="#"
                                        >عرض تفاصيل الانجاز</a
                                      >
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                            <!-- For loop this tr -->
                          </tbody>
                        </table>
                        <!-- modale -->
                        <div class="modal" id="add" tabindex="-1">
                          <div class="modal-dialog">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5 class="modal-title">
                                  تفاصيل الإنجاز للطالب
                                </h5>
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
                                        style="
                                          margin-inline-end: 10px;
                                          color: #b2d23f;
                                        "
                                      ></i
                                      >المعلم المسئول<span>: أحمد عادل</span>
                                    </h3>
                                    <h3>
                                      <i
                                        class="fa-regular fa-calendar"
                                        style="
                                          margin-inline-end: 10px;
                                          color: #b2d23f;
                                        "
                                      ></i
                                      >تاريخ الإنجاز<span> :مارس - 30:8م </span>
                                    </h3>
                                    <h3>
                                      <i
                                        class="fa-regular fa-circle-check"
                                        style="
                                          margin-inline-end: 10px;
                                          color: #b2d23f;
                                        "
                                      ></i
                                      >الإجابات الصحيحة <span> : 10 </span>
                                    </h3>
                                    <h3>
                                      <i
                                        class="fa-solid fa-trophy"
                                        style="
                                          margin-inline-end: 10px;
                                          color: #b2d23f;
                                        "
                                      ></i
                                      >الدرجة النهائية <span> : 30 / 40 </span>
                                    </h3>
                                  </div>
                                </div>
                                <h4>الإجابات الخاطئة</h4>

                                <div class="lest-model">
                                  <div class="step"></div>
                                  <h3>
                                    جاءت ( تِلْكَ حُدُودُ اللَّهِ .. ) في أول
                                    موضع
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
                        <!-- modale -->

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
                      id="report-tab-pane"
                      role="tabpanel"
                      aria-labelledby="report-tab"
                      tabindex="0"
                    >
                      <div
                        class="d-flex justify-content-between align-items-center"
                      >
                        <h5 class="title_section my-3 m-3 ">
                          تقارير الحضور والانصراف
                        </h5>
                        <div class="filters">
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
                      </div>

                      <div class="table-responsive m-3">
                        <table class="table " id="table" style="text-align: right">
                          <thead>
                            <tr class="trAltCizgi">
                              <th class="th">الدرس</th>
                              <th class="th">تاريخ الدرس</th>
                              <th class="th">المعلم</th>
                              <th class="th">الحضور</th>
                            </tr>
                          </thead>
                          <tbody class="tbody">
                            <!-- For loop this tr -->
                            <tr>
                              <td class="id">
                                الجزء الاول من سورة البقرة بالتجويد من الاية 1
                                حتي 12
                              </td>
                              <td>22 مايو. 2023</td>
                              <td>
                                <span>أحمد خالد</span>
                              </td>
                              <td class="flex_mobile">
                                <span class="audience yes"
                                  ><i class="fa-regular fa-circle-check"></i>
                                  حضور</span
                                >
                              </td>
                            </tr>
                            <!-- For loop this tr -->

                            <!-- For loop this tr -->
                            <tr>
                              <td class="id">
                                الجزء الاول من سورة البقرة بالتجويد من الاية 1
                                حتي 12
                              </td>
                              <td>22 مايو. 2023</td>
                              <td>
                                <span>أحمد خالد</span>
                              </td>
                              <td class="flex_mobile">
                                <span class="audience no"
                                  ><i class="fa-regular fa-circle-xmark"></i>
                                  حضور</span
                                >
                              </td>
                            </tr>
                            <!-- For loop this tr -->
                          </tbody>
                        </table>
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
  name :'details-archives'
    

}
</script>

<style scoped> 

</style>