import "./write.css";
import WriteImg from "../../assests/post2.jpg";

function Write() {
  return (
    <div className="write">
      {/* Img */}
      <div className="writeImgDiv">
        <img className="writeImg" alt="" src={WriteImg} />
      </div>

      <form className="mx-auto writeForm">
        {/* Input Title */}
        <div class="form-floating writeFormItem ">
          <input
            class="form-control border-light-subtle border-start-0 border-end-0  rounded-0"
            type="text"
            placeholder=""
            aria-label="default input example"
          />
          <label for="floatingInput">Title</label>
        </div>

        {/* TextArea */}
        <div class="form-floating writeFormItem">
          <textarea
            class="form-control border-light-subtle border-start-0 border-end-0  rounded-0"
            placeholder=""
            id="Textarea"
            style={{ height: "20rem" }}
          ></textarea>
          <label for="floatingTextarea2">Tell your story...</label>
        </div>

        {/* InputImg */}
        <div class=" mb-3 writeInput writeFormItem">
          <label for="formFile" class="form-label ">
            Input Image
          </label>
          <input
            class="form-control border-light-subtle "
            type="file"
            id="formFile"
          />
        </div>

        {/* Button */}
        <div className="text-center">
          <button type="button" class="btn btn-outline-primary writeFormItem">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Write;
