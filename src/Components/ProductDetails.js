import { useEffect, useState } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import Product from "./Product";

import "../Style/ProductDetails.css";

function ProductDetails() {
  const params = useParams();
  const Category = params.btnRoute;
  const API_URL = `https://fakestoreapi.com/products/${params.prodId}`;
  const [productData, setProductData] = useState({});

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setProductData(data));
  }, []);

  return (
    <section id="mySec">
      <h1>
        Product {params.prodId} : {productData.title} ,,,details
      </h1>
      <Product product={productData} showButton={false} Category={Category} />
    </section>
  );
}

export default ProductDetails;
