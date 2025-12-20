import React, { useState } from "react";
import { SITE_DATA } from "../data/siteData.js";

export default function Nav({ go }) {
  const { brand } = SITE_DATA;
  const [open, setOpen] = useState(false);

  const navigate = (path) => {
    setOpen(false);
    go(path);
  };

  return (
    <div className="nav">
      <div className="nav-inner">
        {/* BRAND */}
        <a
          className="brand"
          href="#/"
          onClick={() => navigate("/")}
        >
          <img
            src="/assets/brand/logo.png"
            alt="Bold Heart Bullies logo"
            style={{ height: "80px", width: "auto" }}
          />
          <span>{brand.name}</span>
        </a>

        {/* DESKTOP LINKS */}
        <div className="links desktop">
          <a onClick={() => navigate("/puppies")}>Available Puppies</a>
          <a onClick={() => navigate("/breedings")}>Breedings</a>
          <a onClick={() => navigate("/dams")}>Dams</a>
          <a onClick={() => navigate("/studs")}>Studs (Owned)</a>
          <a onClick={() => navigate("/past-litters")}>Past Litters</a>
          <a onClick={() => navigate("/contracts")}>Contracts</a>
          <a onClick={() => navigate("/contact")}>Contact</a>
          <a onClick={() => navigate("/privacy")}>Privacy</a>
          <a onClick={() => navigate("/terms")}>Terms</a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
          aria-label="Open menu"
        >
          ☰
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="mobile-menu">
          <a onClick={() => navigate("/puppies")}>Available Puppies</a>
          <a onClick={() => navigate("/breedings")}>Breedings</a>
          <a onClick={() => navigate("/dams")}>Dams</a>
          <a onClick={() => navigate("/studs")}>Studs (Owned)</a>
          <a onClick={() => navigate("/past-litters")}>Past Litters</a>
          <a onClick={() => navigate("/contracts")}>Contracts</a>
          <a onClick={() => navigate("/contact")}>Contact</a>
          <a onClick={() => navigate("/privacy")}>Privacy</a>
          <a onClick={() => navigate("/terms")}>Terms</a>
        </div>
      )}
    </div>
  );
}
