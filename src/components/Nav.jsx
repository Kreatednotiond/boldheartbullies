import React from "react";
import { SITE_DATA } from "../data/siteData.js";
export default function Nav({ go }) {
  const { brand } = SITE_DATA;
  return (
    <div className="nav">
      <div className="nav-inner">
        <a className="brand" href="#/" onClick={() => go("/")}>
          <img src="/assets/brand/logo.png" alt="Bold Heart Bullies logo" style={{ height: "80px", width: "auto" }} />
          <span>{brand.name}</span>
        </a>
        <div className="links">
          <a href="#/puppies" onClick={() => go("/puppies")}>Available Puppies</a>
          <a href="#/breedings" onClick={() => go("/breedings")}>Breedings</a>
          <a href="#/dams" onClick={() => go("/dams")}>Dams</a>
          <a href="#/studs" onClick={() => go("/studs")}>Studs (Owned)</a>
          <a href="#/past-litters" onClick={() => go("/past-litters")}>Past Litters</a>
          <a href="#/contracts" onClick={() => go("/contracts")}>Contracts</a>
          <a href="#/contact" onClick={() => go("/contact")}>Contact</a>
          <a href="#/privacy" onClick={() => go("/privacy")}>Privacy</a>
          <a href="#/terms" onClick={() => go("/terms")}>Terms</a>
        </div>
      </div>
    </div>
  );
}
