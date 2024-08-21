<template>
  <div class="container mt-5">
    <div class="d-flex justify-content-between align-items-center">
      <h5 class="title_section">المراحل الدراسية</h5>
      <router-link to="/addSteps" class="btn btn_title_page"
        >+ اضافة مرحلة دراسية</router-link
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
            placeholder="ابحث باسم المادة , المدرس"
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
            title="كل المدرسين"
          >
            <option value="">مدرس 1</option>
            <option value="">مدرس 2</option>
            <option value="">مدرس 3</option>
          </select>
        </div>
      </div>
      <!-- End filters -->

      <div class="table-responsive">
        <table class="table" id="table">
          <thead>
            <tr class="trAltCizgi">
              <th><input class="box" type="checkbox" /></th>
              <th class="th">رقم المرحلة</th>
              <th class="th">اسم المرحلة الدراسية</th>
              <th class="th">تاريخ الاضافة</th>
              <th class="th"></th>
            </tr>
          </thead>
          
          <tbody class="tbody">
            <!-- For loop this tr -->
            <tr v-for="(item, index) in stages" :key="index">
              <td class="th"><input class="box" type="checkbox" :value="stages.id" v-model="selectedStudents"  /></td>
              <td>{{ item.id }}</td>
              <td class="id">

                <!-- <input class="form-check-input" type="checkbox" value="" name="table">  -->
                {{ item.title }}
              </td>
              <td>{{ item.type }}</td>
              <td>{{ item.order }}</td>
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
                      <router-link to="/editSteps" class="dropdown-item"
                        >تعديل</router-link
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="#"
                        @click="blockAlertt(index)"
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
       
      </div>
      <button @click="deleteSelectedStudents" type="button" class="btn btn-danger">
        حذف المحدد
      </button>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";

export default {
  name: "steps-index",
  data() {
    return {
      stages: [], // Initialize stages array
      selectedStages: [], // Array for selected stages
    };
  },
  methods: {
    // Fetch stages data from the API
    async fetchStages() {
      try {
        const response = await fetch(
          "https://api.shafean.x-coders.net/api/stages",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const result = await response.json();

        if (response.ok) {
          this.stages = result.data; // Assign the fetched data to the stages array
        } else {
          Swal.fire({
            icon: "error",
            title: "خطأ",
            text: result.message || "فشل في جلب البيانات. يرجى المحاولة مرة أخرى لاحقًا.",
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

    // Delete a single stage confirmation
    blockAlert(index) {
      Swal.fire({
        html: '<h5 class="swal2-title">هل أنت متأكد من حذف المرحلة الدراسية؟</h5>',
        showCancelButton: true,
        confirmButtonText: "تأكيد الحذف",
        cancelButtonText: "الغاء",
      }).then((result) => {
        if (result.isConfirmed) {
          if (this.stages.length > index) {
            this.stages.splice(index, 1);
            Swal.fire("تم الحذف!", "تم حذف المرحلة الدراسية بنجاح.", "success");
          } else {
            Swal.fire("خطأ!", "المرحلة الدراسية غير موجودة.", "error");
          }
        }
      });
    },

    // Delete selected stages
    deleteSelectedStages() {
      if (this.selectedStages.length > 0) {
        this.stages = this.stages.filter(
          (stage) => !this.selectedStages.includes(stage.id)
        );
        Swal.fire("تم الحذف!", "تم حذف المرحلة/المراحل بنجاح.", "success");
      } else {
        Swal.fire("خطأ!", "لم يتم تحديد أي مرحلة.", "error");
      }
      this.selectedStages = []; // Clear selection after deletion
    },
  },
  created() {
    this.fetchStages(); // Ensure the fetchStages method is called here
  },
};
</script>
<style>
</style>