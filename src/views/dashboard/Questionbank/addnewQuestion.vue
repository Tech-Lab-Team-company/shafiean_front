<template>
    <div class="container mt-5">
            <div class="d-flex justify-content-between align-items-center">
              <h5 class="title_section">إضافة سؤال جديد</h5>
            </div>
            <form action="lessons.html" class="add_form">
              <div class="form-group">
                <label for="">*اسم السؤال</label>
                <input
                  type="text"
                  name=""
                  id=""
                  class="form-control"
                  placeholder="اكتب اسم الدرس"
                />
              </div>

              <div class="form-group">
                <label for="">* المادة</label>
                <select
                  name=""
                  id=""
                  class="form-control selectpicker"
                  title="اختر الماده"
                >
                  <option value="">1</option>
                  <option value="">2</option>
                </select>
              </div>
              <div class="form-group">
                <label for="">* المرحلة الدراسية</label>
                <select
                  name=""
                  id=""
                  class="form-control selectpicker"
                  title="اختر المرحلة"
                >
                  <option value="">1</option>
                  <option value="">2</option>
                </select>
              </div>
              <button type="submit" class="btn PrimaryButton">
                الحفظ والمتاعبة
              </button>
            </form>
          </div>
</template>

<script>
export default {

}
</script>

<style>

</style>