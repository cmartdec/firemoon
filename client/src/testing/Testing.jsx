import React from 'react'
import { Editor, EditorState } from "draft-js";
import { convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import "draft-js/dist/Draft.css";

export default function Testing() {

  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );

  const editor = React.useRef(null);
  function focusEditor() {
    editor.current.focus();
  }

  const rawContentState = convertToRaw(editorState.getCurrentContent());

  const markup = draftToHtml(
    rawContentState
  );

  const handleClick = (e) => {
    e.preventDefault();
    console.log(markup);
  }

  return (
    <>
    <div
      style={{ border: "1px solid black", minHeight: "6em", cursor: "text" }}
      onClick={focusEditor}
    >
      <Editor
        ref={editor}
        editorState={editorState}
        onChange={setEditorState}
        placeholder="Write something!"
      />
    </div>
    <button onClick={handleClick} className="bg-blue-500 rounded mt-3 px-3 ml-3">Submit</button>
    </>
  )
}



