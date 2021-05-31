import React from 'react'
import { TemplateHome } from '../Template/TemplateHome.js'
import './Home.css'

const Home = () => {
    return(
        <div className="home">
            <span className="my-name">

                <div className="josh">
                        Josh
                </div>

                <div className="sorensen">
                    Soresnen
                </div>
                
            </span>
		
            <TemplateHome />
        </div>
    )
}

export default Home