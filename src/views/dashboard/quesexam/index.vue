<template>
        <div class="container mt-5">
            <h4 class="title_section" style="text-align: right">اضافة امتحان جديد</h4>
            <form action="index.html" class="add_form">
              <h4 class="title" >الاسألة</h4>
              <p class="text">ابدأ بإضافة الاسألة على الجزء المختار الآن</p>
              <div class="question_exam">
                <div class="card_question_exam">
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <h6 class="title">السؤال الاول</h6>
                    <a
                      href="#"
                      class="colorPrimary"
                      data-bs-toggle="modal"
                      data-bs-target="#editQuestionModal"
                      ><i class="fa-solid fa-pen-to-square"></i
                    ></a>
                  </div>
                  <h6 class="title_name">تعتبر مادة المحاسبة المالية مادة</h6>
                  <p class="category">اختياري</p>
                  <div class="question_data">
                    <div class="data">
                      <i class="fa-regular fa-clock"></i>
                      <p class="title">مدة السؤال :</p>
                      <p class="text">20 دقيقة</p>
                    </div>
                    <div class="data">
                      <i class="fa-regular fa-star"></i>
                      <p class="title">درجة السؤال :</p>
                      <p class="text">20</p>
                    </div>
                  </div>
                </div>
                <div class="card_question_exam">
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <h6 class="title">السؤال الاول</h6>
                    <a
                      href="#"
                      class="colorPrimary"
                      data-bs-toggle="modal"
                      data-bs-target="#editQuestionModal"
                      ><i class="fa-solid fa-pen-to-square"></i
                    ></a>
                  </div>
                  <h6 class="title_name">تعتبر مادة المحاسبة المالية مادة</h6>
                  <p class="category">اختياري</p>
                  <div class="question_data">
                    <div class="data">
                      <i class="fa-regular fa-clock"></i>
                      <p class="title">مدة السؤال :</p>
                      <p class="text">20 دقيقة</p>
                    </div>
                    <div class="data">
                      <i class="fa-regular fa-star"></i>
                      <p class="title">درجة السؤال :</p>
                      <p class="text">20</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Modal -->
              <div
                class="modal edit-modal-question fade"
                id="editQuestionModal"
                tabindex="-1"
                aria-labelledby="editQuestionModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-body">
                      <div class="form-group w-100">
                        <label for="">نوع السؤال</label>
                        <select
                          name=""
                          id=""
                          class="form-control selectpicker"
                          title="نوع السؤال"
                        >
                          <option value="">اختياري</option>
                          <option value="">مقالي</option>
                        </select>
                      </div>
                      <div class="form-group w-100">
                        <label for="">نص السؤال</label>
                        <input
                          type="text"
                          name=""
                          id=""
                          class="form-control"
                          placeholder="اكتب نص السؤال"
                        />
                        <div class="d-flex justify-content-between">
                          <p id="fileName"></p>
                          <small class="d-block text-start mt-2"
                            ><label for="image" class="cursor">
                              + إضافة صورة</label
                            ><input type="file" name="" id="image" hidden
                          /></small>
                        </div>
                        <!-- <script>
                          // Get file input element
                          let fileInput = document.getElementById("image");
                          let span = document.getElementById("fileName");
                          // Fires on file upload
                          fileInput.addEventListener(
                            "change",
                            function (event) {
                              // Get file name
                              let fileName = fileInput.files[0].name;

                              // Update file name in span
                              span.innerText = fileName;
                            }
                          );
                        </script> -->
                      </div>
                      <div class="form-group w-100">
                        <label for="">الاجابات</label>
                        <div id="AppendAnswer">
                          <div class="d-flex align-items-center append_answer">
                            <span class="mx-2">A</span>
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
                          ><button id="btnAdd" class="btn btnAdd" type="button">
                            + إضافة إجابة اخري
                          </button></small
                        >
                        <!-- <script>
                          $(function () {
                            $("#btnAdd").bind("click", function () {
                              var div = $("<div />");
                              div.html(GetDynamicNewAnswer(""));
                              $("#AppendAnswer").append(div);
                            });
                            $("body").on("click", ".remove", function () {
                              $(this).closest("div").remove();
                            });
                          });
                          function GetDynamicNewAnswer(value) {
                            return (
                              '<div class="d-flex align-items-center append_answer">' +
                              '<span class="mx-2">A</span>' +
                              '<input type="text" name="" id="" class="form-control" placeholder="">' +
                              '<button type="button" class="remove btn">x</button>' +
                              '<input type="radio" class="form-check-input" name="radioAnswer" id="">' +
                              "</div>"
                            );
                          }
                        </script> -->
                      </div>
                      <div class="form-group w-100">
                        <label for="">النقاط</label>
                        <input
                          type="text"
                          name=""
                          id=""
                          class="form-control"
                          placeholder="ادخل نقاط السؤال"
                        />
                      </div>
                      <div class="form-group w-100">
                        <label for="">مدة السؤال</label>
                        <input
                          type="text"
                          name=""
                          id=""
                          class="form-control"
                          placeholder="ادخل مدة السؤال بالدقيقة"
                        />
                      </div>
                      <button type="submit" class="btn PrimaryButton w-100">
                        حفظ
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="buttons mt-4">
               <router-link to="/exams">

                 <button @click="blockAlert()" style="margin-left: 15px" type="button" class="btn PrimaryButton ">الحفظ</button>
               </router-link>
                <a
                  href="#"
                  type="button"
                  class="btn SecondButton"
                  data-bs-toggle="modal"
                  data-bs-target="#newQuestionModal"
                  >اضافة سؤال جديد</a
                >
              </div>

              <!-- Modal add new question -->
              <div
                class="modal modal_add_new_question fade"
                id="newQuestionModal"
                tabindex="-1"
                aria-labelledby="newQuestionModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-body">
                      <h4 class="modal_title">تفاصيل السؤال</h4>
                      <p class="modal_text">
                        يمكنك التعديل على الإجابات او الدرجة المعطاه ويمكنك
                        اضافة المزيد من الاسالة
                      </p>
                      <div class="add_form w-100">
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
                        <div class="form-group">
                          <label for="">* المادة</label>
                          <select
                            name=""
                            id=""
                            class="form-control selectpicker"
                            title="اختر المجموعة"
                          >
                            <option value="">مجموعة 1</option>
                            <option value="">مجموعة 2</option>
                          </select>
                        </div>
                        <div class="form-group">
                          <div
                            id="AppendAnswerNewQuestion"
                            class="AppendAnswer"
                          >
                            <label for="" class="mb-2">الاجابات</label>
                            <div
                              class="d-flex align-items-center append_answer"
                            >
                              <input
                                type="text"
                                name=""
                                id=""
                                class="form-control"
                                placeholder=""
                              />
                              <button type="button" class="remove btn">
                                x
                              </button>
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
                          <!-- <script>
                            $(function () {
                              $("#btnAddNew").bind("click", function () {
                                var div = $("<div />");
                                div.html(GetDynamicNewAnswer(""));
                                $("#AppendAnswerNewQuestion").append(div);
                              });
                              $("body").on("click", ".remove", function () {
                                $(this).closest("div").remove();
                              });
                            });
                            function GetDynamicNewAnswer(value) {
                              return (
                                '<div class="d-flex align-items-center append_answer">' +
                                '<input type="text" name="" id="" class="form-control" placeholder="">' +
                                '<button type="button" class="remove btn">x</button>' +
                                '<input type="radio" class="form-check-input" name="radioAnswer" id="">' +
                                "</div>"
                              );
                            }
                          </script> -->
                        </div>
                        <div class="form-group">
                          <div class="row">
                            <div class="col-lg-6 col-md-12 col-12">
                              <div class="form-group">
                                <label for="">* مدة السؤال</label>
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  class="form-control"
                                  placeholder="ادخل درجة السؤال"
                                />
                              </div>
                            </div>
                            <div class="col-lg-6 col-md-12 col-12">
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
                        <button
                          type="button"
                          class="btn SecondButton d-block mb-3 px-5"
                        >
                          إضافة الآن
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
    name : 'quesexam-index',
methods :{
  blockAlert(index) {
      Swal.fire({
        html:
          '<h5 class="swal2-title">   هل أنت متأكد من حذف الطالب؟ </h5>' +
          '<p class="swal2-html-container"></p>',
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: "تأكيد الحذف",
        cancelButtonText: "الغاء",
      }).then((result) => {
        if (result.isConfirmed) {
          if (this.students.length > index) {
            this.students.splice(index, 1);
            Swal.fire("تم الحذف!", "تم حذف الطالب بنجاح.", "success");
          } else {
            Swal.fire("خطأ!", "الطالب غير موجود.", "error");
          }
        }
      });
    },
        
}
}
</script>

<style>

</style>