import React from "react"

export default function FinalScore(props){
    function CheckMarks(){
        props.setEnd(!props.end)
        props.setfinal(!props.final)
    }
    return(
        <div className="Marks_button_div">
            <button onClick={CheckMarks} className="Marks_button">CHECK MARKS</button>

        </div>
        
    )
}
