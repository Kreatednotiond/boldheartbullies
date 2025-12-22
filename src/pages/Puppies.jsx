import React from "react";
import { SITE_DATA } from "../data/siteData.js";
import ImageGrid from "../components/ImageGrid.jsx";

export default function Puppies({ onImage }) {
  const pups = SITE_DATA.puppies || [];

  return (
    <div className="container">
      <div className="section">
        <h2>Available Puppies</h2>

        {pups.length === 0 && (
          <p style={{ color: "var(--muted)" }}>
            No puppies listed as available right now.
          </p>
        )}
      </div>

      {pups.map((pup) => (
        <div className="card" key={pup.id} style={{ marginBottom: 20 }}>
          <div className="pad">
            <h3>{pup.title}</h3>

            <p style={{ color: "var(--muted)" }}>
              Status: <b>{pup.status}</b>
              {pup.price && <> · Price: <b>{pup.price}</b></>}
            </p>

            <p>{pup.description}</p>

            {/* 🐶 PUPPY PHOTOS */}
            {pup.gallery && (
              <ImageGrid items={pup.gallery} onImage={onImage} />
            )}

            {/* 🧬 PARENTS */}
            {pup.parents && (
              <>
                <hr />
                <div className="badge">Parents</div>

                <div className="row" style={{ gap: 16, marginTop: 12 }}>
                  {/* SIRE */}
                  {pup.parents.sire && (
                    <div style={{ flex: 1 }}>
                      <b>Sire: {pup.parents.sire.name}</b>
                      <img
                        src={pup.parents.sire.hero}
                        alt={pup.parents.sire.name}
                        className="thumb"
                        style={{
                          width: "100%",
                          height: 220,
                          objectFit: "cover",
                          borderRadius: 14,
                          marginTop: 6,
                          cursor: "pointer",
                        }}
                        onClick={() => onImage?.(pup.parents.sire.hero)}
                      />
                    </div>
                  )}

                  {/* DAM */}
                  {pup.parents.dam && (
                    <div style={{ flex: 1 }}>
                      <b>Dam: {pup.parents.dam.name}</b>
                      <img
                        src={pup.parents.dam.hero}
                        alt={pup.parents.dam.name}
                        className="thumb"
                        style={{
                          width: "100%",
                          height: 220,
                          objectFit: "cover",
                          borderRadius: 14,
                          marginTop: 6,
                          cursor: "pointer",
                        }}
                        onClick={() => onImage?.(pup.parents.dam.hero)}
                      />
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
