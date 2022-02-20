import React, { useState } from "react";
import Topbar from "./component/topbar/Topbar";
import Intro from "./component/intro/Intro";
import Protfolio from "./component/protfolio/Protfolio";
import Works from "./component/works/Works";
import Testimonials from "./component/testimonials/Testimonials";
import Contact from "./component/contact/Contact";
import "./app.scss";
import Menu from "./component/menu/Menu";

function App() {
  const [menuOpen, setMenuOpen] = useState(true)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Protfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>

    </div>
  );
}

export default App;
