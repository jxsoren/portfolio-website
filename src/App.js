import React from 'react'
import Background from './components/Background/BG'
import Home from './components/Home/Home'
import './styles/Index.css'


export default function App(){

    return(
        <>
            <Background />
            
            <div className="App">
                <Home />
            </div>
        </>
    )
}