import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const quotes = [
    'Never Give Up!!',
    'Failure is key to success',
    'If your dream does not scares you!!DREAM BIG!!!'
]

function app() {
    const [quote, setQuote] = useState(quotes[0])

    function randamizeQuote() {
        const randomQuote = quotes[Math.floor(Math.random() = quotes.length)]
        setQuote()
    }

    return {



    }
}