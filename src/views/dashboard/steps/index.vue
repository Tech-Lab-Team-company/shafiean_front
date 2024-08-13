<template>
         <div class="container ">
            <div class="d-flex justify-content-between align-items-center">
              <h5 class="title_section">المراحل الدراسية</h5>
              <router-link to="/addSteps" class="btn btn_title_page"
                >+ اضافة مرحلة دراسية</router-link
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
                    placeholder="ابحث باسم المادة , المدرس"
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
                <div class="form-group">
                  <select
                    name=""
                    id=""
                    class="selectpicker form-control"
                    title="كل المدرسين"
                  >
                    <option value="">مدرس 1</option>
                    <option value="">مدرس 2</option>
                    <option value="">مدرس 3</option>
                  </select>
                </div>
              </div>
              <!-- End filters -->

              <div class="table-responsive">
                <table class="table" id="table">
                  <thead>
                    <tr class="trAltCizgi">
                      <th><input class="box" type="checkbox" /></th>
                      <th class="th">رقم المرحلة</th>
                      <th class="th">اسم المرحلة الدراسية</th>
                      <th class="th">تاريخ الاضافة</th>
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
                      <td>المرحلة الاولى</td>
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
                            <i class="fa-solid fa-ellipsis-vertical"></i>
                          </a>

                          <ul class="dropdown-menu">
                            <li>
                              <a class="dropdown-item" href="edit-grade.html"
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
                      <td class="th"><input class="box" type="checkbox" /></td>
                      <td class="id">1</td>
                      <td>المرحلة الاولى</td>
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
                            <i class="fa-solid fa-ellipsis-vertical"></i>
                          </a>

                          <ul class="dropdown-menu">
                            <li>
                              <a class="dropdown-item" href="edit-grade.html"
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
                      <td class="th"><input class="box" type="checkbox" /></td>
                      <td class="id">1</td>
                      <td>المرحلة الاولى</td>
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
                            <i class="fa-solid fa-ellipsis-vertical"></i>
                          </a>

                          <ul class="dropdown-menu">
                            <li>
                              <a class="dropdown-item" href="edit-grade.html"
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
                      <td class="th"><input class="box" type="checkbox" /></td>
                      <td class="id">1</td>
                      <td>المرحلة الاولى</td>
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
                            <i class="fa-solid fa-ellipsis-vertical"></i>
                          </a>

                          <ul class="dropdown-menu">
                            <li>
                              <a class="dropdown-item" href="edit-grade.html"
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
                      <td class="th"><input class="box" type="checkbox" /></td>
                      <td class="id">1</td>
                      <td>المرحلة الاولى</td>
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
                            <i class="fa-solid fa-ellipsis-vertical"></i>
                          </a>

                          <ul class="dropdown-menu">
                            <li>
                              <a class="dropdown-item" href="edit-grade.html"
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
                <!-- sweetalrt -->
                <!-- <script
                  src="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/11.7.22/sweetalert2.min.js"
                  integrity="sha512-pQdCIGAWAwzEHgw7boqX3wRNUqyaj7ta8qHsZ2yZtJofKqwSsh98Q+NJn96MAYCMcMnoZhdUo771JzaJCbrJMg=="
                  crossorigin="anonymous"
                  referrerpolicy="no-referrer"
                ></script>
                <script>
                  function blockAlert() {
                    Swal.fire({
                      html:
                        '<h5 class="swal2-title">   هل أنت متأكد من حذف المراحله؟ </h5>' +
                        '<p class="swal2-html-container">  </p>',

                      showCancelButton: true,
                      focusConfirm: false,
                      confirmButtonText: "تأكيد الحذف",
                      confirmButtonAriaLabel: "Thumbs up, great!",
                      cancelButtonText: "الغاء",
                      cancelButtonAriaLabel: "Thumbs down",
                    });
                  }
                </script> -->
                <!-- sweetalrt -->

               
              </div>
              <button type="button" class="btn btn-danger">حذف المحدد</button>
            </div>
          </div>
</template>

<script>
export default {
  name: "steps-index",

}
</script>

<style>

</style>