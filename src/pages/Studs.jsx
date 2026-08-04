import React from "react";
import { SITE_DATA } from "../data/siteData.js";
import ImageGrid from "../components/ImageGrid.jsx";

export default function Studs({ onImage }) {
  const studs = SITE_DATA.ownedStuds || [];

  return (
    <div className="container">
      <div className="section">
        <h2>Studs (Owned)</h2>

        {!studs.length ? (
          <p style={{ color: "var(--muted)" }}>
            No studs currently available.
          </p>
        ) : null}
      </div>

      {studs.map((dog) => (
        <div className="card" key={dog.id} style={{ marginTop: 14 }}>
          <div className="pad">
            <div style={{ fontSize: 22, fontWeight: 900 }}>
              {dog.name}
            </div>

            <p
              style={{
                color: "var(--muted)",
                lineHeight: 1.7,
                marginTop: 6,
              }}
            >
              {dog.breed}
              {dog.class ? ` • ${dog.class}` : ""}
              {dog.registry ? ` • ${dog.registry}` : ""}

              {dog.color ? (
                <>
                  <br />
                  <b style={{ color: "var(--text)" }}>Color:</b> {dog.color}
                </>
              ) : null}

              {dog.height ? (
                <>
                  <br />
                  <b style={{ color: "var(--text)" }}>Height:</b> {dog.height}
                </>
              ) : null}

              {dog.weight ? (
                <>
                  <br />
                  <b style={{ color: "var(--text)" }}>Weight:</b> {dog.weight}
                </>
              ) : null}

              {dog.studFee ? (
                <>
                  <br />
                  <b style={{ color: "var(--text)" }}>Stud Fee:</b> {dog.studFee}
                </>
              ) : null}

              {dog.status ? (
                <>
                  <br />
                  <b style={{ color: "var(--text)" }}>Status:</b> {dog.status}
                </>
              ) : null}
            </p>

            {dog.hero ? (
              <div style={{ marginTop: 12 }}>
                <img
                  src={dog.hero}
                  alt={dog.name}
                  style={{
                    width: "100%",
                    maxHeight: 520,
                    objectFit: "cover",
                    borderRadius: 14,
                    cursor: "pointer",
                  }}
                  onClick={() => onImage?.(dog.hero)}
                />
              </div>
            ) : null}

            {dog.gallery?.length ? (
              <div style={{ marginTop: 14 }}>
                <div className="badge" style={{ marginBottom: 10 }}>
                  Gallery
                </div>

                <ImageGrid
                  items={dog.gallery}
                  onImage={onImage}
                />
              </div>
            ) : null}

            {dog.dna ? (
              <div style={{ marginTop: 18 }}>
                <div className="badge" style={{ marginBottom: 10 }}>
                  DNA / Pedigree
                </div>

                <img
                  src={dog.dna}
                  alt={`${dog.name} DNA`}
                  style={{
                    width: "100%",
                    maxWidth: 620,
                    borderRadius: 14,
                    cursor: "pointer",
                  }}
                  onClick={() => onImage?.(dog.dna)}
                />
              </div>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}