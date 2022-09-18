import React from "react"


export default function Home(props){
    function StartGame(){
       props.setstart(!props.start)
    //    props.setend(!props.end)

       

       
    }
    return(
        <main className="Home">
            <div className="HomePage">
                <h1 className="Homepage_Heading">Quizzical</h1>
                <button onClick={StartGame} className="Startgame_button">START QUIZ</button>
            </div>
            

        </main>
      
    )
  }