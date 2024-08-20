<template>
    <div class="container mt-5">
            <div class="d-flex justify-content-between align-items-center">
              <h5 class="title_section">إضافة تحضير الدرس</h5>
            </div>
            <form  class="add_form">
              <div class="form-group">
                <label for="">*محتوي الدرس</label>
                <select
                  name=""
                  id=""
                  class="form-control selectpicker"
                  title="حدد محتوي الدرس"
                >
                  <option value="">..</option>
                  <option value="">..</option>
                  <option value="">..</option>
                </select>
              </div>
              <div class="form-group">
                <label for="">* السورة</label>
                <select
                  name=""
                  id=""
                  class="form-control selectpicker"
                  title="حدد السورة الخاصة بالدرس"
                >
                  <option value="">..</option>
                  <option value="">..</option>
                  <option value="">..</option>
                </select>
              </div>
              <div class="row">
                <div class="col-6">
                  <div class="form-group">
                    <label for="">* من</label>
                    <input type="date" class="form-control" />
                  </div>
                </div>
                <div class="col-6">
                  <div class="form-group">
                    <label for="">* الي</label>
                    <input type="date" class="form-control" />
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for="">* إضافة ملاحظات</label>
                <textarea
                  class="form-control"
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <div class="form-group">
                <input type="checkbox" id="c" class="form-check-input lesson" />
                <label for="c">إضافة اسئلة</label>
              </div>
              <div class="formation">
                <div class="form-group">
                  <div class="form-group">
                    <label for="">*نوع التحضير اليومي</label>
                    <select
                      name=""
                      id=""
                      class="form-control selectpicker"
                      title="مراجعة"
                    >
                      <option value="">..</option>
                      <option value="">..</option>
                      <option value="">..</option>
                    </select>
                  </div>
                </div>
                <h6>السؤال الاول</h6>
                <div class="form-group">
                  <div class="form-group">
                    <label for="">* نوع السؤال</label>
                    <select
                      name=""
                      id=""
                      class="form-control selectpicker"
                      title="وصل"
                    >
                      <option value="">..</option>
                      <option value="">..</option>
                      <option value="">..</option>
                    </select>
                  </div>
                </div>
                <h6>نص السؤال</h6>
                <p>
                  هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                  توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا
                  النص أو العديد من النصوص الأخرى
                </p>
                <button type="submit" class="btn PrimaryButton">
                  اضافة سؤال جديد
                </button>
              </div>

              <div class="row">
                <div class="col">
                  <router-link to="/lessons">

                
                  <button
                  @click=" Add()"
                    type="button"
                    class="btn PrimaryButton lesson"
                    style="margin-top: 10px"
                  >
                    حفظ التحضير
                  </button>
                </router-link>
                </div>
              </div>
            </form>
          </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  methods:{
    Add() {
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