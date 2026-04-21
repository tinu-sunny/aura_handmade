import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPageUser from "./user/Pages/LandingPageUser";
import AboutPage from "./user/Pages/AboutPage";
import ContactPage from "./user/Pages/ContactPage";
import AdminLandingPage from "./Admin/pages/AdminLandingPage";
import AdminOrderViewPage from "./Admin/pages/AdminOrderViewPage";
import AdminProductsManagePage from "./Admin/pages/AdminProductsManagePage";
import Collections from "./user/Pages/Collections";
import ProductViewPage from "./user/Pages/ProductViewPage";
import CategoryProductView from "./user/Pages/CategoryProductView";
import CustomerDetailsViewPage from "./Admin/pages/CustomerDetailsViewPage";
import EnquiryViewPage from "./Admin/pages/EnquiryViewPage";
import PageNotFound from "./Pages/PageNotFound";


function App() {
  return (
    <>
      <Routes>
        {/* user paths */}

        <Route path="" element={<LandingPageUser />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/product-view/:id" element={<ProductViewPage />} />
        <Route
          path="/category-product-view/:id"
          element={<CategoryProductView />}
        />

        {/* admin paths */}
        <Route path="/admin" element={<AdminLandingPage />} />
        <Route path="/admin-order-view-page" element={<AdminOrderViewPage />} />
        <Route path="/admin-product-manage-page" element={<AdminProductsManagePage />}/>
        <Route path="/admin-customer-view-page" element={<CustomerDetailsViewPage />}/>
        <Route path="/admin-enquiry-view-page" element={<EnquiryViewPage/>}/>
     
     
     
     
     <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </>
  );
}

export default App;
