<template>
     <div class="container mt-5">
            <h5 class="title_section " style="text-align: right;">الاعدادات العامة</h5>
            <div class="sitiang" style="text-align: right;">
              <!-- frit taps -->
              <div
                class="nav flex-column nav-pills me-3"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
                
              >
                <button 
                  class="nav-link active"
                  id="v-pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-home"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected="true"
                >
                  اعدادات الحساب
                </button>
                <!-- secend taps -->

                <!-- third taps -->
                <button
                  class="nav-link"
                  id="v-pills-messages-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-messages"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-messages"
                  aria-selected="false"
                >
                  الاشعارات
                </button>
                <!-- fourth taps -->
                <button
                  class="nav-link"
                  id="v-pills-settings-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-settings"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-settings"
                  aria-selected="false"
                >
                  مركز المساعدة
                </button>
                <button
                  class="nav-link"
                  id="v-pills-chat-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-chat"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-chat"
                  aria-selected="false"
                >
                  المراسلات
                </button>
                <button
                  class="nav-link"
                  id="v-pills-delet-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-delet"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-delet"
                  aria-selected="false"
                >
                  حذف الحساب
                </button>
                <!-- five taps -->
                <button
                  class="nav-link"
                  id="v-pills-signeout-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-signeout"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-signeout"
                  aria-selected="false"
                  onclick="blockAlert()"
                >
                  تسجيل الخروج
                </button>
              </div>
              <!-- frit taps -->
              <div class="tab-content" id="v-pills-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="v-pills-home"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                >
                  <h5 class="title_section">اعدادات الحساب</h5>

                  <nav>
                    <div  class="nav nav-tabs" id="nav-tab" role="tablist" style="text-align: start;">
                      <button
                        class="nav-link active"
                        id="nav-home-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-home"
                        type="button"
                        role="tab"
                        aria-controls="nav-home"
                        aria-selected="true"
                      >
                        كلمة المرور
                      </button>
                      <button
                        class="nav-link"
                        id="nav-profile-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-profile"
                        type="button"
                        role="tab"
                        aria-controls="nav-profile"
                        aria-selected="false"
                      >
                        البريد الالكتروني
                      </button>
                      <button
                        class="nav-link"
                        id="nav-contact-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-contact"
                        type="button"
                        role="tab"
                        aria-controls="nav-contact"
                        aria-selected="false"
                      >
                        اللغة
                      </button>
                    </div>
                  </nav>
                  <div class="tab-content add_form w-100" id="nav-tabContent">
                    <div
                      class="tab-pane fade show active"
                      id="nav-home"
                      role="tabpanel"
                      aria-labelledby="nav-home-tab"
                    >
                      <div class="form-group">
                        <label for="" style="margin-top: 50px"
                          >كلمة المرور الحالية</label
                        >
                        <input class="form-control" type="password" />
                      </div>
                      <div class="form-group">
                        <label for="">كلمة المرور الجديدة</label>
                        <input class="form-control" type="password" />
                      </div>
                      <div class="form-group">
                        <label for="">إعادة كلمة المرور الجديدة</label>
                        <input class="form-control" type="password" />
                      </div>
                      <button type="submit" class="btn PrimaryButton nasr">
                        حفظ التغييرات
                      </button>
                    </div>
                    <div
                      class="tab-pane fade"
                      id="nav-profile"
                      role="tabpanel"
                      aria-labelledby="nav-profile-tab"
                    >
                      <div class="form-group">
                        <label for="" style="margin-top: 50px"
                          >كلمة المرور الحالية</label
                        >
                        <input class="form-control" type="password" />
                      </div>
                      <div class="form-group">
                        <label for="">البريد الالكتروني الجديد</label>
                        <input class="form-control" type="email" />
                      </div>

                      <button type="submit" class="btn PrimaryButton nasr">
                        حفظ التغييرات
                      </button>
                    </div>
                    <div
                      class="tab-pane fade"
                      id="nav-contact"
                      role="tabpanel"
                      aria-labelledby="nav-contact-tab"
                    >
                      <div class="form-group">
                        <div class="form-group">
                          <div class="form-group">
                            <h5 class="name" style="margin-top: 50px">
                              اللغة المستخدمة حاليا هي اللغة العربية , يمكنك
                              الآن اختيار اللغة التي ترغب بها
                            </h5>

                            <label for="">أختر اللغة</label>
                            <select
                              name=""
                              id=""
                              class="form-control selectpicker"
                              title="العربية"
                            >
                              <option value="">العربية</option>
                              <option value="">الانجيليزيه</option>
                            </select>

                            <button
                              type="submit"
                              class="btn PrimaryButton nasr"
                            >
                              حفظ التغييرات
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- frit taps -->
                <!-- second tab -->
                <div
                  class="tab-pane fade"
                  id="v-pills-messages"
                  role="tabpanel"
                  aria-labelledby="v-pills-messages-tab"
                >
                  <h5 class="title_section">الاشعارات</h5>
                  <div class="notifacatin-page">
                    <div class="head">
                      <h6>رسائل البريد الالكتروني</h6>
                      <p>
                        الحصول على رسائل بريد إلكتروني لمعرفة ما يحدث عندما لا
                        تكون متصلاً بالإنترنت ، يمكنك إيقاف تشغيلها في أي وقت.
                      </p>
                    </div>
                    <div class="form-group">
                      <input type="checkbox" id="c" class="form-check-input" />
                      <label for="c">الأخبار والتحديثات</label>
                      <p>تلقي آخر التحديثات والأخبار الخاصة بنا</p>
                    </div>
                    <div class="form-group">
                      <input type="checkbox" id="v" class="form-check-input" />
                      <label for="v">نصائح لترقية حسابك</label>
                      <p>تلقي آخر التحديثات والأخبار الخاصة بنا</p>
                    </div>
                    <hr />
                    <div class="head">
                      <h6>نشاط العمل و الطلاب المتقدمين</h6>
                      <p>
                        الحصول على رسائل بريد إلكتروني لمعرفة ما يحدث عندما لا
                        تكون متصلاً بالإنترنت ، يمكنك إيقاف تشغيلها في أي وقت.
                      </p>
                    </div>
                    <div class="form-group">
                      <input type="checkbox" id="b" class="form-check-input" />
                      <label for="b">لا تخطرني</label>
                      <p>تلقي آخر التحديثات والأخبار الخاصة بنا</p>
                    </div>
                    <div class="form-group">
                      <input type="checkbox" id="n" class="form-check-input" />
                      <label for="n">الرسائل المهمة فقط</label>
                      <p>تلقي آخر التحديثات والأخبار الخاصة بنا</p>
                    </div>
                    <div class="form-group">
                      <input type="checkbox" id="g" class="form-check-input" />
                      <label for="g">ارسال كل الرسائل</label>
                      <p>تلقي آخر التحديثات والأخبار الخاصة بنا</p>
                    </div>
                    <hr />
                    <div class="head">
                      <h6>نشاطك على لوحة القيادة</h6>
                      <p>
                        الحصول على رسائل بريد إلكتروني لمعرفة ما يحدث عندما لا
                        تكون متصلاً بالإنترنت ، يمكنك إيقاف تشغيلها في أي وقت.
                      </p>
                    </div>
                    <div class="form-group">
                      <input type="checkbox" id="m" class="form-check-input" />
                      <label for="m">لا تخطرني</label>
                      <p>تلقي آخر التحديثات والأخبار الخاصة بنا</p>
                    </div>
                    <div class="form-group">
                      <input type="checkbox" id="a" class="form-check-input" />
                      <label for="a">الرسائل المهمة فقط</label>
                      <p>تلقي آخر التحديثات والأخبار الخاصة بنا</p>
                    </div>
                    <hr />
                  </div>
                </div>
                <!-- second tab -->
                <!-- thrid tab -->
                <div
                  class="tab-pane fade"
                  id="v-pills-settings"
                  role="tabpanel"
                  aria-labelledby="v-pills-settings-tab"
                >
                  <h5 class="title_section">مركز المساعدة</h5>
                  <div class="Help-Center">
                    <div class="form-group">
                      <i class="fa-solid fa-magnifying-glass"></i>
                      <input
                        type="search"
                        name=""
                        id=""
                        class="form-control"
                        placeholder=" كلمات البحث هنا عن ما تريد...."
                      />
                      <!-- accordion -->
                      <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                          <h2 class="accordion-header" id="headingOne">
                            <button
                              class="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseOne"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                              <h4>
                                كيف يمكنني طلب المزيد من الموظفين لفرص العمل ؟
                              </h4>
                            </button>
                          </h2>
                          <div
                            id="collapseOne"
                            class="accordion-collapse collapse show"
                            aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample"
                          >
                            <div class="accordion-body">
                              <div class="header">
                                <p>
                                  هذا النص هو مثال لنص يمكن أن يستبدل في نفس
                                  المساحة، لقد تم توليد هذا النص من مولد النص
                                  العربى، حيث يمكنك أن تولد مثل هذا النص أو
                                  العديد من النصوص الأخرى ...هذا النص هو مثال
                                  لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                                  توليد هذا النص من مولد النص العربى، حيث يمكنك
                                  أن تولد مثل هذا النص أو العديد من النصوص
                                  الأخرى ...هذا النص هو مثال لنص يمكن أن يستبدل
                                  في نفس المساحة، لقد تم توليد هذا النص من مولد
                                  النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
                                  العديد من النصوص الأخرى ...هذا النص هو مثال
                                  لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                                  توليد هذا النص من مولد النص العربى، حيث يمكنك
                                  أن تولد مثل هذا النص أو العديد من النصوص
                                  الأخرى ...هذا النص هو مثال لنص يمكن أن يستبدل
                                  في نفس المساحة، لقد تم توليد هذا النص من مولد
                                  النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
                                  العديد من النصوص الأخرى ...هذا النص هو مثال
                                  لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                                  توليد هذا النص من مولد النص العربى، حيث يمكنك
                                  أن تولد مثل هذا النص أو العديد من النصوص
                                  الأخرى ... الأخرى ...
                                </p>
                              </div>
                            </div>
                          </div>
                          <div class="accordion-item">
                            <h2 class="accordion-header" id="headingTwo">
                              <button
                                class="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                              >
                                <h4>
                                  كيف يمكنني طلب المزيد من الموظفين لفرص العمل ؟
                                </h4>
                              </button>
                            </h2>
                            <div
                              id="collapseTwo"
                              class="accordion-collapse collapse"
                              aria-labelledby="headingTwo"
                              data-bs-parent="#accordionExample"
                            >
                              <div class="accordion-body">
                                <p>
                                  هذا النص هو مثال لنص يمكن أن يستبدل في نفس
                                  المساحة، لقد تم توليد هذا النص من مولد النص
                                  العربى، حيث يمكنك أن تولد مثل هذا النص أو
                                  العديد من النصوص الأخرى ...هذا النص هو مثال
                                  لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                                  توليد هذا النص من مولد النص العربى، حيث يمكنك
                                  أن تولد مثل هذا النص أو العديد من النصوص
                                  الأخرى ...هذا النص هو مثال لنص يمكن أن يستبدل
                                  في نفس المساحة، لقد تم توليد هذا النص من مولد
                                  النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
                                  العديد من النصوص الأخرى ...هذا النص هو مثال
                                  لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                                  توليد هذا النص من مولد النص العربى، حيث يمكنك
                                  أن تولد مثل هذا النص أو العديد من النصوص
                                  الأخرى ...هذا النص هو مثال لنص يمكن أن يستبدل
                                  في نفس المساحة، لقد تم توليد هذا النص من مولد
                                  النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
                                  العديد من النصوص الأخرى ...هذا النص هو مثال
                                  لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                                  توليد هذا النص من مولد النص العربى، حيث يمكنك
                                  أن تولد مثل هذا النص أو العديد من النصوص
                                  الأخرى ... الأخرى ...
                                </p>
                              </div>
                            </div>
                          </div>
                          <div class="accordion-item">
                            <h2 class="accordion-header" id="headingThree">
                              <button
                                class="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                              >
                                <h4>
                                  كيف يمكنني طلب المزيد من الموظفين لفرص العمل ؟
                                </h4>
                              </button>
                            </h2>
                            <div
                              id="collapseThree"
                              class="accordion-collapse collapse"
                              aria-labelledby="headingThree"
                              data-bs-parent="#accordionExample"
                            >
                              <div class="accordion-body">
                                <p>
                                  هذا النص هو مثال لنص يمكن أن يستبدل في نفس
                                  المساحة، لقد تم توليد هذا النص من مولد النص
                                  العربى، حيث يمكنك أن تولد مثل هذا النص أو
                                  العديد من النصوص الأخرى ...هذا النص هو مثال
                                  لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                                  توليد هذا النص من مولد النص العربى، حيث يمكنك
                                  أن تولد مثل هذا النص أو العديد من النصوص
                                  الأخرى ...هذا النص هو مثال لنص يمكن أن يستبدل
                                  في نفس المساحة، لقد تم توليد هذا النص من مولد
                                  النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
                                  العديد من النصوص الأخرى ...هذا النص هو مثال
                                  لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                                  توليد هذا النص من مولد النص العربى، حيث يمكنك
                                  أن تولد مثل هذا النص أو العديد من النصوص
                                  الأخرى ...هذا النص هو مثال لنص يمكن أن يستبدل
                                  في نفس المساحة، لقد تم توليد هذا النص من مولد
                                  النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
                                  العديد من النصوص الأخرى ...هذا النص هو مثال
                                  لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                                  توليد هذا النص من مولد النص العربى، حيث يمكنك
                                  أن تولد مثل هذا النص أو العديد من النصوص
                                  الأخرى ... الأخرى ...
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- thrid tab -->
                <!-- fourth tab -->
                <!-- chat -->
                <div
                  class="tab-pane fade"
                  id="v-pills-chat"
                  role="tabpanel"
                  aria-labelledby="v-pills-chat-tab"
                >
                  <h5 class="title_section">الرسائل</h5>
                  <div class="tab-of-masseges">
                    <div class="bord">
                      <div class="all-meaasae">
                        <h4>كل الرسائل (2)</h4>
                      </div>

                      <div class="all-teachers">
                        <div class="img-teacher">
                            <img src="../../../assets/media/Ellipse 515.png" alt="" />
                        </div>
                        <div class="parent-teacher">
                          <div class="name-teacher">
                            <div class="teacher">
                              <h5>الشيخ/ أحمد على</h5>
                              <h6>أحمد عبدالملك</h6>
                            </div>
                            <div class="time">
                              <p>PM4:57</p>
                            </div>
                          </div>
                          <div class="explain-teacher">
                            <div class="h6">
                              <h6>
                                من فضلك يا شيخى اريد معني الآية الاولى فى سورة
                                البقرة
                              </h6>
                            </div>
                            <div class="p">
                              <p>31</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="all-teachers">
                        <div class="img-teacher">
                            <img src="../../../assets/media/Ellipse 515.png" alt="" />
                        </div>
                        <div class="parent-teacher">
                          <div class="name-teacher">
                            <div class="teacher">
                              <h5>الشيخ/ أحمد على</h5>
                            </div>
                            <div class="time">
                              <p>PM4:57</p>
                            </div>
                          </div>
                          <div class="explain-teacher border-0">
                            <h6>
                              لاتنسي موعد حضور الحصة المباشرة اليوم الساعة 12
                              ظهرا
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="chat-of-massege">
                      <div class="status-of-teacher">
                        <div class="img">
                            <img src="../../../assets/media/Ellipse 515.png" alt="" />
                        </div>
                        <div class="list-name">
                          <div class="status-name-teacher">
                            <h4>الشيخ/ أحمد ابراهيم</h4>
                            <p>نشط الآن</p>
                          </div>
                          <div class="list">
                            <i class="fa-solid fa-ellipsis-vertical"></i>
                          </div>
                        </div>
                      </div>
                      <div class="wats-chat">
                        <div class="date">
                          <p>7 يناير</p>
                        </div>
                        <div class="quesion">
                          <h6>السلام عليكم ورحمة الله كيفك ؟</h6>
                          <p>6:30PM</p>
                        </div>
                        <div class="anser-flex">
                          <div class="anser">
                            <h6>السلام عليكم ورحمة الله كيفك ؟</h6>
                            <p>6:30PM</p>
                          </div>
                        </div>
                        <div class="send-massge">
                          <div class="form-group">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="اكتب رسالتك هنا ..."
                            />
                          </div>
                          <div class="tlegram">
                            <i class="fa-brands fa-telegram"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- chat -->
                <div
                  class="tab-pane fade"
                  id="v-pills-delet"
                  role="tabpanel"
                  aria-labelledby="v-pills-delet-tab"
                >
                  <h5 class="title_section">حذف الحساب</h5>
                  <div class="delet">
                    <h6>هل أنت متأكد من حذف الحساب الخاص بك</h6>
                    <p>
                      عندما تحذف حسابك ، ستفقد جميع الأنشطة في لوحة التحكم ،
                      وعندما تحذف حسابك ستفقد جميع الأنشطة في لوحة التحكم ،
                    </p>
                    <div class="form-group">
                      <input type="checkbox" id="z" class="form-check-input" />
                      <label for="z">أوافق على حذف الحساب الخاص بي</label>
                    </div>
                    <button
                      type="submit"
                      class="btn PrimaryButton dele"
                      data-bs-toggle="modal"
                      data-bs-target="#changeGroupModal"
                    >
                      حذف الآن
                    </button>
                  </div>
                </div>
                <!-- fourth tab -->
                <!-- five tab -->
           
                <div
                  class="tab-pane fade"
                  id="v-pills-signeout"
                  role="tabpanel"
                  aria-labelledby="v-pills-signeout-tab"
                ></div>
                <!-- five tab -->
              </div>

              <!-- ======= Main ======= -->
            </div>
          </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
name : 'generalsetting-index',
methods:{
    blockAlert() {
      Swal.fire({
        html:
          '<h5 class="swal2-title">   هل أنت متأكد من تسجيل الخروج؟ </h5>' +
          '<p class="swal2-html-container">  </p>',

        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: " نعم",
        confirmButtonAriaLabel: "Thumbs up, great!",
        cancelButtonText: "الغاء",
        cancelButtonAriaLabel: "Thumbs down",
      });
    //   this.students.splice(index, 1);
    },
}
}
</script>

<style>

</style>