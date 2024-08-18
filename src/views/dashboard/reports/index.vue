<template>
  <div class="container mt-5">
    <div class="d-flex justify-content-between align-items-center">
      <h5 class="title_section">التقارير الخاصة بمنصة شفيعا</h5>
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
          التقارير العامة
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
        <div class="row">
          <div class="col-lg-8 col-md-12 col-12">
            <div class="completion_projects">
              <h5 style="text-align: right">أكثر أماكن يتواجد بها الطلاب</h5>
              <!-- Start progress bar -->
              <div class="progress_bar_project">
                <div class="d-flex justify-content-between">
                  <h6 class="name">الدمام</h6>
                  <div class="percent">44%</div>
                </div>
                <div class="percentage_bar" data-percent="44%">
                  <div class="bar"></div>
                </div>
              </div>
              <!-- End progress bar -->

              <!-- Start progress bar -->
              <div class="progress_bar_project">
                <div class="d-flex justify-content-between">
                  <h6 class="name">المدينة المنورة</h6>
                  <div class="percent">64%</div>
                </div>
                <div class="percentage_bar" data-percent="64%">
                  <div class="bar"></div>
                </div>
              </div>
              <!-- End progress bar -->

              <!-- Start progress bar -->
              <div class="progress_bar_project">
                <div class="d-flex justify-content-between">
                  <h6 class="name">مكة المكرمة</h6>
                  <div class="percent">34%</div>
                </div>
                <div class="percentage_bar" data-percent="34%">
                  <div class="bar"></div>
                </div>
              </div>
              <!-- End progress bar -->

              <!-- Start progress bar -->
              <div class="progress_bar_project">
                <div class="d-flex justify-content-between">
                  <h6 class="name">القسيم</h6>
                  <div class="percent">74%</div>
                </div>
                <div class="percentage_bar" data-percent="74%">
                  <div class="bar"></div>
                </div>
              </div>
              <!-- End progress bar -->

              <!-- Start progress bar -->
              <div class="progress_bar_project">
                <div class="d-flex justify-content-between">
                  <h6 class="name">الخبر</h6>
                  <div class="percent">90%</div>
                </div>
                <div class="percentage_bar" data-percent="90%">
                  <div class="bar"></div>
                </div>
              </div>
              <!-- End progress bar -->
              <!-- <script>
                $(document).ready(function () {
                  $(".percentage_bar").each(function () {
                    $(this)
                      .find(".bar")
                      .animate(
                        {
                          width: $(this).attr("data-percent"),
                        },
                        3000
                      );
                  });
                });
              </script> -->
            </div>
          </div>
          <div class="col-lg-4 col-md-12 col-12">
            <div class="percentage_jobs-repot">
              <h5 style="text-align: right">معدل حضور الدروس المباشرة</h5>


              <div class="card" >
        <Chart type="bar" style="height: 365px;" :data="chartData" :options="chartOptions" class="h-[30rem]"  />
    </div>
<!--     
                  <div class="chart-container">
                    <canvas id="percentageJobs"></canvas>
                  </div> -->

              <!-- <script>
                var barChartDatareport = {
                  labels: ["نوفمبر", "ديسمبر", "يناير", "فبراير", "مارس"],
                  datasets: [
                    {
                      type: "bar",
                      label: "الغياب",
                      backgroundColor: "#B2D23F",
                      borderColor: "#21765E",
                      borderWidth: 1,
                      data: [10, 7, 4, 6, 9, 7, 3, 10, 13, 8, 11],
                    },
                    {
                      type: "bar",
                      label: "الحضور",
                      backgroundColor: "#24684F",
                      borderColor: "#E8EFED",
                      borderWidth: 1,
                      tension: 0.1,
                      data: [6, 9, 7, 3, 10, 7, 4, 6, 7, 10, 8],
                    },
                  ],
                };

                var chartOptionsreport = {
                  responsive: true,
                  maintainAspectRatio: false,
                  legend: {
                    position: "top",
                  },
                  title: {
                    display: true,
                    text: "Chart.js Bar Chart",
                  },
                };
              </script> -->
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-12 col-12">
            <div class="region_project-report">
              <div class="d-flex justify-content-between align-items-center">
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
                    <li>
                      <a class="dropdown-item" href="#">السعودية</a>
                    </li>
                    <li><a class="dropdown-item" href="#">مصر</a></li>
                    <li>
                      <a class="dropdown-item" href="#">الامارات</a>
                    </li>
                  </ul>
                </div>
              </div>
              <img src="../../../assets/media/image/map.png" alt="map" />
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
          </div>
          <div class="col-lg-8 col-md-12 col-12">
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
                    <!-- <script>
                      var barChartDataProjectsDay = {
                        labels: [
                          "sat",
                          "sun",
                          "mon",
                          "tue",
                          "wed",
                          "thu",
                          "fri",
                        ],
                        datasets: [
                          {
                            type: "line",
                            label: "تفاعل الطلاب",
                            backgroundColor: "rgba(36, 104, 79, .1)",
                            borderColor: "#24684F",
                            fill: true,
                            borderWidth: 1,
                            tension: 0.1,
                            data: [10, 7, 5, 6, 9, 7, 8],
                          },
                          {
                            type: "line",
                            label: "انضمام الطلاب",
                            backgroundColor: "#68245D",
                            borderColor: "#68245D",
                            borderWidth: 1,
                            tension: 0.1,
                            data: [6, 9, 7, 5, 10, 9, 8],
                          },
                        ],
                      };

                      var chartOptionsProjectsDay = {
                        responsive: true,
                        legend: {
                          position: "top",
                        },
                        title: {
                          display: true,
                          text: "Chart.js Bar Chart",
                        },
                      };
                    </script> -->
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
    
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="percentage_jobs">
              <h5>معدل التفاعل مع المنصة</h5>



              <div class="card" >
        <Chart type="bar" style="height: 700px;" :data="chartData" :options="chartOptions" class="h-[60rem]"  />
    </div>



              <div class="chart-container">
                <canvas id="reports"></canvas>
              </div>

              <!-- ============chart============ -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from "primevue/chart";
export default {
  name: "reports-index",
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
                      type: "bar",
                        label: "الغياب",
                        backgroundColor: "#b2d23f",
                        borderColor: "#b2d23f",
                        borderWidth: 1,
                        data: [6, 9, 7, 3, 10, 7, 4, 6, 7, 10, 8],
                    },
                    {
                        type: "bar",
                        label: " الحضور ",
                          backgroundColor: "#21765E",
                          borderColor: "#21765E",
                        borderWidth: 1,
                        data: [10, 7, 4, 6, 9, 7, 3, 10, 13, 8, 11],
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