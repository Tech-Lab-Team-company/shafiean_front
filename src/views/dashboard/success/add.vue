<template>
        <div class="container mt-5">
            <div class="d-flex justify-content-between align-items-center">
              <h5 class="title_section">شركاء النجاح</h5>
            </div>
            <form action="#" class="add_form">
              <div class="form-group upload_file">
                <label for="">* اضافة صورة </label>
                <label for="imageCover" class="upload_file_label">
                  <i  class="fa-regular fa-image"></i>
                  <p>اسحب صورة معبرة واسقطها هنا</p>
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
                <label for="">*الاسم</label>
                <input
                  type="text"
                  name=""
                  id=""
                  class="form-control"
                  placeholder="اكتب هنا"
                />
              </div>

              <button type="submit" class="btn PrimaryButton">اضافة</button>
            </form>
          </div>
</template>

<script>
export default {
    name : 'success-add'

}
</script>

<style>

</style>