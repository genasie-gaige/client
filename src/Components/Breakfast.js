import React, { useState } from 'react';
import { useQuery } from "@apollo/client"
import { getAll } from "../GraphQl/Query"

function Breakfast(){
    const [breakfastTotal, setBreakfastTotal] = useState(0)
    const{ data, loading } = useQuery(getAll)
    var items = ""
    if(loading) return "loading"
    return(
        <div className="meal">
            <h2 style={{ color: "rgb(3, 73, 85)"}}>Breakfast</h2>
            <div className="totalMealCal">
                Calories: {breakfastTotal}
            </div>
            <div className="mealItems" id="mealList"></div>
            <div>
                <select id="options" onChange={(e) => {
                    document.getElementById("mealList").innerHTML = items + '<p>' + e.target.name + '</p><br>'
                    setBreakfastTotal(breakfastTotal + parseInt(e.target.value))
                }}>
                    <option>--Select--</option>
                    {data.getAll.map((data) => (
                        <option key={data.title} value={data.calories} name={data.title}>
                            {data.title}---{data.calories}
                        </option>
                    ))}                
                </select>
            </div>
        </div>
    )
}

export default Breakfast