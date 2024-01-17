import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Main from './Components/Main'
import Footer from './Components/Footer'

const App = () => {

  const [todos , setTodos] = useState([
    {id : 1, title : "Save Title"}
   ]);

  const [edit , setEdit] = useState({
    todo : {},
    editMode : false,
  })

  const [dark , setDark] = useState(false)

  const changeTheme = () => {
    if(dark){
      setDark(false);
    }
    else{
      setDark(true);
    }
  }

  console.log(edit);
 
  // Todo Delete

  const todoDelete = (id) => {
    console.log(id);
    setTodos(todos.filter(todo => {
      if(todo.id !== id){
        return true;
      }
    }
    ))
  }

  // Add Todo (Save Todo)

  const saveTodo = (title) => {
    // console.log(title , description);

    const newTodo =  {
      id : crypto.randomUUID(),
      title : title,
    }
    // console.log(newTodo)

    setTodos([newTodo, ...todos]);
  }


  // Edit Todo
  const editTodo = (todo) => {
    // console.log(todo);
    setEdit({
      todo : todo,
      editMode : true,
    })
  }


  // update Todo

  const updateTodo = (oldId , newTitle) => {
  //  console.log(newTitle , oldId) 
  setTodos(
    todos.map(item => item.id === oldId ? {id : oldId , title : newTitle} : item)
    )
   
   setEdit({
    todo : {},
    editMode : false,
   }) 
  }


  return (
    <div>
      <Navbar dark={dark} changeTheme={changeTheme}/>
      <Main todos={todos} todoDelete={todoDelete} saveTodo={saveTodo}  editTodo={editTodo} edit={edit} updateTodo={updateTodo} dark={dark}/>
      <Footer dark={dark}/>
    </div>
  )
}

export default App
