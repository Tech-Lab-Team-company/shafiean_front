<template>
     <div class="container mt-5">
            <div class="d-flex justify-content-between align-items-center">
              <h5 class="title_section">تعديل بيانات الطالب</h5>
            </div>
            <form action="students.html" class="add_form row w-100">
              <div class="col-12">
                <div class="form-group">
                  <label for="">* اسم الطالب</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    class="form-control"
                    placeholder="ادخل اسم الطالب"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-12">
                <div class="form-group">
                  <label for="">* تاريخ الميلاد</label>
                  <input
                    type="date"
                    name=""
                    id=""
                    class="form-control"
                    placeholder=""
                  />
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-12">
                <div class="form-group">
                  <label for="">* الجنس</label>
                  <select
                    name=""
                    id=""
                    class="form-control selectpicker"
                    title="الجنس"
                  >
                    <option value="">ذكر</option>
                    <option value="">انثى</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-12">
                <div class="form-group">
                  <label for="">* نوع الهوية</label>
                  <select
                    name=""
                    id=""
                    class="form-control selectpicker"
                    title="نوع الهوية"
                  >
                    <option value="">بطاقة</option>
                    <option value="">اقامة</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-12">
                <div class="form-group">
                  <label for="">* رقم الهوية</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    class="form-control"
                    placeholder="اكتب رقم الهوية"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-12">
                <div class="form-group">
                  <label for="">* فصيلة الدم</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    class="form-control"
                    placeholder="ادخل فصيلة الدم"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-12">
                <div class="form-group">
                  <label for="">* تفاصيل العنوان</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    class="form-control"
                    placeholder="اكتب تفاصيل العنوان"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-12">
                <div class="form-group">
                  <label for="">* اسم ولى الامر</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    class="form-control"
                    placeholder="ادخل اسم ولي الامر"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-12">
                <div class="form-group">
                  <label for="">* صلة القرابة</label>
                  <select
                    name=""
                    id=""
                    class="form-control selectpicker"
                    title="صلة القرابة"
                  >
                    <option value="">اب</option>
                    <option value="">ام</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-12">
                <div class="form-group">
                  <label for="">* حالة ولى الأمر</label>
                  <select
                    name=""
                    id=""
                    class="form-control selectpicker"
                    title="حالة ولى الأمر"
                  >
                    <option value="">بطاقة</option>
                    <option value="">اقامة</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-12">
                <div class="form-group">
                  <label for="">* رقم الجوال</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    class="form-control"
                    placeholder="رقم الجوال"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-12">
                <div class="form-group">
                  <label for="">*كلمة المرور</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    class="form-control"
                    placeholder="*******"
                  />
                </div>
              </div>
              <div class="col-12">
                <router-link to="/archives">

                    <button @click="blockAlert()" type="submit" class="btn PrimaryButton w-auto">
                        حفظ
                    </button>
                </router-link>
              </div>
            </form>
          </div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
    name : 'edit-archives',
    methods:{
        blockAlert() {
                    Swal.fire({
                      html:
                        '<h5 class="swal2-title">   لقم تمت الاضافه بنـجــاح </h5>' +
                        '<p class="swal2-html-container">  </p>',

                 
                    });
                  }
    }

}
</script>

<style>

</style>