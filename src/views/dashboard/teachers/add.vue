<template>
    <div class="container mt-5">
            <div class="d-flex justify-content-between align-items-center">
              <h5 class="title_section">إضافة معلم جديد</h5>
            </div>
            <form action="teachers.html" class="add_form w-100 row">
              <div class="col-12">
                <div class="avatar-upload">
                  <div class="avatar-edit">
                    <input
                      type="file"
                      id="imageUpload"
                      accept=".png, .jpg, .jpeg"
                    />
                    <label for="imageUpload"
                      ><i class="fa-solid fa-camera-retro"></i
                    ></label>
                  </div>
                  <div class="avatar-preview">
                    <div
                      id="imagePreview"
                      style="background-image: url()"
                    ></div>
                  </div>
                </div>
            
              </div>
              <div class="col-lg-6 col-md-6 col-12">
                <div class="form-group">
                  <label for="">* اضافة مجموعه</label>
                  <select
                    name=""
                    id=""
                    class="form-control selectpicker"
                    title="اختر مجموعه"
                  >
                    <option value="">1</option>
                    <option value="">2</option>
                  </select>
                </div>
              </div>
              <div class="col-12">
                <div class="form-group">
                  <label for="">* اسم المعلم</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    class="form-control"
                    placeholder="ادخل اسم المعلم"
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
                  <label for="">* الحالة الاجتماعية</label>
                  <select
                    name=""
                    id=""
                    class="form-control selectpicker"
                    title="الحالة الاجتماعية"
                  >
                    <option value="">متزوج</option>
                    <option value="">اعزب</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-12">
                <div class="form-group">
                  <label for="">* مستوي التعليم</label>
                  <select
                    name=""
                    id=""
                    class="form-control selectpicker"
                    title="مستوي التعليم"
                  >
                    <option value="">بطاقة</option>
                    <option value="">اقامة</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-12">
                <div class="form-group">
                  <label for="">*البريد الالكترونى</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    class="form-control"
                    placeholder="البريد الالكترونى"
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
                <div class="form-group upload_file">
                  <label for="">* اضافة صورة الشهادادت الحاصل عليها</label>
                  <label for="imageCover" class="upload_file_label">
                    <i class="fa-regular fa-image"></i>
                    <p>اسحب صورة معبرة عن المسابقة واسقطها هنا</p>
                    <span id="fileNameImage">او اضغط هنا</span>
                  </label>
                  <input
                    type="file"
                    name=""
                    id="imageCover"
                    class="form-control"
                    accept="image/*"
                    hidden
                  />
                </div>
            
              </div>

              <div class="col-12">
                <div class="form-check form-group">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckIndeterminate"
                  />
                  <label class="form-check-label" for="flexCheckIndeterminate">
                    اضافة المعلم الى قائمة المشرفين
                  </label>
                </div>
              </div>
              <router-link to="/teachers">

                <button @click=" blockAlert()" type="submit" class="btn PrimaryButton mb-5 mt-3 w-100" 
                >اضافة</button>
              </router-link>
            </form>
          </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  name: "teachers-add",
  methods : {
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