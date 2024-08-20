<template>
        <div class="container mt-5">
            <div class="d-flex justify-content-between align-items-center">
              <h5 class="title_section">تعديل المادة</h5>
            </div>
            <form  class="add_form">
              <div class="form-group">
                <label for="">*اسم المادة</label>
                <input
                  type="text"
                  name=""
                  id=""
                  class="form-control"
                  placeholder="اكتب اسم الدرس"
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
              <router-link to="/subjects">
                  <button @click="Add()" type="button" class="btn PrimaryButton">اضافة</button>

              </router-link>
            </form>
          </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
    name: "edit-subject",
    methods:{
        Add() {
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