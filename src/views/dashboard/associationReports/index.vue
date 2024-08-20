<template>
      <div class="container mt-5">
            <div class="d-flex justify-content-between align-items-center">
              <h5 class="title_section">تقارير الجمعيه أو المدرسه</h5>
            </div>
            <div class="table_details p-5">
              <!-- Start filters -->
              <div class="filters">
                <div class="form-group">
                  <i class="fa-solid fa-magnifying-glass"></i>
                  <input
                    type="search"
                    name=""
                    id=""
                    class="form-control"
                    placeholder="ابحث باسم المجموعة"
                  />
                </div>
                <div class="form-group">
                  <i class="fa-solid fa-calendar-days"></i>
                  <input
                    type="text"
                    class="form-control"
                    name="daterange"
                    value=""
                  />
          
                </div>
              </div>
              <!-- End filters -->

              <div class="table-responsive ">
                <table class="table " id="table">
                  <thead>
                    <tr class="trAltCizgi">
                      <th class="th-k">رقم</th>
                      <th class="th-k">اسم المجموعه</th>
                      <th class="th-k">عدد الطلاب</th>
                      <th class="th-k">اجمالي أيام الحضور</th>
                      <th class="th-k">اجمالي أيام الغياب</th>
                      <th class="th-k">اجمالي الحفظ</th>
                      <th class="th-k">اجمالي المراجعه</th>
                    </tr>
                  </thead>
                  <tbody class="tbody">
                    <tr>
                      <td class="i">1</td>
                      <td class="i">مجموعة الصم</td>
                      <td class="i">30</td>
                      <td class="i">20</td>
                      <td class="i">550</td>
                      <td class="i">556</td>
                      <td class="i">5555</td>
                    </tr>
                    <tr>
                      <td class="i">1</td>
                      <td class="i">مجموعة الصم</td>
                      <td class="i">30</td>
                      <td class="i">20</td>
                      <td class="i">550</td>
                      <td class="i">556</td>
                      <td class="i">5555</td>
                    </tr>
                    <tr>
                      <td class="i">2</td>
                      <td class="i">مجموعة الصم</td>
                      <td class="i">30</td>
                      <td class="i">20</td>
                      <td class="i">550</td>
                      <td class="i">556</td>
                      <td class="i">5555</td>
                    </tr>
                    <tr>
                      <td class="i">3</td>
                      <td class="i">مجموعة الصم</td>
                      <td class="i">30</td>
                      <td class="i">20</td>
                      <td class="i">550</td>
                      <td class="i">556</td>
                      <td class="i">5555</td>
                    </tr>
                    <tr>
                      <td class="i">4</td>
                      <td class="i">مجموعة الصم</td>
                      <td class="i">30</td>
                      <td class="i">20</td>
                      <td class="i">550</td>
                      <td class="i">556</td>
                      <td class="i">5555</td>
                    </tr>
                    <tr>
                      <td class="i">5</td>
                      <td class="i">مجموعة الصم</td>
                      <td class="i">30</td>
                      <td class="i">20</td>
                      <td class="i">550</td>
                      <td class="i">556</td>
                      <td class="i">5555</td>
                    </tr>
                  </tbody>
                </table>
               
             
              </div>
            </div>
          </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
    name : '/associationReports-index',
    methods : {
        blockAlert() {
                    Swal.fire({
                      html:
                        '<h5 class="swal2-title">   هل أنت متأكد من حذف المراحله؟ </h5>' +
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