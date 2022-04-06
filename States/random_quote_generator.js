import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'

const quotes = ['Failure is key to success',
    'If it does not scares you dream big',
    'work hard live hard',
    'bye'
]

function App() {
    const [quote, setQuote] = useState(quotes[0])

    function randamizeQuote() {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
        setQuote()
    }

    return ( <
        div className = "App" >
        <
        div > { quote } < /div> <
        button onClick = { randamizeQuote } > Click ME < /button> <
        /div>


    )
}

export default App