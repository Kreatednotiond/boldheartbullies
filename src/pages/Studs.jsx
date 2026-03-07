import React from "react";
import { SITE_DATA } from "../data/siteData.js";
import ImageGrid from "../components/ImageGrid.jsx";

export default function Studs({ onImage }) {
  const studs = SITE_DATA.ownedStuds || [];

  return (
    <div className="container">
      <div className="section">
        <h2>Studs (Owned)</h2>
        {!studs.length && (
          <p style={{ color: "var(--muted)" }}>
            No studs currently available.
          </p>
        )}
      </div>

      {studs.map((dog) => (
        <div className="card" key={dog.id} style={{ marginTop: 14 }}>
          <div className="pad">
            <div style={{ fontWeight: 900 }}>{dog.name}</div>
            <p style={{ color: "var(--muted)", lineHeight: 1.7, marginTop: 6 }}>
              {dog.breed}
              {dog.class ? ` · ${dog.class}` : ""}
              {dog.registry ? ` · ${dog.registry}` : ""}
            </p>

            {dog.gallery?.length ? (
              <ImageGrid items={dog.gallery} onImage={onImage} />
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}