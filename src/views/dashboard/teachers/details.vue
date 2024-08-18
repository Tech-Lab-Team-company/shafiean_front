<template>
         <div class="container mt-5">
            <div class="d-flex justify-content-between align-items-center">
              <h5 class="title_section">تفاصيل المعلم</h5>
            </div>
            <div class="row">
              <div class="col-lg-4 col-md-12 col-12">
                <div class="details_student">
                    <img src="../../../assets/media/image/student.png" alt="group_img" />
                    <h5 class="title">أحمد أمجد</h5>
                  <p class="text">ah 20 @gmail.com</p>
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
                  <h4 class="title">البيانات الاساسية</h4>
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
                    <p class="title">عدد الطلاب</p>
                    <p class="text">20</p>
                  </div>
                </div>
                <div class="table_details">
                  <ul
                    class="nav nav-tabs nasra-responsev active"
                    id="myTab"
                    role="tablist"
                  >
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link active"
                        id="group-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#group-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="group-tab-pane"
                        aria-selected="true"
                      >
                        المجموعات
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
                        تقاربر الحضور والانصراف
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link"
                        id="exam-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#exam-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="exam-tab-pane"
                        aria-selected="false"
                      >
                        الاختبارات
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link"
                        id="home-work-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#home-work-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="home-work-tab-pane"
                        aria-selected="false"
                      >
                        الواجبات
                      </button>
                    </li>
                  </ul>
                  <!-- one -->
                  <div class="tab-content" id="myTabContent">
                    <div
                      class="tab-pane fade show active"
                      id="group-tab-pane"
                      role="tabpanel"
                      aria-labelledby="group-tab"
                      tabindex="0"
                    >
                      <div
                        class="d-flex justify-content-between align-items-center"
                      >
                        <h5 class="title_section">المجموعات</h5>
                        <a href="add_group.html" class="btn btn_title_page"
                          >+ اضافة مجموعة جديدة</a
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
                        </div>
                        <!-- End filters -->

                        <div class="table-responsive">
                          <table class="table" id="table">
                            <thead>
                              <tr class="trAltCizgi">
                                <th><input class="box" type="checkbox" /></th>
                                <th class="th">اسم المجموعة</th>
                                <th class="th">عدد الطلاب</th>
                                <th class="th">المرحلة الدراسية</th>
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
                                  مجموعة العهد الحديث
                                </td>
                                <td>22</td>
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
                                      <i
                                        class="fa-solid fa-ellipsis-vertical"
                                      ></i>
                                    </a>

                                    <ul class="dropdown-menu">
                                      <li>
                                        <a
                                          class="dropdown-item"
                                          href="details_group.html"
                                          >تفاصيل المجموعة</a
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
                                  <input class="box" type="checkbox" />
                                </td>
                                <td class="id">
                                  <!-- <input class="form-check-input" type="checkbox" value="" name="table">  -->
                                  مجموعة العهد الحديث
                                </td>
                                <td>22</td>
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
                                      <i
                                        class="fa-solid fa-ellipsis-vertical"
                                      ></i>
                                    </a>

                                    <ul class="dropdown-menu">
                                      <li>
                                        <a
                                          class="dropdown-item"
                                          href="details_group.html"
                                          >تفاصيل المجموعة</a
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
                                  <input class="box" type="checkbox" />
                                </td>
                                <td class="id">
                                  <!-- <input class="form-check-input" type="checkbox" value="" name="table">  -->
                                  مجموعة العهد الحديث
                                </td>
                                <td>22</td>
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
                                      <i
                                        class="fa-solid fa-ellipsis-vertical"
                                      ></i>
                                    </a>

                                    <ul class="dropdown-menu">
                                      <li>
                                        <a
                                          class="dropdown-item"
                                          href="details_group.html"
                                          >تفاصيل المجموعة</a
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
                                  <input class="box" type="checkbox" />
                                </td>
                                <td class="id">
                                  <!-- <input class="form-check-input" type="checkbox" value="" name="table">  -->
                                  مجموعة العهد الحديث
                                </td>
                                <td>22</td>
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
                                      <i
                                        class="fa-solid fa-ellipsis-vertical"
                                      ></i>
                                    </a>

                                    <ul class="dropdown-menu">
                                      <li>
                                        <a
                                          class="dropdown-item"
                                          href="details_group.html"
                                          >تفاصيل المجموعة</a
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
                        <button type="button" class="btn btn-danger">
                          حذف المحدد
                        </button>
                      </div>
                    </div>
                  </div>
                  <!-- one -->
                  <!-- two -->
                  <div class="tab-content" id="myTabContent">
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
                        <h5 class="title_section">تقارير الحضور والانصراف</h5>
                        <div class="form-group">
                          <select
                            name=""
                            id=""
                            class="selectpicker form-control"
                            placeholder="تقارير الحضور و الانصراف"
                          >
                            <option value="">..</option>
                            <option value="">..</option>
                            <option value="">..</option>
                          </select>
                        </div>
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
                        </div>
                        <!-- End filters -->

                        <div class="table-responsive">
                          <table class="table" id="table">
                            <thead>
                              <tr class="trAltCizgi">
                                <th><input class="box" type="checkbox" /></th>
                                <th class="th">الدرس</th>
                                <th class="th">تاريخ الدرس</th>
                                <th class="th">الحضور</th>
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
                                  الجزء الاول من سورة البقرة بالتجويد من الاية 1
                                  حتي 12
                                </td>
                                <td>22 مايو. 2023</td>
                                <td class="text-success">
                                  <i
                                    class="fa-regular fa-circle-check text-success"
                                  ></i
                                  >حضور
                                </td>
                                <td class="flex_mobile"></td>
                              </tr>
                              <!-- For loop this tr -->

                              <!-- For loop this tr -->
                              <tr>
                                <td class="th">
                                  <input class="box" type="checkbox" />
                                </td>
                                <td class="id">
                                  <!-- <input class="form-check-input" type="checkbox" value="" name="table">  -->
                                  الجزء الاول من سورة البقرة بالتجويد من الاية 1
                                  حتي 12
                                </td>
                                <td>22 مايو. 2023</td>
                                <td class="text-danger">
                                  <i
                                    class="fa-regular fa-circle-xmark text-danger"
                                  ></i
                                  >غياب
                                </td>
                                <td class="flex_mobile"></td>
                              </tr>
                              <!-- For loop this tr -->

                              <!-- For loop this tr -->
                              <tr>
                                <td class="th">
                                  <input class="box" type="checkbox" />
                                </td>
                                <td class="id">
                                  <!-- <input class="form-check-input" type="checkbox" value="" name="table">  -->
                                  الجزء الاول من سورة البقرة بالتجويد من الاية 1
                                  حتي 12
                                </td>
                                <td>22 مايو. 2023</td>
                                <td class="text-success">
                                  <i
                                    class="fa-regular fa-circle-check text-success"
                                  ></i
                                  >حضور
                                </td>
                                <td class="flex_mobile"></td>
                              </tr>
                              <!-- For loop this tr -->

                              <!-- For loop this tr -->
                              <tr>
                                <td class="th">
                                  <input class="box" type="checkbox" />
                                </td>
                                <td class="id">
                                  <!-- <input class="form-check-input" type="checkbox" value="" name="table">  -->
                                  الجزء الاول من سورة البقرة بالتجويد من الاية 1
                                  حتي 12
                                </td>
                                <td>22 مايو. 2023</td>
                                <td class="text-danger">
                                  <i
                                    class="fa-regular fa-circle-xmark text-danger"
                                  ></i
                                  >غياب
                                </td>
                                <td class="flex_mobile"></td>
                              </tr>
                              <!-- For loop this tr -->
                            </tbody>
                          </table>
                        </div>
                        <button type="button" class="btn btn-danger">
                          حذف المحدد
                        </button>
                      </div>
                    </div>
                  </div>
                  <!-- two -->
                  <!-- three -->
                  <div class="tab-content" id="myTabContent">
                    <div
                      class="tab-pane fade"
                      id="exam-tab-pane"
                      role="tabpanel"
                      aria-labelledby="exam-tab"
                      tabindex="0"
                    >
                      <div
                        class="d-flex justify-content-between align-items-center"
                      >
                        <h5 class="title_section">الاختبارات</h5>
                        <a href="add_exam.html" class="btn btn_title_page"
                          >+ اضافة اختبار جديد</a
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
                        </div>
                        <!-- End filters -->

                        <div class="table-responsive">
                          <table class="table" id="table">
                            <thead>
                              <tr class="trAltCizgi">
                                <th><input class="box" type="checkbox" /></th>
                                <th class="th">اسم الاختبار</th>
                                <th class="th">المجموعة</th>
                                <th class="th">موعد الاختبار</th>
                                <th class="th">الحالة</th>
                                <th class="th"></th>
                              </tr>
                            </thead>
                            <tbody class="tbody" style="font-size: 0.6rem">
                              <!-- For loop this tr -->
                              <tr>
                                <td class="th">
                                  <input class="box" type="checkbox" />
                                </td>
                                <td class="id">
                                  <!-- <input class="form-check-input" type="checkbox" value="" name="table">  -->
                                  على الجزء الأول من سورة البقرة
                                </td>
                                <td>العهد الحديث</td>
                                <td>مايو 22 , 2022</td>
                                <td class="text-success">
                                  <i
                                    class="fa-regular fa-circle-check text-success"
                                  ></i
                                  >منتهي
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
                                          >عرض تفاصيل الاختبار</a
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
                                  <input class="box" type="checkbox" />
                                </td>
                                <td class="id">
                                  <!-- <input class="form-check-input" type="checkbox" value="" name="table">  -->
                                  على الجزء الأول من سورة البقرة
                                </td>
                                <td>العهد الحديث</td>
                                <td>مايو 22 , 2022</td>
                                <td class="text-success">
                                  <i
                                    class="fa-regular fa-circle-check text-success"
                                  ></i
                                  >منتهي
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
                                          >عرض تفاصيل الاختبار</a
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
                                  <input class="box" type="checkbox" />
                                </td>
                                <td class="id">
                                  <!-- <input class="form-check-input" type="checkbox" value="" name="table">  -->
                                  على الجزء الأول من سورة البقرة
                                </td>
                                <td>العهد الحديث</td>
                                <td>مايو 22 , 2022</td>
                                <td class="text-success">
                                  <i
                                    class="fa-regular fa-circle-check text-success"
                                  ></i
                                  >منتهي
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
                                          >عرض تفاصيل الاختبار</a
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
                                  <input class="box" type="checkbox" />
                                </td>
                                <td class="id">
                                  <!-- <input class="form-check-input" type="checkbox" value="" name="table">  -->
                                  على الجزء الأول من سورة البقرة
                                </td>
                                <td>العهد الحديث</td>
                                <td>مايو 22 , 2022</td>
                                <td class="text-success">
                                  <i
                                    class="fa-regular fa-circle-check text-success"
                                  ></i
                                  >منتهي
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
                                          >عرض تفاصيل الاختبار</a
                                        >
                                      </li>
                                    </ul>
                                  </div>
                                </td>
                              </tr>
                              <!-- For loop this tr -->
                            </tbody>
                          </table>

                        
                          <button type="button" class="btn btn-danger">
                            حذف المحدد
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- three -->
                  <!-- four -->
                  <div class="tab-content" id="myTabContent">
                    <div
                      class="tab-pane fade"
                      id="home-work-tab-pane"
                      role="tabpanel"
                      aria-labelledby="home-work-tab"
                      tabindex="0"
                    >
                      <div
                        class="d-flex justify-content-between align-items-center"
                      >
                        <h5 class="title_section">الواجبات</h5>
                        <a
                          href="Add-new-assignment.html"
                          class="btn btn_title_page"
                          >+ اضافة واجب جديد</a
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
                        </div>
                        <!-- End filters -->

                        <div class="table-responsive">
                          <table class="table" id="table">
                            <thead>
                              <tr class="trAltCizgi">
                                <th><input class="box" type="checkbox" /></th>
                                <th class="th">اسم الواجب</th>
                                <th class="th">المجموعة</th>
                                <th class="th">موعد الواجب</th>
                                <th class="th">الحالة</th>
                                <th class="th"></th>
                              </tr>
                            </thead>
                            <tbody class="tbody" style="font-size: 0.6rem">
                              <!-- For loop this tr -->
                              <tr>
                                <td class="th">
                                  <input class="box" type="checkbox" />
                                </td>
                                <td class="id">
                                  <!-- <input class="form-check-input" type="checkbox" value="" name="table">  -->
                                  على الجزء الأول من سورة البقرة
                                </td>
                                <td>العهد الحديث</td>
                                <td>مايو 22 , 2022</td>
                                <td class="text-success">
                                  <i
                                    class="fa-regular fa-circle-check text-success"
                                  ></i
                                  >منتهي
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
                                          href="Assignment-details.html"
                                          >عرض تفاصيل الواجب</a
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
                                  <input class="box" type="checkbox" />
                                </td>
                                <td class="id">
                                  <!-- <input class="form-check-input" type="checkbox" value="" name="table">  -->
                                  على الجزء الأول من سورة البقرة
                                </td>
                                <td>العهد الحديث</td>
                                <td>مايو 22 , 2022</td>
                                <td class="text-success">
                                  <i
                                    class="fa-regular fa-circle-check text-success"
                                  ></i
                                  >منتهي
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
                                          href="Assignment-details.html"
                                          >عرض تفاصيل الواجب</a
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
                                  <input class="box" type="checkbox" />
                                </td>
                                <td class="id">
                                  <!-- <input class="form-check-input" type="checkbox" value="" name="table">  -->
                                  على الجزء الأول من سورة البقرة
                                </td>
                                <td>العهد الحديث</td>
                                <td>مايو 22 , 2022</td>
                                <td class="text-success">
                                  <i
                                    class="fa-regular fa-circle-check text-success"
                                  ></i
                                  >منتهي
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
                                          href="Assignment-details.html"
                                          >عرض تفاصيل الواجب</a
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
                                  <input class="box" type="checkbox" />
                                </td>
                                <td class="id">
                                  <!-- <input class="form-check-input" type="checkbox" value="" name="table">  -->
                                  على الجزء الأول من سورة البقرة
                                </td>
                                <td>العهد الحديث</td>
                                <td>مايو 22 , 2022</td>
                                <td class="text-success">
                                  <i
                                    class="fa-regular fa-circle-check text-success"
                                  ></i
                                  >منتهي
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
                                          href="Assignment-details.html"
                                          >عرض تفاصيل الواجب</a
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
                        <button type="button" class="btn btn-danger">
                          حذف المحدد
                        </button>
                      </div>
                    </div>
                  </div>

                  <!-- four -->
                </div>
              </div>
            </div>
          </div>
</template>

<script>
export default {
    name: "details-teachers"

}
</script>

<style>

</style>