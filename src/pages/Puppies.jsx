import React, { useState } from "react";
import { SITE_DATA } from "../data/siteData.js";
import ImageGrid from "../components/ImageGrid.jsx";

function getPuppyAge(birthDate) {
  if (!birthDate) return "";

  const birth = new Date(`${birthDate}T00:00:00`);
  const today = new Date();

  if (Number.isNaN(birth.getTime())) return "";

  const diffMs = today.getTime() - birth.getTime();
  const totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (totalDays < 0) return "Coming Soon";

  if (totalDays === 0) return "Born Today";

  if (totalDays < 7) {
    return `${totalDays} day${totalDays === 1 ? "" : "s"} old`;
  }

  const weeks = Math.floor(totalDays / 7);

  if (weeks < 12) {
    return `${weeks} week${weeks === 1 ? "" : "s"} old`;
  }

  const months = Math.floor(totalDays / 30.44);

  return `${months} month${months === 1 ? "" : "s"} old`;
}

export default function Puppies({ onImage }) {
  const allPups = SITE_DATA.puppies || [];
  const [openLitters, setOpenLitters] = useState({});

  /*
    Only show litters that still have at least one puppy
    that is not marked SOLD.
  */
  const pups = allPups.filter((litter) =>
    litter.available?.some(
      (puppy) => String(puppy.status || "").toLowerCase() !== "sold"
    )
  );

  const toggleLitter = (id) => {
    setOpenLitters((current) => ({
      ...current,
      [id]: !current[id],
    }));
  };

  return (
    <div className="container">
      <div className="section">
        <h2>Available Puppies</h2>

        {/* NO PUPPIES AVAILABLE */}
        {!pups.length ? (
          <div
            className="card"
            style={{
              marginTop: 10,
              textAlign: "center",
            }}
          >
            <div
              className="pad"
              style={{
                padding: "34px 22px",
              }}
            >
              <div
                className="badge"
                style={{
                  marginBottom: 14,
                }}
              >
                Current Availability
              </div>

              <div
                style={{
                  fontSize: 28,
                  fontWeight: 900,
                  marginBottom: 12,
                }}
              >
                No Puppies Currently Available
              </div>

              <p
                style={{
                  color: "var(--muted)",
                  lineHeight: 1.7,
                  maxWidth: 650,
                  margin: "0 auto",
                }}
              >
                Our current puppies have all found their homes! We do not have
                any puppies available at this time. Please check back soon for
                upcoming litters and future availability from Bold Heart
                Bullies.
              </p>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  gap: 12,
                  marginTop: 22,
                }}
              >
                <a
                  href="/breedings"
                  className="btn primary"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  View Upcoming Breedings
                </a>

                <a
                  href="/contact"
                  className="btn"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  Contact Bold Heart Bullies
                </a>
              </div>
            </div>
          </div>
        ) : null}
      </div>

      {pups.map((p) => {
        const featuredImage = p.featuredImage;
        const isOpen = !!openLitters[p.id];
        const age = getPuppyAge(p.birthDate);

        const reserveSubject =
          p.reserveSubject || `Reserve a Puppy - ${p.title}`;

        const reserveBody = `Hello Bold Heart Bullies,

I am interested in reserving an available puppy from the ${p.title} litter.

Please let me know which puppies are currently available and how to submit a deposit.

Thank you.`;

        const litterStatus = String(p.status || "").toLowerCase();

        const litterBadgeBackground = litterStatus.includes("sold")
          ? "#4b1f1f"
          : litterStatus.includes("limited")
          ? "#4a3a12"
          : litterStatus.includes("reserved")
          ? "#4a3a12"
          : "#173d2a";

        const litterBadgeColor = litterStatus.includes("sold")
          ? "#ffb4b4"
          : litterStatus.includes("limited")
          ? "#ffe08a"
          : litterStatus.includes("reserved")
          ? "#ffe08a"
          : "#9ff0be";

        return (
          <div className="card" key={p.id} style={{ marginTop: 18 }}>
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
                  alt={`${p.title} featured`}
                  style={{
                    width: "100%",
                    height: 380,
                    objectFit: "cover",
                    display: "block",
                    cursor: "pointer",
                  }}
                  onClick={() => onImage?.(featuredImage)}
                />

                {/* LITTER STATUS BADGE */}
                {p.status ? (
                  <div
                    style={{
                      position: "absolute",
                      top: 14,
                      right: 14,
                      padding: "7px 11px",
                      borderRadius: 999,
                      fontSize: 12,
                      fontWeight: 900,
                      background: litterBadgeBackground,
                      color: litterBadgeColor,
                      border: "1px solid rgba(255,255,255,.12)",
                      boxShadow: "0 6px 18px rgba(0,0,0,.28)",
                      zIndex: 2,
                    }}
                  >
                    {p.status}
                  </div>
                ) : null}

                {/* TITLE OVERLAY */}
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
                    {p.title}
                  </div>

                  <div
                    style={{
                      marginTop: 5,
                      color: "rgba(255,255,255,.82)",
                    }}
                  >
                    {p.status}
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
                {/* LITTER */}
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
                    Litter
                  </div>

                  <div style={{ fontWeight: 800 }}>{p.status}</div>
                </div>

                {/* PRICING */}
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
                    Pricing
                  </div>

                  <div style={{ fontWeight: 800 }}>
                    {p.price || "Contact for pricing"}
                  </div>
                </div>

                {/* AGE */}
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
                    Age
                  </div>

                  <div style={{ fontWeight: 800 }}>{age || "—"}</div>
                </div>
              </div>

              {/* DESCRIPTION */}
              {p.description ? (
                <p
                  style={{
                    color: "var(--muted)",
                    lineHeight: 1.7,
                    marginTop: 14,
                  }}
                >
                  {p.description}
                </p>
              ) : null}

              {/* VIEW LITTER BUTTON */}
              <button
                className="btn"
                style={{
                  width: "100%",
                  marginTop: 10,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontWeight: 800,
                }}
                onClick={() => toggleLitter(p.id)}
              >
                <span>
                  {isOpen ? "Hide Litter Details" : "View Litter"}
                </span>

                <span>{isOpen ? "↑" : "→"}</span>
              </button>

              {/* COLLAPSIBLE DETAILS */}
              {isOpen ? (
                <div style={{ marginTop: 18 }}>
                  {/* AVAILABLE PUPPIES */}
                  {p.available?.length ? (
                    <div>
                      <div className="badge" style={{ marginBottom: 10 }}>
                        Puppy Availability
                      </div>

                      <div className="card">
                        <div className="pad">
                          {p.available.map((puppy) => {
                            const puppyStatus = String(
                              puppy.status || ""
                            ).toLowerCase();

                            const statusBackground =
                              puppyStatus === "sold"
                                ? "#4b1f1f"
                                : puppyStatus === "reserved"
                                ? "#4a3a12"
                                : "#173d2a";

                            const statusColor =
                              puppyStatus === "sold"
                                ? "#ffb4b4"
                                : puppyStatus === "reserved"
                                ? "#ffe08a"
                                : "#9ff0be";

                            return (
                              <div
                                key={puppy.id}
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                  gap: 14,
                                  padding: "14px",
                                  marginBottom: 12,
                                  borderRadius: 14,
                                  background: "#0f1720",
                                  border:
                                    "1px solid rgba(255,255,255,.08)",
                                }}
                              >
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 12,
                                    minWidth: 0,
                                  }}
                                >
                                  {puppy.photo ? (
                                    <img
                                      src={puppy.photo}
                                      alt={puppy.name || puppy.sex}
                                      style={{
                                        width: 82,
                                        height: 82,
                                        objectFit: "cover",
                                        borderRadius: 12,
                                        flexShrink: 0,
                                        cursor: "pointer",
                                      }}
                                      onClick={() =>
                                        onImage?.(puppy.photo)
                                      }
                                    />
                                  ) : null}

                                  <div>
                                    <div
                                      style={{
                                        fontWeight: 800,
                                        fontSize: 16,
                                      }}
                                    >
                                      {puppy.name || puppy.sex}
                                    </div>

                                    <div
                                      style={{
                                        fontSize: 13,
                                        color: "var(--muted)",
                                        marginTop: 2,
                                      }}
                                    >
                                      {puppy.sex}
                                    </div>

                                    <div
                                      style={{
                                        marginTop: 6,
                                        display: "inline-block",
                                        padding: "4px 9px",
                                        borderRadius: 999,
                                        fontSize: 12,
                                        fontWeight: 800,
                                        background: statusBackground,
                                        color: statusColor,
                                        border:
                                          "1px solid rgba(255,255,255,.08)",
                                      }}
                                    >
                                      {puppy.status}
                                    </div>
                                  </div>
                                </div>

                                <div
                                  style={{
                                    textAlign: "right",
                                    fontWeight: 900,
                                    fontSize: 17,
                                    flexShrink: 0,
                                  }}
                                >
                                  {puppy.price}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  ) : null}

                  {/* DEPOSIT INFORMATION */}
                  {p.depositNote ? (
                    <p
                      style={{
                        color: "var(--muted)",
                        lineHeight: 1.7,
                        marginTop: 16,
                      }}
                    >
                      <b style={{ color: "var(--text)" }}>
                        Deposit Information:
                      </b>{" "}
                      {p.depositNote}
                    </p>
                  ) : null}

                  {/* RESERVE BUTTON */}
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

                  {/* PEDIGREE */}
                  {p.pedigree?.photos?.length ? (
                    <div style={{ marginTop: 20 }}>
                      <div className="badge" style={{ marginBottom: 10 }}>
                        {p.pedigree.name || "Pedigree"}
                      </div>

                      <ImageGrid
                        items={p.pedigree.photos}
                        onImage={onImage}
                      />
                    </div>
                  ) : null}

                  {/* PARENTS */}
                  {p.parents ? (
                    <div style={{ marginTop: 20 }}>
                      <div className="badge" style={{ marginBottom: 10 }}>
                        Parents
                      </div>

                      <div className="row" style={{ gap: 12 }}>
                        {/* SIRE */}
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

                        {/* DAM */}
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


