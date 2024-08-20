<template>
  <div class="container">
    <div class="d-flex justify-content-between align-items-center">
      <h5 class="title_section">المواد</h5>
      <router-link to="addSubject" class="btn btn_title_page"
        >+ اضافة مادة جديدة</router-link
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
            title="كل الفرق"
          >
            <option value="">فرقة 1</option>
            <option value="">فرقة 2</option>
            <option value="">فرقة 3</option>
          </select>
        </div>
      </div>
      <!-- End filters -->

      <div class="table-responsive">
        <table class="table" id="table">
          <thead>
            <tr class="trAltCizgi" v-for="(student,index) in students" :key="index">
              <th><input class="box" type="checkbox" /></th>
              <th class="th">رقم </th>
              <th class="th">اسم المادة</th>
              <th class="th">المرحلة الدراسية</th>
              <th class="th">تاريخ الاضافة</th>
              <th class="th"></th>
            </tr>
          </thead>
          <tbody class="tbody">
            <!-- For loop this tr -->
            <tr>
              <td class="th"><input class="box" type="checkbox" /></td>
              <td class="id">{{student.id}}</td>
              <td>{{ student.name }} </td>
              <td> {{ student.level }}</td>
              <td> {{ student.date }} </td>
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
                      <router-link to="editSubject" class="dropdown-item"
                        >تعديل</router-link  >
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
        
            <!-- For loop this tr -->

            <!-- For loop this tr -->
      
            <!-- For loop this tr -->

            <!-- For loop this tr -->
           
            <!-- For loop this tr -->

            <!-- For loop this tr -->
            
            <!-- For loop this tr -->
          </tbody>
        </table>

        <button type="button" class="btn btn-danger">حذف المحدد</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "subjects-index",
  data(){
    return{
      subjects:[
        {
        id:1,
        name:"مادة الفقة",
        level:"الفرقة الاولى",
        date:"مايو 22 , 2022 - 2:30 م"
      },
      {
        id:2,
        name:"مادة الفقة",
        level:"الفرقة الاولى",
        date:"مايو 22 , 2022 - 2:30 م"
      },
      {
        id:3,
        name:"مادة الفقة",
        level:"الفرقة الاولى",
        date:"مايو 22 , 2022 - 2:30 م"
      },
      {
        id:4,
        name:"مادة الفقة",
        level:"الفرقة الاولى",
        date:"مايو 22 , 2022 - 2:30 م"
      },
      { 
        id:5,
        name:"مادة الفقة",
        level:"الفرقة الاولى",
        date:"مايو 22 , 2022 - 2:30 م"
      }
    ]
    }
  }
};
</script>

<style>
</style>