import React, { useState } from "react";
import images_api from "../api/images_api";

function PostBar() {
  const [term, setTerm] = useState("");
  const [imgFile, setImgFile] = useState();

  const onFormSubmit = async (event) => {
    event.preventDefault();
    console.log(term);
    console.log(imgFile);
    console.log("submit");

    // make an axio call to PUT image to S3 bucket
    const response = await images_api.put(`/test/photos`, imgFile, {
      headers: {
        "Content-Type": imgFile.type,
        "file-name": imgFile.name,
        "x-amz-meta-customLabels": term,
        "x-api-key": "ECMvtpY7nY5DHQIMZGavAz5LsEdRqqa8ovRiFCQ0",
      },
    });
    console.log(response);
  };

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={onFormSubmit}>
        <div
          className="fields"
          style={{ position: "flex", alignItems: "center" }}
        >
          <div className="field">
            <label>Upload Picture</label>
          </div>
          <div className="field">
            <input
              type="file"
              id="img"
              name="img"
              accept="image/*"
              onChange={(e) => setImgFile(e.target.files[0])}
            />
          </div>
          <div className="field">
            <input type="submit" />
          </div>
        </div>
        <div className="field">
          <input
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}

export default PostBar;
