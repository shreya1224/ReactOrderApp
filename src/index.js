import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddCustomer from "./components/AddCustomer";
import Customer from "./components/Customer";
import CustomerList from "./components/CustomerList";
import NotFound from "./components/NotFound";
import AddProduct from "./components/AddProduct";
import ProductList from "./components/ProductList";
import Admin from "./components/Admin";
import {
  Navigation,
  Footer,
  Home,
  About,
  Contact,
  Blog,
  Posts,
  Post,
} from "./components";
import WomenStore from "./components/WomenStore";
import MenStore from "./components/MenStore";
import Accessories from "./components/Accessories";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="/store/women" element={<WomenStore />} />
      <Route path="/store/men" element={<MenStore />} />
      <Route path="/store/accessories" element={<Accessories />} />
      <Route path="/admin" element={<Admin />} />
      {/* <Route path="/customers" element={<Customer />}> */}
      <Route exact path="/custlist" element={<CustomerList />} />
      <Route path="/addcust" element={<AddCustomer />} />
      <Route path="/customers/edit/:id" element={<AddCustomer />} />
      <Route path="/*" element={<NotFound />} />
      {/* </Route> */}

      {/* <Route path="/products" element={<Product />}> */}
      <Route exact path="/prodlist" element={<ProductList />} />
      <Route path="/addprod" element={<AddProduct />} />
      <Route path="/products/edit/:id" element={<AddProduct />} />
      <Route path="/*" element={<NotFound />} />
      {/* </Route> */}

      {/* <Route path="/get/products" element={<FetchProduct/>}/>
      <Route path="/save/product" element={<SaveProduct/>}/> */}
      <Route path="/blog" element={<Blog />}>
        <Route path="" element={<Posts />} />
        <Route path=":postSlug" element={<Post />} />
      </Route>
    </Routes>

    <Footer />
  </Router>,

  document.getElementById("root")
);

// serviceWorker.unregister();
