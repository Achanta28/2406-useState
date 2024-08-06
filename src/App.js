import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  // let score = 0;
  let[score,setScore]= useState(0);
  let[balls,setBalls]=useState(0);
  let[wickets,SetWickets]=useState(0);
    return (
    <div className="App">
      <h1>Score:{score}</h1>
      <h1>Overes:{parseInt(balls/6)}.{balls%6}</h1>
      <h1>Wickets:{wickets}</h1>
      {/* <button onClick={()=>{
        score ++;
        console.log(score)
      }}>Increment Score</button>
      <button onClick={()=>{
        score --;
        console.log(score)
      }}>Decrement Score</button> */}
      <button onClick={()=>{
        setScore(score +1);
        setBalls(balls +1);
        
      }}>Single</button>
      <button onClick={()=>{
        setScore(score +2)
        setBalls(balls +1);
        
      }}>Double</button>
       <button onClick={()=>{
        setScore(score +4);
        setBalls(balls +1);
      }}>Four</button>
      <button onClick={()=>{
        setScore(score +6)
        setBalls(balls +1);
      }}>Six</button>
       <button onClick={()=>{
        setScore(score +1);
        
      }}>Wide</button>
      <button onClick={()=>{
        setBalls(balls +1)
        SetWickets(wickets +1)
        }}>Out</button>

      
    </div>
  );
}

export default App;
