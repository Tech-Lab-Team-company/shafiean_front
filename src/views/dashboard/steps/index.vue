<template>
  <div class="container mt-5">
    <div class="d-flex justify-content-between align-items-center">
      <h5 class="title_section">المراحل الدراسية</h5>
      <router-link to="/addSteps" class="btn btn_title_page"
        >+ اضافة مرحلة دراسية</router-link
      >
    </div>
    <div class="table_details">
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

              <!-- <td class="th"><input class="box" type="checkbox" :value="stages.id" v-model="selectedStages"  /></td> -->

              <td class="th">
                <input
                  class="box"
                  type="checkbox"
               
                  v-model="item.isSelected"
                />
              </td>

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
                        @click="blockAlert(index , item.id)"
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
      <button
        @click="deleteSelectedStages"
        type="button"
        class="btn btn-danger"
      >
        حذف المحدد
      </button>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import axios from "axios";

export default {
  name: "steps-index",
  data() {
    return {
      stages: [], 
      selectedStages: [], 
    };
  },
  methods: {
    
    async fetchStages() {
      try {
        const response = await axios.get("/stages");

        if (response.data.status == true) {
          this.stages = response.data.data; 
        } else {
          Swal.fire({
            icon: "error",
            title: "خطأ",
            text:
              response.message ||
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

    
    blockAlert(index, itemId) {
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
            const response = await axios.delete(`/stages/${itemId}`, {});
            console.log(response);

            if (response.data.status == true) {
              this.stages.splice(index, 1);
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

 
    async deleteSelectedStages() {
  const selectedStages = this.stages.filter((item) => item.isSelected);

  if (selectedStages.length === 0) {
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
      for (const item of selectedStages) {
        const response = await axios.delete(`/stages/${item.id}`); 

        if (!response.data.status) {
          throw new Error("Failed to delete stages");
        }
      }


      this.fetchStages();
      Swal.fire("تم الحذف!", "تم حذف المعلمين بنجاح.", "success");
    } catch (error) {
      Swal.fire("خطأ!", "حدث خطأ أثناء حذف المعلمين.", "error");
    }
  }
}
  },
  created() {
    this.fetchStages(); 
  },
};
</script>
<style></style>
