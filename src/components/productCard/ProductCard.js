import { Link } from "react-router-dom";

function ProductCard(props) {
  var prod = props.product;

  return (
    <>
      <div className="card text-center m-2" style={{ width: "200px" }}>
        <div className="p-2"><img src={prod.image} height={150} width={150}></img></div>
        <div><Link className="link-info link-underline-light fw-bold" to={'/products/' + prod.id}>{prod.title}</Link></div>
        <div className="">₹<span className="fw-medium fs-5">{prod.price}</span></div>
      </div>
    </>
  );
}

export default ProductCard;