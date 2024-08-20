<template>
       <div class="container mt-5">
            <div class="d-flex justify-content-between align-items-center">
              <h5 class="title_section">تعديل المجموعة</h5>
            </div>
            <form action="subjects.html" class="add_form">
              <div class="form-group">
                <label for="">*اسم المجموعة</label>
                <input
                  type="text"
                  name=""
                  id=""
                  class="form-control"
                  placeholder="اكتب اسم المجموعة"
                />
              </div>
              <div class="form-group">
                <label for="">* المرحلة الدراسية</label>
                <select
                  name=""
                  id=""
                  class="form-control selectpicker"
                  title="اختر المرحلة الدراسية"
                >
                  <option value="">مرحلة ابتدائي</option>
                  <option value="">مرحلة اعدادي</option>
                  <option value="">مرحلة ثانوي</option>
                </select>
              </div>
              <div class="form-group">
                <label for="">* المادة</label>
                <select
                  name=""
                  id=""
                  class="form-control selectpicker"
                  title="اختر المادة"
                >
                  <option value="">مرحلة ابتدائي</option>
                  <option value="">مرحلة اعدادي</option>
                  <option value="">مرحلة ثانوي</option>
                </select>
              </div>
              <div class="form-group upload_file">
                <label for="">* اضافة صورة للمجموعة</label>
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
        
              <button type="submit" class="btn PrimaryButton">
                الحفظ والمتابعة
              </button>
            </form>
          </div>
</template>

<script>
export default {
    name: 'edit-groups',

methods: {

}

}
</script>

<style>

</style>