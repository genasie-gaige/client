import './App.css';
import React, { useState } from 'react';
import { useMutation } from "@apollo/client"
import { CREATE_POST } from "./GraphQl/Mutation"
import Breakfast from "./Components/Breakfast"
import Dinner from "./Components/Dinner"
import Lunch from "./Components/Lunch"
import Snack from "./Components/Snack"

function App() {

  const [dailyTotal, setDailyTotal] = useState(1600)

  const [createPost] = useMutation(CREATE_POST)
  const addPost = ()=> {
    var add_title = document.getElementById("inputName").value
    var add_calories = document.getElementById("inputCals").value
    createPost({
      variables:{
        title: add_title,
        calories: add_calories
      }
    })
  }

  return (
    <div className="App">

      <h1 className="header">{dailyTotal} Remaining</h1>
      <div className="meals">
        <Breakfast className="meal"></Breakfast>
        <Lunch className="meal"></Lunch>
        <Dinner className="meal"></Dinner>
        <Snack className="meal"></Snack>
      </div>
      <div className="add-new">
        <form>
          <label>Name</label>
          <input type="text" id="inputName"></input>
          <label>Calories</label>
          <input type="text" id="inputCals"></input>
        </form>
        <button onClick={()=> addPost()}>ADD NEW</button>
      </div>
    </div>
  );
}

export default App;
