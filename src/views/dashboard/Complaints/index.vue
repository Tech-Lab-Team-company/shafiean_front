<template>
     <div class="container mt-5">
            <div class="d-flex justify-content-between align-items-center">
              <h5 class="title_section">الشكاوي</h5>
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
                    placeholder="ابحث باسم الشخص...."
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
                    title="كل الطالب"
                  >
                    <option value="">كل الطالب</option>
                    <option value="">كل المدرسين</option>
                    <option value="">أولياء الأمور</option>
                  </select>
                </div>
              </div>
              <!-- End filters -->

              <div class="table-responsive">
                <table class="table" id="table">
                  <thead>
                    <tr class="trAltCizgi">
                      <th><input class="box" type="checkbox" /></th>
                      <th class="th">اسم الشخص</th>
                      <th class="th">التاريخ</th>
                      <th class="th">نص الشكاوي</th>
                      <th class="th"></th>
                    </tr>
                  </thead>
                  <tbody class="tbody">
                    <!-- For loop this tr -->
                    <tr>
                      <td class="th"><input class="box" type="checkbox" /></td>
                      <td class="id">
                        <!-- <input class="form-check-input" type="checkbox" value="" name="table">  -->
                        محمد احمد
                      </td>
                      <td>مايو 22 , 2022 - 2:30 م</td>
                      <td>
                        هذا النص هو مثال لنص يمكن أن يستبدل في نفس النص أو
                        العديد من النصوص الأخرى ... الأخرى ...
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
                                data-bs-target="#childModal"
                                >عرض الشكوي</a
                              >
                            </li>
                            <li>
                              <a
                                class="dropdown-item"
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#radModal"
                                >الرد علي الشكوي</a
                              >
                            </li>
                          </ul>
                        </div>
                      </td>
                      <!-- Modal -->
                      <div
                        class="modal modal_child fade"
                        id="childModal"
                        tabindex="-1"
                        aria-labelledby="childModalLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-body">
                              <div class="header-com">
                                <h4 class="modal_title complaints">
                                  تفاصيل الشكوي
                                </h4>
                                <button
                                  type="button"
                                  class="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>

                              <div class="complaints">
                                <h4>اسم الشخص: <span>محمد احمد</span></h4>
                                <h4>التاريخ: <span>22/5/2023</span></h4>
                                <h4>نص الشكوي:</h4>
                                <p>
                                  هذا النص هو مثال لنص يمكن أن يستبدل في نفس
                                  المساحة ، لقد تم توليد هذا النص من مولد النص
                                  العربى، حيث يمكنك أن تولد مثل هذا النص أو
                                  العديد من النصوص الأخرى ...هذا النص هو مثال
                                  لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                                  توليد هذا النص من مولد النص العربى، حيث يمكنك
                                  أن تولد مثل هذا النص أو العديد من النصوص
                                  الأخرى ...هذا النص هو مثال لنص يمكن أن يستبدل
                                  في نفس المساحة، لقد تم توليد هذا النص من مولد
                                  النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
                                  العديد من النصوص الأخرى ...هذا النص هو مثال
                                  لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                                  توليد هذا النص من مولد النص العربى، حيث يمكنك
                                  أن تولد مثل هذا النص أو العديد من النصوص
                                  الأخرى ...هذا النص هو مثال لنص يمكن أن يستبدل
                                  في نفس المساحة، لقد تم توليد هذا النص من مولد
                                  النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
                                  العديد من النصوص الأخرى ...هذا النص هو مثال
                                  لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                                  توليد هذا النص من مولد النص العربى، حيث يمكنك
                                  أن تولد مثل هذا النص أو العديد من النصوص
                                  الأخرى ... الأخرى ...
                                </p>
                              </div>
                            </div>
                          </div>
                          <!-- For loop this card child -->
                        </div>
                      </div>
                      <div
                        class="modal modal_child fade"
                        id="radModal"
                        tabindex="-1"
                        aria-labelledby="childModalLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-body">
                              <div class="header-com">
                                <h4 class="modal_title complaints">
                                  الرد علي الشكوي
                                </h4>
                                <button
                                  type="button"
                                  class="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>

                              <div class="complaints">
                                <div class="form-group">
                                  <h4>نص الرد:</h4>
                                  <textarea
                                    class="form-control"
                                    name=""
                                    id=""
                                    cols="30"
                                    rows="10"
                                  ></textarea>
                                  <button type="button" class="btn btn-primary">
                                    ارسال الرد
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <!-- For loop this card child -->
                        </div>
                      </div>
                    </tr>
                    <!-- For loop this tr -->

                    <!-- For loop this tr -->
                    <tr>
                      <td class="th"><input class="box" type="checkbox" /></td>
                      <td class="id">
                        <!-- <input class="form-check-input" type="checkbox" value="" name="table">  -->
                        محمد احمد
                      </td>
                      <td>مايو 22 , 2022 - 2:30 م</td>
                      <td>
                        هذا النص هو مثال لنص يمكن أن يستبدل في نفس النص أو
                        العديد من النصوص الأخرى ... الأخرى ...
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
                              <a class="dropdown-item" href="#">عرض الشكوي</a>
                            </li>
                            <li>
                              <a class="dropdown-item" href="#"
                                >الرد علي الشكوي</a
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
                        محمد احمد
                      </td>
                      <td>مايو 22 , 2022 - 2:30 م</td>
                      <td>
                        هذا النص هو مثال لنص يمكن أن يستبدل في نفس النص أو
                        العديد من النصوص الأخرى ... الأخرى ...
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
                              <a class="dropdown-item" href="#">عرض الشكوي</a>
                            </li>
                            <li>
                              <a class="dropdown-item" href="#"
                                >الرد علي الشكوي</a
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
                        محمد احمد
                      </td>
                      <td>مايو 22 , 2022 - 2:30 م</td>
                      <td>
                        هذا النص هو مثال لنص يمكن أن يستبدل في نفس النص أو
                        العديد من النصوص الأخرى ... الأخرى ...
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
                              <a class="dropdown-item" href="#">عرض الشكوي</a>
                            </li>
                            <li>
                              <a class="dropdown-item" href="#"
                                >الرد علي الشكوي</a
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
              <button type="button" class="btn btn-danger">حذف المحدد</button>
            </div>
          </div>
</template>

<script>
export default {
    name:'/Complaints-index'

}
</script>

<style>

</style>