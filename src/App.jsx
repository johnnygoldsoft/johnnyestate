import React from "react";

import "./index.css";
import { About } from "./pages/about";
import Testimonial from "./pages/Testimonial";
import Projet from "./pages/Projet";
import Contact from "./pages/Contact";
import { ToastContainer } from "react-toastify";
import Footer from "./pages/Footer";
import Header from "./pages/Header";

export default function App() {
  return (
    <div className="w-full overflow-hidden">
      <ToastContainer />
      <Header />
      <About />
      <Projet />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}
