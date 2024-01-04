import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const Write = () => {
  const [value, setValue] = useState('');
  return (
    <div className='add'>
      <div className="content">
        <input type="text" placeholder='Title' />
        <div className="editorContainer">
           <ReactQuill className="editor" theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input style={{display: "none"}} type="file" name="" id="file" />
          <label htmlFor="file">Upload Image</label>
            <button>Save as a draft</button>
            <button>Update</button>
        </div>
        <div className="item">
          <h1>Category</h1>
          <input type="radio" name="cat" value="art" id="art" />
          <label htmlFor="art">Art</label>
          <input type="radio" name="cat" value="science"  id="science"  />
          <label htmlFor="science">Science</label>
          <input type="radio" name="cat" value="Technology" id="Technology" />
          <label htmlFor="Technology">Technology</label>
          <input type="radio" name="cat" value="Cinema" id="Cinema" />
          <label htmlFor="Cinema">Cinema</label>
          <input type="radio" name="cat" value="Design" id="Design" />
          <label htmlFor="Design">Design</label>
          <input type="radio" name="cat" value="Food" id="Food" />
          <label htmlFor="Food">Food</label>
        </div>
      </div>     
    </div>
  )
}

export default Write
