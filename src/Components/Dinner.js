import React, { useState } from 'react'
import { useQuery } from "@apollo/client"
import { getAll } from "../GraphQl/Query"

function Dinner(){
    const [dinnerTotal, setDinnerTotal] = useState(0)
    const{ data } = useQuery(getAll)
    let items = ""
    return(
        <div className="meal">
            <h2 style={{ color: "rgb(3, 73, 85)"}}>Dinner</h2>
            <div className="totalMealCal">
                Calories: {dinnerTotal}
            </div>
            <div className="mealItems" id="mealList2"></div>
            <div>
                <select id="options" onChange={(e) => {
                    document.getElementById("mealList2").innerHTML = items + '<p>' + e.target.name + '</p><br>'
                    setDinnerTotal(dinnerTotal + parseInt(e.target.value))
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

export default Dinner