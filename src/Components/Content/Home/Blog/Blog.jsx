import React from 'react'
import "./blog.css"
import { FaPlay } from "react-icons/fa"

export default function Blog() {
    return (
        <div id='blog'>
            <div className="bgBlog">
                <h3>The beauty</h3>
                <h2>LOOKBOOK</h2>
                <button type="submit"> <FaPlay /> PLAY VIDEO</button>
            </div>
        </div>
    )
}
