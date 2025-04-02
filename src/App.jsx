import React,{useState} from 'react'

function App() {
const [num,setNum]=useState(0)
function number(event){
  setNum(event.target.value)
}
  return(
    <div className='section'>
      <div className='main'>
        <div className='ans'>
          <div className='display-ans'>
            <p>{num}</p>
          </div>
        </div>
        <div className='keys'>
          <button onClick={number}>C</button>
          <button onClick={number}>+/-</button>
          <button onClick={number}>%</button>
          <button onClick={number}>/</button>
          <button onClick={number}>7</button>
          <button onClick={number}>8</button>
          <button onClick={number}>9</button>
          <button onClick={number}>x</button>
          <button onClick={number}>4</button>
          <button onClick={number}>5</button>
          <button onClick={number}>6</button>
          <button onClick={number}>-</button>
          <button onClick={number}>1</button>
          <button onClick={number}>2</button>
          <button onClick={number}>3</button>
          <button onClick={number}>+</button>
          <button onClick={number}>0</button>
          <button onClick={number}>.</button>
          <button onClick={number} className='equal'>=</button>
          
        </div>
      </div>
    </div>
    
    
  )

}


export default App