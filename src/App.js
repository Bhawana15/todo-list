import './App.css';
import Header from "./MyComponents/Header.js";
import {Todos} from "./MyComponents/Todos.js";
import {Footer} from "./MyComponents/Footer.js";

function App() {
  let todos = [
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
  ]
  return (
    <>
        <Header title="My Todo List" searchBar={true}/>
        <Todos todos={todos}/>
        <Footer/>
    </>
  );
}

export default App;
