<template>
  <div class="container mt-5">
    <div class="d-flex justify-content-between align-items-center">
      <h5 class="title_section">الوظائف</h5>
    </div>
    <form action="jobs.html" class="add_form">
      <div class="form-group">
        <label for="">*اسم الوظيفه</label>
        <input
          type="text"
          name=""
          id=""
          class="form-control"
          placeholder="اكتب هنا"
        />
      </div>
      <router-link to="/jobs">
        <button type="submit" class="btn PrimaryButton">اضافة</button>
      </router-link>
    </form>
  </div>
</template>

<script>
export default {
  name: "jobs-add",
};
</script>

<style>
</style>