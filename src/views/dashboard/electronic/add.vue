<template>
    <div class="container mt-5">
            <div class="d-flex justify-content-between align-items-center">
                <h5 class="title_section">إضافة مكتبه الألكترونيه جديدة</h5>
            </div>
            <form action="Electronic-library.html" class="add_form">
                <div class="form-group">
                  <label for="">*اسم المكتبه</label>
                  <input type="text" name="" id="" class="form-control" placeholder="اكتب هنا">
                </div>
                <div class="form-group">
                    <label for="">*نوع الملف</label>
                        <select
                          name=""
                          id=""
                          class="form-control selectpicker"
                          title="اختر نوع الملف"
                        >
                          <option value="">pdf</option>
                          <option value="">video </option>
                        </select>
                      </div>
                      <div class="form-group">
                        <label for="exampleFormControlTextarea1" class="form-label">*الوصف</label>
                        <textarea class="form-control summernote" id="exampleFormControlTextarea1" rows="7"></textarea>
                      </div>
                    
                    </form>
                   
                </div>
<div style="text-align: start">
    <router-link to="/electronic" style="text-align: start">

        <button @click="blockAlert()" type="submit" class="btn PrimaryButton m-3">حفظ</button>
    </router-link>
    
</div>
     
 
        
        
</template>

<script>
import Swal from "sweetalert2";
export default {
  name: "add-electronic",

  methods:{
    blockAlert() {
                    Swal.fire({
                      html:
                        '<h5 class="swal2-title">   لقم تمت الاضافه بنـجــاح </h5>' +
                        '<p class="swal2-html-container">  </p>',

                 
                    });
                  }
  }
};
</script>

<style>
</style>