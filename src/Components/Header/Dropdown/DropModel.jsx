import React from 'react'

function DropModel({data, quantity}) {
    return (
        <div className="dropdown-ex1">
            <div className="img">
                <img src={data.img} alt="" />
            </div>
            <div className="text">
                <p>{data.name}</p>
                <p>{quantity} X {data.price}€</p>
            </div>
        </div>
    )
}

export default DropModel