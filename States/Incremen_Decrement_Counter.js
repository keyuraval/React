import React, { useState } from 'react'

function App() {

    const [counter, setCounter] = useState(0)

    function increase() {
        setCounter(counter => counter + 1)
    }

    function Decrement() {
        setCounter(counter => counter - 1)
    }


    return ( <
        div className = "App" >
        <
        h1 > Counter: < span > { counter } < /span></h
        1 >
        <
        button onClick = { increase } > Increment < /button> <
        button onClick = { Decrement } > Decrement < /button> <
        /div>
    )
}

export default App