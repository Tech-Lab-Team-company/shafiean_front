<template>
     <div class="container mt-5">
            <div class="d-flex justify-content-between align-items-center">
              <h5 class="title_section">تعديل المرحلة الدراسية</h5>
            </div>
            <form action="grade.html" class="add_form">
              <div class="form-group">
                <label for="">*اسم المرحلة الدراسية</label>
                <input
                  type="text"
                  name=""
                  id=""
                  class="form-control"
                  placeholder="اكتب هنا"
                />
              </div>
              <router-link to="/steps">

                  <button @click=" blockAlert()" type="submit" class="btn PrimaryButton">اضافة</button>
                </router-link>
            </form>
          </div>
</template>

<script>
import Swal from 'sweetalert2';
export default {
    name : 'edit-steps',
    methods :{
        blockAlert() {
                    Swal.fire({
                      html:
                        '<h5 class="swal2-title">   لقم تمت الاضافه بنـجــاح </h5>' +
                        '<p class="swal2-html-container">  </p>',

                 
                    });
                  },
                 
  },
    }



</script>

<style>

</style>