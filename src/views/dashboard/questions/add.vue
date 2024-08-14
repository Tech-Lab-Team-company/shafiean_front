<template>
  <div class="container">
    <div class="d-flex justify-content-between align-items-center">
      <h5 class="title_section">اضافة اسألة تفاعلية جديدة</h5>
    </div>
    <form action="subjects.html" class="add_form">
      <div class="form-group">
        <label for="">*الاسم</label>
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
      <div class="form-group">
        <label for="">* نوع السؤال</label>
        <select
          name=""
          id=""
          class="form-control selectpicker"
          title="اختر نوع السؤال"
        >
          <option class="one" value="">وسائط</option>
          <option class="two" value="">كتابي</option>
        </select>
        <div class="hid" id="heden" style="display: none">
          <div class="form-group">
            <label for="">*كتابي</label>
            <input
              type="text"
              name=""
              id=""
              class="form-control"
              placeholder="ادخل السؤال"
            />
          </div>
        </div>
      </div>
      <div class="form-group">
        <label for="">*المادة</label>
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
      <button type="submit" class="btn PrimaryButton">الحفظ والمتاعبة</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "questions-add",
};
</script>

<style>
</style>