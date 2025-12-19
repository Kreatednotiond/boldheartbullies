import React from "react";
import { SITE_DATA } from "../data/siteData.js";
export default function Puppies() {
  const pups = SITE_DATA.puppies || [];
  return (
    <div className="container">
      <div className="section">
        <h2>Available Puppies</h2>
        <p style={{ color: "var(--muted)" }}>No puppies listed as available right now.</p>
      </div>
      {!pups.length ? (
        <div className="card"><div className="pad" style={{ color:"var(--muted)", lineHeight:1.7 }}>
          Check back soon — or visit the Breedings page for upcoming litters.
        </div></div>
      ) : null}
    </div>
  );
}
