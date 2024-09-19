import React from 'react'
import './Cart.css'
import { Link } from 'react-router-dom'
import { IoMdClose } from "react-icons/io";


const Cart = ({ cart ,setCart}) => {
    // increase qualtity of cart product
    const incqlt = (product) =>{
        const exist = cart.find((x)=>{
            return x.id === product.id
        })
        setCart(cart.map((curElm)=>{
            return curElm.id === product.id ? {...exist,qlt :exist.qlt + 1 } :curElm
        }))

    }
    // decrease qualtity of cart product

    const dcrqlt = (product) =>{
        const exist = cart.find((x)=>{
            return x.id === product.id
        })
        setCart(cart.map((curElm)=>{
            return curElm.id === product.id ? {...exist, qlt:exist.qlt - 1 } :curElm
        }))

    }
    // remove produnct
    const removeProduct =(product) =>{
        const exist = cart.find((x)=>{
            return x.id === product.id
        })
        if(exist.qlt > 0){
            setCart(cart.filter((curElm) =>{
               return curElm.id !== product.id
            }))
        }
    }
    // total price 
    const total = cart.reduce((price ,item ) => price + item.qlt * item.price,0 )
    return (
        <>
            <div className="cart">
                <h3># cart</h3>
                {
                    cart.length === 0 &&
                    <>
                        <div className="empty_cart">
                            <h2>Your Shopping Cart in empty</h2>
                            <Link to='/shop'><button>Shop Now</button></Link>
                        </div>
                    </>
                }
                <div className="container">
                    {
                        cart.map((curElm , k) => {
                            return (
                                <>
                                    <div className="box" key={k}>
                                        <div className="img_box">
                                            <img src={curElm.img} alt="img" />
                                        </div>
                                          <div className="detail">
                                                <div className="info">
                                                    <h4>{curElm.cat}</h4>
                                                   <h3>{curElm.Name}</h3>
                                                    <p>${curElm.price}</p>
                                                    <p>Total: ${curElm.price * curElm.qlt}</p>
                                            </div>
                                            <div className="quantity">
                                                <button onClick={() => incqlt (curElm)}>+</button>
                                                <input type="number" value={curElm.qlt} />
                                                <button onClick={() => dcrqlt (curElm)}>-</button>
                                            </div>
                                            <div className="icon">
                                                    <li onClick={() => removeProduct (curElm)}><IoMdClose /></li>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
                <div className="bottom">
                    {
                        cart.length > 0 && 
                        <>
                            <div className="total">
                                <h4>sub Total: ${total}</h4>
                            </div>
                            <button>CheckOut</button>
                        </>
                    }
                </div>
            </div>
        </>
    )
}

export default Cart
