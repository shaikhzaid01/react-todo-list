import logo from "./logo.svg";
import "./App.css";
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import Todos from "./MyComponents/Todos";
import AddTodo from "./MyComponents/AddTodo";
import About from "./MyComponents/About";
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  let initTodos;
  if (localStorage.getItem("todos") === null) {
    initTodos = [];
  } else {
    initTodos = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("i am Delete!!!!", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const addTodo = (title, desc) => {
    console.log("I am Adding This Todo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };
  const [todos, setTodos] = useState(initTodos);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
    <Router>
      <Header title={"My Todo List"} searchBar={false} />
      <Routes>
          <Route 
            path="/" 
            element={
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            } 
          />
          <Route 
            path="/about" 
            element={<About />} 
          />
        </Routes>
      
      <Footer />
      
      </Router>
    </>
  );
}

export default App;
