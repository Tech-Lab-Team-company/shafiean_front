<template>
    <div class="container mt-5">
            <div style="text-align: right" class="head-name">تقارير الحضور والأنصراف</div>
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
                  الطلاب
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
                  المعلمين
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#contact-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="contact-tab-pane"
                  aria-selected="false"
                >
                  المشرفين
                </button>
              </li>
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
                        title="تقارير الطلاب"
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
                          <th class="th">اسم الطالب</th>
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
                            أحمد ابراهيم
                          </td>
                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
                          </td>

                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
                          </td>
                          <td>---</td>
                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
                          </td>
                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
                          </td>
                          <td>---</td>
                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
                          </td>
                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
                          </td>
                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
                          </td>
                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
                          </td>
                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
                          </td>
                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
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
                          <td class="id">
                            <!-- <input class="form-check-input" type="checkbox" value="" name="table">  -->
                            أحمد ابراهيم
                          </td>
                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
                          </td>

                          <td class="text-danger">
                            <i
                              class="fa-regular fa-circle-xmark text-danger"
                            ></i
                            >غياب
                          </td>
                          <td>---</td>
                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
                          </td>
                          <td class="text-danger">
                            <i
                              class="fa-regular fa-circle-xmark text-danger"
                            ></i
                            >غياب
                          </td>
                          <td>---</td>
                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
                          </td>
                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
                          </td>
                          <td class="text-danger">
                            <i
                              class="fa-regular fa-circle-xmark text-danger"
                            ></i
                            >غياب
                          </td>
                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
                          </td>
                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
                          </td>
                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
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
                          <td class="id">
                            <!-- <input class="form-check-input" type="checkbox" value="" name="table">  -->
                            أحمد ابراهيم
                          </td>
                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
                          </td>

                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
                          </td>
                          <td>---</td>
                          <td class="text-danger">
                            <i
                              class="fa-regular fa-circle-xmark text-danger"
                            ></i
                            >غياب
                          </td>
                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
                          </td>
                          <td>---</td>
                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
                          </td>
                          <td class="text-danger">
                            <i
                              class="fa-regular fa-circle-xmark text-danger"
                            ></i
                            >غياب
                          </td>
                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
                          </td>
                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
                          </td>
                          <td class="text-danger">
                            <i
                              class="fa-regular fa-circle-xmark text-danger"
                            ></i
                            >غياب
                          </td>
                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
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
                          <td class="id">
                            <!-- <input class="form-check-input" type="checkbox" value="" name="table">  -->
                            أحمد ابراهيم
                          </td>
                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
                          </td>

                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
                          </td>
                          <td>---</td>
                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
                          </td>
                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
                          </td>
                          <td>---</td>
                          <td class="text-danger">
                            <i
                              class="fa-regular fa-circle-xmark text-danger"
                            ></i
                            >غياب
                          </td>
                          <td class="text-danger">
                            <i
                              class="fa-regular fa-circle-xmark text-danger"
                            ></i
                            >غياب
                          </td>
                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
                          </td>
                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
                          </td>
                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
                          </td>
                          <td class="text-danger">
                            <i
                              class="fa-regular fa-circle-xmark text-danger"
                            ></i
                            >غياب
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
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="profile-tab-pane"
                role="tabpanel"
                aria-labelledby="profile-tab"
                tabindex="0"
              >
                <div class="table_details">
                  <!-- Start filters -->
                  <div class="filters">
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
                      <select
                        name=""
                        id=""
                        class="selectpicker form-control"
                        title="جميع المعلمين"
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
                        title="تقارير المعلم"
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
                          <th class="th">اسم المعلم</th>
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
                            أحمد ابراهيم
                          </td>
                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
                          </td>

                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
                          </td>
                          <td>---</td>
                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
                          </td>
                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
                          </td>
                          <td>---</td>
                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
                          </td>
                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
                          </td>
                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
                          </td>
                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
                          </td>
                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
                          </td>
                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
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
                                  <router-link to="/detailsTeachers"
                                    class="dropdown-item"
                             
                                    >عرض تفاصيل المعلم</router-link
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
                            أحمد ابراهيم
                          </td>
                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
                          </td>

                          <td class="text-danger">
                            <i
                              class="fa-regular fa-circle-xmark text-danger"
                            ></i
                            >غياب
                          </td>
                          <td>---</td>
                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
                          </td>
                          <td class="text-danger">
                            <i
                              class="fa-regular fa-circle-xmark text-danger"
                            ></i
                            >غياب
                          </td>
                          <td>---</td>
                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
                          </td>
                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
                          </td>
                          <td class="text-danger">
                            <i
                              class="fa-regular fa-circle-xmark text-danger"
                            ></i
                            >غياب
                          </td>
                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
                          </td>
                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
                          </td>
                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
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
                                  <router-link to="/detailsTeachers"
                                    class="dropdown-item"
                             
                                    >عرض تفاصيل المعلم</router-link
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
                            أحمد ابراهيم
                          </td>
                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
                          </td>

                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
                          </td>
                          <td>---</td>
                          <td class="text-danger">
                            <i
                              class="fa-regular fa-circle-xmark text-danger"
                            ></i
                            >غياب
                          </td>
                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
                          </td>
                          <td>---</td>
                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
                          </td>
                          <td class="text-danger">
                            <i
                              class="fa-regular fa-circle-xmark text-danger"
                            ></i
                            >غياب
                          </td>
                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
                          </td>
                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
                          </td>
                          <td class="text-danger">
                            <i
                              class="fa-regular fa-circle-xmark text-danger"
                            ></i
                            >غياب
                          </td>
                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
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
                                  <router-link to="/detailsTeachers"
                                    class="dropdown-item"
                             
                                    >عرض تفاصيل المعلم</router-link
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
                            أحمد ابراهيم
                          </td>
                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
                          </td>

                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
                          </td>
                          <td>---</td>
                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
                          </td>
                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
                          </td>
                          <td>---</td>
                          <td class="text-danger">
                            <i
                              class="fa-regular fa-circle-xmark text-danger"
                            ></i
                            >غياب
                          </td>
                          <td class="text-danger">
                            <i
                              class="fa-regular fa-circle-xmark text-danger"
                            ></i
                            >غياب
                          </td>
                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
                          </td>
                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
                          </td>
                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
                          </td>
                          <td class="text-danger">
                            <i
                              class="fa-regular fa-circle-xmark text-danger"
                            ></i
                            >غياب
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
                                  <router-link to="/detailsTeachers"
                                    class="dropdown-item"
                             
                                    >عرض تفاصيل المعلم</router-link
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
              <div
                class="tab-pane fade"
                id="contact-tab-pane"
                role="tabpanel"
                aria-labelledby="contact-tab"
                tabindex="0"
              >
                <div class="table_details">
                  <!-- Start filters -->
                  <div class="filters">
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
                      <select
                        name=""
                        id=""
                        class="selectpicker form-control"
                        title="جميع المشرفين"
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
                        title="تقارير المشرف"
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
                          <th class="th">اسم المشرف</th>
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
                            أحمد ابراهيم
                          </td>
                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
                          </td>

                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
                          </td>
                          <td>---</td>
                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
                          </td>
                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
                          </td>
                          <td>---</td>
                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
                          </td>
                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
                          </td>
                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
                          </td>
                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
                          </td>
                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
                          </td>
                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
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
                                  <router-link to="/moderatots"
                                    class="dropdown-item"
                                    
                                    >عرض تفاصيل المشرف</router-link>
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
                            أحمد ابراهيم
                          </td>
                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
                          </td>

                          <td class="text-danger">
                            <i
                              class="fa-regular fa-circle-xmark text-danger"
                            ></i
                            >غياب
                          </td>
                          <td>---</td>
                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
                          </td>
                          <td class="text-danger">
                            <i
                              class="fa-regular fa-circle-xmark text-danger"
                            ></i
                            >غياب
                          </td>
                          <td>---</td>
                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
                          </td>
                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
                          </td>
                          <td class="text-danger">
                            <i
                              class="fa-regular fa-circle-xmark text-danger"
                            ></i
                            >غياب
                          </td>
                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
                          </td>
                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
                          </td>
                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
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
                                  <router-link to="/moderatots"
                                    class="dropdown-item"
                                    
                                    >عرض تفاصيل المشرف</router-link>
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
                            أحمد ابراهيم
                          </td>
                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
                          </td>

                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
                          </td>
                          <td>---</td>
                          <td class="text-danger">
                            <i
                              class="fa-regular fa-circle-xmark text-danger"
                            ></i
                            >غياب
                          </td>
                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
                          </td>
                          <td>---</td>
                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
                          </td>
                          <td class="text-danger">
                            <i
                              class="fa-regular fa-circle-xmark text-danger"
                            ></i
                            >غياب
                          </td>
                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
                          </td>
                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
                          </td>
                          <td class="text-danger">
                            <i
                              class="fa-regular fa-circle-xmark text-danger"
                            ></i
                            >غياب
                          </td>
                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
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
                                  <router-link to="/moderatots"
                                    class="dropdown-item"
                                    
                                    >عرض تفاصيل المشرف</router-link>
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
                            أحمد ابراهيم
                          </td>
                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
                          </td>

                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
                          </td>
                          <td>---</td>
                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
                          </td>
                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
                          </td>
                          <td>---</td>
                          <td class="text-danger">
                            <i
                              class="fa-regular fa-circle-xmark text-danger"
                            ></i
                            >غياب
                          </td>
                          <td class="text-danger">
                            <i
                              class="fa-regular fa-circle-xmark text-danger"
                            ></i
                            >غياب
                          </td>
                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
                          </td>
                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
                          </td>
                          <td class="text-success">
                            <i
                              class="fa-regular fa-circle-check text-success"
                            ></i
                            >حضور
                          </td>
                          <td class="text-danger">
                            <i
                              class="fa-regular fa-circle-xmark text-danger"
                            ></i
                            >غياب
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
                                  <router-link to="/moderatots"
                                    class="dropdown-item"
                                    
                                    >عرض تفاصيل المشرف</router-link>
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
            </div>
          </div>
</template>

<script>
export default {
name : 'reports-attendance'
}
</script>

<style>

</style>