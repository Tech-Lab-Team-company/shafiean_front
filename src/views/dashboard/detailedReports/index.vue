<template>
  <div class="container mt-5">
    <div class="d-flex justify-content-between align-items-center">
      <h5 class="title_section">تقارير الحضور التفصيلي</h5>
    </div>
    <!-- taps -->
    <ul
      class="nav nav-tabs"
      id="myTab"
      role="tablist"
      style="border-bottom: unset"
    >
      <li class="nav-item" role="presentation">
        <button
          class="nav-link active"
          id="Generalreports-tab"
          data-bs-toggle="tab"
          data-bs-target="#Generalreports"
          type="button"
          role="tab"
          aria-controls="Generalreports"
          aria-selected="true"
        >
          تقارير المواظبه
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="Attendanceanddeparturereports-tab"
          data-bs-toggle="tab"
          data-bs-target="#Attendanceanddeparturereports"
          type="button"
          role="tab"
          aria-controls="Attendanceanddeparturereports"
          aria-selected="false"
        >
          تقارير المواظبه تفصيلي
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="Achievementreports-tab"
          data-bs-toggle="tab"
          data-bs-target="#Achievementreports"
          type="button"
          role="tab"
          aria-controls="Achievementreports"
          aria-selected="false"
        >
          تقارير التفصيليه للانجاز
        </button>
      </li>
    </ul>
    <div class="tab-content" id="myTabContent">
      <!-- taps 1 -->
      <div
        class="tab-pane fade show active"
        id="Generalreports"
        role="tabpanel"
        aria-labelledby="Generalreports-tab"
      >
        <div class="table_details ">
          <!-- Start filters -->
          <div class="filters">
            <div class="form-group">
              <i class="fa-solid fa-magnifying-glass"></i>
              <input
                type="search"
                name=""
                id=""
                class="form-control"
                placeholder=".ابحث باسم الطالب   "
              />
            </div>
            <div class="form-group">
              <select
                name=""
                id=""
                class="selectpicker form-control"
                title="المكفوفات بنات - الفصل الثاني"
              >
                <option value="">.</option>
                <option value="">.</option>
                <option value="">.</option>
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
                title="النوع"
              >
                <option value="">طالب</option>
                <option value="">مشرف</option>
                <option value="">معلم</option>
              </select>
            </div>

            <div class="form-group">
              <select
                name=""
                id=""
                class="selectpicker form-control"
                title="جميع الطلاب"
              >
                <option value="">.</option>
                <option value="">.</option>
                <option value="">.</option>
              </select>
            </div>
          </div>
          <!-- End filters -->

          <div class="table-responsive p-3" style="text-align: right">
            <table class="table" id="table">
              <thead>
                <tr class="trAltCizgi">
                  <th class="th">اسم الطالب اليوم</th>
                  <th class="th">1</th>
                  <th class="th">2</th>
                  <th class="th">3</th>
                  <th class="th">4</th>
                  <th class="th">5</th>
                  <th class="th">6</th>
                  <th class="th">7</th>
                  <th class="th">8</th>
                  <th class="th">9</th>
                  <th class="th">10</th>
                  <th class="th">11</th>
                  <th class="th">12</th>
                  <th class="th"></th>
                </tr>
              </thead>
              <tbody class="tbody">
                <!-- For loop this tr -->
                <tr>
                  <td class="id">
                    <!-- <input class="form-check-input" type="checkbox" value="" name="table">  -->
                    ضياء عادل 
                  </td>
                  <td class="p">
                    <h4>ح</h4>
                  </td>
                  <td class="p">
                    <h4>ح</h4>
                  </td>
                  <td class="s">---</td>
                  <td class="p">
                    <h4>ح</h4>
                  </td>
                  <td class="p">
                    <h4>ح</h4>
                  </td>
                  <td class="s">---</td>
                  <td class="p">
                    <h4>ح</h4>
                  </td>
                  <td class="p">
                    <h4>ح</h4>
                  </td>
                  <td class="p">
                    <h4>ح</h4>
                  </td>
                  <td class="p">
                    <h4>ح</h4>
                  </td>
                  <td class="p">
                    <h4>ح</h4>
                  </td>
                  <td class="p">
                    <h4>ح</h4>
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
                          <router-link
                            to="/detailsStudent"
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
                  <td class="id">
                    <!-- <input class="form-check-input" type="checkbox" value="" name="table">  -->
                    ضياء عادل 
                  </td>
                  <td class="p">
                    <h4>ح</h4>
                  </td>
                  <td class="d">
                    <h4>غ</h4>
                  </td>
                  <td class="s">---</td>
                  <td class="p">
                    <h4>ح</h4>
                  </td>
                  <td class="d">
                    <h4>غ</h4>
                  </td>
                  <td class="s">---</td>
                  <td class="p">
                    <h4>ح</h4>
                  </td>
                  <td class="p">
                    <h4>ح</h4>
                  </td>
                  <td class="d">
                    <h4>غ</h4>
                  </td>
                  <td class="p">
                    <h4>ح</h4>
                  </td>
                  <td class="p">
                    <h4>ح</h4>
                  </td>
                  <td class="p">
                    <h4>ح</h4>
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
                          <router-link
                            to="/detailsStudent"
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
                  <td class="id">
                    <!-- <input class="form-check-input" type="checkbox" value="" name="table">  -->
                    ضياء عادل 
                  </td>
                  <td class="p">
                    <h4>ح</h4>
                  </td>
                  <td class="p">
                    <h4>ح</h4>
                  </td>
                  <td class="s">---</td>
                  <td class="d">
                    <h4>غ</h4>
                  </td>
                  <td class="p">
                    <h4>ح</h4>
                  </td>
                  <td class="s">---</td>
                  <td class="p">
                    <h4>ح</h4>
                  </td>
                  <td class="d">
                    <h4>غ</h4>
                  </td>
                  <td class="p">
                    <h4>ح</h4>
                  </td>
                  <td class="p">
                    <h4>ح</h4>
                  </td>
                  <td class="d">
                    <h4>غ</h4>
                  </td>
                  <td class="p">
                    <h4>ح</h4>
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
                          <router-link
                            to="/detailsStudent"
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
                  <td class="id">
                    <!-- <input class="form-check-input" type="checkbox" value="" name="table">  -->
                    ضياء عادل 
                  </td>
                  <td class="p">
                    <h4>ح</h4>
                  </td>
                  <td class="p">
                    <h4>ح</h4>
                  </td>
                  <td class="s">---</td>
                  <td class="p">
                    <h4>ح</h4>
                  </td>
                  <td class="p">
                    <h4>ح</h4>
                  </td>
                  <td class="s">---</td>
                  <td class="d">
                    <h4>غ</h4>
                  </td>
                  <td class="d">
                    <h4>غ</h4>
                  </td>
                  <td class="p">
                    <h4>ح</h4>
                  </td>
                  <td class="p">
                    <h4>ح</h4>
                  </td>
                  <td class="p">
                    <h4>ح</h4>
                  </td>
                  <td class="d">
                    <h4>غ</h4>
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
                          <router-link
                            to="/detailsStudent"
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
        </div>
      </div>
      <!-- taps 1 -->

      <!-- taps 2 -->
      <div
        class="tab-pane fade"
        id="Attendanceanddeparturereports"
        role="tabpanel"
        aria-labelledby="Attendanceanddeparturereports-tab"
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
                placeholder=".ابحث باسم الطالب   "
              />
            </div>
            <div class="form-group">
              <select
                name=""
                id=""
                class="selectpicker form-control"
                title="المكفوفات بنات - الفصل الثاني"
              >
                <option value="">.</option>
                <option value="">.</option>
                <option value="">.</option>
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
                title="النوع"
              >
                <option value="">طالب</option>
                <option value="">مشرف</option>
                <option value="">معلم</option>
              </select>
            </div>

            <div class="form-group">
              <select
                name=""
                id=""
                class="selectpicker form-control"
                title="جميع الطلاب"
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
                  <th class="th-h">الطالب</th>
                  <th class="th-h">الحضور</th>
                  <th class="th-h">التأخيرات</th>
                  <th class="th-h">الغيابات</th>
                  <th class="th-h">الغيابات بعذر</th>
                </tr>
              </thead>
              <tbody class="tbody">
                <tr>
                  <td class="name-tab">ضياء عادل </td>
                  <td class="name-f">1</td>
                  <td class="name-f">2</td>
                  <td class="name-f">2</td>
                  <td class="name-f">2</td>
                </tr>
                <tr>
                  <td class="name-tab">ضياء عادل  </td>
                  <td class="name-f">1</td>
                  <td class="name-f">2</td>
                  <td class="name-f">2</td>
                  <td class="name-f">2</td>
                </tr>
                <tr>
                  <td class="name-tab">ضياء عادل  </td>
                  <td class="name-f">1</td>
                  <td class="name-f">2</td>
                  <td class="name-f">2</td>
                  <td class="name-f">2</td>
                </tr>
                <tr>
                  <td class="name-tab">محمد أحمد</td>
                  <td class="name-f">1</td>
                  <td class="name-f">2</td>
                  <td class="name-f">2</td>
                  <td class="name-f">2</td>
                </tr>
                <tr>
                  <td class="name-tab">محمد أحمد</td>
                  <td class="name-f">1</td>
                  <td class="name-f">2</td>
                  <td class="name-f">2</td>
                  <td class="name-f">2</td>
                </tr>
                <tr>
                  <td class="name-tab">محمد أحمد</td>
                  <td class="name-f">1</td>
                  <td class="name-f">2</td>
                  <td class="name-f">2</td>
                  <td class="name-f">2</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <!-- taps 2 -->

      <!-- taps 3 -->
      <div
        class="tab-pane fade"
        id="Achievementreports"
        role="tabpanel"
        aria-labelledby="Achievementreports-tab"
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
                placeholder=".ابحث باسم الطالب   "
              />
            </div>
            <div class="form-group">
              <select
                name=""
                id=""
                class="selectpicker form-control"
                title="المكفوفات بنات - الفصل الثاني"
              >
                <option value="">.</option>
                <option value="">.</option>
                <option value="">.</option>
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
                title="الطالب"
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
                  <th class="th-j">اليوم</th>
                  <th class="th-j">الطالب</th>
                  <th class="th-j">نوع الانجاز</th>
                  <th class="th-j">من</th>
                  <th class="th-j">الي</th>
                  <th class="th-j">الدرجه</th>
                  <th class="th-j">الملاحظه</th>
                  <th class="th-j">عدد الصفحات</th>
                </tr>
              </thead>
              <tbody class="tbody">
                <tr>
                  <td class="hdor">الثلاقاء 25 ماي2023</td>
                  <td class="hdor">محمد أحمد نصره</td>
                  <td class="hdor">حفظ</td>
                  <td class="hdor">النحل1</td>
                  <td class="hdor">النحل221</td>
                  <td class="hdor">20</td>
                  <td class="hdor">عرض جيد للمقرر</td>
                  <td class="hdor">14.4</td>
                </tr>
                <tr>
                  <td class="hdor">الثلاقاء 25 ماي2023</td>
                  <td class="hdor">ضياء عادل   </td>
                  <td class="hdor">حفظ</td>
                  <td class="hdor">النحل1</td>
                  <td class="hdor">النحل221</td>
                  <td class="hdor">20</td>
                  <td class="hdor">عرض جيد للمقرر</td>
                  <td class="hdor">14.4</td>
                </tr>
                <tr>
                  <td class="hdor">الثلاقاء 25 ماي2023</td>
                  <td class="hdor">ضياء عادل   </td>
                  <td class="hdor">مراجعه</td>
                  <td class="hdor">النحل1</td>
                  <td class="hdor">النحل221</td>
                  <td class="hdor">20</td>
                  <td class="hdor">عرض جيد للمقرر</td>
                  <td class="hdor">14.4</td>
                </tr>
                <tr>
                  <td class="hdor">الثلاقاء 25 ماي2023</td>
                  <td class="hdor">ضياء عادل   </td>
                  <td class="hdor">حفظ</td>
                  <td class="hdor">النحل1</td>
                  <td class="hdor">النحل221</td>
                  <td class="hdor">20</td>
                  <td class="hdor">عرض جيد للمقرر</td>
                  <td class="hdor">14.4</td>
                </tr>
                <tr>
                  <td class="hdor">الثلاقاء 25 ماي2023</td>
                  <td class="hdor">ضياء عادل   </td>
                  <td class="hdor">مراجعه</td>
                  <td class="hdor">النحل1</td>
                  <td class="hdor">النحل221</td>
                  <td class="hdor">20</td>
                  <td class="hdor">عرض جيد للمقرر</td>
                  <td class="hdor">14.4</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- taps 3 -->

      <!-- taps 4 -->
      <div
        class="tab-pane fade"
        id="Testreports"
        role="tabpanel"
        aria-labelledby="Testreports-tab"
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
          </div>
          <!-- End filters -->

          <!-- taps 4 -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailedReports-index",
};
</script>

<style>
</style>