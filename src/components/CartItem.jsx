import React, {useState } from 'react';
import { add, rm, rmAll, addAll } from '../redux/numProducts.js/NumProducts'
import { push, remove, addTotal, rmTotal, eqTotal } from '../redux/shop/ShopSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

function CartItem(props) {
  const smtr = useSelector((state) => state.shop)
  const ds = useDispatch()
  const { user } = props;
  const [prdNum, setPrdNum] = useState(parseInt(window.localStorage.getItem(`numPrd-${user.id}`)) || 0);


  useEffect(() => {
    if (window.localStorage.getItem(`numPrd-${user.id}`)) {
      setPrdNum(parseInt(window.localStorage.getItem(`numPrd-${user.id}`)))
      ds(addAll(parseInt(window.localStorage.getItem(`numPrd-${user.id}`))))
      window.localStorage.setItem(`price-${user.id}`, (parseFloat(user.price) * prdNum))
    }
  }, [window.localStorage.getItem(`numPrd-${user.id}`)]);

  useEffect(() => {
    if (window.localStorage.getItem("totalPro")) {
      ds(eqTotal(parseFloat(window.localStorage.getItem("totalPro"))))
    }
  }, []);

  useEffect(() => {
    if (window.localStorage.getItem(`obj-${user.id}`)) {
      const obj = JSON.parse(localStorage.getItem(`obj-${user.id}`))
      ds(push(obj))
    }
  }, [window.localStorage.getItem(`obj-${user.id}`)]);

  useEffect(() => {
    if (window.localStorage.getItem(`remove-${user.id}`)) {
      setPrdNum(0)
      ds(rmAll(prdNum))
    }
  }, [window.localStorage.getItem(`remove-${user.id}`)]);

  useEffect(() =>{
    if(prdNum === 0 && window.localStorage.getItem(`numPrd-${user.id}`)){
      window.localStorage.setItem(`numPrd-${user.id}`, 0)
    }
  },[prdNum])





  const addPrd = () => {
    setPrdNum(prdNum + 1);
    ds(add())
    window.localStorage.setItem(`numPrd-${user.id}`, prdNum + 1)
    window.localStorage.removeItem(`remove-${user.id}`)
    window.localStorage.setItem(`obj-${user.id}`, JSON.stringify(user))
    ds(addTotal(parseFloat(user.price)))
    const newTotal = smtr.total + parseFloat(user.price);
    setTimeout(() => {
      window.localStorage.setItem("totalPro", newTotal.toFixed(2))
    }, 100)
  };


  const rmPrd = () => {
    setPrdNum(prdNum - 1);
    ds(rm())
    window.localStorage.setItem(`numPrd-${user.id}`, prdNum - 1)
    ds(rmTotal(parseFloat(user.price)))
    const newTotal = smtr.total - parseFloat(user.price)
    setTimeout(() => {
      window.localStorage.setItem("totalPro", newTotal.toFixed(2))
    }, 100)
  };

  const rmAl = () => {
    setPrdNum(0);
    ds(rmAll(prdNum))
    window.localStorage.setItem(`numPrd-${user.id}`, prdNum - prdNum)
    window.localStorage.removeItem(`obj-${user.id}`)
    ds(remove(user.id))
    ds(rmTotal((parseFloat(user.price) * prdNum)))
    const newTotal = smtr.total - (parseFloat(user.price) * prdNum)
    setTimeout(() => {
      window.localStorage.setItem("totalPro", newTotal.toFixed(2))

    }, 100);
  };

  useEffect(() => {
    if (window.localStorage.getItem(`obj-${user.id}`) && prdNum === 0) {
      ds(remove(user.id));
      window.localStorage.removeItem(`obj-${user.id}`);
      window.localStorage.removeItem(`price-${user.id}`)
    }
  }, [prdNum]);



  return (
    <div>
      {prdNum === 0 || window.localStorage.getItem(`remove-${user.id}`) ? (
        <button className='btn btn-primary w-100' onClick={addPrd}>
          Add To Cart
        </button>
      ) : (
        <div className='text-center'>
          <div className='d-flex flex-row justify-content-center align-items-center m-2'>
            <button className='btn btn-primary rounded' onClick={rmPrd}>
              -
            </button>
            <div className='m-2'>{prdNum} in cart</div>
            <button className='btn btn-primary rounded' onClick={addPrd}>
              +
            </button>
          </div>
          <button className='btn btn-danger rounded' onClick={rmAl}>
            Remove
          </button>
        </div>
      )}
    </div>
  );
}

export default CartItem;