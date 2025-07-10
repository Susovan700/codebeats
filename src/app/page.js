"use client";
import { useState } from "react";
import Hero from "./components/hero/page";
import Navbar from "./components/navbar/page";
import Sidebar from "./components/sidebar/page";
import Footer from "./components/footer/page"; 
import "./page.css";

export default function Home() {
  const [section, setSection] = useState("home");

  return (
    <div className="home-container">
      <Sidebar onSelect={setSection} />
      <div className="main-content">
        <Navbar />
        {section === "home" && <Hero/>}
        {section === "search" && <div><h1>Search Page</h1></div>}
        {section === "library" && <div><h1>Your Library</h1></div>}
      </div>
      <div className="home-footer">
        <Footer />
      </div>
    </div>
  );
}
