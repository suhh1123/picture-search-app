import React, { useState } from "react";
import { useVoice } from "../useVoice";

function SearchBar(props) {
  const [term, setTerm] = useState("");
  const { isListening, listen, voiceSupported } = useVoice({ setTerm });

  const onFormSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(term);
  };

  const onListen = (event) => {
    event.preventDefault();
    listen();
  };

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <div
            className="fields"
            style={{ position: "flex", alignItems: "center" }}
          >
            <label>Image Search</label>
            <button onClick={onListen} style={{ marginLeft: "10px" }}>
              Listen
            </button>
          </div>
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

export default SearchBar;
