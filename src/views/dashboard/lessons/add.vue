<template>
  <div class="container">
    <div class="d-flex justify-content-between align-items-center">
      <h5 class="title_section">إضافة درس جديد</h5>
    </div>
    <form action="lessons.html" class="add_form">
      <div class="form-group">
        <label for="">* المجموعه</label>
        <select
          name=""
          id=""
          class="form-control selectpicker"
          title="اختر المجموعه"
        >
          <option value="">المجموعه 1</option>
          <option value="">المجموعه 2</option>
        </select>
      </div>
      <div class="form-group">
        <label for="">* محتوي الدرس</label>
        <select
          name=""
          id=""
          class="form-control selectpicker"
          title="اختر محتوي الدرس"
        >
          <option value="">درس 1</option>
          <option value="">درس 2</option>
        </select>
      </div>
      <div class="form-group">
        <label for="">* السوره</label>
        <select
          name=""
          id=""
          class="form-control selectpicker"
          title="اختر السوره"
        >
          <option value="">سوره 1</option>
          <option value="">سوره 2</option>
        </select>
      </div>

      <div class="det">
        <div class="form-group">
          <label for="">* من</label>
          <input type="text" name="" id="" class="form-control" />
        </div>
        <div class="form-group">
          <label for="">* الي</label>
          <input type="text" name="" id="" class="form-control" />
        </div>
      </div>
      <div class="form-group">
        <label for="exampleFormControlTextarea1" class="form-label"
          >*اضافة ملاحظات</label
        >
        <textarea
          class="form-control summernote"
          id="exampleFormControlTextarea1"
          rows="9"
        ></textarea>
      </div>
      <div class="form-group">
        <input type="checkbox" name="mycheckbox" id="mycheckbox" value="0" />
        <label @click="showNewQues()" class="grenal" for="mycheckbox"
          >اضافة اسئلة</label
        >
        <div id="mycheckboxdiv" style="display: none">
          <h3 class="AS">السؤال الأول</h3>

          <div class="row">
            <div class="col-lg-6 col-md-12 col-12">
              <div class="form-group">
                <label class="ans" for="">* نوع السؤال</label>
                <select
                  name=""
                  id=""
                  class="form-control selectpicker"
                  title="اختر السؤال"
                >
                  <option value="">سوال 1</option>
                  <option value="">سوال 2</option>
                </select>
              </div>
              <button
                type="button"
                class="btn add-ask"
                data-bs-toggle="modal"
                data-bs-target="#follow"
              >
                اضف سؤال جديد
              </button>
            </div>
          </div>
        </div>
      </div>
      <button type="submit" class="btn PrimaryButton mb-5">اضافة</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "add-lessons",

  methods: {
    showNewQues() {
      document.getElementById("mycheckboxdiv").style.display = "block";
    },
  },
};
</script>

<style>
</style>