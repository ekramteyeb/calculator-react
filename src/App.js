import React,{useState} from 'react';
//import logo from './logo.svg';
import './App.css';
import Button from './component/Button'
import Display from './component/Display'


function App() {
    const [number, setNumber] = useState(0)
    const [operator, setOperator] = useState('')
    const [result, setResult] = useState('0')
    // const [display, setDisplay] = useState('0')
    const handleCharacter = (event) => {
      let value = event.target.value
      let sliceZero =  result[0] === '0' ? result.slice(1) : result
      setResult(sliceZero + value)
    }

    const handleOperator = (event) =>{
      let num = +result.split(' ').join('')
        setNumber(num)
      const value = event.target.innerHTML.split(' ').join('')
      //let ope = (operator === '') ? value : value
      setOperator(value)
      setResult('')
      
    }
    const handleAC = () => {
      setNumber(0)
      setResult('0')
      setOperator('')
    }
  const handleEqualOperator = (event) => {
    //let operatio = result.match(/\+|-|x|÷/g)
    //let values = result.split('').filter(el => el !== " ").join('').split(operator)
      //let y1 = values[0], y2 = values[1]
      let second = +result.split(' ').join('')
      let getResult = 0
      
    //setSecond(+result.split(' ').join(''))
      
      switch(true){
        case operator === '+' : 
            getResult = number + second
          break;
        case operator === '-':
          getResult = number - second
        break;
        case operator === 'x':
          getResult = number * second
        break;
        case operator === '÷':
          getResult = number / second
        break;
        case operator === '':
          getResult = second
          break;
        default: 
          setResult('Error')
          break;
      } 
    
    setResult(getResult.toString())
    setNumber(getResult)
    
  }
  return (

    <div className="App">
      <div className="App-header">
        <div style={{height:'20%'}} ><Display text={result}/></div>
         <div style={{width:'100%',height:'80%'}}>
          <Button handleButton={handleAC}  text='AC'/>
          <Button handleButton={() => setResult(result[0]=== '-' ? result.slice(1) : '-' + result)} text={'+/-'}/>
          <Button handleButton={() => {
            let num = +result.split(' ').join('')
            setResult((num / 100).toString())
          }
          }
            text='%'/>
          <Button namec='divide' handleButton={handleOperator} text='&#xF7;'/>
          <Button handleButton={handleCharacter} text='7'/>
          <Button handleButton={handleCharacter} text='8'/>
          <Button handleButton={handleCharacter} text='9'/>
          <Button namec='multiply' handleButton={handleOperator} text='x'/>
          <Button handleButton={handleCharacter} text='4'/>
          <Button handleButton={handleCharacter} text='5'/>
          <Button handleButton={handleCharacter} text='6'/>
          <Button namec='minus' handleButton={handleOperator} text='-'/>
          <Button handleButton={handleCharacter} text='1'/>
          <Button handleButton={handleCharacter} text='2'/>
          <Button handleButton={handleCharacter} text='3'/>
          <Button namec='plus' handleButton={handleOperator} text='+'/>
          <Button namec='zero' handleButton={handleCharacter} text='0'/>
          <Button handleButton={handleCharacter} text='.'/>
          <Button namec='divide' handleButton={handleEqualOperator} text='='/>
        </div>
        
        {console.log(number)}
    </div>
    </div>

  );
}

export default App;
