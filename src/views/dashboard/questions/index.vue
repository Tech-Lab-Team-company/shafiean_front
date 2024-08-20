<template>
    <div class="container">
            <div class="d-flex justify-content-between align-items-center">
              <h5 class="title_section">الأسألة التفاعلية</h5>
              <router-link to="/addQuestion"
                class="btn btn_title_page"
                >+ اضافة سؤال جديد</router-link
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
                    placeholder="ابحث باسم السؤال......"
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
                  <!-- //kkkk -->
                
                </div>
                <div class="form-group">
                  <select
                    name=""
                    id=""
                    class="selectpicker form-control"
                    title="كل المدرسين"
                  >
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                  </select>
                </div>
                <div class="form-group">
                  <select
                    name=""
                    id=""
                    class="selectpicker form-control"
                    title="كل المواد"
                  >
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                  </select>
                </div>
              </div>
              <!-- End filters -->

              <div class="table-responsive">
                <table class="table" id="table">
                  <thead>
                    <tr class="trAltCizgi">
                      <th><input class="box" type="checkbox" /></th>
                      <th class="th">رقم السؤال</th>
                      <th class="th">اسم السؤال</th>
                      <th class="th">المادة</th>
                      <th class="th">المرحلة الدراسية</th>
                      <th class="th"></th>
                    </tr>
                  </thead>
                  <tbody class="tbody">
                    <!-- For loop this tr -->
                    <tr>
                      <td class="th"><input class="box" type="checkbox" /></td>
                      <td class="id">1</td>
                      <td>
                        اختبار على الجزء الأول من سورة البقرة ( 1- 25) بالتجويد
                      </td>
                      <td>القرآن الكريم</td>
                      <td>الفرقة الاولى</td>
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
                                href="Add-new-interactive-question-1.html"
                                >تعديل البيانات</a
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
                      <td>
                        اختبار على الجزء الأول من سورة البقرة ( 1- 25) بالتجويد
                      </td>
                      <td>القرآن الكريم</td>
                      <td>الفرقة الاولى</td>
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
                                href="Add-new-interactive-question-1.html"
                                >تعديل البيانات</a
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
                      <td>
                        اختبار على الجزء الأول من سورة البقرة ( 1- 25) بالتجويد
                      </td>
                      <td>القرآن الكريم</td>
                      <td>الفرقة الاولى</td>
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
                                href="Add-new-interactive-question-1.html"
                                >تعديل البيانات</a
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
                      <td>
                        اختبار على الجزء الأول من سورة البقرة ( 1- 25) بالتجويد
                      </td>
                      <td>القرآن الكريم</td>
                      <td>الفرقة الاولى</td>
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
                                href="Add-new-interactive-question-1.html"
                                >تعديل البيانات</a
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
                      <td>
                        اختبار على الجزء الأول من سورة البقرة ( 1- 25) بالتجويد
                      </td>
                      <td>القرآن الكريم</td>
                      <td>الفرقة الاولى</td>
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
                                href="Add-new-interactive-question-1.html"
                                >تعديل البيانات</a
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
              
                <!-- <script>
                  function blockAlert() {
                    Swal.fire({
                      html:
                        '<h5 class="swal2-title">   هل أنت متأكد من حذف السؤال؟ </h5>' +
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
    name : 'questions-index'

}
</script>

<style>

</style>