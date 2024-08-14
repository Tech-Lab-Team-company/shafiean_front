<template>
      <div class="container mt-5" style="text-align: right">
            <div class="d-flex justify-content-between align-items-center">
              <h5 class="title_section">اسليدر</h5>
              <router-link to="/addslider" class="btn btn_title_page"
                >+ اضافة اسليدر</router-link>
            </div>
            <div class="table_details">
              <!-- Start filters -->
              <div class="filters">
                <div class="form-group" style="width: 100%">
                  <i class="fa-solid fa-magnifying-glass"></i>
                  <input
                    type="search"
                    name=""
                    id=""
                    class="form-control"
                    placeholder="ابحث باسم القسم......"
                  />
                </div>
              </div>
              <!-- End filters -->

              <div class="table-responsive p-3">
                <table class="table " id="table">
                  <thead>
                    <tr class="trAltCizgi">
                      <th><input class="box" type="checkbox" /></th>
                      <th class="th">الصوره</th>
                      <th class="th">العنوان</th>
                      <th class="th"></th>
                    </tr>
                  </thead>
                  <tbody class="tbody">
                    <!-- For loop this tr -->
                    <tr>
                      <td class="th"><input class="box" type="checkbox" /></td>
                      <td class="id">
                        <img src="../../../assets/media/Ellipse 515.png" alt="" />
                      </td>
                      <td>هذا النص تعبيري يمكن استبداله</td>
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
                        <img src="../../../assets/media/Ellipse 515.png" alt="" />
                      </td>
                      <td>هذا النص تعبيري يمكن استبداله</td>
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
                        <img src="../../../assets/media/Ellipse 515.png" alt="" />
                      </td>
                      <td>هذا النص تعبيري يمكن استبداله</td>
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
                        <img src="../../../assets/media/Ellipse 515.png" alt="" />
                      </td>
                      <td>هذا النص تعبيري يمكن استبداله</td>
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
    name:'sliders-index'

}
</script>

<style>

</style>