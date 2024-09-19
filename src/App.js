import './App.css';
import NavBar from './Component/NavBar';
import { BrowserRouter } from 'react-router-dom'
import Rout from './Component/Rout';
import Footer from './Component/Footer';
import HomeProduct from './Component/Home_product';
import { useState, useEffect } from 'react';

const App = () => {
  // shop page product
  const [shop, setShop] = useState(HomeProduct)

  // shop search filter
  const [search, setSearch] = useState('')

  // add to cart
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Update localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // shop category filter
  const Filter = (x) => {
    const cateFilter = HomeProduct.filter((product) => {
      return product.cat === x
    })
    setShop(cateFilter)
  }
  const allcatFilter = () => {
    setShop(HomeProduct)
  }

  // condition 
  const searchLength = (search || []).length === 0
  const searchProduct = () => {
    if (searchLength) {
      alert('Please Search Somthing')
    } else {
      const searchFilter = HomeProduct.filter((x) => {
        return x.cat === search
      })
      setShop(searchFilter)
    }
  }

  //  add to cart
  const addtocart = (product) => {
    // alert('Add To Cart')
    // exist condition
    const exist = cart.find((x) => {
      return x.id === product.id
    })
    if (exist) {
      alert('This Product is allready added in cart')
    }
    else {
      setCart([...cart, { ...product, qlt: 1 }])
      alert('added to  cart')
    }
  }
  // console.log(cart);
  return (
    <div className="App">
      <BrowserRouter>
        {/* props send navbar */}
        <NavBar search={search} setSearch={setSearch} searchProduct={searchProduct} />
        {/* props pass  */}
        <Rout setCart={setCart} cart={cart} shop={shop} Filter={Filter} allcatFilter={allcatFilter} addtocart={addtocart} />
        <Footer />


      </BrowserRouter>
    </div>
  );
}

export default App;
