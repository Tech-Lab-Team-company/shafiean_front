<template>
        <div class="container mt-5">
            <div class="d-flex justify-content-between align-items-center">
              <h5 class="title_section">نتائج المسابقة</h5>
            </div>
            <form class="add_form">
              <div class="form-group">
                <label for="">*اسم الطالب</label>
                <input
                  type="text"
                  name=""
                  id=""
                  class="form-control"
                  placeholder="اكتب اسم الطالب"
                />
              </div>
              <div class="form-group">
                <label for="">*اسم الامتحان</label>
                <input
                  type="text"
                  name=""
                  id=""
                  class="form-control"
                  placeholder="اكتب اسم الامتحان"
                />
              </div>
              <div class="form-group">
                <label for="">*نتيجه الامتحان</label>
                <input
                  type="text"
                  name=""
                  id=""
                  class="form-control"
                  placeholder="اكتب نتجة الامتحان"
                />
              </div>
              <div class="form-group">
                <label for="">تاريخ الامتحان</label>
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
            </form>
            <div style="text-align: right;">

                <router-link to="/competitionReportsIndex">
                    
                    <button @click="blockAlert()" type="submit" class="btn PrimaryButton">اضافة</button>
                </router-link>
            </div>
          </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
name : 'result-competitionReports',
methods:{
    blockAlert() {
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