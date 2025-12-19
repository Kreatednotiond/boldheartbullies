import React from "react";
import { SITE_DATA } from "../data/siteData.js";
import DogCard from "../components/DogCard.jsx";

export default function Home({ go, onImage }) {
  const { brand, ownedStuds, dams } = SITE_DATA;
  const featuredStud = ownedStuds[0];
  const featuredDams = dams.slice(0, 3);

  return (
    <div className="container">
      <div className="hero">
        <div className="hero-bg" style={{ backgroundImage: "url(/assets/brand/hero_home.png)" }} />
        <div className="hero-inner">
          <h1>{brand.name}</h1>
          <p>
            {brand.tagline} • {brand.location} •{" "}
            <a href={brand.instagram} target="_blank" rel="noreferrer">Instagram</a>
          </p>
          <div className="row" style={{ marginTop: 16 }}>
            <button className="btn primary" onClick={() => go("/puppies")}>Available Puppies</button>
            <button className="btn" onClick={() => go("/breedings")}>Breedings</button>
            <button className="btn" onClick={() => go("/dams")}>Dams</button>
            <button className="btn" onClick={() => go("/studs")}>Studs (Owned)</button>
            <button className="btn" onClick={() => go("/contact")}>Contact</button>
          </div>
        </div>
      </div>

      <div className="section">
        <h2>Featured Stud</h2>
        <div className="grid">
          <div style={{ gridColumn: "span 12" }}>
            <DogCard dog={featuredStud} onOpen={() => go(`/studs/${featuredStud.id}`)} onImage={onImage} />
          </div>
        </div>
      </div>

      <div className="section">
        <h2>Featured Dams</h2>
        <div className="grid">
          {featuredDams.map((d) => (
            <div key={d.id} style={{ gridColumn: "span 4" }}>
              <DogCard dog={d} onOpen={() => go(`/dams/${d.id}`)} onImage={onImage} />
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <div className="card">
          <div className="pad">
            <div className="badge">Ownership & transparency</div>
            <p style={{ margin: "10px 0 0", color: "var(--muted)", lineHeight: 1.6 }}>
              Bold Heart Bullies proudly owns and stands <b style={{ color: "var(--text)" }}>Spectrum’s Turbo</b>.
              All other studs referenced on this website are outside studs used for past or planned breedings and are <b style={{ color: "var(--text)" }}>not owned</b> by Bold Heart Bullies.
            </p>
          </div>
        </div>
      </div>

      <div className="footer">
        <div><b>{brand.name}</b> — {brand.location}</div>
        <div>Phone: {brand.phone} • Email: {brand.email}</div>
      </div>
    </div>
  );
}
