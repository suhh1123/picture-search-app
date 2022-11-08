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
    listen();
  };

  return (
    <div className="ui segment">
      <div
        className="fields"
        style={{ position: "flex", alignItems: "center" }}
      >
        <label style={{ fontWeight: "bold" }}>Image Search</label>
        <button onClick={onListen} style={{ marginLeft: "10px" }}>
          Listen
        </button>
      </div>
      <form
        className="ui form"
        onSubmit={onFormSubmit}
        style={{ marginTop: "10px" }}
      >
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

export default SearchBar;
