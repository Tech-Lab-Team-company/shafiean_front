<template>
   <div class="container mt-5">
            <div class="d-flex justify-content-between align-items-center">
              <h5 class="title_section">الأرشيف</h5>
            </div>
            <!-- taps -->
            <ul class="nav nav-tabs archives" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active"
                  id="students-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#students"
                  type="button"
                  role="tab"
                  aria-controls="students"
                  aria-selected="false"
                >
                  الطلاب
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="groups-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#groups"
                  type="button"
                  role="tab"
                  aria-controls="groups"
                  aria-selected="true"
                >
                  المجموعات
                </button>
              </li>
            </ul>
            <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="students"
                role="tabpanel"
                aria-labelledby="students-tab"
              >
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
                      <select
                        name=""
                        id=""
                        class="selectpicker form-control"
                        title="الكل"
                      >
                        <option value="">الكل</option>
                        <option value="">ذكور</option>
                        <option value="">اناث</option>
                      </select>
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
                        title="كل المجموعات"
                      >
                        <option value="">العهد الحديث</option>
                        <option value="">العهد الحديث</option>
                        <option value="">العهد الحديث</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <select
                        name=""
                        id=""
                        class="selectpicker form-control"
                        title="كل الطلاب"
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
                          <th>
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              name="table"
                            />
                          </th>
                          <th class="th">رقم الطالب</th>
                          <th class="th">اسم الطالب</th>
                          <th class="th">رقم الهاتف</th>
                          <th class="th">نوع الاعاقة</th>
                          <th class="th">المجموعة</th>
                          <th class="th">تاريخ الانضمام</th>
                          <th class="th"></th>
                        </tr>
                      </thead>
                      <tbody class="tbody">
                        <!-- For loop this tr -->
                        <tr>
                          <td class="th">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              name="table"
                            />
                          </td>
                          <td class="id">1</td>
                          <td>أحمد على</td>
                          <td>0102566544</td>
                          <td>إعاقة سمعية</td>
                          <td>العهد الحديث</td>
                          <td>22 مايو, 2023</td>
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
                                  <router-link to="/detailsarchives"
                                    class="dropdown-item"
                                  
                                    >عرض التفاصيل</router-link >
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
                                  <router-link to="/editarchives"
                                    class="dropdown-item"
                                    
                                    >تعديل البيانات</router-link>
                                </li>
                                <li>
                                  <a
                                    class="dropdown-item"
                                    href="#"
                                     @click="blockAlert()"
                                    >حذف</a
                                  >
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        <!-- For loop this tr -->

                        <!-- For loop this tr -->
                        <tr>
                          <td class="th">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              name="table"
                            />
                          </td>
                          <td class="id">1</td>
                          <td>أحمد على</td>
                          <td>0102566544</td>
                          <td>إعاقة سمعية</td>
                          <td>العهد الحديث</td>
                          <td>22 مايو, 2023</td>
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
                                  <router-link to="/detailsarchives"
                                    class="dropdown-item"
                                  
                                    >عرض التفاصيل</router-link >
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
                                  <router-link to="/editarchives"
                                    class="dropdown-item"
                                    
                                    >تعديل البيانات</router-link>
                                </li>
                                <li>
                                  <a
                                    class="dropdown-item"
                                    href="#"
                          @click="blockAlert()"
                                    >حذف</a
                                  >
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        <!-- For loop this tr -->

                        <!-- For loop this tr -->
                        <tr>
                          <td class="th">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              name="table"
                            />
                          </td>
                          <td class="id">1</td>
                          <td>أحمد على</td>
                          <td>0102566544</td>
                          <td>إعاقة سمعية</td>
                          <td>العهد الحديث</td>
                          <td>22 مايو, 2023</td>
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
                                  <router-link to="/detailsarchives"
                                    class="dropdown-item"
                                  
                                    >عرض التفاصيل</router-link >
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
                                  <router-link to="/editarchives"
                                    class="dropdown-item"
                                    
                                    >تعديل البيانات</router-link>
                                </li>
                                <li>
                                  <a
                                    class="dropdown-item"
                                    href="#"
                                    @click="blockAlert()"
                                    >حذف</a
                                  >
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        <!-- For loop this tr -->

                        <!-- For loop this tr -->
                        <tr>
                          <td class="th">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              name="table"
                            />
                          </td>
                          <td class="id">1</td>
                          <td>أحمد على</td>
                          <td>0102566544</td>
                          <td>إعاقة سمعية</td>
                          <td>العهد الحديث</td>
                          <td>22 مايو, 2023</td>
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
                                  <router-link to="/detailsarchives"
                                    class="dropdown-item"
                                  
                                    >عرض التفاصيل</router-link >
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
                                  <router-link to="/editarchives"
                                    class="dropdown-item"
                                    
                                    >تعديل البيانات</router-link>
                                </li>
                                <li>
                                  <a
                                    class="dropdown-item"
                                    href="#"
                                     @click="blockAlert()"
                                    >حذف</a
                                  >
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
                    <!-- sweetalrt -->
                   
                    <!-- <script>
                      function blockAlert() {
                        Swal.fire({
                          html:
                            '<h5 class="swal2-title">   هل أنت متأكد من الحذف ؟ </h5>' +
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
                  <button @click="blockAlert()" type="button" class="btn btn-danger">
                    حذف المحدد
                  </button>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="groups"
                role="tabpanel"
                aria-labelledby="groups-tab"
              >
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
                    
                    </div>
                    <div class="form-group">
                      <select
                        name=""
                        id=""
                        class="selectpicker form-control"
                        title="المرحلة الدراسية"
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
                          <th>
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              name="table"
                            />
                          </th>
                          <th class="th">رقم المجموعة</th>
                          <th class="th">اسم المجموعة</th>
                          <th class="th">المرحلة الدراسية</th>
                          <th class="th">المعلم</th>
                          <th class="th">تاريخ الاضافة</th>
                          <th class="th"></th>
                        </tr>
                      </thead>
                      <tbody class="tbody">
                        <!-- For loop this tr -->
                        <tr>
                          <td>
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              name="table"
                            />
                          </td>
                          <td class="id">1</td>
                          <td>مجموعة العهد الحديث</td>
                          <td>الفرقة الاولى</td>
                          <td>أحمد ابراهيم</td>
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
                                  <router-link to="/detailsGroup"
                                    class="dropdown-item"
                               
                                    >تفاصيل المجموعة</router-link>
                                </li>
                                <li>
                                  <router-link to="/editGroups"
                                    class="dropdown-item"
                                    
                                    >تعديل</router-link>
                                </li>
                                <li>
                                  <a
                                    class="dropdown-item"
                                    href="#"
                                     @click="blockAlert()"
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
                          <td>
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              name="table"
                            />
                          </td>

                          <td class="id">
                            <!-- <input class="form-check-input" type="checkbox" value="" name="table">  -->
                            1
                          </td>
                          <td>مجموعة العهد الحديث</td>
                          <td>الفرقة الاولى</td>
                          <td>أحمد ابراهيم</td>
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
                                  <a
                                    class="dropdown-item"
                                    href="details_group.html"
                                    >تفاصيل المجموعة</a
                                  >
                                </li>
                                <li>
                                  <a
                                    class="dropdown-item"
                                    href="edit-group.html"
                                    >تعديل</a
                                  >
                                </li>
                                <li>
                                  <a
                                    class="dropdown-item"
                                    href="#"
                                     @click="blockAlert()"
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
                          <td>
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              name="table"
                            />
                          </td>

                          <td class="id">
                            <!-- <input class="form-check-input" type="checkbox" value="" name="table">  -->
                            1
                          </td>
                          <td>مجموعة العهد الحديث</td>
                          <td>الفرقة الاولى</td>
                          <td>أحمد ابراهيم</td>
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
                                  <a
                                    class="dropdown-item"
                                    href="details_group.html"
                                    >تفاصيل المجموعة</a
                                  >
                                </li>
                                <li>
                                  <a
                                    class="dropdown-item"
                                    href="edit-group.html"
                                    >تعديل</a
                                  >
                                </li>
                                <li>
                                  <a
                                    class="dropdown-item"
                                    href="#"
                                    @click="blockAlert()"
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
                          <td>
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              name="table"
                            />
                          </td>

                          <td class="id">
                            <!-- <input class="form-check-input" type="checkbox" value="" name="table">  -->
                            1
                          </td>
                          <td>مجموعة العهد الحديث</td>
                          <td>الفرقة الاولى</td>
                          <td>أحمد ابراهيم</td>
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
                                  <a
                                    class="dropdown-item"
                                    href="details_group.html"
                                    >تفاصيل المجموعة</a
                                  >
                                </li>
                                <li>
                                  <a
                                    class="dropdown-item"
                                    href="edit-group.html"
                                    >تعديل</a
                                  >
                                </li>
                                <li>
                                  <a
                                    class="dropdown-item"
                                    href="#"
                                    @click="blockAlert()"                                    >حذف
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
                  <button @click="blockAlert()" type="button" class="btn btn-danger">
                    حذف المحدد
                  </button>
                </div>
              </div>
            </div>
            <!-- taps -->
          </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
    name : 'archives-index',
    methods:{
      blockAlert() {
                    Swal.fire({
                      html:
                        '<h5 class="swal2-title">   هل أنت متأكد من حذف المجموعه؟ </h5>' +
                        '<p class="swal2-html-container">  </p>',

                      showCancelButton: true,
                      focusConfirm: false,
                      confirmButtonText: "تأكيد الحذف",
                      confirmButtonAriaLabel: "Thumbs up, great!",
                      cancelButtonText: "الغاء",
                      cancelButtonAriaLabel: "Thumbs down",
                    });
                  }
    }

}
</script>

<style>

</style>