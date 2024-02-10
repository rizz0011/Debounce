import React, { useEffect, useState } from 'react'



var timmer;
function Timmer() {
const [sec, setSec] = useState(0)
const [min, setMin] = useState(0)


const handleStart = () => {
    timmer =  setInterval(() => {
setSec(p =>  p+1)
    },1000)
}

const handleStop = () => {
    clearInterval(timmer)
}

useEffect(() => {
    if(sec == 60){
        setMin(m => m+1)
        setSec(0)
    }

},[sec])


  return (
    <div>
        {min} : {sec}
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>

    </div>
  )
}

export default Timmer