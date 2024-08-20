
  <template>
  <div class="container mt-5">
            <div style="text-align: right" class="head-name">تقارير الأكاديميه</div>
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
                    placeholder="ابحث باسم الواجب, الطالب......."
                  />
                </div>

                <div class="form-group" >
                  <i class="fa-solid fa-calendar-days"></i>
                  <input
                    type="text"
                    class="form-control"
                    name="daterange"
                    value=""
                  />
                  <!-- <script>
                    $(function () {
                      $('input[name="daterange"]').daterangepicker(
                        {
                          opens: "left",
                        },
                        function (start, end, label) {
                          console.log(
                            "A new date selection was made: " +
                              start.format("YYYY-MM-DD") +
                              " to " +
                              end.format("YYYY-MM-DD")
                          );
                        }
                      );
                    });
                  </script> -->
                </div>
              </div>
              <!-- End filters -->

              <div class="table-responsive p-3 ">
                <table class="table " id="table" style="text-align: right;" >
                  <thead>
                    <tr class="trAltCizgi">
                      <th><input class="box" type="checkbox" /></th>
                      <th class="th">اسم الطالب</th>
                      <th class="th">تاريخ اخر تقيم</th>
                      <th class="th">الدرجه</th>
                      <th class="th">الدرجه الأجماليه</th>
                    </tr>
                  </thead>
                  <tbody class="tbody">
                    <!-- For loop this tr -->
                    <tr>
                      <td class="th"><input class="box" type="checkbox" /></td>
                      <td>محمد أحمد</td>
                      <td>20/11/2024</td>
                      <td>9/10</td>
                      <td class="yy">90/100</td>
                    </tr>
                    <!-- For loop this tr -->

                    <!-- For loop this tr -->
                    <tr>
                      <td class="th"><input class="box" type="checkbox" /></td>
                      <td>محمد أحمد</td>
                      <td>20/11/2024</td>
                      <td>9/10</td>
                      <td class="yy">90/100</td>
                    </tr>
                    <!-- For loop this tr -->

                    <!-- For loop this tr -->
                    <tr>
                      <td class="th"><input class="box" type="checkbox" /></td>
                      <td>محمد أحمد</td>
                      <td>20/11/2024</td>
                      <td>9/10</td>
                      <td class="yy">90/100</td>
                    </tr>
                    <!-- For loop this tr -->

                    <!-- For loop this tr -->
                    <tr>
                      <td class="th"><input class="box" type="checkbox" /></td>
                      <td>محمد أحمد</td>
                      <td>20/11/2024</td>
                      <td>9/10</td>
                      <td class="yy">90/100</td>
                    </tr>
                    <!-- For loop this tr -->
                  </tbody>
                </table>
              </div>
              <button @click="blockAlert()" type="button" class="btn btn-danger">حذف المحدد</button>
            </div>
          </div>
</template>




<script>
import Swal from "sweetalert2";
export default {

    name: '/AcademicReports-index',
    methods: {
    blockAlert() {
      Swal.fire({
        html:
          '<h5 class="swal2-title">   هل أنت متأكد من حذف المعلم؟ </h5>' +
          '<p class="swal2-html-container">  </p>',

        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: "تأكيد الحذف",
        confirmButtonAriaLabel: "Thumbs up, great!",
        cancelButtonText: "الغاء",
        cancelButtonAriaLabel: "Thumbs down",
      });
    },
  },

}
</script>



<style>

</style>