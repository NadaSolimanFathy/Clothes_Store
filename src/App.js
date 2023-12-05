import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Slider from "./Components/Slider";
import ProductsList from "./Components/ProductsList";
import { Routes, Route } from "react-router-dom";
import About from "./Components/About";
import ContactUS from "./Components/ContactUs";
import ProductDetails from "./Components/ProductDetails";
import SpecifiedCategory from "./Components/SpecifiedCategory";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <ProductsList />
            </>
          }
        />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<ContactUS />} />

        <Route path="product/:prodId" element={<ProductDetails />} />
        <Route
          path="product/category/:btnRoute"
          element={<SpecifiedCategory />}
        />
        <Route
          path="product/category/:btnRoute/product/:prodId"
          element={<ProductDetails />}
        />
      </Routes>
    </div>
  );
}

export default App;
