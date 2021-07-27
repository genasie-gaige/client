import React, { useState } from 'react'
import { useQuery } from "@apollo/client"
import { getAll } from "../GraphQl/Query"

function Lunch(){
    const [lunchTotal, setLunchTotal] = useState(0)
    const{ data, loading } = useQuery(getAll)
    let items = ""
    if(loading) return "loading"
    return(
        <div className="meal">
            <h2 style={{ color: "rgb(3, 73, 85)"}}>Lunch</h2>
            <div className="totalMealCal">
                Calories: {lunchTotal}
            </div>
            <div className="mealItems" id="mealList3"></div>
            <div>
                <select id="options" onChange={(e) => {
                    document.getElementById("mealList3").innerHTML = items + '<p>' + e.target.name + '</p><br>'
                    setLunchTotal(lunchTotal + parseInt(e.target.value)) 
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

export default Lunch