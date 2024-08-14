<template>
       <div class="container mt-5">
            <div class="d-flex justify-content-between align-items-center">
              <h5 class="title_section">من نحن</h5>
            </div>
            <form action="#" class="add_form">
              <div class="form-group">
                <label for="">*عنوان</label>
                <input
                  type="text"
                  name=""
                  id=""
                  class="form-control"
                  placeholder="اكتب هنا"
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea1" class="form-label"
                  >*الوصف</label
                >
                <textarea
                  class="form-control summernote"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <div class="form-group">
                <label for="">* فديو لينك</label>
                <input
                  type="url"
                  name=""
                  id=""
                  class="form-control"
                  placeholder="اكتب هنا"
                />
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <div class="sec-1">
                    <h5 class="title_section">سيكشن 1</h5>
                    <div class="form-group upload_file">
                      <label for="">* اضافة صورة للسليدر</label>
                      <label for="imageCover" class="upload_file_label">
                        <i class="fa-regular fa-image"></i>
                        <p>اسحب صورة معبرة واسقطها هنا</p>
                        <span id="fileNameImage">او اضغط هنا</span>
                      </label>
                      <input
                        type="file"
                        name=""
                        id="imageCover"
                        class="form-control"
                        accept="image/*"
                        hidden
                      />
                    </div>
                    <div class="form-group">
                      <label for="">*عنوان</label>
                      <input
                        type="text"
                        name=""
                        id=""
                        class="form-control"
                        placeholder="اكتب هنا"
                      />
                    </div>
                    <div class="form-group">
                      <label
                        for="exampleFormControlTextarea1"
                        class="form-label"
                        >*الوصف</label
                      >
                      <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="sec-1">
                    <h5 class="title_section">سيكشن 2</h5>
                    <div class="form-group upload_file">
                      <label for="">* اضافة صورة للسليدر</label>
                      <label for="imageCover" class="upload_file_label">
                        <i class="fa-regular fa-image"></i>
                        <p>اسحب صورة معبرة واسقطها هنا</p>
                        <span id="fileNameImage">او اضغط هنا</span>
                      </label>
                      <input
                        type="file"
                        name=""
                        id="imageCover"
                        class="form-control"
                        accept="image/*"
                        hidden
                      />
                    </div>
                    <div class="form-group">
                      <label for="">*عنوان</label>
                      <input
                        type="text"
                        name=""
                        id=""
                        class="form-control"
                        placeholder="اكتب هنا"
                      />
                    </div>
                    <div class="form-group">
                      <label
                        for="exampleFormControlTextarea1"
                        class="form-label"
                        >*الوصف</label
                      >
                      <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="sec-1">
                    <h5 class="title_section">سيكشن 3</h5>
                    <div class="form-group upload_file">
                      <label for="">* اضافة صورة للسليدر</label>
                      <label for="imageCover" class="upload_file_label">
                        <i class="fa-regular fa-image"></i>
                        <p>اسحب صورة معبرة واسقطها هنا</p>
                        <span id="fileNameImage">او اضغط هنا</span>
                      </label>
                      <input
                        type="file"
                        name=""
                        id="imageCover"
                        class="form-control"
                        accept="image/*"
                        hidden
                      />
                    </div>
                    <div class="form-group">
                      <label for="">*عنوان</label>
                      <input
                        type="text"
                        name=""
                        id=""
                        class="form-control"
                        placeholder="اكتب هنا"
                      />
                    </div>
                    <div class="form-group">
                      <label
                        for="exampleFormControlTextarea1"
                        class="form-label"
                        >*الوصف</label
                      >
                      <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="sec-1">
                    <h5 class="title_section">سيكشن 4</h5>
                    <div class="form-group upload_file">
                      <label for="">* اضافة صورة للسليدر</label>
                      <label for="imageCover" class="upload_file_label">
                        <i class="fa-regular fa-image"></i>
                        <p>اسحب صورة معبرة واسقطها هنا</p>
                        <span id="fileNameImage">او اضغط هنا</span>
                      </label>
                      <input
                        type="file"
                        name=""
                        id="imageCover"
                        class="form-control"
                        accept="image/*"
                        hidden
                      />
                    </div>
                    <div class="form-group">
                      <label for="">*عنوان</label>
                      <input
                        type="text"
                        name=""
                        id=""
                        class="form-control"
                        placeholder="اكتب هنا"
                      />
                    </div>
                    <div class="form-group">
                      <label
                        for="exampleFormControlTextarea1"
                        class="form-label"
                        >*الوصف</label
                      >
                      <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <button type="submit" class="btn PrimaryButton">اضافة</button>
            </form>
          </div>
</template>

<script>
export default {
    name: "whoarewe-index",

}
</script>

<style>

</style>