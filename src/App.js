import './App.css';
import Header from "./MyComponents/Header.js";
import {Todos} from "./MyComponents/Todos.js";
import {Footer} from "./MyComponents/Footer.js";
import React, {useState} from 'react';
import {AddTodo} from "./MyComponents/AddTodo.js";

function App() {
  const onDelete = (todo) => {
    console.log("I am onDelete of todo", todo);

    // Deleting this was doesnot works in react
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);

    setTodos(todos.filter((e) => {
      return e!==todo;
    }));
  }

  const [todos, setTodos] = useState([
    {
      sno : 1,
      title : "Go to the Market",
      desc : "You need to go to the market to buy fruits"
    },
    {
      sno : 2,
      title : "Go to the School",
      desc : "You need to go to the school to study"
    },
    {
      sno : 3,
      title : "Go to the College",
      desc : "You need to go to the college to take an exam"
    },
    {
      sno : 4,
      title : "Go to the Office",
      desc : "You need to go to office to do your job"
    },
    {
      sno : 5,
      title : "Go to the Home",
      desc : "You need to go to the home and take rest"
    }
  ]);

  return (
    <>
        <Header title="My Todo List" searchBar={true}/>
        <AddTodo/>
        <Todos todos={todos} onDelete={onDelete}/>
        <Footer/>
    </>
  );
}

export default App;
