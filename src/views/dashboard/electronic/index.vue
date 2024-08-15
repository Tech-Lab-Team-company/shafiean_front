<template>
     <div class="container mt-5">
            <div class="d-flex justify-content-between align-items-center">
              <h5 class="title_section">المكتبه الألكترونيه</h5>
              <router-link to="/addelectronic" 
                class="btn btn_title_page"
                >+ اضافة مكتبه ألكترونيه</router-link
              >
            </div>
            <div class="table_details">
              <!-- Start filters -->

              <!-- End filters -->

              <div class="table-responsive">
                <table class="table" id="table">
                  <thead>
                    <tr class="trAltCizgi">
                      <th><input class="box" type="checkbox" /></th>
                      <th class="th">Id</th>
                      <th class="th">تاريخ الأنشاء</th>
                      <th class="th">الأسم</th>
                      <th class="th">النوع</th>
                      <th class="th">اضافه بواسطة</th>
                      <th class="th"></th>
                    </tr>
                  </thead>
                  <tbody class="tbody">
                    <!-- For loop this tr -->
                    <tr>
                      <td class="th"><input class="box" type="checkbox" /></td>
                      <td class="id">
                        <!-- <input class="form-check-input" type="checkbox" value="" name="table">  -->
                        1231254
                      </td>
                      <td>مايو 22 , 2022 - 2:30 م</td>
                      <td>شرح تفسير الفقه</td>
                      <td>pdf</td>

                      <td>محمد أحمد</td>
                      <td class="icons-7">
                        <a href="#"> <i class="fa-solid fa-pen"></i></a>
                        <a href="#"><i class="fa-solid fa-eye"></i></a>
                        <a href="#"> <i class="fa-solid fa-trash"></i></a>
                      </td>
                    </tr>
                    <!-- For loop this tr -->

                    <!-- For loop this tr -->
                    <tr>
                      <td class="th"><input class="box" type="checkbox" /></td>
                      <td class="id">
                        <!-- <input class="form-check-input" type="checkbox" value="" name="table">  -->
                        1231254
                      </td>
                      <td>مايو 22 , 2022 - 2:30 م</td>
                      <td>شرح تفسير الفقه</td>
                      <td>pdf</td>

                      <td>محمد أحمد</td>
                      <td class="icons-7">
                        <a href="#"> <i class="fa-solid fa-pen"></i></a>
                        <a href="#"><i class="fa-solid fa-eye"></i></a>
                        <a href="#"> <i class="fa-solid fa-trash"></i></a>
                      </td>
                    </tr>
                    <!-- For loop this tr -->

                    <!-- For loop this tr -->
                    <tr>
                      <td class="th"><input class="box" type="checkbox" /></td>
                      <td class="id">
                        <!-- <input class="form-check-input" type="checkbox" value="" name="table">  -->
                        1231254
                      </td>
                      <td>مايو 22 , 2022 - 2:30 م</td>
                      <td>شرح تفسير الفقه</td>
                      <td>pdf</td>

                      <td>محمد أحمد</td>
                      <td class="icons-7">
                        <a href="#"> <i class="fa-solid fa-pen"></i></a>
                        <a href="#"><i class="fa-solid fa-eye"></i></a>
                        <a href="#"> <i class="fa-solid fa-trash"></i></a>
                      </td>
                    </tr>
                    <!-- For loop this tr -->

                    <!-- For loop this tr -->
                    <tr>
                      <td class="th"><input class="box" type="checkbox" /></td>
                      <td class="id">
                        <!-- <input class="form-check-input" type="checkbox" value="" name="table">  -->
                        1231254
                      </td>
                      <td>مايو 22 , 2022 - 2:30 م</td>
                      <td>شرح تفسير الفقه</td>
                      <td>pdf</td>

                      <td>محمد أحمد</td>
                      <td class="icons-7">
                        <a href="#"> <i class="fa-solid fa-pen"></i></a>
                        <a href="#"><i class="fa-solid fa-eye"></i></a>
                        <a href="#"> <i class="fa-solid fa-trash"></i></a>
                      </td>
                    </tr>
                    <!-- For loop this tr -->
                  </tbody>
                </table>
                <!-- Modal chnage student grroup -->
                <div
                  class="modal fade"
                  id="changeGroupModal"
                  tabindex="-1"
                  aria-labelledby="changeGroupModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                      <div class="modal-body groups">
                        <h4>هل تريد نقل المجموعه الي الارشيف؟</h4>
                        <a href="archives.html" style="text-decoration: none">
                          <button type="submit" class="btn PrimaryButton">
                            تأكيد النقل
                          </button>
                        </a>
                        <button type="submit" class="btn PrimaryButton">
                          الغاء
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Modal chnage student grroup -->
                <!-- sweetalrt -->
              
            
                <!-- sweetalrt -->

                <!-- <script>
                  $(document).ready(function () {
                    $("#table tbody").on("click", "tr", function () {
                      $(this).toggleClass("selected");
                    });
                  });
                </script> -->
              </div>
              <button @click="blockAlert()" type="button" class="btn btn-danger">حذف المحدد</button>
            </div>
          </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
    name : 'electronic-index',
    methods:{
        blockAlert() {
                    Swal.fire({
                      html:
                        '<h5 class="swal2-title">   هل أنت متأكد من حذف المجموعه؟ </h5>' +
                        '<p class="swal2-html-container">  </p>',

                      showCancelButton: true,
                      focusConfirm: false,
                      confirmButtonText: "تأكيد الحذف",
                      confirmButtonAriaLabel: "Thumbs up, great!",
                      cancelButtonText: "الغاء",
                      cancelButtonAriaLabel: "Thumbs down",
                    });
                  }
    }

}
</script>

<style>

</style>