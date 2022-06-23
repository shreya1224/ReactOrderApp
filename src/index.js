import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
