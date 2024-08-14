<template>
     <div class="container mt-5">
            <div class="d-flex justify-content-between align-items-center">
              <h5 class="title_section">إضافة واجب جديد</h5>
            </div>
            <form action="lessons.html" class="add_form">
              <div class="form-group">
                <label for="">*اسم الواجب</label>
                <input
                  type="text"
                  name=""
                  id=""
                  class="form-control"
                  placeholder="اكتب اسم الدرس"
                />
              </div>

              <div class="form-group">
                <label for="">* المجموعة</label>
                <select
                  name=""
                  id=""
                  class="form-control selectpicker"
                  title="اختر المجموعة"
                >
                  <option value="">مجموعة 1</option>
                  <option value="">مجموعة 2</option>
                </select>
                <div class="form-group">
                  <label for="">*وقت الواجب</label>
                  <input type="date" name="" id="" class="form-control" />
                </div>
              </div>
              <button type="submit" class="btn PrimaryButton">
                الحفظ والمتاعبة
              </button>
            </form>
          </div>
</template>

<script>
export default {
  name: "add-assignment",
}
</script>

<style>

</style>