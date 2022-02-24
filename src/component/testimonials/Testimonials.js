import React from 'react'
import './testimonials.scss'
export default function Testimonials() {
    return (
        <div className='Testimonials' id='Testimonials'>
            <h1>testimonials</h1>
            <div className='container'>
                <div className='card'>
                    <div className='top'>
                        <img src="assest/img/right-arrow.png" className='left' alt="" />
                        <img src="https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            className='user' alt="" />
                        <img src="assest/img/youtube.png" className='right' alt="" />
                    </div>
                    <div className='center'>
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",

                    </div>
                    <div className='bottom'>
                        <h3>Reone Richa</h3>
                        <h4>Sandbox, CEO</h4>

                    </div>

                </div>
            </div>
        </div>
    )
}
