import { useEffect, useState } from "react";
import ProductCard from "../productCard/ProductCard";

function ProductList(props) {
  const [productList, setProductList] = useState([])
  function loadProducts() {
    fetch("https://fakestoreapi.com/products").then((response) => {
      response.json().then((data) => {
        setProductList(data);
      })
    })
    console.log(productList)
  }
  useEffect(() => {
    loadProducts()
  }, []);

  var searchText = props.searchText;
  var filterProducts = productList.filter((p => {
    return p.title.toLowerCase().includes(searchText.toLowerCase())
  }))
  return (
    <>

      <div className="d-flex flex-wrap">
        {
          filterProducts.map((p) => {
            return <ProductCard product={p} />
          })
        }
      </div>

    </>
  );
}

export default ProductList;