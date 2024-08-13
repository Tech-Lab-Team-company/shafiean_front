<template>
  <div class="container">
    <div
      class="d-flex justify-content-between align-items-center"
    >
      <h5 class="title_section">المجموعات</h5>
      <router-link to="/group/add" class="btn btn_title_page"
        >+ اضافة مجموعة جديدة</router-link
      >
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
            placeholder=".ابحث باسم السؤال , المجموعة , المدرس"
          />
        </div>
        <div class="form-group">
          <i class="fa-solid fa-calendar-days"></i>
          <input type="text" class="form-control" name="daterange" value="" />
        </div>
        <div class="form-group">
          <select
            name=""
            id=""
            class="selectpicker form-control"
            title="المرحلة الدراسية"
          >
            <option value="">ابتدائي</option>
            <option value="">اعدادي</option>
            <option value="">ثانوي</option>
          </select>
        </div>
      </div>
      <!-- End filters -->

      <div class="table-responsive">
        <table class="table" id="table">
          <thead>
            <tr class="trAltCizgi">
              <th style="margin-right: 2%">
                <input class="box" type="checkbox" />
              </th>
              <th class="th">رقم المجموعة</th>
              <th class="th">اسم المجموعة</th>
              <th class="th">المرحلة الدراسية</th>
              <th class="th">المعلم</th>
              <th class="th">تاريخ الاضافة</th>
              <th class="th"></th>
            </tr>
          </thead>
          <tbody class="tbody">
            <!-- For loop this tr -->
            <tr>
              <td class="th"><input class="box" type="checkbox" /></td>
              <td class="id">
                <!-- <input class="form-check-input" type="checkbox" value="" name="table">  -->
                1
              </td>
              <td>مجموعة العهد الحديث</td>
              <td>الفرقة الاولى</td>
              <td>أحمد ابراهيم</td>
              <td>مايو 22 , 2022 - 2:30 م</td>
              <td class="flex_mobile">
                <div class="dropdown">
                  <a
                    class="btn dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                  </a>

                  <ul class="dropdown-menu">
                    <li>
                      <a
                        class="dropdown-item"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#changeGroupModal"
                        >نقل الى الارشيف</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" href="details_group.html"
                        >تفاصيل المجموعة</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" href="edit-group.html">تعديل</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#" onclick="blockAlert()"
                        >حذف
                      </a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <!-- For loop this tr -->

            <!-- For loop this tr -->
            <tr>
              <td class="th"><input class="box" type="checkbox" /></td>
              <td class="id">
                <!-- <input class="form-check-input" type="checkbox" value="" name="table">  -->
                1
              </td>
              <td>مجموعة العهد الحديث</td>
              <td>الفرقة الاولى</td>
              <td>أحمد ابراهيم</td>
              <td>مايو 22 , 2022 - 2:30 م</td>
              <td class="flex_mobile">
                <div class="dropdown">
                  <a
                    class="btn dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                  </a>

                  <ul class="dropdown-menu">
                    <li>
                      <a
                        class="dropdown-item"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#changeGroupModal"
                        >نقل الى الارشيف</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" href="details_group.html"
                        >تفاصيل المجموعة</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" href="edit-group.html">تعديل</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#" onclick="blockAlert()"
                        >حذف
                      </a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <!-- For loop this tr -->

            <!-- For loop this tr -->
            <tr>
              <td class="th"><input class="box" type="checkbox" /></td>
              <td class="id">
                <!-- <input class="form-check-input" type="checkbox" value="" name="table">  -->
                1
              </td>
              <td>مجموعة العهد الحديث</td>
              <td>الفرقة الاولى</td>
              <td>أحمد ابراهيم</td>
              <td>مايو 22 , 2022 - 2:30 م</td>
              <td class="flex_mobile">
                <div class="dropdown">
                  <a
                    class="btn dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                  </a>

                  <ul class="dropdown-menu">
                    <li>
                      <a
                        class="dropdown-item"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#changeGroupModal"
                        >نقل الى الارشيف</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" href="details_group.html"
                        >تفاصيل المجموعة</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" href="edit-group.html">تعديل</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#" onclick="blockAlert()"
                        >حذف
                      </a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <!-- For loop this tr -->

            <!-- For loop this tr -->
            <tr>
              <td class="th"><input class="box" type="checkbox" /></td>
              <td class="id">
                <!-- <input class="form-check-input" type="checkbox" value="" name="table">  -->
                1
              </td>
              <td>مجموعة العهد الحديث</td>
              <td>الفرقة الاولى</td>
              <td>أحمد ابراهيم</td>
              <td>مايو 22 , 2022 - 2:30 م</td>
              <td class="flex_mobile">
                <div class="dropdown">
                  <a
                    class="btn dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                  </a>

                  <ul class="dropdown-menu">
                    <li>
                      <a
                        class="dropdown-item"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#changeGroupModal"
                        >نقل الى الارشيف</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" href="details_group.html"
                        >تفاصيل المجموعة</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" href="edit-group.html">تعديل</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#" onclick="blockAlert()"
                        >حذف
                      </a>
                    </li>
                  </ul>
                </div>
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
                <button type="submit" class="btn PrimaryButton">الغاء</button>
              </div>
            </div>
          </div>
        </div>
        <!-- Modal chnage student grroup -->
        <!-- sweetalrt -->

        <!-- sweetalrt -->
      </div>
      <button type="button" class="btn btn-danger">حذف المحدد</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "groups-index",
};
</script>

<style lang="scss">
</style>