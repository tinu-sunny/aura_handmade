import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPageUser from "./user/Pages/LandingPageUser";
import AboutPage from "./user/Pages/AboutPage";
import ContactPage from "./user/Pages/ContactPage";
import AdminLandingPage from "./Admin/pages/AdminLandingPage";
import AdminOrderViewPage from "./Admin/pages/AdminOrderViewPage";
import AdminProductsManagePage from "./Admin/pages/AdminProductsManagePage";

function App() {
  return (
    <>
      <Routes>
        {/* user paths */}

        <Route path="" element={<LandingPageUser />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* admin paths */}
        <Route path="/admin" element={<AdminLandingPage/>}/>
        <Route path="/admin-order-view-page" element={<AdminOrderViewPage/>}/>
        <Route path="/admin-product-manage-page" element={<AdminProductsManagePage/>}/>

      </Routes>
      
    </>
  );
}

export default App;
