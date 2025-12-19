import React from "react";
import { SITE_DATA } from "../data/siteData.js";
export default function Contact() {
  const { brand } = SITE_DATA;
  return (
    <div className="container">
      <div className="section"><h2>Contact</h2></div>
      <div className="card"><div className="pad">
        <div className="kv">
          <div><b>Email:</b> {brand.email}</div>
          <div><b>Phone:</b> {brand.phone}</div>
          <div><b>Location:</b> {brand.location}</div>
          <div><b>Instagram:</b> <a href={brand.instagram} target="_blank" rel="noreferrer">boldheart_bullies</a></div>
        </div>
        <hr />
        <div className="badge">Inquiry</div>
        <p style={{ color:"var(--muted)", lineHeight:1.7 }}>
          Click to email: <a href={`mailto:${brand.email}?subject=BHB%20Inquiry`}>{brand.email}</a>
        </p>
      </div></div>
    </div>
  );
}
