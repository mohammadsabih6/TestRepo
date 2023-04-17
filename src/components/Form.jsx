import React from 'react'
import './TodoList'
import { useState } from 'react';


function Form(props) {
  const [showForm, setShowForm] = useState();
  return (
    <form>
             <label htmlFor="title">Title:</label>
             <input type="text" id='title' value={props.title} onChange={props.handleTitle}/>
             <label htmlFor="desc">Description:</label>
             <textarea id="desc" cols="10" rows="5" value={props.desc} onChange={props.handleDesc}></textarea>
             <label htmlFor="due_date">Due Date:</label>
             <input type="date" id='due_date' value={props.date} onChange={props.handleDate}/>
             <button type="submit" onClick={props.handleSubmit}>Save</button>
             <button type="update" onClick={props.handleUpdate}>Update</button>
             
    </form>
  )
}

export default Form