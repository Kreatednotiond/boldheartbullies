import React from "react";
import { SITE_DATA } from "../data/siteData.js";
import ImageGrid from "../components/ImageGrid.jsx";

export default function Puppies({ onImage }) {
  const pups = SITE_DATA.puppies || [];

  return (
    <div className="container">
      <div className="section">
        <h2>Available Puppies</h2>

        {!pups.length ? (
          <p style={{ color: "var(--muted)" }}>
            No puppies listed as available right now.
          </p>
        ) : null}
      </div>

      {pups.map((p) => {
        const reserveSubject =
          p.reserveSubject || `Reserve a Puppy - ${p.title}`;

        const reserveBody = `Hello Bold Heart Bullies,

I am interested in reserving an available puppy from the ${p.title} litter.

Please let me know which puppies are currently available and how to submit a deposit.

Thank you.`;

        return (
          <div className="card" key={p.id} style={{ marginTop: 14 }}>
            <div className="pad">
              <div style={{ fontWeight: 900, fontSize: 22 }}>
                {p.title}
              </div>

              <p
                style={{
                  color: "var(--muted)",
                  lineHeight: 1.7,
                  marginTop: 6,
                }}
              >
                Status: {p.status}

                {p.price ? (
                  <>
                    {" "}
                    · Price: {p.price}
                  </>
                ) : null}

                <br />
                {p.description}
              </p>

              {/* Puppy gallery */}
              {p.gallery?.length ? (
                <ImageGrid items={p.gallery} onImage={onImage} />
              ) : null}

              {/* Available puppies and pricing */}
              {p.available?.length ? (
                <div style={{ marginTop: 14 }}>
                  <div className="badge" style={{ marginBottom: 10 }}>
                    Available Puppies
                  </div>

                  <div className="card">
                    <div className="pad">
                      {p.available.map((puppy) => (
                        <div
                          key={puppy.id}
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            gap: 12,
                            padding: "10px 0",
                            borderBottom:
                              "1px solid rgba(255,255,255,.12)",
                          }}
                        >
                          <span>
                            {puppy.sex} — {puppy.status}
                          </span>

                          <strong>{puppy.price}</strong>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : null}

              {/* Deposit information */}
              {p.depositNote ? (
                <p
                  style={{
                    color: "var(--muted)",
                    lineHeight: 1.7,
                    marginTop: 14,
                  }}
                >
                  <b style={{ color: "var(--text)" }}>
                    Deposit Information:
                  </b>{" "}
                  {p.depositNote}
                </p>
              ) : null}

              {/* Reserve button */}
              <button
                className="btn primary"
                style={{ marginTop: 10 }}
                onClick={() => {
                  window.location.href = `mailto:${
                    SITE_DATA.brand.email
                  }?subject=${encodeURIComponent(
                    reserveSubject
                  )}&body=${encodeURIComponent(reserveBody)}`;
                }}
              >
                Reserve a Puppy
              </button>

              {/* Parents */}
              {p.parents ? (
                <div style={{ marginTop: 18 }}>
                  <div className="badge" style={{ marginBottom: 10 }}>
                    Parents
                  </div>

                  <div className="row" style={{ gap: 12 }}>
                    {p.parents.sire?.hero ? (
                      <div style={{ flex: 1 }}>
                        <div
                          style={{
                            fontWeight: 700,
                            marginBottom: 6,
                          }}
                        >
                          Sire: {p.parents.sire.name}
                        </div>

                        <img
                          src={p.parents.sire.hero}
                          alt={`Sire: ${p.parents.sire.name}`}
                          style={{
                            width: "100%",
                            height: 220,
                            objectFit: "cover",
                            borderRadius: 14,
                            cursor: "pointer",
                          }}
                          onClick={() =>
                            onImage?.(p.parents.sire.hero)
                          }
                        />
                      </div>
                    ) : null}

                    {p.parents.dam?.hero ? (
                      <div style={{ flex: 1 }}>
                        <div
                          style={{
                            fontWeight: 700,
                            marginBottom: 6,
                          }}
                        >
                          Dam: {p.parents.dam.name}
                        </div>

                        <img
                          src={p.parents.dam.hero}
                          alt={`Dam: ${p.parents.dam.name}`}
                          style={{
                            width: "100%",
                            height: 220,
                            objectFit: "cover",
                            borderRadius: 14,
                            cursor: "pointer",
                          }}
                          onClick={() =>
                            onImage?.(p.parents.dam.hero)
                          }
                        />
                      </div>
                    ) : null}
                  </div>

                  {p.dna?.hero ? (
                    <div style={{ marginTop: 12 }}>
                      <div
                        style={{
                          fontWeight: 700,
                          marginBottom: 6,
                        }}
                      >
                        {p.dna.name || "DNA"}
                      </div>

                      <img
                        src={p.dna.hero}
                        alt={p.dna.name || "DNA"}
                        style={{
                          width: "100%",
                          maxWidth: 520,
                          borderRadius: 14,
                          cursor: "pointer",
                        }}
                        onClick={() => onImage?.(p.dna.hero)}
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
