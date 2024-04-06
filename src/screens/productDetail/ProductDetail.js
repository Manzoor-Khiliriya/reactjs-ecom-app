import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CartContext from "../../context/CartContext";

function ProductDetail(props) {
  const params = useParams();
  const prodId = params.productId;

  const [product, setProduct] = useState([]);

  function loadProductById() {
    fetch('https://fakestoreapi.com/products/' + prodId).then((response) => {
      response.json().then((data) => {
        setProduct(data);
      }).catch(error => {
        console.log(error);
      });

    }).catch(error => {
      console.log(error);
    })
  }
  useEffect(() => {
    loadProductById()
  }, [prodId]);

  const navigate = useNavigate();

  const { onAdcClick } = useContext(CartContext);


  return (
    <>
      <div className="border rounded d-flex m-2 border rounded">
        <div className="w-25 m-2 p-2">
          <img src={product.image} height={300} style={{ maxWidth: '300px' }}></img>
        </div>
        <div className="w-75 m-2">
          <div className="text-info"><h4>{product.title}</h4></div> <hr />
          <div className="text-danger-emphasis"><h5>Category : {product.category}</h5></div> <hr />
          <div><h4>{product.description}</h4></div> <hr />
          <div className=""><span className="fw-semibold fs-3 text-success">Price : ₹ {product.price}</span></div>
        </div>
        <div className="m-3 text-center border rounded" style={{ width: '150px' }}>
          <div className="">₹<span className="fw-semibold fs-3 text-success">{product.price}</span></div>
          <button className="btn btn-warning rounded-pill" onClick={() => {
            onAdcClick(product);
            navigate('/cart');
          }}>Add to Cart</button>
        </div>
      </div>
      <div>
        <button className="btn btn-secondary m-2" onClick={() => {
          navigate('/products')
        }}>Go to Products</button>
        <button className="btn btn-secondary m-2" onClick={() => {
          navigate(-1)
        }}>Go back</button>
      </div>
    </>
  );
}

export default ProductDetail;