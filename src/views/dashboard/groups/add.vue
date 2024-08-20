<template>
  <div class="container">
    <div class="d-flex justify-content-between align-items-center">
      <h5 class="title_section">إضافة مجموعة جديدة</h5>
    </div>
    <form action="groups.html" class="add_form">
      <div class="form-group">
        <label for="">*اسم المجموعة</label>
        <input
          type="text"
          name=""
          id=""
          class="form-control"
          placeholder="اكتب اسم المجموعة"
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
        <label for="">* المادة</label>
        <select
          name=""
          id=""
          class="form-control selectpicker"
          title="اختر المادة"
        >
          <option value="">مرحلة ابتدائي</option>
          <option value="">مرحلة اعدادي</option>
          <option value="">مرحلة ثانوي</option>
        </select>
      </div>
      <div class="form-group upload_file">
        <label for="">* اضافة صورة للمجموعة</label>
        <label for="imageCover" class="upload_file_label">
          <i class="fa-regular fa-image"></i>
          <p>اسحب صورة معبرة عن المسابقة واسقطها هنا</p>
          <span id="fileNameImage">او اضغط هنا</span>
        </label>
        <input
          type="file"
          name=""
          id="imageCover"
          class="form-control"
          accept="image/*"
          hidden
        />
      </div>

      <div class="craet">
        <input
          type="checkbox"
          class="form-check-input"
          data-bs-toggle="modal"
          data-bs-target="#move-student"
        />
        <label for="">انشاء رابط تسجيل</label>
      </div>
      <button @click="add()" type="btn" class="btn PrimaryButton">الحفظ والمتابعة</button>
      <div class="modal" tabindex="-1" id="move-student">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header select">
              <h5 class="modal-title">اختيار الطلاب</h5>

              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body select">
              <p>
                قم بتحديد الطلاب الذين تود ارسال رابط التسجيل اليهم للدخول الى
                المجموعة
              </p>
              <div class="table_details">
                <!-- Start filters -->
                <div class="filters">
                  <div class="form-group">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input
                      type="search"
                      name=""
                      id=""
                      class="form-control"
                      placeholder="ابحث باسم الطالب......"
                    />
                  </div>
                </div>
                <!-- End filters -->

                <div class="table-responsive">
                  <table class="table" id="table">
                    <thead>
                      <tr class="trAltCizgi">
                        <th class="th">اسم الطالب</th>
                        <th class="th">رقم التليفون</th>
                        <th class="th">نوع الاعاقه</th>

                        <th class="ny">
                          <input class="form-check-input" type="checkbox" />
                        </th>
                      </tr>
                    </thead>
                    <tbody class="tbody">
                      <!-- For loop this tr -->
                      <tr>
                        <td>أحمد ابراهيم</td>
                        <td>01027003762</td>
                        <td>اعاقه سمع</td>
                        <td>
                          <input class="form-check-input" type="checkbox" />
                        </td>
                      </tr>
                      <!-- For loop this tr -->
                      <tr>
                        <td>أحمد ابراهيم</td>
                        <td>01027003762</td>
                        <td>اعاقه سمع</td>
                        <td>
                          <input class="form-check-input" type="checkbox" />
                        </td>
                      </tr>
                      <!-- For loop this tr -->
                      <tr>
                        <td>أحمد ابراهيم</td>
                        <td>01027003762</td>
                        <td>اعاقه سمع</td>
                        <td>
                          <input class="form-check-input" type="checkbox" />
                        </td>
                      </tr>
                      <!-- For loop this tr -->
                      <tr>
                        <td>أحمد ابراهيم</td>
                        <td>01027003762</td>
                        <td>اعاقه سمع</td>
                        <td>
                          <input class="form-check-input" type="checkbox" />
                        </td>
                      </tr>
                      <!-- For loop this tr -->
                      <tr>
                        <td>أحمد ابراهيم</td>
                        <td>01027003762</td>
                        <td>اعاقه سمع</td>
                        <td>
                          <input class="form-check-input" type="checkbox" />
                        </td>
                      </tr>
                      <!-- For loop this tr -->
                      <tr>
                        <td>أحمد ابراهيم</td>
                        <td>01027003762</td>
                        <td>اعاقه سمع</td>
                        <td>
                          <input class="form-check-input" type="checkbox" />
                        </td>
                      </tr>
                      <!-- For loop this tr -->
                      <tr>
                        <td>أحمد ابراهيم</td>
                        <td>01027003762</td>
                        <td>اعاقه سمع</td>
                        <td>
                          <input class="form-check-input" type="checkbox" />
                        </td>
                      </tr>
                      <!-- For loop this tr -->
                    </tbody>
                  </table>
                  <button type="button" class="btn send-now">ارسال الان</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Swal from 'sweetalert2';
export default {
    name: "groups-add",
    data() {
        return {
            
        }
    },
    methods: {
      
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