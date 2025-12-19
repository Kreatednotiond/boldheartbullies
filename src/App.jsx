import React, { useMemo, useState, useEffect } from "react";
import { SITE_DATA } from "./data.js";

/* ---------------- helpers ---------------- */

function fmtDate(iso) {
  if (!iso) return "";
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/* ---------------- layout components ---------------- */

function Nav({ route, setRoute }) {
  const { brand } = SITE_DATA;

  return (
    <div className="nav">
      <div className="nav-inner">
        <a className="brand" href="#/" onClick={() => setRoute("/")}>
          <img src="./assets/logo.png" alt="Bold Heart Bullies logo" />
          <span>{brand.name}</span>
        </a>

        <div className="links">
          <a href="#/studs" onClick={() => setRoute("/studs")}>Studs</a>
          <a href="#/dams" onClick={() => setRoute("/dams")}>Dams</a>
          <a href="#/breedings" onClick={() => setRoute("/breedings")}>Breedings</a>
          <a href="#/past-litters" onClick={() => setRoute("/past-litters")}>Past Litters</a>
          <a href="#/contracts" onClick={() => setRoute("/contracts")}>Contracts</a>
          <a href="#/contact" onClick={() => setRoute("/contact")}>Contact</a>
          <a href="#/privacy" onClick={() => setRoute("/privacy")}>Privacy</a>
          <a href="#/terms" onClick={() => setRoute("/terms")}>Terms</a>
        </div>
      </div>
    </div>
  );
}

function Card({ children }) {
  return <div className="card">{children}</div>;
}

/* ---------------- cards ---------------- */

function DogCard({ dog, onOpen, setLightboxSrc }) {
  return (
    <Card>
      <img
        className="thumb"
        src={dog.hero}
        alt={dog.name}
        style={{ cursor: "pointer" }}
        onClick={() => setLightboxSrc(dog.hero)}
      />

      <div className="pad">
        <div className="row" style={{ justifyContent: "space-between" }}>
          <div>
            <div style={{ fontWeight: 800 }}>{dog.name}</div>
            <small>
              {dog.breed}
              {dog.class ? ` • ${dog.class}` : ""}
              {dog.registry ? ` • ${dog.registry}` : ""}
            </small>
          </div>

          <button className="btn" onClick={onOpen}>View</button>
        </div>

        <div style={{ marginTop: 10 }} className="badge">
          {dog.status || "Profile"}
        </div>
      </div>
    </Card>
  );
}

/* ---------------- pages ---------------- */

function Home({ setRoute, setLightboxSrc }) {
  const { brand, ownedStuds, dams } = SITE_DATA;

  return (
    <div className="container">
      <div className="hero">
        <h1>{brand.name}</h1>
        <p>
          {brand.tagline} • {brand.location} •{" "}
          <a href={brand.instagram} target="_blank" rel="noreferrer">Instagram</a>
        </p>

        <div className="row" style={{ marginTop: 16 }}>
          <button className="btn primary" onClick={() => setRoute("/studs")}>View Stud</button>
          <button className="btn" onClick={() => setRoute("/dams")}>View Dams</button>
          <button className="btn" onClick={() => setRoute("/breedings")}>Upcoming Breedings</button>
          <button className="btn" onClick={() => setRoute("/contact")}>Contact</button>
        </div>
      </div>

      <div className="section">
        <h2>Featured Stud</h2>
        <DogCard
          dog={{
            ...ownedStuds[0],
            registry: ownedStuds[0].registries?.join(" / "),
          }}
          onOpen={() => setRoute(`/studs/${ownedStuds[0].id}`)}
          setLightboxSrc={setLightboxSrc}
        />
      </div>
    </div>
  );
}

/* ---------------- APP ROOT ---------------- */

export default function App() {
  /* ✅ THESE WERE MISSING (CAUSE OF BLACK SCREEN) */
  const [page, setPage] = useState(
    window.location.hash.replace("#", "") || "/"
  );

  const [lightboxSrc, setLightboxSrc] = useState(null);

  useEffect(() => {
    const onHashChange = () =>
      setPage(window.location.hash.replace("#", "") || "/");
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <>
      <Nav route={page} setRoute={setPage} />

      {page === "/" && (
        <Home setRoute={setPage} setLightboxSrc={setLightboxSrc} />
      )}

      {/* 🔲 LIGHTBOX (GLOBAL, ONLY ONCE) */}
      {lightboxSrc && (
        <div
          onClick={() => setLightboxSrc(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
          }}
        >
          <img
            src={lightboxSrc}
            alt="Enlarged"
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "95vw",
              maxHeight: "90vh",
              borderRadius: 14,
            }}
          />

          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxSrc(null);
            }}
            style={{
              position: "fixed",
              top: 16,
              right: 16,
              fontSize: 28,
              background: "transparent",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
          >
            ×
          </button>
        </div>
      )}
    </>
  );
}
