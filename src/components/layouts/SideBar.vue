<template>
  <section class="sidebar open">
    <ul
      class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
      id="menu"
    >
      <li class="nav-item">
        <a href="/git " class="nav-link align-middle">
          <img src="../../assets/media/image/icon/home.svg" alt="" />
          <span>الرئيسية</span>
        </a>
      </li>
      <li class="nav-item">
        <a
          href="#submenueducations"
          data-bs-toggle="collapse"
          class="nav-link accordion-button align-middle collapsed"
        >
          <img
            src="../../assets/media/image/icon/book-2-svgrepo-com.svg"
            alt=""
          />
          <span>القسم التعليمي</span>
          <i class="fa-solid fa-angle-up"></i>
        </a>
        <ul
          class="collapse flex-column"
          id="submenueducations"
          data-bs-parent="#menu"
        >
          <li class="nav-item">
            <router-link to="/steps" class="nav-link align-middle">
              <span>المراحل الدراسية</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/subjects" class="nav-link align-middle">
              <span>المواد</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/groups" class="nav-link align-middle">
              <span>المجموعات</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/lessons" class="nav-link align-middle">
              <span>الدروس</span>
            </router-link>
          </li>
        </ul>
      </li>
      <li class="nav-item">
        <a
          href="#submenulessones"
          data-bs-toggle="collapse"
          class="nav-link accordion-button align-middle collapsed"
        >
          <img src="../../assets/media/image/icon/exams.svg" alt="icon" />
          <span>الأمتحانات</span>
          <i class="fa-solid fa-angle-up"></i>
        </a>
        <ul
          class="collapse flex-column"
          id="submenulessones"
          data-bs-parent="#menu"
        >
          <li class="nav-item">
            <router-link to="/exams" class="nav-link align-middle">
              <span>الاختبارات</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/questions" class="nav-link align-middle">
              <span>الاسالة التفاعلية</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/Assignment" class="nav-link align-middle">
              <span>الواجبات</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/Questionbank" class="nav-link align-middle">
              <span>بنك الاسئله</span>
            </router-link>
          </li>
        </ul>
      </li>
      <li class="nav-item">
        <a
          href="#submenuuser"
          data-bs-toggle="collapse"
          class="nav-link accordion-button align-middle collapsed"
        >
          <img src="../../assets/media/image/icon/teachers.svg" alt="icon" />
          <span>المستخدمين</span>
          <i class="fa-solid fa-angle-up"></i>
        </a>
        <ul
          class="collapse flex-column"
          id="submenuuser"
          data-bs-parent="#menu"
        >
          <li class="nav-item">
            <a href="students.html" class="nav-link align-middle">
              <span>الطلاب</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="mangestudent.html" class="nav-link align-middle">
              <span>ادارة طلابات التسجيل</span>
            </a>
          </li>

          <li class="nav-item">
            <a href="teachers.html" class="nav-link align-middle">
              <span>المعلمين</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="parents.html" class="nav-link align-middle">
              <span>أولياء الامور</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="Moderators.html" class="nav-link align-middle">
              <span>المشرفين</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="manage.html" class="nav-link align-middle">
              <span>الاداره</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="Jobs.html" class="nav-link align-middle">
              <span>الوظائف</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="permations.html" class="nav-link align-middle">
              <span>الادوار</span>
            </a>
          </li>
        </ul>
      </li>

      <li class="nav-item">
        <a
          href="#submenuWebsite"
          data-bs-toggle="collapse"
          class="nav-link accordion-button align-middle collapsed"
        >
          <img
            src="../../assets/media/image/icon/internet-3-svgrepo-com.svg"
            alt="icon"
          />
          <span>الموقع الأكتروني</span>
          <i class="fa-solid fa-angle-up"></i>
        </a>
        <ul
          class="collapse flex-column"
          id="submenuWebsite"
          data-bs-parent="#menu"
        >
          <li>
            <a href="slider.html" class="nav-link">
              <span>اضافة اسليدر</span></a
            >
          </li>
          <li>
            <a href="who-are-we.html" class="nav-link"> <span>من نحن</span></a>
          </li>
          <li>
            <a href="Success-Partners.html" class="nav-link">
              <span>شركاء النجاح</span></a
            >
          </li>
          <li>
            <a href="Services.html" class="nav-link"> <span>الخدمات</span></a>
          </li>
          <li>
            <a href="Teacher-application.html" class="nav-link">
              <span>تطبيق المعلم</span></a
            >
          </li>
          <li>
            <a href="Student-application.html" class="nav-link">
              <span>تطبيق الطالب</span></a
            >
          </li>
          <li>
            <a href="Guardian-application.html" class="nav-link">
              <span>تطبيق ولي الأمر</span></a
            >
          </li>
        </ul>
      </li>
      <li class="nav-item">
        <a
          href="#submenuWebsite-2"
          data-bs-toggle="collapse"
          class="nav-link accordion-button align-middle collapsed"
        >
          <img
            src="../../assets/media/image/icon/blog-solid-svgrepo-com.svg"
            alt=""
          />
          <span>المدونه</span>
          <i class="fa-solid fa-angle-up"></i>
        </a>
        <ul
          class="collapse flex-column"
          id="submenuWebsite-2"
          data-bs-parent="#menu"
        >
          <li>
            <a href="View-blog.html" class="nav-link">
              <span>عرض المدونه</span></a
            >
          </li>
          <li>
            <a href="sections.html" class="nav-link"> <span>الأقسام</span></a>
          </li>
          <li>
            <a href="Hashtag.html" class="nav-link"> <span>الهشتاج</span></a>
          </li>
          <li>
            <a href="add-blog.html" class="nav-link">
              <span>اضافة مدونه</span></a
            >
          </li>
        </ul>
      </li>
      <li class="nav-item">
        <a
          href="#submenuWebsite-1"
          data-bs-toggle="collapse"
          class="nav-link accordion-button align-middle collapsed"
        >
          <img
            src="../../assets/media/image/icon/reports-svgrepo-com.svg"
            alt="icon"
          />
          <span>التقارير</span>
          <i class="fa-solid fa-angle-up"></i>
        </a>
        <ul
          class="collapse flex-column"
          id="submenuWebsite-1"
          data-bs-parent="#menu"
        >
          <li>
            <a href="Public-reports.html" class="nav-link">
              <span>التقارير العامه</span></a
            >
          </li>
          <li>
            <a href="Achievements-reports.html" class="nav-link">
              <span>تقارير الأنجازات</span></a
            >
          </li>
          <li>
            <a href="Attendance-and-departure reports.html" class="nav-link">
              <span>تقارير الحضور والأنصراف</span></a
            >
          </li>
          <li>
            <a href="Exam-reports.html" class="nav-link">
              <span>تقارير الأمتحانات</span></a
            >
          </li>
          <li>
            <a href="Competition-reports.html" class="nav-link">
              <span>تقارير المسابقات</span></a
            >
          </li>
          <li>
            <a href="Behavioral-reports.html" class="nav-link">
              <span>تقارير السلوكيه</span></a
            >
          </li>
          <li>
            <a href="Academic-reports.html" class="nav-link">
              <span>تقارير الاكادميه</span></a
            >
          </li>
          <li>
            <a href="Missed-reports.html" class="nav-link">
              <span>التقارير الفائته</span></a
            >
          </li>
          <li>
            <a href="Detailed_reports.html" class="nav-link">
              <span>التقارير التفصيليه</span></a
            >
          </li>
          <li>
            <a href="Association_reports.html" class="nav-link">
              <span>التقارير الجمعيه أو المدرسه</span></a
            >
          </li>
        </ul>
      </li>

      <li class="nav-item">
        <router-link to="/archives" class="nav-link align-middle">
          <img
            src="../../assets/media/image/icon/archives-copy-svgrepo-com.svg"
            alt="icon"
          />
          <span>الأرشيف</span>
        </router-link>
      </li>
      <li class="nav-item">
        <a href="contests.html" class="nav-link align-middle">
          <img
            src="../../assets/media/image/icon/cup-star-svgrepo-com.svg"
            alt=""
          />
          <span>المسابقات</span>
        </a>
      </li>
      <li class="nav-item">
        <a href="Electronic-library.html" class="nav-link align-middle">
          <img
            src="../../assets/media/image/icon/electricity-measurement-svgrepo-com.svg"
            alt=""
          />
          <span>المكتبه الألكترونيه</span>
        </a>
      </li>
      <li class="nav-item">
        <a href="Complaints.html" class="nav-link align-middle">
          <img
            src="../../assets/media/image/icon/customer-problem-svgrepo-com.svg"
            alt=""
          />
          <span>الشكاوي</span>
        </a>
      </li>
      <li class="nav-item">
        <a href="General-Settings.html" class="nav-link align-middle">
          <!-- <img src="./media/image/icon/setting.svg" alt="icon" /> -->
          <span>الاعدادات العامة</span>
        </a>
      </li>
    </ul>
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
  </section>
</template>

<script>
export default {};
</script>

<style></style>
