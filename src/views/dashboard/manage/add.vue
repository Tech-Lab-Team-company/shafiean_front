<template>
           <div class="container mt-5 mb-5">
            <div class="d-flex justify-content-between align-items-center">
              <h5 class="title_section">اضافة مدير جديد</h5>
            </div>
            <form action="teachers.html" class="add_form w-100 row">
              <div class="col-lg-3 col-md-12 col-12">
                <div class="avatar-upload">
                  <div class="avatar-edit supervisor">
                    <input
                      type="file"
                      id="imageUpload"
                      accept=".png, .jpg, .jpeg"
                    />
                    <label class="change-pic" for="imageUpload"
                      >تغيير الصورة الشخصية</label
                    >
                  </div>
                  <div class="avatar-preview">
                    <div
                      id="imagePreview"
                      style="background-image: url()"
                    ></div>
                  </div>
                </div>

              
              </div>

              <div class="col-lg-9 col-md-12 col-12">
                <div class="form-group">
                  <label for="">* اختار الوظيفه</label>
                  <select
                    name=""
                    id=""
                    class="form-control selectpicker"
                    title="اختر الوظيفه"
                  >
                    <option value="">1</option>
                    <option value="">2</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="">* اختار الصلاحيه</label>
                  <select
                    name=""
                    id=""
                    class="form-control selectpicker"
                    title="اختر الصلاحيه"
                  >
                    <option value="">1</option>
                    <option value="">2</option>
                  </select>
                </div>

                <div class="form-group">
                  <label for="">اسم المسؤال</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    class="form-control"
                    placeholder="اكتب اسم المشرف كاملا"
                  />
                </div>
                <div class="form-group">
                  <label for="">البريد الاكتروني</label>
                  <input
                    type="email"
                    name=""
                    id=""
                    class="form-control"
                    placeholder="someone@gmail.com"
                  />
                </div>
                <div class="form-group">
                  <label for="">*رقم الجوال</label>
                  <input
                    type="tel"
                    name=""
                    id=""
                    class="form-control"
                    placeholder="+966"
                  />
                </div>
                <div class="form-group">
                  <label for="">*كلمة المرور</label>
                  <input
                    type="password"
                    name=""
                    id=""
                    class="form-control"
                    placeholder="** *** *** **"
                  />
                </div>
                <div class="form-group">
                  <label for="">*تأكيد كلمة المرور</label>
                  <input
                    type="password"
                    name=""
                    id=""
                    class="form-control"
                    placeholder="** *** *** **"
                  />
                </div>

                <button type="submit" class="btn PrimaryButton">
                  حفظ البيانات
                </button>
              </div>
            </form>
          </div>
</template>

<script>
export default {
  name: "manage-add",
}
</script>

<style>

</style>