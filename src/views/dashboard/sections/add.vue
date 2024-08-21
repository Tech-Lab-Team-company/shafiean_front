<template>
      <div class="container mt-5">
            <div class="d-flex justify-content-between align-items-center">
              <h5 class="title_section">إضافة قسم جديد</h5>
            </div>
            <form action="sections.html" class="add_form">
              <div class="form-group">
                <label for="">*اسم القسم</label>
                <input
                  type="text"
                  name=""
                  id=""
                  class="form-control"
                  placeholder="اكتب اسم القسم"
                />
              </div>
<router-link to="/sections">
  <button @click="blockAlert()" type="submit" class="btn PrimaryButton">اضافة</button>

</router-link>
            </form>
          </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
    name : 'add-sections',
methods: {
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