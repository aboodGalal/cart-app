import CartItem from './CartItem'
function StoreItem(props) {
    return (
        <>
            <div className='row w-100 g-4 ps-4 '>
                {props.inf.map((user) => (
                    <div key={user.id} className="card col-lg-4 col-md-6">
                        <img src={user.image} className="card-img-top" alt="..." style={{ width: "100%", height: "250px" }} />
                        <div className="card-body">
                            <h5 className="card-title d-flex justify-content-between">
                                <p>{user.name}</p>
                                <p>${user.price}</p>
                            </h5>
                            <CartItem user={user} />
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
export default StoreItem