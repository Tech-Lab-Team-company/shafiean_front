<template>
  <div class="container mt-5">
    <div class="d-flex justify-content-between align-items-center">
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
           
            <tr v-for="(group,index) in groups" :key="index">
              <td class="th"><input class="box" type="checkbox" :value="group.id" v-model="selectedGroups" /></td>
              <td class="id">
                <!-- <input class="form-check-input" type="checkbox" value="" name="table">  -->
                {{ group.id }}
              </td>
              <td>{{ group.name }}</td>
              <td>
                {{ group.level }}
              </td>
              <td>{{ group.teacher }}</td>
              <td>{{ group.date }}</td>
             
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
                      <router-link to="detailsGroup" class="dropdown-item" 
                        >تفاصيل المجموعة</router-link
                      >
                    </li>
                    <li>
                      <router-link to="editgroup" class="dropdown-item"
                        >تعديل</router-link
                      >
                    </li>
                    <li>
                      
                      <button @click="blockAlertt(index)" class="dropdown-item" href="#" 
                        >حذف
                      </button>
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
                <router-link
                  to="/archives"
                
                >
                  <button   style="margin-left: 1%" type="button" class="btn PrimaryButton">
                    تأكيد النقل
                  </button>
                  <button type="button" class="btn PrimaryButton">الغاء</button>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <!-- Modal chnage student grroup -->
        <!-- sweetalrt -->

        <!-- sweetalrt -->
      </div>
      <button @click="deleteSelectedStudents" type="button" class="btn btn-danger">حذف المحدد</button>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';
export default {
  name: "groups-index",
  data() {
    return {
      selectedGroups: [],
      groups: [
        {
          id: 1,
          name: "مجموعة العهد الحديث",
          level: "الفرقة الاولى",
          teacher: "أحمد ابراهيم",
          date: "مايو 22 , 2022 - 2:30 م",
        },
        {
          id: 2,
          name: "مجموعة العهد الحديث",
          level: "الفرقة الاولى",
          teacher: "أحمد ابراهيم",
          date: "مايو 22 , 2022 - 2:30 م",
        },
        {
          id: 3,
          name: "مجموعة العهد الحديث",
          level: "الفرقة الاولى",
          teacher: "أحمد ابراهيم",
          date: "مايو 22 , 2022 - 2:30 م",
        },
        {
          id: 4,
          name: "مجموعة العهد الحديث",
          level: "الفرقة الاولى",
          teacher: "أحمد ابراهيم",
          date: "مايو 22 , 2022 - 2:30 م",
        },
      ],
    };
  },
  methods: {
    blockAlertt(index) {
      Swal.fire({
        html:
          '<h5 class="swal2-title">   هل أنت متأكد من حذف الطالب؟ </h5>' +
          '<p class="swal2-html-container">  </p>',

        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: "تأكيد الحذف",
        confirmButtonAriaLabel: "Thumbs up, great!",
        cancelButtonText: "الغاء",
        cancelButtonAriaLabel: "Thumbs down",
      }).then((result) => {
        if (result.isConfirmed) {
          if (this.groups && this.groups.length > index) {
            this.groups.splice(index, 1);
            Swal.fire("تم الحذف!", "تم حذف الطالب بنجاح.", "success");
          } else {
            Swal.fire("خطأ!", "الطالب غير موجود.", "error");
          }
        }
      });
    },
    deleteSelectedStudents() {
      if (this.selectedGroups.length > 0) {
        this.groups = this.groups.filter(
          (group) => !this.selectedGroups.includes(group.id)
        );
        Swal.fire("تم الحذف!", "تم حذف الطالب/الطلاب بنجاح.", "success");
      } else {
        Swal.fire("خطأ!", "لم يتم تحديد أي طالب.", "error");
      }
      // Clear the selection
      this.selectedGroups = [];
    },
  },
};
</script>

<style lang="scss">
</style>