import React from 'react'
import "./about.css"
import about from "../../../images/about.jpeg"

export default function About() {
    return (
        <div id='about'>
            <div className="titreAbout"><p>ABOUT</p></div>
            <div className="infoAbout">
                <div className="img">
                    <img src={about} alt="" />
                </div>
                <div className="text">
                <h2>Our story</h2>
                <p className='p1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, modi autem in totam eius dignissimos atque corporis quod distinctio quia nemo pariatur ad necessitatibus illo, aut esse asperiores iure sint enim amet est inventore consequatur? Possimus, veritatis dolore praesentium blanditiis, quia delectus laudantium fugit ducimus similique ratione distinctio nulla sunt voluptatibus dignissimos rerum eius, corrupti at qui. Ex explicabo sunt architecto ullam mollitia. Ullam libero fuga aliquam veritatis sed! Dolorum tempore est perspiciatis ea harum. Numquam possimus harum praesentium beatae architecto! Quisquam, saepe. Eos fugit dolores odit! Facilis odio officia non? Eveniet ratione saepe earum animi itaque quia consectetur autem?</p>
                <p className='p2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, voluptates eligendi voluptas esse atque illo facilis ea nihil adipisci voluptate sunt laudantium consequatur obcaecati incidunt? Odit earum id culpa illo a iusto, repellat ullam est sequi obcaecati eligendi sit quos tenetur blanditiis aliquam aut exercitationem quibusdam, laboriosam hic! Nemo, amet.</p>
                </div>
            </div>
        </div>
    )
}
