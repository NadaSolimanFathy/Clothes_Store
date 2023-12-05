import { Link, useParams } from "react-router-dom";
// import ProductDetails from "./ProductDetails";
import "../Style/product.css";

function Product(props) {
  // const params = useParams();

  const { product, showButton } = props;
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
      </div>
    </div>
  );
}

export default Product;
