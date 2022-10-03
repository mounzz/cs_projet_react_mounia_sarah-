import React from 'react'
import "./contact.css"

export default function Contact() {
    return (
        <div id='contact'>
            <div className="titreContact">
                <p>CONTACT</p>
            </div>
            <div className="infoContact">
                <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.25988805349!2d-74.00238178477628!3d40.75630834284093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259b35df44d01%3A0x26a19cd5abdd89a1!2sHudson%20Blvd%20W%2C%20New%20York%2C%20NY%2010018%2C%20%C3%89tats-Unis!5e0!3m2!1sfr!2sbe!4v1657635679581!5m2!1sfr!2sbe" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <form className="form">
                    <h2>Send us your message</h2>
                    <input className='form-input' type="text" placeholder='Full Name' />
                    <input className='form-input' type="text" placeholder='Phone Number' />
                    <input className='form-input' type="email" placeholder='Email Address' />
                    <textarea className='form-input' placeholder='Message' rows="5"></textarea>
                    <button type="submit">SEND</button>
                </form>
            </div>
        </div>
    )
}
