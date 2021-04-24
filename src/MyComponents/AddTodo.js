import React, { useState } from 'react';

export const AddTodo = ({ addTodo }) => {
    let [title, setTitle] = useState("");
    let [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title description cannot be black")
        }
        else {
            addTodo(title, desc);
            setTitle = ("");
            setDesc = ("");
        }
    }
    return (
        <div className="container my-3">
            <h3>Add Iteam To List</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label for="title" className="form-label my-2">Title</label>
                    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="desc" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Task Description</label>
                    <input type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }} className="form-control" id="title" />
                </div>

                <button type="submit" className="btn btn-sm btn-primary">Add Iteam</button>
            </form>
        </div>
    )
}
