<template>
            <div class="container mt-5">
            <div  style="text-align: right" class="head-name">تقارير الأمتحانات</div>
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
                    placeholder="ابحث باسم الاختبار, الطالب......."
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
                    title="تحديد الاختبار"
                  >
                    <option value="">.</option>
                    <option value="">.</option>
                    <option value="">.</option>
                  </select>
                </div>
                <div class="form-group">
                  <select
                    name=""
                    id=""
                    class="selectpicker form-control"
                    title="تحديد المجموعه"
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
                              <router-link to="/examdetails" class="dropdown-item" 
                                >عرض تفاصيل الاختبار</router-link
                              >
                            </li>
                            <li>
                              <router-link to="/detailsStudent"
                                class="dropdown-item"
                               
                                >عرض تفاصيل الطالب</router-link
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
                              <router-link to="/examdetails" class="dropdown-item" 
                                >عرض تفاصيل الاختبار</router-link
                              >
                            </li>
                            <li>
                              <router-link to="/detailsStudent"
                                class="dropdown-item"
                               
                                >عرض تفاصيل الطالب</router-link
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
                              <router-link to="/examdetails" class="dropdown-item" 
                                >عرض تفاصيل الاختبار</router-link
                              >
                            </li>
                            <li>
                              <router-link to="/detailsStudent"
                                class="dropdown-item"
                               
                                >عرض تفاصيل الطالب</router-link
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
                              <router-link to="/examdetails" class="dropdown-item" 
                                >عرض تفاصيل الاختبار</router-link
                              >
                            </li>
                            <li>
                              <router-link to="/detailsStudent"
                                class="dropdown-item"
                               
                                >عرض تفاصيل الطالب</router-link
                              >
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
</template>

<script>
export default {
    name: '/examreport-index'

}
</script>

<style>

</style>