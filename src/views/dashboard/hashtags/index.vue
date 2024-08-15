<template>
     <div class="container mt-5 " style="text-align: right;">
            <div class="d-flex justify-content-between align-items-center">
              <h5 class="title_section">الهشتاج</h5>
              <router-link to="/addhashtags" class="btn btn_title_page">+ اضافة </router-link>
            </div>
            <div class="table_details p-3">
              <!-- Start filters -->
              <div class="filters">
                <div class="form-group">
                  <i class="fa-solid fa-magnifying-glass"></i>
                  <input
                    type="search"
                    name=""
                    id=""
                    class="form-control"
                    placeholder=".ابحث......."
                  />
                </div>
              </div>
              <!-- End filters -->

              <div class="table-responsive">
                <table class="table" id="table">
                  <thead>
                    <tr class="trAltCizgi">
                      <th><input class="box" type="checkbox" /></th>
                      <th class="th">Id</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody class="tbody">
                    <!-- For loop this tr -->
                    <tr>
                      <td class="th"><input class="box" type="checkbox" /></td>
                      <td class="id">
                        <!-- <input class="form-check-input" type="checkbox" value="" name="table">  -->
                        123456
                      </td>
                      <td>
                        <a href="#"> <i class="fa-solid fa-pen"></i></a>
                        <a href="#"><i class="fa-solid fa-trash-can"></i></a>
                      </td>
                    </tr>
                    <!-- For loop this tr -->

                    <!-- For loop this tr -->
                    <tr>
                      <td class="th"><input class="box" type="checkbox" /></td>
                      <td class="id">
                        <!-- <input class="form-check-input" type="checkbox" value="" name="table">  -->
                        123456
                      </td>
                      <td>
                        <a href="#"> <i class="fa-solid fa-pen"></i></a>
                        <a href="#"><i class="fa-solid fa-trash-can"></i></a>
                      </td>
                    </tr>
                    <!-- For loop this tr -->

                    <!-- For loop this tr -->
                    <tr>
                      <td class="th"><input class="box" type="checkbox" /></td>
                      <td class="id">
                        <!-- <input class="form-check-input" type="checkbox" value="" name="table">  -->
                        123456
                      </td>
                      <td>
                        <a href="#"> <i class="fa-solid fa-pen"></i></a>
                        <a href="#"><i class="fa-solid fa-trash-can"></i></a>
                      </td>
                    </tr>
                    <!-- For loop this tr -->

                    <!-- For loop this tr -->
                    <tr>
                      <td class="th"><input class="box" type="checkbox" /></td>
                      <td class="id">
                        <!-- <input class="form-check-input" type="checkbox" value="" name="table">  -->
                        123456
                      </td>
                      <td>
                        <a href="#"> <i class="fa-solid fa-pen"></i></a>
                        <a href="#"><i class="fa-solid fa-trash-can"></i></a>
                      </td>
                    </tr>
                    <!-- For loop this tr -->
                  </tbody>
                </table>

                <!-- <script>
                  $(document).ready(function () {
                    $("#table tbody").on("click", "tr", function () {
                      $(this).toggleClass("selected");
                    });
                  });
                </script> -->
              </div>
              <button type="button" class="btn btn-danger mb-5 mt-3">حذف المحدد</button>
            </div>
          </div>
</template>

<script>
export default {
    name : 'hashtags-index',

}
</script>

<style>

</style>