import React from 'react'

export default function Tags({text, color, textColor}) {
  return (
    <div style={{backgroundColor:color, color:textColor}} className='tag'>
                    {text}
    </div>
  )
}
