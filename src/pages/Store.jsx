import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { fetchUsers } from '../redux/products/ProductsSlice'
import StoreItem from '../components/StoreItem'
import ShopItem from '../components/ShopItem'
import './Store.css'


function Store() {

    const inf = useSelector((store) => store.user)
    const items = useSelector((state) => state.shop)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsers())

  
    }, [])


    useEffect(() =>{
        const dr = document.querySelector(".dr")
        if(dr){
            if(items.boolean === false){
                dr.style.right = '-100%'
            }else if(items.boolean === true){
                dr.style.right = '0';
                document.body.opacity = 0.5
            }
        }
    },[items.boolean])
    return (
        <div className='fth position-relative'>
            <div className='position-absolute  bg-white z-3 dr'><ShopItem /></div>
            {!inf.loading && inf.data ? <Navbar/> : null}
            <div className=' bg-body-tertiary ps-5 pe-5'>
            <h1 className='text-start ps-3 pe-3'>Store</h1>
            {inf.loading && (<h1>Loading ...</h1>)}
            {!inf.loading && inf.error ? (<h1>{inf.error}</h1>) : null}
            {!inf.loading && inf.data ? <StoreItem inf={inf.data}/> : null}
            </div>

        </div>
    )
}

export default Store