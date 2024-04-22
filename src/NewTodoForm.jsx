import { useState } from "react"


export function NewTodoForm({ onSubmit }){

  const [newItem, setNewItem] = useState("")

  function handleSubmit(e){
    e.preventDefault()
    if (newItem ==="") return
    onSubmit(newItem)
    setNewItem("")
  }

//   props allow to pass information down to custom component
    return(
        <form onSubmit={handleSubmit} className="" action="">
        <div className="form-row">
          <label htmlFor='item'>
            New Item
          </label>
          <input value={newItem} 
          onChange={e=>setNewItem(e.target.value)}
          type="text" id="item" />
        </div>
        <button className='btn'>Add</button>
      </form>
    )
}