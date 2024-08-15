<template>
    <div class="container mt-5">
            <div class="d-flex justify-content-between align-items-center">
              <h5 class="title_section">إضافة هشتاج جديد</h5>
            </div>
            <form action="Hashtag.html" class="add_form">
              <div class="form-group">
                <label for="">*اسم الهشتاج</label>
                <input
                  type="text"
                  name=""
                  id=""
                  class="form-control"
                  placeholder="اكتب اسم الهشتاج"
                />
              </div>
<router-link to="/hashtags">

    <button @click="blockAlert()" type="submit" class="btn PrimaryButton mt-3 mb-5">اضافة</button>
</router-link>
            </form>
          </div>
</template>

<script>
 import Swal from "sweetalert2";
export default {
    name : 'add-hashtag',

    methods: {
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