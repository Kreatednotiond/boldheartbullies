import React, { useState } from "react";
import { SITE_DATA } from "../data/siteData.js";
import ImageGrid from "../components/ImageGrid.jsx";

export default function PastLitters({ onImage }) {
  const dams = SITE_DATA.dams.filter((d) => d.pastLitter);
  const [openLitters, setOpenLitters] = useState({});

  const toggleLitter = (id) => {
    setOpenLitters((current) => ({
      ...current,
      [id]: !current[id],
    }));
  };

  return (
    <div className="container">
      <div className="section">
        <h2>Past Litters</h2>
        <p style={{ color: "var(--muted)" }}>
          View previous Bold Heart Bullies litters and pairing information.
        </p>
      </div>

      {dams.map((d) => {
        const litter = d.pastLitter;
        const isOpen = !!openLitters[d.id];

        const featuredImage =
          litter.featuredImage ||
          litter.heroes?.[0] ||
          litter.gallery?.[0];

        return (
          <div className="card" key={d.id} style={{ marginTop: 18 }}>
            {/* FEATURED VISUAL */}
            {featuredImage ? (
              <div
                style={{
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <img
                  src={featuredImage}
                  alt={`${litter.title} featured`}
                  style={{
                    width: "100%",
                    height: 380,
                    objectFit: "cover",
                    display: "block",
                    cursor: "pointer",
                  }}
                  onClick={() => onImage?.(featuredImage)}
                />

                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    padding: "70px 22px 20px",
                    background:
                      "linear-gradient(to top, rgba(0,0,0,.95), rgba(0,0,0,0))",
                  }}
                >
                  <div
                    style={{
                      fontSize: 27,
                      fontWeight: 900,
                      color: "#fff",
                    }}
                  >
                    {litter.title}
                  </div>

                  <div
                    style={{
                      marginTop: 5,
                      color: "rgba(255,255,255,.82)",
                    }}
                  >
                    Past Litter
                  </div>
                </div>
              </div>
            ) : null}

            <div className="pad">
              {/* LITTER INFO */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                  gap: 10,
                  marginTop: 4,
                }}
              >
                <div
                  style={{
                    padding: "12px 14px",
                    borderRadius: 12,
                    background: "#0f1720",
                    border: "1px solid rgba(255,255,255,.08)",
                  }}
                >
                  <div
                    style={{
                      fontSize: 12,
                      color: "var(--muted)",
                      marginBottom: 4,
                    }}
                  >
                    Litter Size
                  </div>

                  <div style={{ fontWeight: 800 }}>
                    {litter.count ?? "—"}
                  </div>
                </div>

                <div
                  style={{
                    padding: "12px 14px",
                    borderRadius: 12,
                    background: "#0f1720",
                    border: "1px solid rgba(255,255,255,.08)",
                  }}
                >
                  <div
                    style={{
                      fontSize: 12,
                      color: "var(--muted)",
                      marginBottom: 4,
                    }}
                  >
                    Males
                  </div>

                  <div style={{ fontWeight: 800 }}>
                    {litter.males ?? "—"}
                  </div>
                </div>

                <div
                  style={{
                    padding: "12px 14px",
                    borderRadius: 12,
                    background: "#0f1720",
                    border: "1px solid rgba(255,255,255,.08)",
                  }}
                >
                  <div
                    style={{
                      fontSize: 12,
                      color: "var(--muted)",
                      marginBottom: 4,
                    }}
                  >
                    Females
                  </div>

                  <div style={{ fontWeight: 800 }}>
                    {litter.females ?? "—"}
                  </div>
                </div>
              </div>

              {/* VIEW LITTER BUTTON */}
              <button
                className="btn"
                style={{
                  width: "100%",
                  marginTop: 14,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontWeight: 800,
                }}
                onClick={() => toggleLitter(d.id)}
              >
                <span>
                  {isOpen ? "Hide Litter Details" : "View Litter"}
                </span>

                <span>{isOpen ? "↑" : "→"}</span>
              </button>

              {/* EXPANDABLE DETAILS */}
              {isOpen ? (
                <div style={{ marginTop: 18 }}>
                  {/* PAIRING */}
                  {Array.isArray(litter.heroes) &&
                  litter.heroes.length > 0 ? (
                    <div>
                      <div
                        className="badge"
                        style={{ marginBottom: 10 }}
                      >
                        Dam & Stud
                      </div>

                      <ImageGrid
                        items={litter.heroes}
                        onImage={onImage}
                      />
                    </div>
                  ) : null}

                  {/* PUPPY GALLERY */}
                  {litter.gallery?.length ? (
                    <div style={{ marginTop: 20 }}>
                      <div
                        className="badge"
                        style={{ marginBottom: 10 }}
                      >
                        Puppy Gallery
                      </div>

                      <ImageGrid
                        items={litter.gallery}
                        onImage={onImage}
                      />
                    </div>
                  ) : null}
                </div>
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}

