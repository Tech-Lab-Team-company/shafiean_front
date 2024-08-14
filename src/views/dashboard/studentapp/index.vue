<template>
         <div class="container">
            <div class="d-flex justify-content-between align-items-center">
                <h5 class="title_section">تطبيق الطالب</h5>
            </div>
            <form action="#" class="add_form">
              <div class="form-group">
                <label for="">*الرابط Android</label>
                <input type="url" class="form-control" placeholder="اكتب هنا">
              </div>
                <div class="form-group">
                <label for="">*الرابط IOS</label>
                <input type="url" class="form-control" placeholder="اكتب هنا">
              </div>
              <div class="form-group">
        <label for="exampleFormControlTextarea1" class="form-label"
          >*الوصف</label
        >
        <textarea
          class="form-control summernote"
          id="exampleFormControlTextarea1"
          rows="7"
        ></textarea>
      </div>
                <div class="form-group upload_file">
                    <label for="">* اضافة صورة رأسيه</label>
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
                  <div class="row">
                    <div class="col-lg-3">
                        <div class="form-group upload_file">
                            <label for="">* اضافة صورةالتطبيق</label>
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
                    </div>
                    <div class="col-lg-3">
                        <div class="form-group upload_file">
                            <label for="">* اضافة صورةالتطبيق</label>
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
                    </div>
                    <div class="col-lg-3">
                        <div class="form-group upload_file">
                            <label for="">* اضافة صورةالتطبيق</label>
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
                    </div>
                    <div class="col-lg-3">
                        <div class="form-group upload_file">
                            <label for="">* اضافة صورةالتطبيق</label>
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
                        
                        
                    </div>
                  </div>
                 
               
     
                  <div class="sec-hidden">
                    <div class="row">
                      <div class="col-lg-3"  id="myDIV" style="display: none">
                          <div class="form-group upload_file">
                              <label for="">* اضافة صورةالتطبيق</label>
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
                      </div>
                      
                    </div>
                    
                </div>
            </form>
            <div style="text-align: right">
      <button type="button" class="btn SecondButton mf" id="reprtBtn">
        اضافة صوره جديده
      </button>
    </div>
  </div>
  <div style="text-align: right; margin-right: 0.7%">
    <button type="submit" class="btn PrimaryButton mb-5 mt-3">اضافة</button>
  </div>
        
</template>

<script>
export default {
  name: "studentapp-index",
};
</script>

<style>
</style>