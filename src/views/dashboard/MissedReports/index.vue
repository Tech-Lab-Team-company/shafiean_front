<template>
  <div class="container mt-5">
    <div class="d-flex justify-content-between align-items-center">
      <h5 class="title_section">تقارير الفائته</h5>
    </div>
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <button
          class="nav-link active"
          id="home-tab"
          data-bs-toggle="tab"
          data-bs-target="#home-tab-pane"
          type="button"
          role="tab"
          aria-controls="home-tab-pane"
          aria-selected="true"
        >
          الطالب
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="profile-tab"
          data-bs-toggle="tab"
          data-bs-target="#profile-tab-pane"
          type="button"
          role="tab"
          aria-controls="profile-tab-pane"
          aria-selected="false"
        >
          المعلم
        </button>
      </li>
      <li class="nav-item" role="presentation"></li>
      <li class="nav-item" role="presentation"></li>
    </ul>
    <div class="tab-content" id="myTabContent">
      <div
        class="tab-pane fade show active"
        id="home-tab-pane"
        role="tabpanel"
        aria-labelledby="home-tab"
        tabindex="0"
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
                placeholder="ابحث باسم الطالب........"
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
                title="اختر المجموعه"
              >
                <option value="">مجموعه 1</option>
                <option value="">مجموعه 2</option>
                <option value="">مجموعه 3</option>
              </select>
            </div>
          </div>
          <!-- End filters -->

          <div class="table-responsive">
            <table class="table" id="table">
              <thead>
                <tr class="trAltCizgi">
                  <th class="name">اسم الطالب</th>
                  <th class="th">التاريخ</th>
                  <th class="th">الحضور والأنصراف</th>
                  <th class="th">التقيم</th>
                  <th class="th"></th>
                </tr>
              </thead>
              <tbody class="tbody">
                <!-- For loop this tr -->
                <tr>
                  <td class="id">محمد احمد</td>
                  <td>مايو 22 , 2022 - 2:30 م</td>
                  <td>غياب</td>
                  <td>
                    <button
                      type="button"
                      class="btn Lesson-details"
                      data-bs-toggle="modal"
                      data-bs-target="#add-rate-1"
                    >
                      اضافة تقييم عام
                    </button>
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
                          <router-link to="/addStudent" class="dropdown-item"
                            >اضافه</router-link
                          >
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <!-- For loop this tr -->

                <!-- For loop this tr -->
                <tr>
                  <td class="id">محمد احمد</td>
                  <td>مايو 22 , 2022 - 2:30 م</td>
                  <td>غياب</td>
                  <td>
                    <button
                      type="button"
                      class="btn Lesson-details"
                      data-bs-toggle="modal"
                      data-bs-target="#add-rate-1"
                    >
                      اضافة تقييم عام
                    </button>
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
                          <router-link to="/addStudent" class="dropdown-item"
                            >اضافه</router-link
                          >
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <!-- For loop this tr -->

                <!-- For loop this tr -->
                <tr>
                  <td class="id">محمد احمد</td>
                  <td>مايو 22 , 2022 - 2:30 م</td>
                  <td>غياب</td>
                  <td>
                    <button
                      type="button"
                      class="btn Lesson-details"
                      data-bs-toggle="modal"
                      data-bs-target="#add-rate-1"
                    >
                      اضافة تقييم عام
                    </button>
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
                          <router-link to="/addStudent" class="dropdown-item"
                            >اضافه</router-link
                          >
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <!-- For loop this tr -->

                <!-- For loop this tr -->
                <tr>
                  <td class="id">محمد احمد</td>
                  <td>مايو 22 , 2022 - 2:30 م</td>
                  <td>غياب</td>
                  <td>
                    <button
                      type="button"
                      class="btn Lesson-details"
                      data-bs-toggle="modal"
                      data-bs-target="#add-rate-1"
                    >
                      اضافة تقييم عام
                    </button>
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
                          <router-link to="/addStudent" class="dropdown-item"
                            >اضافه</router-link
                          >
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <!-- For loop this tr -->

                <!-- For loop this tr -->
                <tr>
                  <td class="id">محمد احمد</td>
                  <td>مايو 22 , 2022 - 2:30 م</td>
                  <td>غياب</td>
                  <td>
                    <button
                      type="button"
                      class="btn Lesson-details"
                      data-bs-toggle="modal"
                      data-bs-target="#add-rate-1"
                    >
                      اضافة تقييم عام
                    </button>
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
                          <router-link to="/addStudent" class="dropdown-item"
                            >اضافه</router-link
                          >
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <!-- For loop this tr -->
              </tbody>
            </table>
            <!-- sweetalrt -->
            <div
              class="modal fade"
              id="add-rate-1"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
              style="text-align: right"
            >
              <div class="modal-dialog add-rate">
                <div class="modal-content">
                  <div class="modal-header add-rate">
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body add-rate">
                    <ul
                      class="nav nav-pills student-rate-te"
                      id="pills-tab add-rate"
                      role="tablist"
                    >
                      <li class="nav-item add-rate" role="presentation">
                        <button
                          class="nav-link active add-rate"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-home"
                          type="button"
                          role="tab"
                          aria-controls="pills-home"
                          aria-selected="true"
                        >
                          تقييم اكاديمي
                        </button>
                      </li>
                      <li class="nav-item add-rate" role="presentation">
                        <button
                          class="nav-link add-rate"
                          id="pills-profile-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-profile"
                          type="button"
                          role="tab"
                          aria-controls="pills-profile"
                          aria-selected="false"
                        >
                          تقييم سلوكي
                        </button>
                      </li>
                    </ul>
                    <div class="tab-content student" id="pills-tabContent">
                      <div
                        class="tab-pane fade show active"
                        id="pills-home"
                        role="tabpanel"
                        aria-labelledby="pills-home-tab"
                      >
                        <div class="main-Academic-evaluation">
                          <div class="row">
                            <div class="col-lg-8 col-md-12 col-12">
                              <div class="form-group">
                                <label class="grenal m-3" for="">السورة</label>
                                <select class="selectpicker">
                                  <option value="" disabled selected hidden>
                                    البقرة
                                  </option>
                                  <option>0</option>
                                  <option>0</option>
                                  <option>0</option>
                                </select>
                              </div>
                            </div>
                            <div class="col-lg-4 col-md-12 col-12">
                              <div class="form-group">
                                <label class="grenal m-3" for=""
                                  >التفاصيل</label
                                >
                                <select class="selectpicker">
                                  <option value="" disabled selected hidden>
                                    شرح و مراجعة
                                  </option>
                                  <option>0</option>
                                  <option>0</option>
                                  <option>0</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-lg-6 col-md-12 col-12">
                              <div class="form-group">
                                <label for="" class="grenal">من</label>
                                <input type="text" class="form-control" />
                              </div>
                            </div>
                            <div class="col-lg-6 col-md-12 col-12">
                              <div class="form-group">
                                <label for="" class="grenal">الي</label>
                                <input type="text" class="form-control" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="Academic-evaluation">
                          <div class="head-Academic-evaluation">
                            <h4>ما هو تقييمك الاكاديمي للطالب؟</h4>
                          </div>
                          <div class="radio Academic-evaluation">
                            <div class="form-check Academic-evaluation">
                              <label
                                class="form-check-label Academic-evaluation"
                                for="Academic-evaluation"
                              >
                                لم يعرض الطالب المُقرر اجابته
                              </label>
                              <input
                                class="form-check-input Academic-evaluation"
                                type="radio"
                                name="Academic-evaluation"
                                id="Academic-evaluation"
                              />
                            </div>
                            <div class="form-check Academic-evaluation">
                              <label
                                class="form-check-label Academic-evaluation"
                                for="Academic-evaluation-1"
                              >
                                يُعيد الطالب المقرر اجابته
                              </label>
                              <input
                                class="form-check-input Academic-evaluation"
                                type="radio"
                                name="Academic-evaluation"
                                id="Academic-evaluation-1"
                              />
                            </div>
                            <div class="form-check Academic-evaluation">
                              <label
                                class="form-check-label Academic-evaluation"
                                for="Academic-evaluation-2"
                              >
                                اداء حسن المُقرر
                              </label>
                              <input
                                class="form-check-input Academic-evaluation"
                                type="radio"
                                name="Academic-evaluation"
                                id="Academic-evaluation-2"
                              />
                            </div>
                            <div class="form-check Academic-evaluation">
                              <label
                                class="form-check-label Academic-evaluation"
                                for="Academic-evaluation-3"
                              >
                                اداء جيد المقرر
                              </label>
                              <input
                                class="form-check-input Academic-evaluation"
                                type="radio"
                                name="Academic-evaluation"
                                id="Academic-evaluation-3"
                              />
                            </div>
                            <div class="form-check Academic-evaluation">
                              <label
                                class="form-check-label Academic-evaluation"
                                for="Academic-evaluation-4"
                              >
                                ادي الطالب المقرر بإمتياز
                              </label>
                              <input
                                class="form-check-input Academic-evaluation"
                                type="radio"
                                name="Academic-evaluation"
                                id="Academic-evaluation-4"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- two -->
                      <div
                        class="tab-pane fade"
                        id="pills-profile"
                        role="tabpanel"
                        aria-labelledby="pills-profile-tab"
                      >
                        <div class="Academic-evaluation">
                          <div class="head-Academic-evaluation">
                            <h4>ما هو تقييمك السلوكي للطالب ؟</h4>
                          </div>
                          <div class="radio Academic-evaluation">
                            <div class="form-check Academic-evaluation">
                              <label
                                class="form-check-label Academic-evaluation"
                                for="Academic-evaluation-5"
                              >
                                يحتاج متابعة من ولي الامر
                              </label>
                              <input
                                class="form-check-input Academic-evaluation"
                                type="radio"
                                name="Academic-evaluation"
                                id="Academic-evaluation-5"
                              />
                            </div>
                            <div class="form-check Academic-evaluation">
                              <label
                                class="form-check-label Academic-evaluation"
                                for="Academic-evaluation-6"
                              >
                                يبني علية التركيز اكثر
                              </label>
                              <input
                                class="form-check-input Academic-evaluation"
                                type="radio"
                                name="Academic-evaluation"
                                id="Academic-evaluation-6"
                              />
                            </div>
                            <div class="form-check Academic-evaluation">
                              <label
                                class="form-check-label Academic-evaluation"
                                for="Academic-evaluation-7"
                              >
                                مواظب و هادئ الطباع
                              </label>
                              <input
                                class="form-check-input Academic-evaluation"
                                type="radio"
                                name="Academic-evaluation"
                                id="Academic-evaluation-7"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button @click="blockAlert()" type="button" class="btn add">
                      اضافة
                    </button>
                  </div>
                  <div class="modal-footer"></div>
                </div>
              </div>
            </div>

            <!-- <script
                      src="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/11.7.22/sweetalert2.min.js"
                      integrity="sha512-pQdCIGAWAwzEHgw7boqX3wRNUqyaj7ta8qHsZ2yZtJofKqwSsh98Q+NJn96MAYCMcMnoZhdUo771JzaJCbrJMg=="
                      crossorigin="anonymous"
                      referrerpolicy="no-referrer"
                    ></script> -->

            <!-- sweetalrt -->

            <!-- <script>
                      $(document).ready(function () {
                        $("#table tbody").on("click", "tr", function () {
                          $(this).toggleClass("selected");
                        });
                      });
                    </script> -->
          </div>
        </div>
      </div>
      <div
        class="tab-pane fade"
        id="profile-tab-pane"
        role="tabpanel"
        aria-labelledby="profile-tab"
        tabindex="0"
      >
        <!-- End filters -->

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
                placeholder="ابحث باسم المعلم........"
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
                title="اختر المجموعه"
              >
                <option value="">مجموعه 1</option>
                <option value="">مجموعه 2</option>
                <option value="">مجموعه 3</option>
              </select>
            </div>
          </div>
          <!-- End filters -->

          <div class="table-responsive">
            <table class="table" id="table">
              <thead>
                <tr class="trAltCizgi">
                  <th class="name">اسم المعلم</th>
                  <th class="th">التاريخ</th>
                  <th class="th">الحضور والأنصراف</th>
                  <th class="th">التقيم</th>
                  <th class="th"></th>
                </tr>
              </thead>
              <tbody class="tbody">
                <!-- For loop this tr -->
                <tr>
                  <td class="id">محمد احمد</td>
                  <td>مايو 22 , 2022 - 2:30 م</td>
                  <td>غياب</td>
                  <td>
                    <button
                      type="button"
                      class="btn Lesson-details"
                      data-bs-toggle="modal"
                      data-bs-target="#add-rate"
                    >
                      اضافة تقييم عام
                    </button>
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
                          <router-link to="/addTeachers" class="dropdown-item"
                            >اضافه</router-link
                          >
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <!-- For loop this tr -->

                <!-- For loop this tr -->
                <tr>
                  <td class="id">محمد احمد</td>
                  <td>مايو 22 , 2022 - 2:30 م</td>
                  <td>غياب</td>
                  <td>
                    <button
                      type="button"
                      class="btn Lesson-details"
                      data-bs-toggle="modal"
                      data-bs-target="#add-rate-1"
                    >
                      اضافة تقييم عام
                    </button>
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
                          <router-link to="/addTeachers" class="dropdown-item"
                            >اضافه</router-link
                          >
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <!-- For loop this tr -->

                <!-- For loop this tr -->
                <tr>
                  <td class="id">محمد احمد</td>
                  <td>مايو 22 , 2022 - 2:30 م</td>
                  <td>غياب</td>
                  <td>
                    <button
                      type="button"
                      class="btn Lesson-details"
                      data-bs-toggle="modal"
                      data-bs-target="#add-rate-1"
                    >
                      اضافة تقييم عام
                    </button>
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
                          <router-link to="/addTeachers" class="dropdown-item"
                            >اضافه</router-link
                          >
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <!-- For loop this tr -->

                <!-- For loop this tr -->
                <tr>
                  <td class="id">محمد احمد</td>
                  <td>مايو 22 , 2022 - 2:30 م</td>
                  <td>غياب</td>
                  <td>
                    <button
                      type="button"
                      class="btn Lesson-details"
                      data-bs-toggle="modal"
                      data-bs-target="#add-rate-1"
                    >
                      اضافة تقييم عام
                    </button>
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
                          <router-link to="/addTeachers" class="dropdown-item"
                            >اضافه</router-link
                          >
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <!-- For loop this tr -->

                <!-- For loop this tr -->
                <tr>
                  <td class="id">محمد احمد</td>
                  <td>مايو 22 , 2022 - 2:30 م</td>
                  <td>غياب</td>
                  <td>
                    <button
                      type="button"
                      class="btn Lesson-details"
                      data-bs-toggle="modal"
                      data-bs-target="#add-rate-1"
                    >
                      اضافة تقييم عام
                    </button>
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
                          <router-link to="/addTeachers" class="dropdown-item"
                            >اضافه</router-link
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

          <!-- sweetalrt -->
          <div
            class="modal fade"
            id="add-rate"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog add-rate">
              <div class="modal-content">
                <div class="modal-header add-rate">
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body add-rate">
                  <ul
                    class="nav nav-pills student-rate-te"
                    id="pills-tab add-rate"
                    role="tablist"
                  >
                    <li class="nav-item add-rate" role="presentation">
                      <button
                        class="nav-link active add-rate"
                        id="pills-home-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-home"
                        type="button"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                      >
                        تقييم اكاديمي
                      </button>
                    </li>
                    <li class="nav-item add-rate" role="presentation">
                      <button
                        class="nav-link add-rate"
                        id="pills-profile-tab-1"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-profile"
                        type="button"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false"
                      >
                        تقييم سلوكي
                      </button>
                    </li>
                  </ul>
                  <div class="tab-content student" id="pills-tabContent">
                    <div
                      class="tab-pane fade show active"
                      id="pills-home"
                      role="tabpanel"
                      aria-labelledby="pills-home-tab"
                    >
                      <div class="main-Academic-evaluation">
                        <div class="row">
                          <div class="col-lg-8 col-md-12 col-12">
                            <div class="form-group">
                              <label class="grenal" for="">السورة</label>
                              <select class="selectpicker">
                                <option value="" disabled selected hidden>
                                  البقرة
                                </option>
                                <option>0</option>
                                <option>0</option>
                                <option>0</option>
                              </select>
                            </div>
                          </div>
                          <div class="col-lg-4 col-md-12 col-12">
                            <div class="form-group">
                              <label class="grenal" for="">التفاصيل</label>
                              <select class="selectpicker">
                                <option value="" disabled selected hidden>
                                  شرح و مراجعة
                                </option>
                                <option>0</option>
                                <option>0</option>
                                <option>0</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-lg-6 col-md-12 col-12">
                            <div class="form-group">
                              <label for="" class="grenal">من</label>
                              <input type="text" class="form-control" />
                            </div>
                          </div>
                          <div class="col-lg-6 col-md-12 col-12">
                            <div class="form-group">
                              <label for="" class="grenal">الي</label>
                              <input type="text" class="form-control" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="Academic-evaluation">
                        <div class="head-Academic-evaluation">
                          <h4>ما هو تقييمك الاكاديمي للطالب؟</h4>
                        </div>
                        <div class="radio Academic-evaluation">
                          <div class="form-check Academic-evaluation">
                            <label
                              class="form-check-label Academic-evaluation"
                              for="Academic-evaluation"
                            >
                              لم يعرض الطالب المُقرر اجابته
                            </label>
                            <input
                              class="form-check-input Academic-evaluation"
                              type="radio"
                              name="Academic-evaluation"
                              id="Academic-evaluation"
                            />
                          </div>
                          <div class="form-check Academic-evaluation">
                            <label
                              class="form-check-label Academic-evaluation"
                              for="Academic-evaluation-1"
                            >
                              يُعيد الطالب المقرر اجابته
                            </label>
                            <input
                              class="form-check-input Academic-evaluation"
                              type="radio"
                              name="Academic-evaluation"
                              id="Academic-evaluation-1"
                            />
                          </div>
                          <div class="form-check Academic-evaluation">
                            <label
                              class="form-check-label Academic-evaluation"
                              for="Academic-evaluation-2"
                            >
                              اداء حسن المُقرر
                            </label>
                            <input
                              class="form-check-input Academic-evaluation"
                              type="radio"
                              name="Academic-evaluation"
                              id="Academic-evaluation-2"
                            />
                          </div>
                          <div class="form-check Academic-evaluation">
                            <label
                              class="form-check-label Academic-evaluation"
                              for="Academic-evaluation-3"
                            >
                              اداء جيد المقرر
                            </label>
                            <input
                              class="form-check-input Academic-evaluation"
                              type="radio"
                              name="Academic-evaluation"
                              id="Academic-evaluation-3"
                            />
                          </div>
                          <div class="form-check Academic-evaluation">
                            <label
                              class="form-check-label Academic-evaluation"
                              for="Academic-evaluation-4"
                            >
                              ادي الطالب المقرر بإمتياز
                            </label>
                            <input
                              class="form-check-input Academic-evaluation"
                              type="radio"
                              name="Academic-evaluation"
                              id="Academic-evaluation-4"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- two -->
                    <div
                      class="tab-pane fade"
                      id="pills-profile-1"
                      role="tabpanel"
                      aria-labelledby="pills-profile-tab"
                    >
                      <div class="Academic-evaluation">
                        <div class="head-Academic-evaluation">
                          <h4>ما هو تقييمك السلوكي للطالب ؟</h4>
                        </div>
                        <div class="radio Academic-evaluation">
                          <div class="form-check Academic-evaluation">
                            <label
                              class="form-check-label Academic-evaluation"
                              for="Academic-evaluation-5"
                            >
                              يحتاج متابعة من ولي الامر
                            </label>
                            <input
                              class="form-check-input Academic-evaluation"
                              type="radio"
                              name="Academic-evaluation"
                              id="Academic-evaluation-5"
                            />
                          </div>
                          <div class="form-check Academic-evaluation">
                            <label
                              class="form-check-label Academic-evaluation"
                              for="Academic-evaluation-6"
                            >
                              يبني علية التركيز اكثر
                            </label>
                            <input
                              class="form-check-input Academic-evaluation"
                              type="radio"
                              name="Academic-evaluation"
                              id="Academic-evaluation-6"
                            />
                          </div>
                          <div class="form-check Academic-evaluation">
                            <label
                              class="form-check-label Academic-evaluation"
                              for="Academic-evaluation-7"
                            >
                              مواظب و هادئ الطباع
                            </label>
                            <input
                              class="form-check-input Academic-evaluation"
                              type="radio"
                              name="Academic-evaluation"
                              id="Academic-evaluation-7"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button type="button" class="btn add">اضافة</button>
                </div>
                <div class="modal-footer"></div>
              </div>
            </div>
          </div>

          <!-- <script
                    src="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/11.7.22/sweetalert2.min.js"
                    integrity="sha512-pQdCIGAWAwzEHgw7boqX3wRNUqyaj7ta8qHsZ2yZtJofKqwSsh98Q+NJn96MAYCMcMnoZhdUo771JzaJCbrJMg=="
                    crossorigin="anonymous"
                    referrerpolicy="no-referrer"
                  ></script> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  name: "missedReports-index",
  methods: {
    blockAlert() {
      Swal.fire({
        html:
          '<h5 class="swal2-title">   لقم تمت الاضافه بنـجــاح </h5>' +
          '<p class="swal2-html-container">  </p>',
      });
    },
  },
};
</script>

<style>
</style>