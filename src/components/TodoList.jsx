import React, { useState } from 'react';
import Form from './Form';

function TodoList() {
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [date, setDate] = useState('');
  const [addData, setAddDate] = useState([]);
  const [edit, setEditData] = useState('');

  function handleTitle(e) {
    setTitle(e.target.value);
  }

  function handleDesc(e) {
    setDesc(e.target.value);
  }

  function handleDate(e) {
    setDate(e.target.value);
  }

  function handleForm() {
    setShowForm(true);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setAddDate([...addData, { title: title, desc: desc, date: date }]);
    setTitle('');
    setDesc('');
    setDate('');
  }
  function handleDelete(index) {
    addData.splice(index, 1);
    setAddDate([...addData]);
  }
  function handleEdit(i) {
    const data = addData[i];
    setTitle(data.title);
    setDesc(data.desc);
    setDate(data.date);
    setEditData(i);
  }

  return (
    <div>
      <button onClick={handleForm}>Add Todo</button>
      {showForm ? (
        <Form
          title={title}
          desc={desc}
          date={date}
          handleTitle={handleTitle}
          handleDesc={handleDesc}
          handleDate={handleDate}
          handleSubmit={handleSubmit}
        />
      ) : null}
      {addData.map((data,i) => (
        <div key={data.date}>
          <p>{data.title}</p>
          <p>{data.desc}</p>
          <p>{data.date}</p>
          <button onClick={()=>handleDelete(i)}>Delete</button>
          <button onClick={()=>handleEdit(i)}>Edit</button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
