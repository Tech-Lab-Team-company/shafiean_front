<template>
  <div class="container">
    <div class="d-flex justify-content-between align-items-center">
      <h5 class="title_section">إضافة مادة جديد</h5>
    </div>
    <form action="subjects.html" class="add_form">
      <div class="form-group">
        <label for="">*اسم المادة</label>
        <input
          type="text"
          name=""
          id=""
          class="form-control"
          placeholder="اكتب اسم المادة"
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
      <button type="submit" class="btn PrimaryButton">اضافة</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "subjects-add",
};
</script>

<style>
</style>