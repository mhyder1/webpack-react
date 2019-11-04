import React, { useState } from "react";
import Input from "../presentational/Input.js";
import './style.css'
import './style.module.css'

// console.log({style})

const FormContainer = () => {
    const [title, setTitle]= useState('')

    const handleChange = (e) => {
        setTitle(e.target.value );
    }

    return (
      <>
        <form id="article-form">
        <Input
          text="Title"
          label="title"
          type="text"
          id="title"
          value={title}
          handleChange={handleChange}
        />
      </form>
      <div className='box'></div>
      <div styleName='box-module'></div>
      </>
    );
}
export default FormContainer;