import React from "react";
import { SITE_DATA } from "../data/siteData.js";

export default function Nav({ go }) {
  const { brand } = SITE_DATA;
  const [open, setOpen] = React.useState(false);

  const navTo = (e, path) => {
    e.preventDefault();
    setOpen(false);
    go(path);
  };

  return (
    <div className="nav">
      <div className="nav-inner">
        <a className="brand" href="#/" onClick={(e) => navTo(e, "/")}>
          <img
            src="/assets/brand/logo.png"
            alt="Bold Heart Bullies logo"
            style={{ height: "80px", width: "auto" }}
          />
          <span>{brand.name}</span>
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          className="menu-btn"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open ? "true" : "false"}
        >
          {open ? "✕" : "☰"}
        </button>

        {/* LINKS */}
        <div className={`links ${open ? "open" : ""}`}>
          <a href="#/puppies" onClick={(e) => navTo(e, "/puppies")}>
            Available Puppies
          </a>
          <a href="#/breedings" onClick={(e) => navTo(e, "/breedings")}>
            Breedings
          </a>
          <a href="#/dams" onClick={(e) => navTo(e, "/dams")}>
            Dams
          </a>
          <a href="#/studs" onClick={(e) => navTo(e, "/studs")}>
            Studs (Owned)
          </a>
          <a href="#/past-litters" onClick={(e) => navTo(e, "/past-litters")}>
            Past Litters
          </a>
          <a href="#/contracts" onClick={(e) => navTo(e, "/contracts")}>
            Contracts
          </a>
          <a href="#/contact" onClick={(e) => navTo(e, "/contact")}>
            Contact
          </a>
          <a href="#/privacy" onClick={(e) => navTo(e, "/privacy")}>
            Privacy
          </a>
          <a href="#/terms" onClick={(e) => navTo(e, "/terms")}>
            Terms
          </a>
        </div>
      </div>

      {/* Click outside to close menu (mobile) */}
      {open && <div className="menu-backdrop" onClick={() => setOpen(false)} />}
    </div>
  );
}
