<template>
      <div class="container mt-5">
            <div class="d-flex justify-content-between align-items-center">
              <h5 class="title_section">إضافة مسابقة جديدة</h5>
            </div>
            <form action="contests.html" class="add_form">
              <div class="form-group">
                <label for="">*اسم المسابقة</label>
                <input
                  type="text"
                  name=""
                  id=""
                  class="form-control"
                  placeholder="اكتب اسم المسابقة"
                />
              </div>
              <div class="form-group">
                <label for="">* تاريخ بداية المسابقة</label>
                <input type="date" name="" id="" class="form-control" />
              </div>
              <div class="form-group">
                <label for="">* تاريخ نهاية المسابقة</label>
                <input type="date" name="" id="" class="form-control" />
              </div>
              <div class="form-group">
                <label for="">* معايير المسابقة</label>
                <textarea
                  class="form-control summernote"
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </div>

              <div class="form-group upload_file">
                <label for="">* اضافة صورة للمسابقة</label>
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
              <div class="form-group">
                <label for="">*جوائز المسابقة</label>
                <div class="one-prise">
                  <h6>الجائزة الاولى</h6>
                  <input
                    type="text"
                    name=""
                    id=""
                    class="form-control"
                    placeholder="اكتب هنا"
                  />
                </div>
                <div class="one-prise">
                  <h6>الجائزة الثانية</h6>
                  <input
                    type="text"
                    name=""
                    id=""
                    class="form-control"
                    placeholder="اكتب هنا"
                  />
                </div>
                <div class="one-prise">
                  <h6>الجائزة الثالثة</h6>
                  <input
                    type="text"
                    name=""
                    id=""
                    class="form-control"
                    placeholder="اكتب هنا"
                  />
                </div>
              </div>
<!-- 
              <script>
                const fileInputImage = document.getElementById("imageCover");
                const fileNameImage = document.getElementById("fileNameImage");

                fileInputImage.addEventListener("change", (event) => {
                  const file = event.target.files[0];
                  fileNameImage.textContent = file.name;
                });
              </script> -->
              <router-link to="/contests">

                  <button @click="blockAlert()" type="submit" class="btn PrimaryButton mb-5 mt-3">
                      الحفظ والمتابعة
                    </button>
                </router-link>
            </form>
          </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
    name : 'add-contests',
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