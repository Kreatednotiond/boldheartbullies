import React from "react";
import { SITE_DATA } from "../data/siteData.js";
export default function Terms() {
  const { brand } = SITE_DATA;
  return (
    <div className="container">
      <div className="section"><h2>Terms of Use</h2></div>
      <div className="card"><div className="pad" style={{ color:"var(--muted)", lineHeight:1.7 }}>
        <p>All photos, logos, and written content are owned by <b style={{ color:"var(--text)" }}>{brand.name}</b> unless otherwise noted.</p>
        <p>Outside studs referenced for planned or past breedings are not owned by Bold Heart Bullies and do not imply availability for stud services.</p>
        <p><b style={{ color:"var(--text)" }}>Contact:</b> {brand.email}</p>
      </div></div>
    </div>
  );
}
