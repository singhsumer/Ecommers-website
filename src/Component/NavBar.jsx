import React, { useState } from 'react'
import './Nav.css'
import logo from '../Assats/logoN.png'
import { FaShippingFast } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { CiLogin } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { Link } from 'react-router-dom';
function NavBar({search,setSearch ,searchProduct}) {
    const [login,setLogin]=useState(true)
    const loginWithRedirect = () =>{
        setLogin(!login)
    }
  return (
    <>
        <div className="header">
            <div className="top_header">
                <div className="icon">
                        <FaShippingFast />
                </div>
                <div className="info">
                    <p>Free shipping when shopping upto $1000</p>
                </div>
            </div>
            <div className="mid_header">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="search_box">
                    <input type="text" value={search} placeholder='search' onChange={(e)=> setSearch(e.target.value)}/>
                    <button onClick={searchProduct}><CiSearch/></button>
                </div>{
                    login ?   <div className="user">
                    <div className="icon">
                            <CiLogin/>
                    </div>
                    <div className="btn">
                        <button onClick={()=>loginWithRedirect()}>Login</button>
                    </div>
                </div> : <div className="user">
                    <div className="icon">
                       <CiLogout />
                    </div>
                    <div className="btn">
                        <button onClick={()=>loginWithRedirect()}>Log-out</button>
                    </div>
                </div>
                }
              </div>
               <div className="last_header">
                 <div className="user_profile">
                    {
                        // user profile will show her
                        login ?
                        <>
                          <div className="icon">
                          <CiUser />
                          </div>
                          <div className="info">
                        <p>Name:- sumer singh</p>
                        <p>email:- singhsumer0911@gmail.com</p>
                          </div>
                        </>
                        :
                        <>
                        <div className="icon">
                        <CiUser />
                        </div>
                        <div className="info">
                            <p>Please Login</p>
                        </div>
                         </>
                    }
                 </div>
                 <div className="nav">
                    <ul>
                        <li><Link to='/'className='link'>Home</Link></li>
                        <li><Link to='/shop'className='link'>Shop</Link></li>
                        <li><Link to='/cart'className='link'>Cart</Link></li>
                        <li><Link to='/about'className='link'>About</Link></li>
                        <li><Link to='/contact'className='link'>Contact</Link></li>
                    </ul>
                 </div>
                 <div className="offer">
                    <p>Flat 10% over all iPhone</p>
                 </div>
               </div>
        </div>
    </>
  )
}

export default NavBar