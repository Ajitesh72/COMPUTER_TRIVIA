import React from "react"
import Confetti from "react-confetti"

export default function End(props){

    function Takemehome(){
        props.setstart(!props.start)
        // props.setend(!props.end)
        
    }

        
    return(
        <main>
            <h1 className="Heading_Results">Result</h1>
            <hr/>
        <div className="Score">
           
            
            {(props.marks===5) && <Confetti/> }
            <p className="FinalScore">Your Score:{props.marks}/5</p>

        </div>
        <div className="take_me_home_button">
        <button onClick={Takemehome} className="home_button">TAKE ME HOME</button>

        </div>
        

        </main>
        
        
    )
}