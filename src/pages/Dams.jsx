import React from "react";
import { SITE_DATA } from "../data/siteData.js";
import DogCard from "../components/DogCard.jsx";
import ImageGrid from "../components/ImageGrid.jsx";

function fmtDate(iso) {
  if (!iso) return "";

  const d = new Date(iso + "T00:00:00");

  return d.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function Dams({ route, go, onImage }) {
  const dams = SITE_DATA.dams || [];

  // =========================================================
  // DETAIL VIEW
  // =========================================================
  if (route.startsWith("/dams/")) {
    const id = route.split("/")[2];
    const dog = dams.find((d) => d.id === id);

    if (!dog) {
      return <div className="container">Not found.</div>;
    }

    // Normalize past litter hero images
    const pastLitterHeroes = (() => {
      const pl = dog.pastLitter;

      if (!pl) return [];

      if (
        Array.isArray(pl.heroes) &&
        pl.heroes.filter(Boolean).length
      ) {
        return pl.heroes.filter(Boolean);
      }

      if (
        Array.isArray(pl.hero) &&
        pl.hero.filter(Boolean).length
      ) {
        return pl.hero.filter(Boolean);
      }

      if (
        typeof pl.studHero === "string" &&
        pl.studHero.trim()
      ) {
        return [pl.studHero.trim()];
      }

      return [];
    })();

    return (
      <div className="container">
        <div className="grid dams-grid">

          {/* =================================================
              LEFT SIDE — DAM HERO CARD
          ================================================= */}
          <div style={{ gridColumn: "span 5" }}>
            <div className="card">
              <img
                className="thumb"
                src={dog.hero}
                alt={dog.name}
                style={{
                  cursor: "pointer",
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                  display: "block",
                }}
                onClick={() => onImage?.(dog.hero)}
                onError={() =>
                  console.warn(
                    "Dog hero failed:",
                    dog.hero
                  )
                }
              />

              <div className="pad">
                <div
                  style={{
                    fontSize: 26,
                    fontWeight: 900,
                  }}
                >
                  {dog.name}
                </div>

                <small
                  style={{
                    color: "var(--muted)",
                  }}
                >
                  {dog.breed}
                  {dog.class
                    ? ` • ${dog.class}`
                    : ""}
                  {dog.registry
                    ? ` • ${dog.registry}`
                    : ""}
                </small>

                {dog.status ? (
                  <div
                    style={{ marginTop: 10 }}
                    className="badge"
                  >
                    {dog.status}
                  </div>
                ) : null}
              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT SIDE — DAM INFORMATION
          ================================================= */}
          <div style={{ gridColumn: "span 7" }}>
            <div className="card">
              <div className="pad">

                {/* BASIC INFORMATION */}
                <div className="kv">

                  {dog.dob ? (
                    <div>
                      <b>DOB:</b>{" "}
                      {fmtDate(dog.dob)}
                    </div>
                  ) : null}

                  {dog.color ? (
                    <div>
                      <b>Color:</b>{" "}
                      {dog.color}
                    </div>
                  ) : null}

                  {dog.owner ? (
                    <div>
                      <b>Owner:</b>{" "}
                      {dog.owner}
                    </div>
                  ) : null}

                </div>

                {/* =================================================
                    NOTES
                ================================================= */}
                {dog.note ? (
                  <>
                    <hr />

                    <div className="badge">
                      Notes
                    </div>

                    <p
                      style={{
                        color: "var(--muted)",
                        lineHeight: 1.7,
                        marginTop: 10,
                      }}
                    >
                      {dog.note}
                    </p>
                  </>
                ) : null}


                {/* =================================================
                    CONFIRMED OR PENDING BREEDING
                ================================================= */}
                {dog.confirmedBreeding ||
                dog.pendingBreeding ? (
                  <>
                    <hr />

                    <div className="badge">
                      {dog.confirmedBreeding
                        ? "Confirmed Breeding"
                        : "Pending Breeding"}
                    </div>

                    {(() => {
                      const breeding =
                        dog.confirmedBreeding ||
                        dog.pendingBreeding;

                      return (
                        <>
                          <p
                            style={{
                              color:
                                "var(--muted)",
                              lineHeight: 1.7,
                              marginTop: 10,
                            }}
                          >

                            {breeding.stud ? (
                              <>
                                <b
                                  style={{
                                    color:
                                      "var(--text)",
                                  }}
                                >
                                  Stud:
                                </b>{" "}
                                {breeding.stud}
                                <br />
                              </>
                            ) : null}

                            {breeding.method ? (
                              <>
                                <b
                                  style={{
                                    color:
                                      "var(--text)",
                                  }}
                                >
                                  Method:
                                </b>{" "}
                                {breeding.method}
                                <br />
                              </>
                            ) : null}

                            {breeding.dates
                              ?.length ? (
                              <>
                                <b
                                  style={{
                                    color:
                                      "var(--text)",
                                  }}
                                >
                                  Breeding Dates:
                                </b>{" "}
                                {breeding.dates
                                  .map(fmtDate)
                                  .join(", ")}
                                <br />
                              </>
                            ) : null}

                            {breeding.dueDates
                              ?.length ? (
                              <>
                                <b
                                  style={{
                                    color:
                                      "var(--text)",
                                  }}
                                >
                                  Due Date:
                                </b>{" "}
                                {breeding.dueDates
                                  .map(fmtDate)
                                  .join(", ")}
                                <br />
                              </>
                            ) : null}

                            {breeding.status ? (
                              <>
                                <b
                                  style={{
                                    color:
                                      "var(--text)",
                                  }}
                                >
                                  Status:
                                </b>{" "}
                                {breeding.status}
                              </>
                            ) : null}

                          </p>


                          {/* STUD PHOTO */}
                          {breeding.studHero ? (
                            <>
                              <div
                                className="badge"
                                style={{
                                  marginTop: 10,
                                }}
                              >
                                Stud
                              </div>

                              <ImageGrid
                                items={[
                                  breeding.studHero,
                                ]}
                                onImage={
                                  onImage
                                }
                              />

                              <div
                                className="badge"
                                style={{
                                  marginTop: 10,
                                }}
                              >
                                Outside stud —
                                not owned by BHB
                              </div>
                            </>
                          ) : null}


                          {/* MATING SIMULATOR */}
                          {breeding.matingSimulator ? (
                            <>
                              <div
                                className="badge"
                                style={{
                                  marginTop: 18,
                                }}
                              >
                                Mating Simulator
                              </div>

                              <div
                                className="card"
                                style={{
                                  marginTop: 10,
                                  overflow:
                                    "hidden",
                                }}
                              >
                                <img
                                  src={
                                    breeding.matingSimulator
                                  }
                                  alt={`${dog.name} mating simulator`}
                                  style={{
                                    width: "100%",
                                    height: "auto",
                                    display:
                                      "block",
                                    cursor:
                                      "pointer",
                                  }}
                                  onClick={() =>
                                    onImage?.(
                                      breeding.matingSimulator
                                    )
                                  }
                                  onError={() =>
                                    console.warn(
                                      "Mating simulator failed:",
                                      breeding.matingSimulator
                                    )
                                  }
                                />
                              </div>
                            </>
                          ) : null}
                        </>
                      );
                    })()}
                  </>
                ) : null}


                {/* =================================================
                    PLANNED BREEDING
                ================================================= */}
                {dog.plannedBreeding ? (
                  <>
                    <hr />

                    <div className="badge">
                      Planned Breeding
                    </div>

                    <p
                      style={{
                        color: "var(--muted)",
                        lineHeight: 1.7,
                        marginTop: 10,
                      }}
                    >

                      {dog.plannedBreeding
                        .stud ? (
                        <>
                          <b
                            style={{
                              color:
                                "var(--text)",
                            }}
                          >
                            Stud:
                          </b>{" "}
                          {
                            dog
                              .plannedBreeding
                              .stud
                          }
                          <br />
                        </>
                      ) : null}

                      {dog.plannedBreeding
                        .timing ? (
                        <>
                          <b
                            style={{
                              color:
                                "var(--text)",
                            }}
                          >
                            Timing:
                          </b>{" "}
                          {
                            dog
                              .plannedBreeding
                              .timing
                          }
                        </>
                      ) : null}

                      {dog.plannedBreeding
                        .note ? (
                        <>
                          <br />

                          <b
                            style={{
                              color:
                                "var(--text)",
                            }}
                          >
                            Notes:
                          </b>{" "}
                          {
                            dog
                              .plannedBreeding
                              .note
                          }
                        </>
                      ) : null}

                    </p>


                    {/* STUD PHOTO */}
                    {dog.plannedBreeding
                      .studHero ? (
                      <>
                        <div
                          className="badge"
                          style={{
                            marginTop: 10,
                          }}
                        >
                          Stud
                        </div>

                        <ImageGrid
                          items={[
                            dog
                              .plannedBreeding
                              .studHero,
                          ]}
                          onImage={onImage}
                        />

                        <div
                          className="badge"
                          style={{
                            marginTop: 10,
                          }}
                        >
                          Outside stud —
                          not owned by BHB
                        </div>
                      </>
                    ) : null}


                    {/* MATING SIMULATOR */}
                    {dog.plannedBreeding
                      .matingSimulator ? (
                      <>
                        <div
                          className="badge"
                          style={{
                            marginTop: 18,
                          }}
                        >
                          Mating Simulator
                        </div>

                        <div
                          className="card"
                          style={{
                            marginTop: 10,
                            overflow: "hidden",
                          }}
                        >
                          <img
                            src={
                              dog
                                .plannedBreeding
                                .matingSimulator
                            }
                            alt={`${dog.name} planned mating simulator`}
                            style={{
                              width: "100%",
                              height: "auto",
                              display: "block",
                              cursor:
                                "pointer",
                            }}
                            onClick={() =>
                              onImage?.(
                                dog
                                  .plannedBreeding
                                  .matingSimulator
                              )
                            }
                            onError={() =>
                              console.warn(
                                "Planned mating simulator failed:",
                                dog
                                  .plannedBreeding
                                  .matingSimulator
                              )
                            }
                          />
                        </div>
                      </>
                    ) : null}
                  </>
                ) : null}


                {/* =================================================
                    DNA / PEDIGREE
                ================================================= */}
                {dog.dna ? (
                  <>
                    <hr />

                    <div className="badge">
                      DNA / Pedigree
                    </div>

                    <div
                      style={{
                        marginTop: 12,
                      }}
                      className="card"
                    >
                      <img
                        src={dog.dna}
                        alt={`${dog.name} DNA`}
                        style={{
                          width: "100%",
                          height: "auto",
                          display: "block",
                          cursor: "pointer",
                        }}
                        onClick={() =>
                          onImage?.(dog.dna)
                        }
                        onError={() =>
                          console.warn(
                            "DNA image failed:",
                            dog.dna
                          )
                        }
                      />
                    </div>
                  </>
                ) : null}


                {/* =================================================
                    GALLERY
                ================================================= */}
                {dog.gallery?.length ? (
                  <>
                    <hr />

                    <div className="badge">
                      Gallery
                    </div>

                    <ImageGrid
                      items={dog.gallery}
                      onImage={onImage}
                    />
                  </>
                ) : null}


                {/* =================================================
                    PAST LITTER
                ================================================= */}
                {dog.pastLitter ? (
                  <>
                    <hr />

                    <div className="badge">
                      Past Litter
                    </div>

                    <p
                      style={{
                        color: "var(--muted)",
                        lineHeight: 1.7,
                        marginTop: 10,
                      }}
                    >

                      {dog.pastLitter.title ? (
                        <>
                          <span
                            style={{
                              color:
                                "var(--text)",
                            }}
                          >
                            Pairing:
                          </span>{" "}
                          {
                            dog.pastLitter
                              .title
                          }
                          <br />
                        </>
                      ) : null}

                      {dog.pastLitter
                        .count !==
                      undefined ? (
                        <>
                          <span
                            style={{
                              color:
                                "var(--text)",
                            }}
                          >
                            Litter size:
                          </span>{" "}
                          {
                            dog.pastLitter
                              .count
                          }

                          {dog.pastLitter
                            .males !==
                            undefined &&
                          dog.pastLitter
                            .females !==
                            undefined
                            ? ` (${dog.pastLitter.males} males, ${dog.pastLitter.females} females)`
                            : ""}
                        </>
                      ) : null}

                    </p>


                    {/* PAIRING PHOTOS */}
                    {pastLitterHeroes.length ? (
                      <>
                        <div
                          className="badge"
                          style={{
                            marginTop: 10,
                          }}
                        >
                          Pairing Photos
                        </div>

                        <ImageGrid
                          items={
                            pastLitterHeroes
                          }
                          onImage={onImage}
                        />
                      </>
                    ) : null}


                    {/* PUPPY GALLERY */}
                    {dog.pastLitter.gallery
                      ?.length ? (
                      <>
                        <div
                          className="badge"
                          style={{
                            marginTop: 10,
                          }}
                        >
                          Puppy Gallery
                        </div>

                        <ImageGrid
                          items={
                            dog.pastLitter
                              .gallery
                          }
                          onImage={onImage}
                        />
                      </>
                    ) : null}

                  </>
                ) : null}


                {/* BACK BUTTON */}
                <div className="section">
                  <button
                    className="btn"
                    onClick={() =>
                      go("/dams")
                    }
                  >
                    ← Back
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }


  // =========================================================
  // LIST VIEW
  // =========================================================

  const bullies = dams.filter(
    (d) => d.breed === "American Bully"
  );

  const frenchies = dams.filter(
    (d) => d.breed === "French Bulldog"
  );

  return (
    <div className="container">

      <div className="section">
        <h2>Dams</h2>

        <p
          style={{
            color: "var(--muted)",
          }}
        >
          American Bullies and French Bulldogs.
        </p>
      </div>


      {/* =====================================================
          AMERICAN BULLY DAMS
      ===================================================== */}
      <div className="section">
        <h2>American Bully Dams</h2>
      </div>

      <div
        className="dams-grid"
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 20,
        }}
      >
        {bullies.map((d) => (
          <div
            key={d.id}
            className="dam-list-item"
            style={{
              minWidth: 0,
              width: "100%",
            }}
          >
            <DogCard
              dog={d}
              onOpen={() =>
                go(`/dams/${d.id}`)
              }
              onImage={onImage}
            />
          </div>
        ))}
      </div>


      {/* =====================================================
          FRENCH BULLDOG DAMS
      ===================================================== */}
      <div className="section">
        <h2>French Bulldog Dams</h2>
      </div>

      <div
        className="dams-grid"
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 20,
        }}
      >
        {frenchies.map((d) => (
          <div
            key={d.id}
            className="dam-list-item"
            style={{
              minWidth: 0,
              width: "100%",
            }}
          >
            <DogCard
              dog={d}
              onOpen={() =>
                go(`/dams/${d.id}`)
              }
              onImage={onImage}
            />
          </div>
        ))}
      </div>

    </div>
  );
}