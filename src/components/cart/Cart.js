import { useContext, } from "react";
import { Link, useNavigate } from "react-router-dom";
import CartContext from "../../context/CartContext";

function Cart() {
    const { cartProducts } = useContext(CartContext);

    const navigate = useNavigate();

    return (
        <>
            <h1>Shopping cart</h1>
            <hr />
            {cartProducts.map((c) => {
                return (
                    <div className="card text-center m-2" style={{ width: "200px" }}>
                        <div className="p-2"><img src={c.image} height={150} width={150}></img></div>
                        <div><Link className="link-info link-underline-light fw-bold" to={'/products/' + c.id}>{c.title}</Link></div>
                        <div className="">₹<span className="fw-medium fs-5">{c.price}</span></div>
                    </div>)
            })}


            <button className="btn btn-secondary m-2" onClick={() => {
                navigate('/products')
            }
            }>Go to Products</button>
            <button className="btn btn-secondary m-2" onClick={() => {
                navigate(-1)
            }}>Go back</button>
        </>
    );
}

export default Cart;