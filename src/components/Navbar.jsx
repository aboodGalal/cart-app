import React from 'react'
import './Navbar.css'
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux';
import { bigTr } from '../redux/shop/ShopSlice';


function Navbar(props) {
    const items = useSelector((state) => state.shop)
    const dispatch = useDispatch()

    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">

                    <button className="navbar-toggler ms-5" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse ms-5" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/store">Store</NavLink>
                            </li>
                        </ul>
                        {props.bl === true ? (
                            <div className='dropdown'>
                                <div role="button" onClick={() => dispatch(bigTr())} className='shop rounded-circle d-flex justify-content-center align-items-center me-5'>
                                    <div className='icn'><FontAwesomeIcon icon={faCartShopping} /></div>
                                    <div className='cnt rounded-circle'>{items.prds.filter((i, index, arr) => arr.findIndex((j) => j.id === i.id) === index).length}</div>
                                </div>
                            </div>
                        ) : (
                            <div className='img me-5'><img src={props.StoreImg} alt="" /></div>
                        )}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar