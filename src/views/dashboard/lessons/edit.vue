<template>
     <div class="container mt-5">
            <div class="d-flex justify-content-between align-items-center">
              <h5 class="title_section">تعديل الدرس</h5>
            </div>
            <form action="lessons.html" class="add_form">
              <div class="form-group">
                <label for="">*اسم الدرس</label>
                <input
                  type="text"
                  name=""
                  id=""
                  class="form-control"
                  placeholder=" الدرس"
                />
              </div>
              <div class="form-group">
                <label for="">* تاريخ بداية الدرس</label>
                <input
                  type="date"
                  name=""
                  id=""
                  class="form-control"
                  title="1/1/2023"
                />
              </div>
              <div class="form-group">
                <label for="">* المجموعة</label>
                <select
                  name=""
                  id=""
                  class="form-control selectpicker"
                  title="مجموعة 1"
                >
                  <option value="">مجموعة 1</option>
                  <option value="">مجموعة 2</option>
                </select>
              </div>
              <router-link to="/lessons">

                  <button @click="Add()" type="button" class="btn PrimaryButton">اضافة</button>
                </router-link>
            </form>
          </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
name : 'edit-lesson',
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