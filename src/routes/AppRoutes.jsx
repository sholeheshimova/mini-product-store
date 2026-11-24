import { Routes, Route } from "react-router-dom";
import Home from "../features/pages/Home";
import About from "../features/pages/About";
import ProductPage from "../features/pages/ProductsPage";
import ProductDetails from "../features/pages/ProductDetailsPage";

function AppRoutes() {
    return (
     <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/:id" element={<ProductDetails />} />
     </Routes>
    )
}

export default AppRoutes