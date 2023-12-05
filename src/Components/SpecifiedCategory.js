import { useEffect, useState } from "react";
import "../Style/SpecifiedCategory.css";
import { useParams } from "react-router-dom";
import Product from "./Product";
function SpecifiedCategory() {
  const [categoryData, setcategoryData] = useState([]);
  const params = useParams();
  const API_URL = "https://fakestoreapi.com/products";
  const btnRoute = params.btnRoute;
  const FullPath = `${API_URL}/category/${btnRoute}`;

  useEffect(() => {
    fetch(FullPath)
      .then((res) => res.json())
      .then((data) => {
        setcategoryData(data);
        console.log(categoryData.length);
      });
  }, []);

  return (
    <>
      <h2>{btnRoute}</h2>

      <div className="container">
        <div className="row">
          {categoryData.lenght !== 0 &&
            categoryData.map((prod) => {
              return (
                <div className="col-3" key={prod.id}>
                  <Product product={prod} showButton={true}></Product>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default SpecifiedCategory;
