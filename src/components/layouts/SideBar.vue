<template>
  <section class="sidebar open">
    <ul
      class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
      id="menu"
    >
      <li class="nav-item">
        <router-link to="/" class="nav-link align-middle">
          <img src="../../assets/media/image/icon/home.svg" alt="" />
          <span>الرئيسية</span>
        </router-link>
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
            <router-link to="/students" class="nav-link align-middle">
              <span>الطلاب</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/mangestudent" class="nav-link align-middle">
              <span>ادارة طلابات التسجيل</span>
            </router-link>
          </li>

          <li class="nav-item">
            <router-link to="/teachers" class="nav-link align-middle">
              <span>المعلمين</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/parents" class="nav-link align-middle">
              <span>أولياء الامور</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/moderatots" class="nav-link align-middle">
              <span>المشرفين</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/manage" class="nav-link align-middle">
              <span>الاداره</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/jobs" class="nav-link align-middle">
              <span>الوظائف</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/permations" class="nav-link align-middle">
              <span>الادوار</span>
            </router-link>
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
            <router-link to="/sliders" class="nav-link">
              <span>اضافة اسليدر</span></router-link
            >
          </li>
          <li>
            <router-link to="/whoarewe" class="nav-link"> <span>من نحن</span></router-link>
          </li>
          <li>
            <router-link to="/success" class="nav-link">
              <span>شركاء النجاح</span></router-link
            >
          </li>
          <li>
            <router-link to="/services" class="nav-link"> <span>الخدمات</span></router-link>
          </li>
          <li>
            <router-link to="/teacherapp" class="nav-link">
              <span>تطبيق المعلم</span></router-link
            >
          </li>
          <li>
            <router-link to="/studentapp" class="nav-link">
              <span>تطبيق الطالب</span></router-link
            >
          </li>
          <li>
            <router-link to="/guardianapp" class="nav-link">
              <span>تطبيق ولي الأمر</span></router-link> 
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
            <router-link to="/viewblog" class="nav-link">
              <span>عرض المدونه</span></router-link
            >
          </li>
          <li>
            <router-link to="/sections" class="nav-link"> <span>الأقسام</span></router-link>
          </li>
          <li>
            <router-link to="/hashtags" class="nav-link"> <span>الهشتاج</span></router-link>
          </li>
          <li>
            <router-link to="/addviewblog" class="nav-link">
              <span>اضافة مدونه</span></router-link
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
            <router-link to="/reports" class="nav-link">
              <span>التقارير العامه</span></router-link >
          </li>
          <li>
            <router-link to="/reportsachivment" class="nav-link">
              <span>تقارير الأنجازات</span></router-link
            >
          </li>
          <li>
            <router-link to="/attendance" class="nav-link">
              <span>تقارير الحضور والأنصراف</span></router-link
            >
          </li>
          <li>
            <router-link to="/examreport" class="nav-link">
              <span>تقارير الأمتحانات</span></router-link
            >
          </li>
          <li>
            <router-link to="/competitionReportsIndex" class="nav-link">
              <span>تقارير المسابقات</span></router-link
            >
          </li>
          <li>
            <router-link to="/BehavioralReportsIndex" class="nav-link">
              <span>تقارير السلوكيه</span></router-link
            >
          </li>
          <li>
            <router-link to="/AcademicReportsIndex" class="nav-link">
              <span>تقارير الاكادميه</span></router-link
            >
          </li>
          <li>
            <router-link to="/missedReportsIndex" class="nav-link">
              <span>التقارير الفائته</span></router-link
            >
          </li>
          <li>
            <router-link to="/detailedReportsIndex" class="nav-link">
              <span>التقارير التفصيليه</span></router-link
            >
          </li>
          <li>
            <router-link to="/associationReportsIndex" class="nav-link">
              <span>التقارير الجمعيه أو المدرسه</span></router-link
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
        <router-link to="/contests" class="nav-link align-middle">
          <img
            src="../../assets/media/image/icon/cup-star-svgrepo-com.svg"
            alt=""
          />
          <span>المسابقات</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/electronic" class="nav-link align-middle">
          <img
            src="../../assets/media/image/icon/electricity-measurement-svgrepo-com.svg"
            alt=""
          />
          <span>المكتبه الألكترونيه</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/Complaints" class="nav-link align-middle">
          <img
            src="../../assets/media/image/icon/customer-problem-svgrepo-com.svg"
            alt=""
          />
          <span>الشكاوي</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/generalsetting" class="nav-link align-middle">
          <img src="../../assets/media/image/icon/setting.svg" alt="icon" />
          <span>الاعدادات العامة</span>
        </router-link>
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
