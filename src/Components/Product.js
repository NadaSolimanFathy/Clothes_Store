import { Link, useLocation, useParams } from "react-router-dom";
// import ProductDetails from "./ProductDetails";
import "../Style/product.css";

function Product(props) {
  // const params = useParams();

  const { product, showButton, Category } = props;

  const location = useLocation();
  const { pathname } = location;
  console.log("location ", pathname);
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <img id="prod_img" src={product.image} alt="clothes" />

        {showButton && (
          <Link className="btn btn-primary" to={`product/${product.id}`}>
            See Details
          </Link>
        )}
        {pathname == `/product/category/${Category}/product/${product.id}` && (
          <Link
            className="btn btn-primary"
            to={`/product/category/${Category}`}
          >
            Back To List
          </Link>
        )}

        {pathname == `/product/${product.id}` && (
          <Link className="btn btn-primary" to={`/`}>
            Back To List
          </Link>
        )}
      </div>
    </div>
  );
}

export default Product;
