<template>
  <div class="container mt-5">
    <div class="d-flex justify-content-between align-items-center">
      <h5 class="title_section">إضافة طالب جديد</h5>
    </div>
    <form @submit.prevent="addStudent" class="add_form row w-100">
      <div class="col-lg-6 col-md-6 col-12">
        <div class="form-group">
          <label for="">* اضافة مجموعه</label>
          <select
            name=""
            id=""
            class="form-control selectpicker"
            title="اختر مجموعه"
          >
            <option value="">1</option>
            <option value="">2</option>
          </select>
        </div>
      </div>
      <div class="col-12">
        <div class="form-group">
          <label for="">* اسم الطالب</label>
          <input
            type="text"
            name=""
            v-model="name"
            id=""
            class="form-control"
            placeholder="ادخل اسم الطالب"
          />
        </div>
      </div>
      <div class="col-lg-6 col-md-6 col-12">
        <div class="form-group">
          <label for="">* تاريخ الميلاد</label>
          <input
            type="date"
            name=""
            id=""
            class="form-control"
            placeholder=""
          />
        </div>
      </div>
      <div class="col-lg-6 col-md-6 col-12">
        <div class="form-group">
          <label for="">* الجنس</label>
          <input type="text" name="" id="" class="form-control" placeholder="" v-model="gender" />">
          <!-- <select
            name=""
            id=""
            class="form-control selectpicker"
            title="الجنس"
          >
            <option value="">ذكر</option>
            <option value="">انثى</option>
          </select> -->
        </div>
      </div>
      <div class="col-lg-6 col-md-6 col-12">
        <div class="form-group">
          <label for="">* نوع الهوية</label>
          <select
            name=""
            id=""
            class="form-control selectpicker"
            title="نوع الهوية"
          >
            <option value="">بطاقة</option>
            <option value="">اقامة</option>
          </select>
        </div>
      </div>
      <div class="col-lg-6 col-md-6 col-12">
        <div class="form-group">
          <label for="">* رقم الهوية</label>
          <input
            type="number"
            name=""
            id=""
            class="form-control"
            placeholder="اكتب رقم الهوية"
          />
        </div>
      </div>
      <div class="col-lg-6 col-md-6 col-12">
        <div class="form-group">
          <label for="">* فصيلة الدم</label>
          <input
            type="text"
            name=""
            id=""
            class="form-control"
            placeholder="ادخل فصيلة الدم"
          />
        </div>
      </div>
      <div class="col-lg-6 col-md-6 col-12">
        <div class="form-group">
          <label for="">* تفاصيل العنوان</label>
          <input
            type="text"
            v-model="address"
            name=""
            id=""
            class="form-control"
            placeholder="اكتب تفاصيل العنوان"
          />
        </div>
      </div>
      <div class="col-lg-6 col-md-6 col-12">
        <div class="form-group">
          <label for="">* اسم ولى الامر</label>
          <input
            type="text"
            name=""
            id=""
            class="form-control"
            placeholder="ادخل اسم ولي الامر"
          />
        </div>
      </div>
      <div class="col-lg-6 col-md-6 col-12">
        <div class="form-group">
          <label for="">* صلة القرابة</label>
          <select
            name=""
            id=""
            class="form-control selectpicker"
            title="صلة القرابة"
          >
            <option value="">اب</option>
            <option value="">ام</option>
          </select>
        </div>
      </div>
      <div class="col-lg-6 col-md-6 col-12">
        <div class="form-group">
          <label for="">* حالة ولى الأمر</label>
          <select
            name=""
            id=""
            class="form-control selectpicker"
            title="حالة ولى الأمر"
          >
            <option value="">بطاقة</option>
            <option value="">اقامة</option>
          </select>
        </div>
      </div>
      <div class="col-lg-6 col-md-6 col-12">
        <div class="form-group">
          <label for="">* رقم الجوال</label>
          <input
            type="tel"
            name=""
            v-model="phone"
            id=""
            class="form-control"
            placeholder="رقم الجوال"
          />
        </div>
      </div>
      <div class="col-lg-6 col-md-6 col-12">
        <div class="form-group">
          <label for="">*كلمة المرور</label>
          <input
            type="password"
            name=""
            id=""
            class="form-control"
            placeholder="*******"
            v-model="password"
          />
        </div>
      </div>
      <div class="col-lg-6 col-md-6 col-12">
        <div class="form-group">
          <label for="">*تأكيد كلمة المرور</label>
          <input
            type="password"
            name=""
            id=""
            class="form-control"
            placeholder="*******"
            v-model="password_confirmation"
          />
        </div>
      </div>
      <div class="col-lg-6 col-md-6 col-12">
        <div class="form-group">
          <label for="">*البريد الالكتروني</label>
          <input
            type="email"
            name=""
            id=""
            class="form-control"
            placeholder="البريد الالكتروني"
            v-model="email"
          />
        </div>
      </div>
      <div class="col-12">
        <button type="submit" class="btn PrimaryButton w-auto">حفظ</button>
      </div>
    </form>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import axios from "axios";
export default {
  name: "students-add",
  data() {
    return {
      name: "",
      phone: "",
      gender: "",
      email: "",
      password: "",
      password_confirmation: "",
    
    };
  },

  methods: {
    async addStudent() {
      console.log(this.name);
      console.log(this.phone);
      console.log(this.gender);

      console.log(this.email);
      console.log(this.password);
      console.log(this.password_confirmation);

      if (
        !this.name ||
        !this.phone ||
        !this.gender ||
        !this.email ||
        !this.password ||
        !this.password_confirmation

      ) {
        Swal.fire({
          icon: "error",
          title: "خطأ",
          text: "يجب عليك ملء جميع الحقول",
        });
        return;
      }

      if (this.password !== this.password_confirmation) {
        Swal.fire({
          icon: "error",
          title: "خطأ",
          text: "كلمة المرور وتأكيد كلمة المرور غير متطابقتين",
        });
        return;
      }

      try {
        const response = await axios.post("/users", {
          name: this.name,
          phone: this.phone,
          gender: this.gender,
          email: this.email,
          password:this.password,
          passwordconfirm:this.password_confirmation
        });

        if (response.data.status == true) {
          Swal.fire({
            icon: "success",
            title: "نجاح",
            text: "لقد تمت الاضافه بنـجــاح",
          });
          this.$router.push("/users");
        } else {
          Swal.fire({
            icon: "error",
            title: "خطأ",
            text: response.data.message || "حدث خطأ ما. يرجى المحاولة لاحقًا.",
          });
        }
      } catch (error) {
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


