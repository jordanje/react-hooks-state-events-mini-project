import React, {useState} from "react";

function NewTaskForm({categories , onTaskFormSubmit}) {
  const [formInput, setFormInput] = useState({ text: "", category: ""});

  const handleFormChange = (event) => {
    setFormInput({ ...formInput, [event.target.name]: event.target.value })
  }

  
  const displayOptions = categories.map((category) => {
  return <option key={category} name ={category} value={category}>{category}</option>
   } )
  return (
    <form className="new-task-form"onChange={handleFormChange} onSubmit={(event) => onTaskFormSubmit(formInput, event)}>
      <label>
        Details
        <input type="text" name="text"  />
      </label>
      <label>
        Category
        <select name="category" >
          {displayOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
