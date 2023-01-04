import React, { useRef } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";

const Diary = () => {
  const codeMirrorRef = useRef(null);
  function handleChange(editor, data, value) {
    console.log(value);
  }
  return (
    <div>
      <div>
        <h1> Diary </h1>
      </div>
      <div>
        
        <label> Notes </label>
        <CodeMirror
          ref={codeMirrorRef}
          value="Write your notes here..."
          options={{
            mode: "markdown",
            lineWrapping: true,
          }}
          onChange={handleChange}
        />
      </div>
      {/* This is to be replaced by the goals set and stored */}
      <div>
        <h3> Nutrients </h3>
      </div>

      <div>
        <label> Protein </label>
        <input />
      </div>
      <div>
        <label> Fats </label>
        <input />
      </div>
      <div>
        <label> Carbohydrates </label>
        <input />
      </div>
    </div>
  );
};

export default Diary;
