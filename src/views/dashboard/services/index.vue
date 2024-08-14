<template>
  <div class="container">
    <div class="d-flex justify-content-between align-items-center">
      <h5 class="title_section">الخدمات</h5>
      <router-link to="/addservices" class="btn btn_title_page">+ اضافة </router-link>
    </div>
    <div class="table_details">
      <div class="table-responsive">
        <table class="table" id="table">
          <thead>
            <tr class="trAltCizgi">
              <th><input class="box" type="checkbox" /></th>
              <th class="th">الصوره</th>
              <th class="th">الاسم</th>
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
              <td>هذا النص تعبيري يمكن استبدال</td>
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
              <td>هذا النص تعبيري يمكن استبدال</td>
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
              <td>هذا النص تعبيري يمكن استبدال</td>
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
              <td>هذا النص تعبيري يمكن استبدال</td>
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
    name:'services-index'

}
</script>

<style>
</style>