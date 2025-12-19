import React from "react";
import { SITE_DATA } from "../data/siteData.js";
export default function Privacy() {
  const { brand } = SITE_DATA;
  return (
    <div className="container">
      <div className="section"><h2>Privacy Policy</h2></div>
      <div className="card"><div className="pad" style={{ color:"var(--muted)", lineHeight:1.7 }}>
        <p><b style={{ color:"var(--text)" }}>{brand.name}</b> respects your privacy.</p>
        <p>We only use information you voluntarily provide (like emailing us) to respond to you.</p>
        <p><b style={{ color:"var(--text)" }}>Contact:</b> {brand.email}</p>
      </div></div>
    </div>
  );
}
