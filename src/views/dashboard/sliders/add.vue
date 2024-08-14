<template>
            <div class="container mt-5">
            <div class="d-flex justify-content-between align-items-center">
              <h5 class="title_section">إضافة اسليدر جديدة</h5>
            </div>
            <form action="slider.html" class="add_form">
              <div class="form-group upload_file">
                <label for="">* اضافة صورة للسليدر</label>
                <label for="imageCover" class="upload_file_label">
                  <i class="fa-regular fa-image"></i>
                  <p>اسحب صورة معبرة عن السليدر واسقطها هنا</p>
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
              <div class="form-group">
                <label for="">*عنوان</label>
                <input
                  type="text"
                  name=""
                  id=""
                  class="form-control"
                  placeholder="اكتب هنا"
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea1" class="form-label"
                  >*الوصف</label
                >
                <textarea
                  class="form-control summernote"
                  id="exampleFormControlTextarea1"
                  rows="7"
                ></textarea>
              </div>
              <div class="form-group">
                <label for="">*لينك</label>
                <input
                  type="url"
                  name=""
                  id=""
                  class="form-control"
                  placeholder="اكتب هنا"
                />
              </div>
              <button type="submit" class="btn PrimaryButton mt-3">اضافة</button>
            </form>
          </div>
</template>

<script>
export default {
    name: 'add-slider',

}
</script>

<style>

</style>