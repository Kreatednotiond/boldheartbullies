import React from "react";
import { SITE_DATA } from "../data/siteData.js";

export default function Nav({ go }) {
  const { brand } = SITE_DATA;
  const [open, setOpen] = React.useState(false);

  const navTo = (path) => {
    setOpen(false);
    go(path);
  };

  return (
    <div className="nav">
      <div className="nav-inner">
        <a className="brand" href="#/" onClick={() => navTo("/")}>
          <img
            src="/assets/brand/logo.png"
            alt="Bold Heart Bullies logo"
            style={{ height: "80px", width: "auto" }}
          />
          <span>{brand.name}</span>
        </a>

        {/* MOBILE MENU BUTTON */}
        <button className="menu-btn" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          {open ? "✕" : "☰"}
        </button>

        {/* LINKS */}
        <div className={`links ${open ? "open" : ""}`}>
          <a href="#/puppies" onClick={() => navTo("/puppies")}>Available Puppies</a>
          <a href="#/breedings" onClick={() => navTo("/breedings")}>Breedings</a>
          <a href="#/dams" onClick={() => navTo("/dams")}>Dams</a>
          <a href="#/studs" onClick={() => navTo("/studs")}>Studs (Owned)</a>
          <a href="#/past-litters" onClick={() => navTo("/past-litters")}>Past Litters</a>
          <a href="#/contracts" onClick={() => navTo("/contracts")}>Contracts</a>
          <a href="#/contact" onClick={() => navTo("/contact")}>Contact</a>
          <a href="#/privacy" onClick={() => navTo("/privacy")}>Privacy</a>
          <a href="#/terms" onClick={() => navTo("/terms")}>Terms</a>
        </div>
      </div>
    </div>
  );
}
