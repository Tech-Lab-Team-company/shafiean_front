<template>

<section class="content">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-12">
              <div class="welcome">
                <h5>صباح الخير 😄</h5>
              </div>
            </div>
            <div class="col-lg-12 col-md-12 col-12" style="text-align: start; ">
              <div class="buton-index">
                <router-link  to="/groups"   class="btn btn_title_page"> المجموعات</router-link>
                <router-link to="/Lessons"  class="btn btn_title_page">الدروس</router-link>
                <router-link to="/exams"  class="btn btn_title_page good">
                  الأختبارات</router-link
                >
                <router-link to="/Assignment" class="btn btn_title_page">
                  الواجبات</router-link
                >
                <router-link to="/students" class="btn btn_title_page"> الطلاب</router-link>
                <router-link to="/teachers" class="btn btn_title_page"> المعلمين</router-link>
                <router-link to="/parents" class="btn btn_title_page"> أولياء الأمور</router-link>
                <router-link to="/moderatots"  class="btn btn_title_page"> المشرفين</router-link>
                <router-link to=""  class="btn btn_title_page"> التقارير العامه</router-link>
                <a href="contests.html" class="btn btn_title_page"
                  >المسابقات
                </a>
              </div>
            </div>
            <div class="col-lg-8 col-md-12 col-12 px-4">
              <div class="statistics">
                <!-- ======== card statistics ======== -->
                <div class="card_statistics">
                  <div class="d-flex justify-content-between">
                    <i class="fa-solid fa-users"></i>
                    <p class="counter">5,622</p>
                  </div>
                  <div class="d-flex justify-content-between">
                    <span>اجمالى عدد الطلاب</span>
                    <i class="fa-solid fa-arrow-trend-up"></i>
                  </div>
                </div>
                <!-- ======== card statistics ======== -->

                <!-- ======== card statistics ======== -->
                <div class="card_statistics">
                  <div class="d-flex justify-content-between">
                    <i class="fa-solid fa-user-check"></i>
                    <p class="counter">250</p>
                  </div>
                  <div class="d-flex justify-content-between">
                    <span>اجمالى المعلمين</span>
                    <i class="fa-solid fa-arrow-trend-up"></i>
                  </div>
                </div>
                <!-- ======== card statistics ======== -->

                <!-- ======== card statistics ======== -->
                <div class="card_statistics">
                  <div class="d-flex justify-content-between">
                    <i class="fa-solid fa-circle"></i>
                    <p class="counter">168</p>
                  </div>
                  <div class="d-flex justify-content-between">
                    <span>اجمالى الانضمامات</span>
                    <i class="fa-solid fa-arrow-trend-up"></i>
                  </div>
                </div>
                <!-- ======== card statistics ======== -->
              </div>
              <div class="percentage_jobs">
                <h5>معدل التفاعل مع المنصة</h5>
                <!-- <div class="chart-container">
                  <canvas id="percentageJobs"></canvas>
                </div> -->

                <!-- ============chart============ -->
                <div class="card" >
        <Chart type="bar" style="height: 700px" :data="chartData" :options="chartOptions" class="h-[30rem]"  />
    </div>

             
              </div>
              <div class="last_job">
                <h5>الدروس المباشرة</h5>
                <div class="row">
                  <!-- ====== card job ====== -->
                  <div class="col-md-6 col-12">
                    <div class="card_job">
                      <div class="pict">
                        <img src="../../assets/media/Group 73024.png" alt="" />
                      </div>
                      <div class="con" style="text-align: right">
                        <h6 class="title">
                          درس على الجزء الأول من سورة البقرة الاية (1-25)
                          بالتجويد
                        </h6>
                        <span class="name">أ-أحمد عادل , فقه وشريعة</span>
                        <p>
                          <span><i class="fa-regular fa-user"></i></span>مجموعة
                          العهد الحديث
                        </p>
                        <div class="date">
                          <i class="fa-solid fa-calendar-days"></i>
                          <span>:تاريخ الدرس : </span>
                          <h6>مايو22 , 2022</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- ====== card job ====== -->

                  <!-- ====== card job ====== -->
                  <div class="col-md-6 col-12">
                    <div class="card_job">
                      <div class="pict">
                        <img src="../../assets/media/Group 73024.png" alt="" />
                      </div>
                      <div class="con" style="text-align: right">
                        <h6 class="title">
                          درس على الجزء الأول من سورة البقرة الاية (1-25)
                          بالتجويد
                        </h6>
                        <span class="name">أ-أحمد عادل , فقه وشريعة</span>
                        <p>
                          <span><i class="fa-regular fa-user"></i></span>مجموعة
                          العهد الحديث
                        </p>
                        <div class="date">
                          <i class="fa-solid fa-calendar-days"></i>
                          <span>:تاريخ الدرس : </span>
                          <h6>مايو22 , 2022</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- ====== card job ====== -->
                </div>
              </div>
              <div class="percentage_projects">
                <div class="d-flex justify-content-between">
                  <h5>نسبة الالتزام لدي الطلاب</h5>
                  <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link active"
                        id="pills-day-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-day"
                        type="button"
                        role="tab"
                        aria-controls="pills-day"
                        aria-selected="true"
                      >
                        يوميا
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link"
                        id="pills-week-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-week"
                        type="button"
                        role="tab"
                        aria-controls="pills-week"
                        aria-selected="false"
                      >
                        اسبوعيا
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link"
                        id="pills-month-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-month"
                        type="button"
                        role="tab"
                        aria-controls="pills-month"
                        aria-selected="false"
                      >
                        شهريا
                      </button>
                    </li>
                  </ul>
                </div>
                <div class="tab-content" id="pills-tabContent">
                  <div
                    class="tab-pane fade show active"
                    id="pills-day"
                    role="tabpanel"
                    aria-labelledby="pills-day-tab"
                    tabindex="0"
                  >
                    <div class="chart-containers">
                      <canvas id="percentageProjectsDay"></canvas>
                      
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="pills-week"
                    role="tabpanel"
                    aria-labelledby="pills-week-tab"
                    tabindex="0"
                  >
                    <div class="chart-containers">
                      <canvas id="percentageProjectsWeek"></canvas>
                      
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="pills-month"
                    role="tabpanel"
                    aria-labelledby="pills-month-tab"
                    tabindex="0"
                  >
                    <div class="chart-containers">
                      <canvas id="percentageProjectsMonth"></canvas>
             
                    </div>
                  </div>
                </div>
              </div>
              <div class="team_shift">
                <div class="d-flex justify-content-between align-items-center">
                  <h5>الطلاب المنضمين حديثا</h5>
                  <router-link to="/students" class="btn">عرض الكل</router-link>
                </div>
                <!-- ======= table team ======= -->
                <div class="table-responsive">
                  <table class="table" style="text-align: start">
                    <thead>
                      <tr>
                        <th scope="col">الإسم</th>
                        <th scope="col">مستوي الاعاقة</th>
                        <th scope="col">المجموعة</th>
                        <th scope="col">تاريخ الانضمام</th>
                      </tr>
                    </thead>
                    <tbody>
                      <!-- For loop this details team -->
                      <tr>
                        <td class="name">
                          <div class="details_team">
                            <!-- <img src="./media/image/7w7w.jpg" alt="person" /> -->
                            <div class="contact">
                              <p>Ahmed Hawam</p>
                              <span>010575937363</span>
                            </div>
                          </div>
                        </td>
                        <td data-label="المستوي الوظيفي">إعاقة سمعية</td>
                        <td data-label="رقم الهاتف">مجموعة العهد الحديث</td>
                        <td data-label="نوع العمل">
                          <span class="type_work total">مارس22, 2012</span>
                        </td>
                      </tr>
                      <!-- For loop this details team -->
                      <tr>
                        <td class="name">
                          <div class="details_team">
                            <!-- <img src="./media/image/7w7w.jpg" alt="person" /> -->
                            <div class="contact">
                              <p>Ahmed Hawam</p>
                              <span>010575937363</span>
                            </div>
                          </div>
                        </td>
                        <td data-label="المستوي الوظيفي">إعاقة سمعية</td>
                        <td data-label="رقم الهاتف">مجموعة العهد الحديث</td>
                        <td data-label="نوع العمل">
                          <span class="type_work total">مارس22, 2012</span>
                        </td>
                      </tr>
                      <tr>
                        <td class="name">
                          <div class="details_team">
                            <!-- <img src="./media/image/7w7w.jpg" alt="person" /> -->
                            <div class="contact">
                              <p>Ahmed Hawam</p>
                              <span>010575937363</span>
                            </div>
                          </div>
                        </td>
                        <td data-label="المستوي الوظيفي">إعاقة سمعية</td>
                        <td data-label="رقم الهاتف">مجموعة العهد الحديث</td>
                        <td data-label="نوع العمل">
                          <span class="type_work total">مارس22, 2012</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!-- ======= table team ======= -->
              </div>
              <div class="employment_rates">
                <div
                  class="d-flex justify-content-between align-items-center mb-4"
                >
                  <h5>معدل تفاعل أولياء الأمور مع الابناء</h5>
                </div>
                <div class="chart-containers">
                  <canvas id="Rates"></canvas>
            
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-12 col-12">
              <div class="left_content">
                <!-- Start best performance job -->
                <div class="best_job">
                  <h5>أكثر المجموعات نشاطا</h5>
                </div>
                <!-- End best performance job -->

                <!-- Start best performance project -->
                <div class="best_project">
                  <!-- Start Card project -->
                  <div class="card_project">
                    <div class="percentage_bar" data-percent="90%">
                      <div class="bar">
                        <div class="title">مجموعة العهد الحديث</div>
                        <div class="number_person">
                          <i class="fa-solid fa-people-group"></i>
                          <span>40</span>
                        </div>
                      </div>
                      <div class="percent">90%</div>
                    </div>
                  </div>
                  <!-- End Card project -->

                  <!-- Start Card project -->
                  <div class="card_project">
                    <div class="percentage_bar" data-percent="70%">
                      <div class="bar">
                        <div class="title">مجموعة الطالب المتفوق</div>
                        <div class="number_person">
                          <i class="fa-solid fa-people-group"></i>
                          <span>20</span>
                        </div>
                      </div>
                      <div class="percent">70%</div>
                    </div>
                  </div>
                  <!-- End Card project -->

                  <!-- Start Card project -->
                  <div class="card_project">
                    <div class="percentage_bar" data-percent="50%">
                      <div class="bar">
                        <div class="title">مجموعة الشطار</div>
                        <div class="number_person">
                          <i class="fa-solid fa-people-group"></i>
                          <span>30</span>
                        </div>
                      </div>
                      <div class="percent">50%</div>
                    </div>
                  </div>
                  <!-- End Card project -->
                
                  <!-- End best performance project -->
                </div>
                <!-- End best performance project -->
                <div class="average">
                  <circle-progress value="75" max="100"></circle-progress>
                  <div class="text-average">
                    <h4>معدل تزايد الطلاب على المنصة</h4>
                  </div>
                </div>
                <div class="average" style="margin-top: 10px">
                  <circle-progress value="50" max="100"></circle-progress>
                  <div class="text-average">
                    <h4>معدل التفاعل بين الطلاب والمدرسين</h4>
                  </div>
                </div>
                <!-- Start Region project -->
                <div class="region_project">
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <h5>افضل الأماكن تفاعل مع المنصة</h5>
                    <div class="dropdown">
                      <a
                        class="btn dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        السعودية
                      </a>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">السعودية</a></li>
                        <li><a class="dropdown-item" href="#">مصر</a></li>
                        <li><a class="dropdown-item" href="#">الامارات</a></li>
                      </ul>
                    </div>
                  </div>
                  <img src="../../assets/media/image/map.png" alt="map" />
                  <div>
                    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col">المدينة</th>
                          <th scope="col">عدد المدرسن</th>
                          <th scope="col">عدد الطلاب</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>الرياض</td>
                          <td>22</td>
                          <td>200</td>
                        </tr>
                        <tr>
                          <td>الدمام</td>
                          <td>50</td>
                          <td>400</td>
                        </tr>
                        <tr>
                          <td>الخبر</td>
                          <td>60</td>
                          <td>200</td>
                        </tr>
                        <tr>
                          <td>المدينة</td>
                          <td>22</td>
                          <td>200</td>
                        </tr>
                        <tr>
                          <td>مكة</td>
                          <td>22</td>
                          <td>200</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <!-- End Region project -->

                <!-- Start accuracy in completing projects -->
                <div class="accuracy_projects">
                  <div class="text-chart">
                    <h4>70,5%</h4>
                    <p>دقة الوقت</p>
                  </div>
                  <canvas id="circel"></canvas>
                </div>
              </div>
            </div>
          </div>


          

          <!-- End accuracy in completing projects -->
        </section>
</template>

<script>


import Chart from 'primevue/chart';


export default {
  components: {
    Chart
  },

  data() {
        return {  
            chartData: null,
            chartOptions: null
        };
    },
    mounted() {
        this.chartData = this.setChartData();
        this.chartOptions = this.setChartOptions();
    },
    methods: {
        setChartData() {

            return {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                      type: "line",
                        label: "اجراء المهام",
                        backgroundColor: "#3F3F44",
                        borderColor: "#3F3F44",
                        borderWidth: 1,
                        data: [6, 9, 7, 3, 10, 7, 4, 6, 7, 10, 8],
                    },
                    {
                        type: "bar",
                        label: "تفاعل أولياء الامور",
                          backgroundColor: "#21765E",
                          borderColor: "#21765E",
                        borderWidth: 1,
                        data: [10, 7, 4, 6, 9, 7, 3, 10, 13, 8, 11],
                      },
                      {
                        type: "bar",
                        label: "انضمام الطلاب",
                        backgroundColor: "#E8EFED",
                        borderColor: "#E8EFED",
                        borderWidth: 1,
                        tension: 0.1,
                        data: [6, 9, 7, 3, 10, 7, 4, 6, 7, 10, 8],
                      },
                ]
            };
        },
        setChartOptions() {
            const documentStyle = getComputedStyle(document.documentElement);
            const textColor = documentStyle.getPropertyValue('--p-text-color');
            const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
            const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

            return {
                maintainAspectRatio: false,
                aspectRatio: 0.8,
                plugins: {
                    legend: {
                        labels: {
                            color: textColor
                        }
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            color: textColorSecondary,
                            font: {
                                weight: 500
                            }
                        },
                        grid: {
                            display: false,
                            drawBorder: false
                        }
                    },
                    y: {
                        ticks: {
                            color: textColorSecondary
                        },
                        grid: {
                            color: surfaceBorder,
                            drawBorder: false
                        }
                    }
                }
            };
        }
    }


};
</script>

<style>
</style>