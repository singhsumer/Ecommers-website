import React, { useState } from 'react'
import './Shop.css'
import banner from '../Assats/shop_left.avif';
import shopImg from '../Assats/shop_top.webp'
import { FaHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Shop = ({ shop,Filter,allcatFilter,addtocart }) => {
    // toggle product detail
    const [showDetail,setShowDetail] =useState(false)
    // detail page data 
    const [detail ,setDetail] =useState([])

    // showing detail box
    const detailPage = (product) =>{
      const detailtData =  ([{product}]);
      const productdetail =detailtData[0]['product']
        setDetail(productdetail);
    // console.log(productdetail);

        setShowDetail(true)
    }
    
    const closeDetail = () =>{
        setShowDetail(false)
    }
    return (
        <>
        {
            showDetail ? 
            <>
            <div className="product_detail">
                <button className='close_btn' onClick={closeDetail}><IoMdClose /></button>
                <div className="container">
                    <div className="img_box">
                        <img src={detail.img} alt="" />
                    </div>
                    <div className="info">
                        <h4># {detail.cat}</h4>
                        <h2>{detail.Name}</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, unde.</p>
                        <h3>${detail.price}</h3>
                        <button onClick={() => addtocart (detail)}>Add To Cart</button>
                    </div>
                </div>
            </div>
            </>:
            null
            
        }
            <div className="shop">
                <h2># shop</h2>
                <p>Home . shop</p>
                <div className="container">
                    <div className="left_box">
                        <div className="category">
                            <div className="header">
                                <h2>all categories</h2>
                            </div>
                            <div className="box">
                                <ul>
                                    <li onClick={() => allcatFilter ()}># All </li>
                                    <li onClick={() => Filter ('tv')}># Tv</li>
                                    <li onClick={() => Filter ('leptop')}># laptop</li>
                                    <li onClick={() => Filter ('watch')}># Watch</li>
                                    <li onClick={() => Filter ('speaker')}># Speaker</li>
                                    <li onClick={() => Filter ('electronics')}># electronics</li>
                                    <li onClick={() => Filter ('headphone')}># Headphone</li>
                                    <li onClick={() => Filter ('phone')}># phone</li>
                                </ul>
                            </div>
                        </div>
                        <div className="banner">
                            <div className="img_box">
                                <img src={banner} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="right_box">
                        <div className="banner">
                            <div className="img_box">
                                <img src={shopImg} alt="" />
                            </div>
                        </div>
                        <div className="product_box">
                            <h2>Shop Product</h2>
                            <div className="product_container">
                                {
                                    shop.map((curElm,k) => {
                                        return (
                                            <>
                                                <div className="box" key={k}>
                                                    <div className="img_box">
                                                        <img src={curElm.img} alt="" />
                                                        <div className="icon">
                                                            <li> <FaHeart /></li>
                                                            <li onClick={() =>  detailPage (curElm)}> <FaEye /> </li>
                                                        </div>
                                                    </div>
                                                    <div className="detail">
                                                        <h3>{curElm.Name}</h3>
                                                        <p>${curElm.price}</p>
                                                        <button onClick={() => addtocart (curElm)}>Add To Cart</button>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                                <div className="box"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Shop
