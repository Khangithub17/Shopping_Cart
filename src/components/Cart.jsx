import React from 'react'
import {useState} from 'react'

const Cart = (cart,setCart) => {
    const [price,setPrice]=useState(0);


  return (
    <div>
    {
        cart?.map((item)=>{
          return (
                <div className='card-box' key={item.id}>
                    <div>
                        <img src={item.img} alt="" />
                        <p>{item.title}</p>
                    </div>
                    <button>+</button>
                    <button>-</button>
                    <span>{item.price}</span>
                    <button>Remove</button>
                </div>
          )
        })
    }
      
    </div>
  )
}

export default Cart
