<template>
   <div class="container mt-5">
            <div class="d-flex justify-content-between align-items-center">
              <h5 class="title_section">إضافة اختبار جديد</h5>
            </div>
            <form action="questions_exam.html" class="add_form w-100 row">
              <div class="col-lg-4 col-md-12 col-12">
                <div class="form-group">
                  <label for="">*اسم الأمحتان</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    class="form-control"
                    placeholder="اكتب اسم الأمتحان"
                  />
                </div>
              </div>
              <div class="col-lg-4 col-md-12 col-12">
                <div class="form-group">
                  <label for="">* تاريخ البدايه</label>
                  <input
                    type="date"
                    name=""
                    id=""
                    class="form-control"
                    placeholder=""
                  />
                </div>
              </div>
              <div class="col-lg-4 col-md-12 col-12">
                <div class="form-group">
                  <label for="">* وقت البدايه</label>
                  <input
                    type="time"
                    name=""
                    id=""
                    class="form-control"
                    placeholder=""
                  />
                </div>
              </div>
              <div class="col-lg-4 col-md-12 col-12">
                <div class="form-group">
                  <label for="">* تاريخ النهايه</label>
                  <input
                    type="date"
                    name=""
                    id=""
                    class="form-control"
                    placeholder=""
                  />
                </div>
              </div>
              <div class="col-lg-4 col-md-12 col-12">
                <div class="form-group">
                  <label for="">* وقت النهاية</label>
                  <input
                    type="time"
                    name=""
                    id=""
                    class="form-control"
                    placeholder=""
                  />
                </div>
              </div>
              <div class="col-lg-4 col-md-12 col-12">
                <div class="form-group">
                  <label for="">* المده</label>
                  <input
                    type="number"
                    name=""
                    id=""
                    class="form-control"
                    placeholder=""
                  />
                </div>
              </div>

              <div class="col-lg-3 col-md-12 col-12">
                <div class="form-group">
                  <label for="">*اختار مجموعه</label>
                  <select
                    name=""
                    id=""
                    class="form-control selectpicker"
                    title=" اختر المجموعه"
                  >
                    <option value="">مجموعة 1</option>
                    <option value="">مجموعة 2</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-2 col-md-12 col-12">
                <div class="form-group">
                  <label for="">*عدد الاسئله</label>
                  <input
                    type="number"
                    name=""
                    id=""
                    class="form-control"
                    placeholder="حدد عدد الأسئله"
                  />
                </div>
              </div>
              <div class="col-lg-2 col-md-12 col-12">
                <div class="form-group">
                  <label for="">* نوع الأمتحان</label>
                  <select
                    name=""
                    id=""
                    class="form-control selectpicker"
                    title="حدد نوع الأمتحان"
                  >
                    <option value="">صوتي</option>
                    <option value="">كتابي</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-2 col-md-12 col-12">
                <div class="form-group">
                  <label for="">* نوع الدرجه</label>
                  <select
                    name=""
                    id=""
                    class="form-control selectpicker"
                    title="اختر نوع الدرجه"
                  >
                    <option value="">نسبه مئويه</option>
                    <option value="">درجات</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-3 col-md-12 col-12">
                <div class="form-group">
                  <label for="">*الدرجه</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    class="form-control"
                    placeholder="اكتب الدرجه"
                  />
                </div>
              </div>
              <!-- <div class="col-3">
                <button
                  id="shoeBtn"
                  type="button"
                  class="btn SecondButton d-block mb-3 px-5"
                >
                  اضافة سؤال جديد
                </button>
              </div> -->
              <div class="col-lg-3 col-md-12 col-12">
                <button
                  type="button"
                  class="btn SecondButton d-block mb-3 px-5"
                  data-bs-toggle="modal"
                  data-bs-target="#questionBankModal"
                >
                  اضافة سؤال جديد من بنك الاسئله
                </button>
              </div>
              <button
              
              @click="show()"
                type="button"
                class="btn SecondButton ng d-block mb-3 px-5"
                id="reprtBtn"
              >
                اضافة سؤال
              </button>
              <div class="sec-hidden mt-5"  id="myDIV" v-if="isActive" >
                <div class="head-sec">
                  <h4 class="sec_title">تفاصيل السؤال</h4>
                  <p class="sec_text">
                    يمكنك التعديل على الإجابات او الدرجة المعطاه ويمكنك اضافة
                    المزيد من الاسالة
                  </p>
                  <div class="add_form w-100 row">
                    <div class="col-lg-6 col-md-12 col-12">
                      <div class="form-group">
                        <label for="">* نوع السؤال</label>
                        <select
                          name=""
                          id=""
                          class="form-control selectpicker"
                          title="اختر"
                        >
                          <option value="">مجموعة 1</option>
                          <option value="">مجموعة 2</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-12 col-12">
                      <div class="form-group">
                        <label for="">*اسم السؤال</label>
                        <input
                          type="text"
                          name=""
                          id=""
                          class="form-control"
                          placeholder="اكتب اسم السؤال"
                        />
                      </div>
                    </div>

                    <div class="col-lg-6 col-md-12 col-12">
                      <div class="form-group">
                        <div id="AppendAnswerNewQuestion" class="AppendAnswer">
                          <label for="" class="mb-2">الاجابات</label>
                          <div class="d-flex align-items-center append_answer">
                            <input
                              type="text"
                              name=""
                              id=""
                              class="form-control"
                              placeholder=""
                            />
                            <button type="button" class="remove btn">x</button>
                            <input
                              type="radio"
                              class="form-check-input"
                              name="radioAnswer"
                              id=""
                              checked
                            />
                          </div>
                        </div>
                        <small class="d-block text-start"
                          ><button
                            id="btnAddNew"
                            class="btn btnAdd"
                            type="button"
                          >
                            + إضافة إجابة اخري
                          </button></small
                        >
                   
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-12 col-12">
                      <div class="form-group">
                        <div class="row">
                          <div class="col-lg-6">
                            <div class="form-group">
                              <label for="">* درجة السؤال</label>
                              <input
                                type="text"
                                name=""
                                id=""
                                class="form-control"
                                placeholder="ادخل درجة السؤال"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
              v-if="isActive"
              @click="show(),Add()"
                id="addNow"
                type="button"
                class="btn SecondButton d-block mb-3 px-5"
                
              >
                إضافة الآن
              </button>

              <!-- Modal choose question bank or new question -->

              <!-- Modal question Bank -->
              <div
                class="modal questionBankModal fade"
                id="questionBankModal"
                tabindex="-1"
                aria-labelledby="questionBankModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-body">
                      <h2 class="modal_title">اضافة سؤال جديد</h2>
                      <p class="modal_text">
                        يمكنك الحصول على السؤال المناسب من خلال البحث باسم
                        المادة او السؤال
                      </p>
                      <div class="table_data">
                        <div class="filter_table">
                          <div class="form-group">
                            <input
                              type="search"
                              name=""
                              id=""
                              class="form-control"
                              placeholder="ابحث بإسم القاعة , المكان"
                            />
                            <i class="fa-solid fa-magnifying-glass"></i>
                          </div>
                        </div>
                        <div class="table-responsive">
                          <table class="table">
                            <tbody>
                              <tr>
                                <th scope="row">
                                  مادة المحاسبة المالية تعتبر مادة ....
                                </th>
                                <td>اختياري</td>
                                <td>الإجابة: اساسية</td>
                                <td>الدرجة:50</td>
                                <td>
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault-1"
                                    id="flexRadioDefault1-1"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <th scope="row">
                                  مادة المحاسبة المالية تعتبر مادة ....
                                </th>
                                <td>اختياري</td>
                                <td>الإجابة: اساسية</td>
                                <td>الدرجة:50</td>
                                <td>
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault-2"
                                    id="flexRadioDefault1-2"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <th scope="row">
                                  مادة المحاسبة المالية تعتبر مادة ....
                                </th>
                                <td>اختياري</td>
                                <td>الإجابة: اساسية</td>
                                <td>الدرجة:50</td>
                                <td>
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault-3"
                                    id="flexRadioDefault1-3"
                                  />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <button type="button" class="btn btn-success nas">
                      اضافة
                    </button>
                  </div>
                </div>
              </div>

              <!-- Modal add new question -->
<router-link to="/quesexam">
  <button @click=" Add()" type="submit" class="btn PrimaryButton mio">الحفظ</button>

</router-link>
            </form>
          </div>
</template>

<script>
import Swal from 'sweetalert2';
export default {
  name: "exams-add",
  data() {

    return {

      isActive: false,

    }

  },
  methods :{
    show(){
// document.getElementById("myDIV").style.display = "block";
// document.getElementById("addNow").style.display = "block";

this.isActive = !this.isActive

    },
    Add(){
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