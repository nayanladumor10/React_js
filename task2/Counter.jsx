import React, {useState} from 'react'

export default function () {

    const [count,setcount] = useState(0)

    function increment(){
      setcount(count+1);
    }

    function decrement(){
        setcount(count-1);
      }

      
  return (
    <div>
        <h2>RUNNING COUNT IS {count}</h2>
        <button onClick={increment}>Count up!</button>
        <button onClick={decrement}>Count less!</button>
    </div>
  )
}
