import React from 'react'
import { useState } from 'react'
import { DefaultEditor } from 'react-simple-wysiwyg';
import parse from 'html-react-parser'

export default function Testing() {

  const [html, setHtml] = useState();

  function onChange(e) {
    setHtml(e.target.value);
  }


  return (
    <>
      <DefaultEditor value={html} onChange={onChange}></DefaultEditor>
      <h1>{parse(html)}</h1>
    </>
  )
}





