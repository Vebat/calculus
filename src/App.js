import { time } from '@amcharts/amcharts5';
import { useState } from 'react';
import './App.css';
import logo from './logo.svg';
import {Motion} from "./MotionClass.js"
const bootstrap = require('bootstrap')


function App() {
  
  function speedHandler(e){
   setSpeed(e.target.value) 
  }

  function angleHandler(e){
    setAngle(e.target.value) 
   }

   function massHandler(e){
    setMass(e.target.value) 
   }

   function surfaceHandler(e){
    setSurface(e.target.value) 
   }

   function ratioHandler(e){
    setRatio(e.target.value) 
   }

  function submitValues(e) {
    e.preventDefault();

    const task=new Motion(parseFloat(speed),parseFloat(angle), parseFloat(mass), parseFloat(surface), parseFloat(ratio))
    task.decomposingVector()
    task.findDistance()
    setDistance(task.distance)
    setTime(task.time)
}

  const [speed,setSpeed]=useState('')
  const [angle,setAngle]=useState('')
  const [mass,setMass]=useState('')
  const [surface,setSurface]=useState('')
  const [ratio,setRatio]=useState('')
  const [distance,setDistance]=useState('')
  const [time,setTime]=useState('')
  return (
    <div className="App">
      <header></header>
      <main>
        <div>
          <form>
          <input onChange={speedHandler} placeholder='Скорость' value={speed}></input>
          <input onChange={angleHandler} placeholder='Угол'></input>
          <input onChange={massHandler} placeholder='Масса'></input>
          <input onChange={surfaceHandler} placeholder='Площадь'></input>
          <input onChange={ratioHandler} placeholder='Аэродинамический коэффицент'></input>
          <button onClick={submitValues}>Ввести</button>
          </form>
         

        </div>
        <div>
          <p>Скорость: {speed}</p>
          <p>Угол: {angle}</p>
          <p>Дистанция: {distance}</p>
          <p>Время: {time}</p>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
