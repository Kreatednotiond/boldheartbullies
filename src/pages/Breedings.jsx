import React from "react";
import { SITE_DATA } from "../data/siteData.js";
import ImageGrid from "../components/ImageGrid.jsx";

function fmtDate(iso) {
  if (!iso) return "";
  // If already looks like "Due on 2/14/2026" or "February 14, 2026", just return it
  if (typeof iso === "string" && /[a-zA-Z]/.test(iso)) return iso;
  if (typeof iso === "string" && iso.includes("/")) return iso;

  // ISO "YYYY-MM-DD"
  const d = new Date(String(iso) + "T00:00:00");
  if (isNaN(d.getTime())) return String(iso);
  return d.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
}

export default function Breedings({ onImage }) {
  const dams = SITE_DATA.dams || [];

  const confirmed = dams.filter((d) => d.confirmedBreeding);
  const pending = dams.filter((d) => d.pendingBreeding);
  const planned = dams.filter((d) => d.plannedBreeding);

  const BreedingCard = ({ dam, type }) => {
    const b =
      type === "confirmed"
        ? dam.confirmedBreeding
        : type === "pending"
        ? dam.pendingBreeding
        : dam.plannedBreeding;

    if (!b) return null;

    const title =
      type === "confirmed"
        ? "Confirmed"
        : type === "pending"
        ? "Pending"
        : "Planned";

    const datesText =
      Array.isArray(b.dates) && b.dates.length
        ? b.dates.map(fmtDate).join(", ")
        : b.timing
        ? b.timing
        : "";

    return (
      <div className="card" style={{ marginTop: 14 }}>
        <div className="pad">
          <div style={{ fontSize: 18, fontWeight: 900 }}>
            {dam.name} × {b.stud}
          </div>

          <p style={{ color: "var(--muted)", lineHeight: 1.7, marginTop: 10 }}>
            {type !== "planned" ? (
              <>
                <b style={{ color: "var(--text)" }}>Method:</b> {b.method || "—"}
                <br />
                <b style={{ color: "var(--text)" }}>Due Date:</b> {datesText || "—"}
                <br />
                <b style={{ color: "var(--text)" }}>Status:</b> {b.status || title}
              </>
            ) : (
              <>
                <b style={{ color: "var(--text)" }}>Timing:</b> {datesText || "—"}
                {b.note ? (
                  <>
                    <br />
                    <b style={{ color: "var(--text)" }}>Notes:</b> {b.note}
                  </>
                ) : null}
              </>
            )}
          </p>

          {b.studHero ? (
            <>
              <div className="badge" style={{ marginTop: 10 }}>
                Stud
              </div>
              <ImageGrid items={[b.studHero]} onImage={onImage} />
              <div style={{ marginTop: 10 }} className="badge">
                Outside stud — not owned by BHB
              </div>
            </>
          ) : null}
        </div>
      </div>
    );
  };

  return (
    <div className="container">
      <div className="section">
        <h2>Breedings</h2>
        <p style={{ color: "var(--muted)" }}>Pending, confirmed, and planned breedings.</p>
      </div>

      <div className="section">
        <h2>Confirmed</h2>
        {!confirmed.length ? (
          <p style={{ color: "var(--muted)" }}>No confirmed breedings listed yet.</p>
        ) : null}
        {confirmed.map((dam) => (
          <BreedingCard key={dam.id} dam={dam} type="confirmed" />
        ))}
      </div>

      <div className="section">
        <h2>Pending</h2>
        {!pending.length ? (
          <p style={{ color: "var(--muted)" }}>No pending breedings listed right now.</p>
        ) : null}
        {pending.map((dam) => (
          <BreedingCard key={dam.id} dam={dam} type="pending" />
        ))}
      </div>

      <div className="section">
        <h2>Planned</h2>
        {!planned.length ? (
          <p style={{ color: "var(--muted)" }}>No planned breedings listed right now.</p>
        ) : null}
        {planned.map((dam) => (
          <BreedingCard key={dam.id} dam={dam} type="planned" />
        ))}
      </div>
    </div>
  );
}
