<template>
     <div class="container mt-5">
            <div class="row">
              <div class="col-lg-9 col-md-12 col-12">
                <div class="d-flex justify-content-between align-items-center">
                  <h5 class="title_section">تفاصيل الدرس</h5>
                </div>
              </div>
              <div class="col-lg-3 col-md-12 col-12">
                <router-link to="/addlessons" class="btn btn_title_page"
                  >+ اضافة تحضير للدرس</router-link
                >
              </div>
            </div>

            <div class="details_exam_card">
              <div class="d-flex justify-content-between align-items-center">
                <div class="comple">
                  <img src="../../../assets/media/Ellipse 515.png" alt="" />
                  <h5 class="title_section" style="font-size: 0.9rem">
                    تعليم تجويد كامل علي الجزء العشرين بالاضافة الي شرح المتون و
                    نون البيان
                  </h5>
                </div>
                <a href="#" class="btn start"> يبدأ الان</a>
              </div>
              <div class="text-lesson">
                <p>فقه و شريعة</p>
                <p>مجموعة العهد الحديث</p>
              </div>
            </div>
            <h5 class="title_section">الطلاب ( 10 )</h5>
            <div class="main">
              <div class="comp">
                <div class="img-stu">
                  <img src="../../../assets/media/Ellipse 515.png" alt="" />
                </div>
                <div class="students-ow">
                  <h4>احمد حوام</h4>
                </div>
              </div>
              <div class="comp">
                <div class="img-stu">
                  <img src="../../../assets/media/Ellipse 515.png" alt="" />
                </div>
                <div class="students-ow">
                  <h4>احمد حوام</h4>
                </div>
              </div>
              <div class="comp">
                <div class="img-stu">
                  <img src="../../../assets/media/Ellipse 515.png" alt="" />
                </div>
                <div class="students-ow">
                  <h4>احمد حوام</h4>
                </div>
              </div>
              <div class="comp">
                <div class="img-stu">
                  <img src="../../../assets/media/Ellipse 515.png" alt="" />
                </div>
                <div class="students-ow">
                  <h4>احمد حوام</h4>
                </div>
              </div>
            </div>
          </div>
</template>

<script>
export default {
    name : 'details-lesson',

}
</script>

<style>

</style>