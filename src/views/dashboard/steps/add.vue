<template>
  <div class="container mt-4">
    <div class="d-flex justify-content-between align-items-center">
      <h5 class="title_section">إضافة مرحلة دراسية جديدة</h5>
    </div>
    <form @submit.prevent="addSteps()" class="add_form">
      <div class="form-group">
        <label for="">*اسم المرحلة الدراسية</label>
        <input
          type="text"
          v-model="item.title"
          class="form-control"
          placeholder="اكتب هنا"
        />
      </div>
      <div class="form-group">
        <label for="">*السنه الدراسيه</label>
      </div>
      <div class="date">
        <div class="form-group">
          <label for="">*تاريخ بدء السنه الدراسيه</label>
          <input type="date" v-model="item.type" class="form-control" />
        </div>
        <div class="form-group">
          <label for="">*تاريخ انتهاء السنه الدراسيه</label>
          <input type="date" v-model="item.order" class="form-control" />
        </div>
      </div>
      <button style="margin-left: 168%;" type="submit" class="btn PrimaryButton mt-3">
        اضافة
      </button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";

export default {
  name: "add-steps",
  data() {
    return {
      item: {
        title: "",
        type: "",
        order: "",
      },
    };
  },
  methods: {
    async addSteps() {
      if (!this.item.title || !this.item.type || !this.item.order) {
        Swal.fire({
          icon: "error",
          title: "خطأ",
          text: "يجب عليك ملء جميع الحقول",
        });
        return;
      }

      const orderInt = parseInt(this.item.order, 10);

      if (isNaN(orderInt)) {
        Swal.fire({
          icon: "error",
          title: "خطأ",
          text: "الترتيب يجب أن يكون عددًا صحيحًا",
        });
        return;
      }

      try {
        const response = await axios.post("/stages", {
          title: this.item.title,
          type: this.item.type,
          order: orderInt, 
        });

        if (response.data.status === true) {
          Swal.fire({
            icon: "success",
            title: "نجاح",
            text: "لقد تمت الإضافة بنجاح",
          });
          this.$router.push("/steps");
        } else {
          Swal.fire({
            icon: "error",
            title: "خطأ",
            text: response.data.message || "حدث خطأ ما. يرجى المحاولة لاحقًا.",
          });
        }
      } catch (error) {
        console.error("Error adding step:", error);

        Swal.fire({
          icon: "error",
          title: "خطأ",
          text: "حدث خطأ ما. يرجى المحاولة لاحقًا.",
        });
      }
    },
  },
};
</script>

<style>
</style>
