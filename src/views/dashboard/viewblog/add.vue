<template>
    <div class="container mt-5">
            <div class="d-flex justify-content-between align-items-center">
              <h5 class="title_section">إضافة مدونه جديد</h5>
            </div>
            <form action="View-blog.html" class="add_form">
              <div class="form-group">
                <label for="">*العنوان</label>
                <input
                  type="text"
                  name=""
                  id=""
                  class="form-control"
                  placeholder="اكتب هنا"
                />
              </div>
              <div class="form-group">
                <label for="">* القسم</label>
                <select
                  name=""
                  id=""
                  class="form-control selectpicker"
                  title="اختر القسم"
                >
                  <option value="">قسم 1</option>
                  <option value="">قسم 2</option>
                </select>
              </div>
              <div class="form-group">
                <label for="">* الهشتاج</label>
                <select
                  name=""
                  id=""
                  class="form-control selectpicker"
                  title="اختر القسم"
                >
                  <option value="">هشتاج 1</option>
                  <option value="">هشتاج 2</option>
                </select>
              </div>
              <div class="form-group upload_file">
                <label for="">* اضافة صوره للمدونه</label>
                <label for="imageCover" class="upload_file_label">
                  <i class="fa-regular fa-image"></i>
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
                <label for="exampleFormControlTextarea1" class="form-label"
                  >*الوصف</label
                >
                <textarea
                  class="form-control summernote"
                  id="exampleFormControlTextarea1"
                  rows="7"
                ></textarea>
              </div>
<router-link to="/Viewblog">

  <button @click="blockAlert()" type="submit" class="btn PrimaryButton mt-3 mb-5">اضافة</button>

</router-link>
            </form>
          </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
    name : 'addblog-index',
    methods :{
      blockAlert() {
                    Swal.fire({
                      html:
                      '<h5 class="swal2-title">   لقد تمت الاضافه بنـجــاح </h5>' +
                      '<p class="swal2-html-container">  </p>',

                 
                    });
                  }
                   
    }

}
</script>

<style>

</style>