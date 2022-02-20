
import React, { useEffect, useRef } from 'react'
import "./intro.scss"
import { init } from 'ityped'


export default function Intro() {

    const textRef = useRef();

    useEffect(() => {

        init(textRef.current,
            {
                showCursor: false,
                startDelay: 1500,
                backSpeed: 60,
                showCursor: true,
                strings: ['Developer', 'Designer', 'Content Creator', 'Fresher']
            })
    }, [])

    return (
        <div className='intro' id='intro'>
            <div className='left'>
                <div className='imgContainer'>
                    <img src="assest/img/richu.png.jpg" alt="" />
                </div>
            </div>
            <div className='right'>
                <div className='wrapper'>
                    <h2>Hi There, I'm</h2>
                    <h1>Richa</h1>
                    <h3>Front-End <span ref={textRef}></span>
                    </h3>
                </div>
                <a href='#protfolio'>
                    <img src="assest/img/down.png" alt="" />
                </a>

            </div>
        </div>
    )
}
