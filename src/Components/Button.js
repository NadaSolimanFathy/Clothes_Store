import { Link } from "react-router-dom";
import SpecifiedCategory from "./SpecifiedCategory";

function Button(props) {
  const { btnText, btnRoute } = props;

  console.log(btnText);
  console.log("Routeeeeee ", btnRoute);
  return (
    <>
      <Link
        className="btn btn-light m-5"
        to={`product/category/${btnRoute}`}

        // <SpecifiedCategory
        //   FullPath={FullPath}
        //   Heading={btnText}
        // ></SpecifiedCategory>
        // onClick={() => console.log("nada click")}
      >
        {btnText}
      </Link>
    </>
  );
}
export default Button;
