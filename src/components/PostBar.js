import React, { useState } from "react";

function PostBar() {
  const [term, setTerm] = useState();
  const [imgPath, setImgPath] = useState();

  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log(term);
    console.log(imgPath);
    console.log("submit");

    // make an axio call to PUT image to S3 bucket
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
              onChange={(e) => setImgPath(e.target.value)}
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
