import React from "react"
// import FinalScore from "./FinalScore"

export default function Trivia(props){

    const[isClicked,setisClicked]=React.useState({isClicked1:false,
        isClicked2:false,
        isClicked3:false,
        isClicked4:false,
        count:false
    
    })

    

    // const randomindex=Math.floor((Math.random()*4)+1)
    
    
    const correct=props.item.correct_answer
    const firstincorrect=props.item.incorrect_answers[0]
    const secondincorrect=props.item.incorrect_answers[1]
    const thirdincorrect=props.item.incorrect_answers[2]

    const options=[3]

    if(props.randomindex===1)
    {
        options[1]=firstincorrect
        options[0]=correct
        options[2]=secondincorrect
        options[3]=thirdincorrect
    }
    if(props.randomindex===2)
    {
        options[0]=firstincorrect
        options[1]=correct
        options[2]=secondincorrect
        options[3]=thirdincorrect
    }
    if(props.randomindex===3)
    {
        options[0]=firstincorrect
        options[2]=correct
        options[1]=secondincorrect
        options[3]=thirdincorrect
    }
    if(props.randomindex===4)
    {
        options[0]=firstincorrect
        options[3]=correct
        options[2]=secondincorrect
        options[1]=thirdincorrect
    }
    
   
    console.log(props.item.correct_answer)
    console.log(props.item.incorrect_answers)
    console.log(props.randomindex)
    
    function Choosen1(){
        setisClicked(prev=>({
            ...prev,
            isClicked1:!isClicked.isClicked1,
            count:!isClicked.count
        }),
    );
    
    
        if(options[0].localeCompare(correct)===0){
            props.setMarks(props.marks+1)}

       
            // props.setMarks(props.marks+1)
    }
    // if(options[0]===correct){
    //     props.setMarks(props.marks+1)}

    
    console.log("marks",props.marks)
    


    function Choosen2(){
        setisClicked(prev=>({
            ...prev,
            isClicked2:!isClicked.isClicked2,
            count:!isClicked.count
        }));
        if(options[1].localeCompare(correct)===0){
            props.setMarks(props.marks+1)}

       
            
    }
    
    function Choosen3(){
        setisClicked(prev=>({
            ...prev,
            isClicked3:!isClicked.isClicked3,
            count:!isClicked.count
        }));
        if(options[2].localeCompare(correct)===0){
            props.setMarks(props.marks+1)}

        
       
    }

    function Choosen4(){
        setisClicked(prev=>({
            ...prev,
            isClicked4:!isClicked.isClicked4,
            count:!isClicked.count
        }));
        if(options[3].localeCompare(correct)===0){
            props.setMarks(props.marks+1)}

       
            
            
        }
  
       
    

    return(
        <main className="Trivia_main" >
       
        <p className="question">Q: {props.item.question} </p>
        <div className="Options">
            {/* <p style={backgroundColor:isClicked?'salmon':'whitesmoke'}className="OptionsList" onClick={Choosen} >{options[0]}</p> */}
            <ul className={(isClicked.isClicked1 && isClicked.count) ?"OptionsChoosen":"OptionsNotchoosen"}onClick={Choosen1} >{options[0]}</ul>
            <ul className={(isClicked.isClicked2 && isClicked.count) ?"OptionsChoosen":"OptionsNotchoosen"}onClick={Choosen2}>{options[1]}</ul>
            <ul className={(isClicked.isClicked3 && isClicked.count) ?"OptionsChoosen":"OptionsNotchoosen"}onClick={Choosen3}>{options[2]}</ul>
            <ul className={(isClicked.isClicked4 && isClicked.count) ?"OptionsChoosen":"OptionsNotchoosen"}onClick={Choosen4}>{options[3]}</ul>
        </div>
         
        
        </main>
        
      
        
     
    )
}