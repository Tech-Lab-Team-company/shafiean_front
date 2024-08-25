<template>
  <div class="container mt-5">
    <div class="d-flex justify-content-between align-items-center">
      <h5 class="title_section">المعلمين</h5>
      <router-link to="/addTeachers" class="btn btn_title_page"
        >+ اضافة معلم جديد</router-link
      >
    </div>
    <div class="table_details">
      <!-- Start filters -->
      <div class="filters">
        <div class="form-group">
          <i class="fa-solid fa-calendar-days"></i>
          <input type="text" class="form-control" name="daterange" value="" />
        </div>
        <div class="form-group">
          <select
            name=""
            id=""
            class="selectpicker form-control"
            title="كل المدرسين"
          >
            <option value="">مدرس 1</option>
            <option value="">مدرس 2</option>
            <option value="">مدرس 3</option>
          </select>
        </div>
        <div class="form-group">
          <select
            name=""
            id=""
            class="selectpicker form-control"
            title="اختر مجموعه"
          >
            <option value="">مجموعه 1</option>
            <option value="">مجموعه 2</option>
            <option value="">مجموعه 3</option>
          </select>
        </div>
      </div>
      <!-- End filters -->

      <div class="table-responsive">
        <table class="table" id="table">
          <thead>
            <tr class="trAltCizgi">
              <th><input class="box" type="checkbox" /></th>
              <th class="th">رقم المعلم</th>
              <th class="th">اسم المعلم</th>
              <th class="th">رقم الموبايل</th>
              <th class="th">البريد الالكتروني</th>
              <th class="th">العمر</th>
              <th class="th">الجنس</th>
              <th class="th">تاريخ الاضافة</th>
              <th class="th"></th>
            </tr>
          </thead>
          <tbody class="tbody">
            <!-- For loop this tr -->
            <tr v-for="(teacher, index) in teachers" :key="index">
              <td class="th">
                <input
                  class="box"
                  type="checkbox"
                  v-model="teacher.isSelected"
                />
              </td>
              <td class="id">
                <!-- <input class="form-check-input" type="checkbox" value="" name="table">  -->
                {{ teacher.id }}
              </td>
              <td>{{ teacher.name }}</td>
              <td>{{ teacher.phone }}</td>
              <td>{{ teacher.email }}</td>
              <td>{{ teacher.age }}</td>
              <td>{{ teacher.gender }}</td>
              <td>{{ teacher.created_at }}</td>

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
                      <a class="dropdown-item" href="details_teacher.html"
                        >تفاصيل المعلم</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" href="edit-teacher.html"
                        >تعديل</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="#"
                        @click="blockAlert(index, teacher.id)"
                        >حذف
                      </a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <!-- For loop this tr -->

            <!-- For loop this tr -->
          </tbody>
        </table>
        <!-- sweetalrt -->

        <!-- sweetalrt -->
      </div>
      <button
        @click="deleteSelectedTeachers"
        type="button"
        class="btn btn-danger"
      >
        حذف المحدد
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
  name: "teachers-index",
  data() {
    return {
      teachers: [],
      selectedTeachers: [],
    };
  },
  methods: {
    async fetchTeachers() {
      try {
        const response = await fetch(
          "https://api.shafean.x-coders.net/api/teachers",

          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const result = await response.json();

        if (response.ok) {
          this.teachers = result.data; // Assign the fetched data to the users array
          console.log(this.teachers); // Debugging: Log the fetched data
        } else {
          Swal.fire({
            icon: "error",
            title: "خطأ",
            text:
              result.message ||
              "فشل في جلب البيانات. يرجى المحاولة مرة أخرى لاحقًا.",
          });
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "خطأ",
          text: "حدث خطأ ما. يرجى المحاولة مرة أخرى لاحقًا.",
        });
      }
    },

    blockAlert(index, teacherId) {
      Swal.fire({
        html:
          '<h5 class="swal2-title">   هل أنت متأكد من حذف المعلم؟ </h5>' +
          '<p class="swal2-html-container">  </p>',
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: "تأكيد الحذف",
        cancelButtonText: "الغاء",
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            const response = await axios.delete(`/teachers/${teacherId}`, {});
            console.log(response);

            if (response.data.status == true) {
              this.teachers.splice(index, 1);
              Swal.fire("تم الحذف!", "تم حذف المعلم بنجاح.", "success");
            } else {
              Swal.fire("خطأ!", "حدث خطأ أثناء حذف المعلم.", "error");
            }
          } catch (error) {
            Swal.fire("خطأ!", "حدث خطأ أثناء الاتصال بالخادم.", "error");
          }
        }
      });
    },
    async deleteSelectedTeachers() {
  const selectedTeachers = this.teachers.filter((teacher) => teacher.isSelected);

  if (selectedTeachers.length === 0) {
    Swal.fire({
      icon: "warning",
      title: "تحذير",
      text: "الرجاء اختيار معلمين للحذف.",
    });
    return;
  }

  const result = await Swal.fire({
    html: '<h5 class="swal2-title">هل أنت متأكد من حذف المعلمين المحددين؟</h5>',
    showCancelButton: true,
    confirmButtonText: "تأكيد الحذف",
    cancelButtonText: "الغاء",
  });

  if (result.isConfirmed) {
    try {
      for (const teacher of selectedTeachers) {
        const response = await axios.delete(`/teachers/${teacher.id}`); 

        if (!response.data.status) {
          throw new Error("Failed to delete teacher");
        }
      }


      this.fetchTeachers();
      Swal.fire("تم الحذف!", "تم حذف المعلمين بنجاح.", "success");
    } catch (error) {
      Swal.fire("خطأ!", "حدث خطأ أثناء حذف المعلمين.", "error");
    }
  }
}

  },

  // blockAlert() {
  //   Swal.fire({
  //     html:
  //       '<h5 class="swal2-title">   هل أنت متأكد من حذف المعلم؟ </h5>' +
  //       '<p class="swal2-html-container">  </p>',

  //     showCancelButton: true,
  //     focusConfirm: false,
  //     confirmButtonText: "تأكيد الحذف",
  //     confirmButtonAriaLabel: "Thumbs up, great!",
  //     cancelButtonText: "الغاء",
  //     cancelButtonAriaLabel: "Thumbs down",
  //   });
  // },
  mounted() {
    this.fetchTeachers();
  },
};
</script>

<style></style>
