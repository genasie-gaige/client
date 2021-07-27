import React, { useState } from 'react'
import { useQuery } from "@apollo/client"
import { getAll } from "../GraphQl/Query"

function Snack(){
    const [snackTotal, setSnackTotal] = useState(0)
    const [chosenItem, setChosenItem] = useState("")
    const{ data, loading } = useQuery(getAll)
    var items = ""
    if(loading) return "loading"
    return(
        <div className="meal">
            <h2 style={{ color: "rgb(3, 73, 85)"}}>Snack</h2>
            <div className="totalMealCal">
                Calories: {snackTotal}
            </div>
            <div className="mealItems" id="mealList4"></div>
            <div>
                <select id="options" onChange={(e) => {               
                    setChosenItem(e.target.name)
                    document.getElementById("mealList4").innerHTML = items + '<p>' + chosenItem + '</p><br>'
                    setSnackTotal(snackTotal + parseInt(e.target.value))
                }}>
                    <option>--Select--</option>
                    {data.getAll.map((data) => (
                        <option key={data.title} name={data.title} value={data.calories}>
                            {data.title}---{data.calories}
                        </option>
                    ))}               
                </select>
            </div>
        </div>
    )
}

export default Snack