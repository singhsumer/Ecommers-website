import React, { useEffect, useState } from 'react'
import './Home.css'
import profile from '../Assats/T1.avif'
import banner from '../Assats/Multi-Banner-1.avif';
import banner2 from '../Assats/Multi-banner-2.avif';
import banner3 from '../Assats/Multi-Banner-3.webp';
import banner4 from '../Assats/Multi-banner-4.avif';
import banner5 from '../Assats/Multi-Banner-5.webp';
import { Link } from 'react-router-dom'
import HomeProduct from './Home_product'
import { FaEye, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";

const Home = ({addtocart}) => {
    // product Category
    const [newProduct, setNewProduct] = useState([])
    const [featuredProduct, setFeauturedProduct] = useState([])
    const [topProduct, setTopProduct] = useState([])

    // Tranding product
    const [trendingProduct, setTrendingProduct] = useState(HomeProduct)
    //  filter of trading product
    const filtercate = (x) => {
        const filterProduct = HomeProduct.filter((curElm) => {
            return curElm.type === x;
        })
        setTrendingProduct(filterProduct)
    }
    // all trending produnct
    const allTrendingProduct = () => {
        setTrendingProduct(HomeProduct)
    }
    // product type
    useEffect(() => {
        productCategory()
    })
    const productCategory = () => {
        // new Product
        const newCategory = HomeProduct.filter((x) => {
            return x.type === 'new'
        })
        setNewProduct(newCategory)
        // featured Product
        const feacturedCategory = HomeProduct.filter((x) => {
            return x.type === 'featured'
        })
        setFeauturedProduct(feacturedCategory)

        // top Catagory
        const topCategory = HomeProduct.filter((x)=>{
            return x.type === 'top'
        })
        setTopProduct(topCategory)
    }

    return (
        <>
            <div className="home">
                <div className="top_banner">
                    <div className="contant">
                        <h3>silver aluminum</h3>
                        <h2>Apple Watch</h2>
                        <p>30% off at your first odder</p>
                        <Link to='/shop' className='link'>Shop Now</Link>
                    </div>
                </div>
                <div className="trending">
                    <div className="container">
                        <div className="left_box">
                            <div className="header">
                                <div className="heading">
                                    <h2 onClick={() => allTrendingProduct()}>trending Product</h2>
                                </div>
                                <div className="cate">
                                    <h3 onClick={() => filtercate('new')} >New</h3>
                                    <h3 onClick={() => filtercate('featured')}>Featured</h3>
                                    <h3 onClick={() => filtercate('top')}>top</h3>
                                </div>
                            </div>
                            <div className="products">
                                <div className="container">
                                    {
                                        trendingProduct.map((curElm,k) => {
                                            return (
                                                <>
                                                    <div className="box" key={k}>
                                                        <div className="img_box">
                                                            <img src={curElm.img} alt={curElm.Name} />
                                                            <div className="icon">
                                                                <div className="icon_box">
                                                                    <FaEye />
                                                                </div>
                                                                <div className="icon_box">
                                                                    <FaHeart />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="info">
                                                            <h3>{curElm.Name}</h3>
                                                            <p>${curElm.price}</p>
                                                            {/* <Link to='/cart'>Add To Cart</Link> */}
                                 <button className='btn' onClick={() => addtocart (curElm)}>Add To Cart</button>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        })
                                    }
                                </div>
                                <button>Show More</button>
                            </div>
                        </div>
                        <div className="right_box">
                            <div className="right_container">
                                <div className="testimonial">
                                    <div className="head">
                                        <h3>Our Testmonial</h3>
                                    </div>
                                    <div className="detail">
                                        <div className="img_box">
                                            <img src={profile} alt="img" />
                                        </div>
                                        <div className="info">
                                            <h3>Stephan robot</h3>
                                            <h4>Web Developer</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, ratione!</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="newsletter">
                                    <div className="head">
                                        <h3>newsLetter</h3>
                                    </div>
                                    <div className="form">
                                        <p>Join out malling list</p>
                                        <input type="email" placeholder='E-mail' autoComplete='off' />
                                        <button>Subscribe</button>
                                        <div className="icon_box">
                                            <div className="icon">
                                                <CiFacebook />
                                            </div>
                                            <div className="icon">
                                                <FaInstagram />
                                            </div>
                                            <div className="icon">
                                                <FaTwitter />
                                            </div>
                                            <div className="icon">
                                                <FaYoutube />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banners">
                    <div className="container">
                        <div className="left_box">
                            <div className="box">
                                <img src={banner} alt="banner" />
                            </div>
                            <div className="box">
                                <img src={banner2} alt="banner" />
                            </div>
                        </div>
                        <div className="right_box">
                            <div className="top">
                                <img src={banner3} alt="banner" />
                                <img src={banner4} alt="" />
                            </div>
                            <div className="bottom">
                                <img src={banner5} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product_type">
                    <div className="container">
                        <div className="box">
                            <div className="header">
                                <h2>New Product</h2>
                            </div>
                            {
                                newProduct.map((curElm,k) => {
                                    return (
                                        <>
                                            <div className="productbox"key={k}>
                                                <div className="img_box">
                                                    <img src={curElm.img} alt="" />
                                                </div>
                                                <div className="detail">
                                                    <h3>{curElm.Name}</h3>
                                                    <p>${curElm.price}</p>
                                                    <div className="icon">
                                                        <button><FaEye /></button>
                                                        <button><FaHeart /></button>
                                                        <button onClick={() => addtocart (curElm)}><FaCartArrowDown /></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                        <div className="box">
                            <div className="header">
                                <h2>featured Product</h2>
                            </div>
                            {
                                featuredProduct.map((curElm,k) => {
                                    return (
                                        <>
                                            <div className="productbox"key={k}>
                                                <div className="img_box">
                                                    <img src={curElm.img} alt="" />
                                                </div>
                                                <div className="detail">
                                                    <h3>{curElm.Name}</h3>
                                                    <p>${curElm.price}</p>
                                                    <div className="icon">
                                                        <button><FaEye /></button>
                                                        <button><FaHeart /></button>
                                                        <button onClick={() => addtocart (curElm)}><FaCartArrowDown /></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                        <div className="box">
                            <div className="header">
                                <h2>top Product</h2>
                            </div>
                            {
                                topProduct.map((curElm,k) => {
                                    return (
                                        <>
                                            <div className="productbox"key={k}>
                                                <div className="img_box">
                                                    <img src={curElm.img} alt="" />
                                                </div>
                                                <div className="detail">
                                                    <h3>{curElm.Name}</h3>
                                                    <p>${curElm.price}</p>
                                                    <div className="icon">
                                                        <button><FaEye /></button>
                                                        <button><FaHeart /></button>
                                                        <button onClick={() => addtocart (curElm)}><FaCartArrowDown /></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
