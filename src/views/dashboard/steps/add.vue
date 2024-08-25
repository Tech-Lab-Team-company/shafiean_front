<template>








  <div class="container mt-4">
    <div class="d-flex justify-content-between align-items-center">
      <h5 class="title_section">إضافة مرحلة دراسية جديدة</h5>
    </div>
    <form action="/steps"  class="add_form">
      <div class="form-group">
        <label for="">*اسم المرحلة الدراسية</label>
        <input
          type="text"
          name=""
          v-model="item.name"
          id=""
          class="form-control"
          placeholder="اكتب هنا"
        />
      </div>
      <div class="form-group">
        <label for="">*السنه الدراسيه</label>
      </div>
      <div class="date">
        <div class="form-group">
          <label for="">*تاريخ بدء السنه الدراسيه</label>
          <input type="date" name="" v-model="item.startdate" id="" class="form-control" />
        </div>
        <div class="form-group">
          <label for="">*تاريخ انتهاء السنه الدراسيه</label>
          <input type="date" name="" id="" v-model="item.enddate" class="form-control" />
        </div>
      </div>
    </form>
    <button style="margin-left: 168%;" @click="Add()" type="submit" class="btn PrimaryButton">
      اضافة
    </button>
  </div>
</template>

<script>

import Swal from "sweetalert2";
export default {
  name: "add-steps",
  data() {
    return {
      item: {
        name: "",
        startdate: "",
        enddate: "",
  
      },
    };
  },
  methods: {
    async addTeacher() {
     
     if(!this.item.name || !this.item.startdate || !this.item.enddate){
       Swal.fire({
         icon: "error",
         title: "خطأ",
         text: "يجب عليك ملء جميع الحقول",
       });
       return
     }
     if(this.item.name.length != 10){
       Swal.fire({
         icon: "error",
         title: "خطأ",
         text: "رقم الهاتف غير صحيح",
       });
       return
     }
     try {
       const response = await fetch(
         "/steps",
         {
           method: "POST",
           headers: {
             "Content-Type": "application/json",
           },
           body: JSON.stringify(this.teacher),
         }
       );

       if (response.ok) {
         Swal.fire({
           icon: "success",
           title: "نجاح",
           text: "لقد تمت الاضافه بنـجــاح",
         });
         this.$router.push("/teachers");
       } else {
         const result = await response.json();
         Swal.fire({
           icon: "error",
           title: "خطأ",
           text: result.message || "حدث خطأ ما. يرجى المحاولة لاحقًا.",
         });
       }
     } catch (error) {
       Swal.fire({
         icon: "error",
         title: "خطأ",
         text: "حدث خطأ ما. يرجى المحاولة لاحقًا.",
       });
     }
     this.$router.push("/teachers");
   },
    blockAlert() {
      Swal.fire({
        html:
          '<h5 class="swal2-title">   هل أنت متأكد من حذف الماده؟ </h5>' +
          '<p class="swal2-html-container">  </p>',

        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: "تأكيد الحذف",
        confirmButtonAriaLabel: "Thumbs up, great!",
        cancelButtonText: "الغاء",
        cancelButtonAriaLabel: "Thumbs down",
      });
    },
    Add() {
                    Swal.fire({
                      html:
                        '<h5 class="swal2-title">   لقم تمت الاضافه بنـجــاح </h5>' +
                        '<p class="swal2-html-container">  </p>',

                 
                    });
                    this.$router.push("/steps");
                  }
  },
};
</script>

<style>
</style>