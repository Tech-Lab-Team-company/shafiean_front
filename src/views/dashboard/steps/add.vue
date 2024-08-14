<template>
  <div class="container mt-4">
    <div class="d-flex justify-content-between align-items-center">
      <h5 class="title_section">إضافة مرحلة دراسية جديدة</h5>
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
      <div class="form-group">
        <label for="">*السنه الدراسيه</label>
      </div>
      <div class="date">
        <div class="form-group">
          <label for="">*تاريخ بدء السنه الدراسيه</label>
          <input type="date" name="" id="" class="form-control" />
        </div>
        <div class="form-group">
          <label for="">*تاريخ انتهاء السنه الدراسيه</label>
          <input type="date" name="" id="" class="form-control" />
        </div>
      </div>
      <button @click="blockAlert()" type="submit" class="btn PrimaryButton">
        اضافة
      </button>
    </form>
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  name: "add-steps",
  methods: {
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
  },
};
</script>

<style>
</style>