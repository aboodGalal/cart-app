import { useSelector, useDispatch } from 'react-redux'
import { remove, bigFl, rmTotal } from '../redux/shop/ShopSlice';

function ShopItem() {
    const items = useSelector((state) => state.shop)
    const dispatch = useDispatch()

    const rmm = (id, price) => {
        dispatch(remove(id))
        window.localStorage.setItem(`remove-${id}`, `id:${id}`)
        setTimeout(() => {
            window.localStorage.removeItem(`remove-${id}`);
        }, 100);
        dispatch(rmTotal((parseFloat(price) * parseFloat(window.localStorage.getItem(`numPrd-${id}`)))))
        const newTotal = items.total - (parseFloat(price) * parseFloat(window.localStorage.getItem(`numPrd-${id}`)))
        setTimeout(() => {
            window.localStorage.setItem("totalPro", newTotal.toFixed(2))
        }, 100);
    }

    return (
        <>
            <div className='d-flex flex-row justify-content-between align-items-center p-3 mb-3'>
                <h2>Cart</h2>
                <button className='bg-white border-0' onClick={() => dispatch(bigFl())}>X</button>
            </div>
            <div className='d-flex flex-column w-100 g-4 p-2'>
                {items.prds.length > 0 ?
                    Array.from(new Set(items.prds.map((i) => i.id))).map((id) => {
                        const item = items.prds.find((i) => i.id === id);

                        return (

                            <div key={item.id}>
                                <div className='w-100 d-flex flex-row justify-content-left align-items-center mb-1 p-2'>
                                    <img src={item.imgUrl} className='card-img-left me-3' alt='...' style={{ maxWidth: '150px', height: '150px' }} />
                                    <div className='d-flex flex-row justify-content-between w-100'>
                                        <h5 className='card-title d-flex flex-column justify-content-between'>
                                            <p>{item.name} </p>
                                            <p className='text-body-secondary'>${item.price}</p>
                                        </h5>
                                        <div className='d-flex flex-row gap-2 justify-content-right align-items-center'>
                                            <h2>${((parseInt(window.localStorage.getItem(`numPrd-${item.id}`))) * parseFloat(item.price)).toFixed(2)}</h2>
                                            <button className='btn btn-outline-danger' onClick={() => rmm(item.id, item.price)}>x</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    }) : null
                }
            </div>
            {/* <h2 className='w-100 d-flex justify-content-end p-2 '>Total ${parseFloat(items.total)}</h2> */}
            {items.prds.length > 0 ? 
            (<h2 className='w-100 d-flex justify-content-end p-2 '>Total ${parseFloat(items.total)}</h2>):
            (<h2 className='w-100 d-flex justify-content-end p-2 '>Total $0</h2>)}
        </>
    );
}
export default ShopItem