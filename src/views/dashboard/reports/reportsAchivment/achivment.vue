<template>
       <div class="container mt-5">
            <div style="text-align: right" class="head-name">تقارير الانجازات</div>
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
                    placeholder="ابحث باسم الواجب, الطالب......."
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
                    title="اسم الواجب"
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
                      <th class="th">اسم الطالب</th>
                      <th class="th">الانجاز</th>
                      <th class="th">تاريخ الانجاز</th>
                      <th class="th">الحالة</th>
                      <th class="th"></th>
                    </tr>
                  </thead>
                  <tbody class="tbody">
                    <!-- For loop this tr -->
                    <tr>
                      <td class="th"><input class="box" type="checkbox" /></td>
                      <td class="id">
                        <!-- <input class="form-check-input" type="checkbox" value="" name="table">  -->
                        أحمد على
                      </td>
                      <td>واجب ع ادرس القران الكريم سورة البقرة</td>
                      <td>مايو 22 , 2022 - 2:30 م</td>
                      <td class="text-success">
                        <i class="fa-regular fa-circle-check text-success"></i
                        >تم الانجاز
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
                            <i class="fa-solid fa-ellipsis-vertical"></i>
                          </a>

                          <ul class="dropdown-menu">
                            <li>
                              <a
                                class="dropdown-item"
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#add"
                                >عرض تفاصيل الواجب</a
                              >
                            </li>
                            <li>
                              <router-link to="/detailsStudent"
                                class="dropdown-item"
                                
                                >عرض تفاصيل الطالب</router-link>
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
                        أحمد على
                      </td>
                      <td>واجب ع ادرس القران الكريم سورة البقرة</td>
                      <td>مايو 22 , 2022 - 2:30 م</td>
                      <td class="text-danger">
                        <i class="fa-regular fa-circle-xmark text-danger"></i>لم
                        يتم الانجاز
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
                            <i class="fa-solid fa-ellipsis-vertical"></i>
                          </a>

                          <ul class="dropdown-menu">
                            <li>
                              <a
                                class="dropdown-item"
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#add"
                                >عرض تفاصيل الواجب</a
                              >
                            </li>
                            <li>
                              <router-link to="/detailsStudent"
                                class="dropdown-item"
                                
                                >عرض تفاصيل الطالب</router-link>
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
                        أحمد على
                      </td>
                      <td>واجب ع ادرس القران الكريم سورة البقرة</td>
                      <td>مايو 22 , 2022 - 2:30 م</td>
                      <td class="text-success">
                        <i class="fa-regular fa-circle-check text-success"></i
                        >تم الانجاز
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
                            <i class="fa-solid fa-ellipsis-vertical"></i>
                          </a>

                          <ul class="dropdown-menu">
                            <li>
                              <a
                                class="dropdown-item"
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#add"
                                >عرض تفاصيل الواجب</a
                              >
                            </li>
                            <li>
                              <router-link to="/detailsStudent"
                                class="dropdown-item"
                                
                                >عرض تفاصيل الطالب</router-link>
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
                        أحمد على
                      </td>
                      <td>واجب ع ادرس القران الكريم سورة البقرة</td>
                      <td>مايو 22 , 2022 - 2:30 م</td>
                      <td class="text-danger">
                        <i class="fa-regular fa-circle-xmark text-danger"></i>لم
                        يتم الانجاز
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
                            <i class="fa-solid fa-ellipsis-vertical"></i>
                          </a>

                          <ul class="dropdown-menu">
                            <li>
                              <a
                                class="dropdown-item"
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#add"
                                >عرض تفاصيل الواجب</a
                              >
                            </li>
                            <li>
                              <router-link to="/detailsStudent"
                                class="dropdown-item"
                                
                                >عرض تفاصيل الطالب</router-link>
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
          <div class="modal" id="add" tabindex="-1 " style="text-align: right">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">تفاصيل الواجب للطالب</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="main-model">
              <h4>واجب على الجزء الأول من سورة البقرة ( 1- 25) بالتجويد</h4>
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
              <h3>جاءت ( تِلْكَ حُدُودُ اللَّهِ .. ) في أول موضع</h3>
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
</template>

<script>
export default {
    name :'reports-achivment'

}
</script>

<style>

</style>