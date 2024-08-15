<template>
            <div class="container mt-5">
            <div class="d-flex justify-content-between align-items-center">
              <h5 class="title_section">عرض المدونه</h5>
              <router-link to="/addviewblog" class="btn btn_title_page">+ اضافة </router-link>
            </div>
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
                      <th class="th">وصف</th>
                      <th class="th">اسم القسم</th>
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
                      <td>وصف تعبيري يمكن استبدال هذا النص</td>
                      <td>وصف تعبيري يمكن استبدال هذا النص</td>
                      <td>
                        <a href="#"> <i class="fa-solid fa-pen"></i></a>
                        <a href="#"><i class="fa-solid fa-eye"></i></a>
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
                      <td>وصف تعبيري يمكن استبدال هذا النص</td>
                      <td>وصف تعبيري يمكن استبدال هذا النص</td>
                      <td>
                        <a href="#"> <i class="fa-solid fa-pen"></i></a>
                        <a href="#"><i class="fa-solid fa-eye"></i></a>
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
                      <td>وصف تعبيري يمكن استبدال هذا النص</td>
                      <td>وصف تعبيري يمكن استبدال هذا النص</td>
                      <td>
                        <a href="#"> <i class="fa-solid fa-pen"></i></a>
                        <a href="#"><i class="fa-solid fa-eye"></i></a>
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
                      <td>وصف تعبيري يمكن استبدال هذا النص</td>
                      <td>وصف تعبيري يمكن استبدال هذا النص</td>
                      <td>
                        <a href="#"> <i class="fa-solid fa-pen"></i></a>
                        <a href="#"><i class="fa-solid fa-eye"></i></a>
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
              <button type="button" class="btn btn-danger">حذف المحدد</button>
            </div>
          </div>
</template>

<script>
export default {
    name : 'viewblogAdd'

}
</script>

<style>

</style>