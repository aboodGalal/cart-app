import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import ShopItem from './components/ShopItem'
import { useSelector } from 'react-redux'
import './pages/Store.css'


function App() {
  const items = useSelector((state) => state.shop)

  useEffect(() =>{
    const drr = document.querySelector(".drr")
    if(drr){
        if(items.boolean === false){
            drr.style.right = '-100%'
        }else if(items.boolean === true){
            drr.style.right = '0';
            document.body.opacity = 0.5
        }
    }
},[items.boolean])

  return (
    <>
      <Navbar bl={false}/>
      <div className='d-flex justify-content-between align-items-center bg-body-tertiary p-5 flex-column-reverse flex-lg-row gap-5 hm'>
        <div className='d-flex flex-column ms-3 w-50 ch'>
          <h3 className='text-lg-start text-center'>Shop with Ease: Your One-Stop Online Destination for All Your Needs</h3>
          <p className='text-lg-start text-center'>Discover a world of convenience and savings at our online store. From fashion to electronics, we offer a wide range of products at competitive prices. Our user-friendly website and secure checkout process make shopping online a breeze. Plus, with fast shipping and exceptional customer service, you can shop with confidence. Start exploring our online store today and see for yourself why so many customers choose us for their shopping needs.</p>
        </div>
        <div className='d-flex flex-column me-3 img-2 flex-fill'><img src="src\images\سجل-تجاري-الكتروني-للاجانب.png" alt="" /></div>
      </div>
    </>
  )
}

export default App
