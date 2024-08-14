<template>
           <div class="container mt-5">
            <div class="d-flex justify-content-between align-items-center">
              <h5 class="title_section">الاداره</h5>
              <router-link to="/addManage" class="btn btn_title_page"
                >+ اضافة مسؤول</router-link
              >
            </div>
            <div class="table_details">
              <!-- Start filters -->

              <!-- End filters -->

              <div class="table-responsive">
                <table class="table" id="table">
                  <thead>
                    <tr class="trAltCizgi">
                      <th class="th">اسم المسؤول</th>
                      <th class="th">البريد الاكتروني</th>
                      <th class="th">رقم الهاتف</th>
                      <th class="th"></th>
                    </tr>
                  </thead>
                  <tbody class="tbody">
                    <!-- For loop this tr -->
                    <tr>
                      <td>محمد أحمد</td>
                      <td>mohamed@gmail.com</td>
                      <td>01027003762</td>
                      <td>
                        <div class="actions">
                          <a href="#"
                            ><i class="fa-regular fa-trash-can delet-jop"></i
                          ></a>
                          <a href="#"
                            ><i class="fa-regular fa-pen-to-square edit-jop"></i
                          ></a>
                          <a href="#"
                            ><i class="fa-regular fa-eye viwe-jop"></i
                          ></a>
                        </div>
                      </td>
                    </tr>
                    <!-- For loop this tr -->
                    <tr>
                      <td>محمد أحمد</td>
                      <td>mohamed@gmail.com</td>
                      <td>01027003762</td>
                      <td>
                        <div class="actions">
                          <a href="#"
                            ><i class="fa-regular fa-trash-can delet-jop"></i
                          ></a>
                          <a href="#"
                            ><i class="fa-regular fa-pen-to-square edit-jop"></i
                          ></a>
                          <a href="#"
                            ><i class="fa-regular fa-eye viwe-jop"></i
                          ></a>
                        </div>
                      </td>
                    </tr>
                    <!-- For loop this tr -->
                    <tr>
                      <td>محمد أحمد</td>
                      <td>mohamed@gmail.com</td>
                      <td>01027003762</td>
                      <td>
                        <div class="actions">
                          <a href="#"
                            ><i class="fa-regular fa-trash-can delet-jop"></i
                          ></a>
                          <a href="#"
                            ><i class="fa-regular fa-pen-to-square edit-jop"></i
                          ></a>
                          <a href="#"
                            ><i class="fa-regular fa-eye viwe-jop"></i
                          ></a>
                        </div>
                      </td>
                    </tr>
                    <!-- For loop this tr -->
                    <tr>
                      <td>محمد أحمد</td>
                      <td>mohamed@gmail.com</td>
                      <td>01027003762</td>
                      <td>
                        <div class="actions">
                          <a href="#"
                            ><i class="fa-regular fa-trash-can delet-jop"></i
                          ></a>
                          <a href="#"
                            ><i class="fa-regular fa-pen-to-square edit-jop"></i
                          ></a>
                          <a href="#"
                            ><i class="fa-regular fa-eye viwe-jop"></i
                          ></a>
                        </div>
                      </td>
                    </tr>
                    <!-- For loop this tr -->

                    <!-- For loop this tr -->

                    <!-- For loop this tr -->

                    <!-- For loop this tr -->
                  </tbody>
                </table>

          
              </div>
            </div>
          </div>
</template>

<script>
export default {
    name : 'manage-index'

}
</script>

<style>

</style>