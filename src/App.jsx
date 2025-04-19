import React,{useState} from 'react'

function App() {
  const [num, setNum] = useState('')

  function number(curr) {
    if (curr === 'C') {
      setNum('')
    } else if (curr === '+/-') {
      if (num && num.charAt(0) === '-') setNum(num.slice(1))
      else setNum('-' + num)
    } else if (curr === '%') {
      setNum(String(parseFloat(num) / 100))
    } else {
      setNum(num + curr)
    }
  }

  function calculate() {
    const expression = num.replace(/x/g, '*')
    const result = Number(eval(expression))
    setNum(result);
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
          <button onClick={()=>{number("C")}}>C</button>
          <button onClick={()=>{number("+/-")}}>+/-</button>
          <button onClick={()=>{number("%")}}>%</button>
          <button onClick={()=>{number("/")}}>/</button>
          <button onClick={()=>{number(7)}}>7</button>
          <button onClick={()=>{number(8)}}>8</button>
          <button onClick={()=>{number(9)}}>9</button>
          <button onClick={()=>{number("x")}}>x</button>
          <button onClick={()=>{number(4)}}>4</button>
          <button onClick={()=>{number(5)}}>5</button>
          <button onClick={()=>{number(5)}}>6</button>
          <button onClick={()=>{number("-")}}>-</button>
          <button onClick={()=>{number(1)}}>1</button>
          <button onClick={()=>{number(2)}}>2</button>
          <button onClick={()=>{number(3)}}>3</button>
          <button onClick={()=>{number('+')}}>+</button>
          <button onClick={()=>{number(0)}}>0</button>
          <button onClick={()=>{number(".")}}>.</button>
          <button onClick={calculate} className='equal'>=</button>
        </div>
      </div>
    </div>
    
    
  )

}


export default App