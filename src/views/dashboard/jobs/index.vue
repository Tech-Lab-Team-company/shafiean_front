<template>
       <div class="container mt-5 " style="text-align: right;">
            <div class="d-flex justify-content-between align-items-center">
                <h5 class="title_section">الوظائف</h5>
                <router-link to="/addJobs" class="btn btn_title_page">+ اضافة </router-link>
              </div>
          <div class="table-responsive">
            <table class="table job">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">نوع الوظيفه</th>
                  <th scope="col">action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Otto</td>
                  <td>
                    <div class="actions">
                      <a href="#"><i class="fa-regular fa-trash-can delet-jop"></i></a>
                  <a href="#"><i class="fa-regular fa-pen-to-square edit-jop"></i></a>
                    <a href="#"><i class="fa-regular fa-eye viwe-jop"></i></a>
                    </div>

                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Thornton</td>
                  <td>
                    <div class="actions">
                      <a href="#"><i class="fa-regular fa-trash-can delet-jop"></i></a>
                  <a href="#"><i class="fa-regular fa-pen-to-square edit-jop"></i></a>
                    <a href="#"><i class="fa-regular fa-eye viwe-jop"></i></a>
                    </div>

                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry the Bird</td>
                  <td>
                    <div class="actions">
                      <a href="#"><i class="fa-regular fa-trash-can delet-jop"></i></a>
                  <a href="#"><i class="fa-regular fa-pen-to-square edit-jop"></i></a>
                    <a href="#"><i class="fa-regular fa-eye viwe-jop"></i></a>
                    </div>

                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          </div>
</template>

<script>
export default {
    name: 'jobs-index',

}
</script>

<style>

</style>