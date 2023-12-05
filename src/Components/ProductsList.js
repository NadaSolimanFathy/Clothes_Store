import { useEffect, useState } from "react";
import Product from "./Product";
import Button from "./Button";

function ProductsList() {
  const API_URL = "https://fakestoreapi.com/products";
  const [productData, setProductData] = useState([]);
  const Categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setProductData(data));
  }, []);
  //we use empty array to execute effect only once

  return (
    <>
      <h2 className="text-center p-5">Our Products</h2>
      {productData.length > 0 &&
        Categories.map((cat) => {
          return (
            <>
              <Button btnText={cat.toUpperCase()} btnRoute={cat}>
                {" "}
              </Button>
            </>
          );
        })}
      <div className="container">
        <div className="row">
          {productData.length > 0 &&
            productData.map((prod) => {
              return (
                <div className="col-3" key={prod.id}>
                  <Product product={prod} showButton={true} />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default ProductsList;
