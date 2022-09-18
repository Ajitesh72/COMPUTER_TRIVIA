import React from "react"
import Home from "./components/Home"
import Trivia from "./components/Trivia"
import FinalScore from "./components/FinalScore"
import End from "./components/End"

export default function App(){

  const[question,setQuestion]=React.useState([])
  const[start,setStart]=React.useState(false)

  const[marks,setMarks]=React.useState(0)
  let randomindex=1
  const[numberofRender,setnumberofRender]=React.useState(0)
  const[end,setEnd]=React.useState(false)
  const[final,setfinal]=React.useState(false)
  // let numberofRender=1
  
  
  
        
    
  React.useEffect(function(){
      fetch("https://opentdb.com/api.php?amount=50&category=18&difficulty=medium&type=multiple")
      .then(res=>res.json())
      .then(data=>setQuestion(data.results))
      
  },[])

 


   
 

   const random=Math.floor(Math.random()*44)
  //  const randomindex=Math.floor(Math.random()*4+1)

  
   const slicedArray=question.slice(0,5)
  const questionCard=slicedArray.map((item,index)=>{
    
    return(
     
      <Trivia 
            //  key={item.correct_answer}
            key={index}
             item={item}
             randomindex={randomindex}
             
             marks={marks}
             setMarks={setMarks}
            numberofRender={numberofRender}
            setnumberofRender={setnumberofRender}
             
             
             
      />
    )},[]);
   
   

    
 

  console.log(start)
  // const[start,setStart]=React.useState(false)
  // console.log(start)
  return(
    <main>
      {!start && <Home setstart={setStart}
                start={start}
                setend={setEnd}
                end={end} />}
      {/* {start && <Trivia
                 start={start}
                 question={question}/>} */}
      {start && !final && questionCard}
      {start && !final&&<FinalScore  
                              end={end}
                              setEnd={setEnd}
                              setfinal={setfinal}
                              final={final}/>}
      {end && final&& start && <End marks={marks}
                                    setstart={setStart}
                                    start={start} 
                                    setend={setEnd}
                                    end={end} />}

    </main>
    
  )
}