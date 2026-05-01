import React from "react";
import { SITE_DATA } from "../data/siteData.js";
import ImageGrid from "../components/ImageGrid.jsx";

function fmtDate(value) {
  if (!value) return "";

  if (Array.isArray(value)) {
    return value.map(fmtDate).join(", ");
  }

  if (typeof value === "string" && /[a-zA-Z]/.test(value)) return value;
  if (typeof value === "string" && value.includes("/")) return value;

  const d = new Date(String(value) + "T00:00:00");
  if (isNaN(d.getTime())) return String(value);

  return d.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
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
      type === "confirmed" ? "Confirmed" : type === "pending" ? "Pending" : "Planned";

    const datesText =
      b.dates?.length
        ? fmtDate(b.dates)
        : b.dueDates
        ? fmtDate(b.dueDates)
        : b.timing
        ? b.timing
        : "";

    const dateLabel =
      type === "pending" ? "AI Dates:" : type === "confirmed" ? "Due Date:" : "Timing:";

    const reserveSubject =
      b.reserveSubject || `Reserve a Pick - ${dam.name} x ${b.stud}`;

    const reserveBody = `Hello Bold Heart Bullies,

I am interested in reserving a pick from the ${dam.name} x ${b.stud} litter.

Please let me know what picks are currently available and how to submit a deposit.

Thank you.`;

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
                <b style={{ color: "var(--text)" }}>{dateLabel}</b>{" "}
                {datesText || "—"}
                <br />
                <b style={{ color: "var(--text)" }}>Status:</b> {b.status || title}

                {b.picks ? (
                  <>
                    <br />
                    <b style={{ color: "var(--text)" }}>Picks:</b> {b.picks}
                  </>
                ) : null}

                {b.depositNote ? (
                  <>
                    <br />
                    <b style={{ color: "var(--text)" }}>Deposit Info:</b>{" "}
                    {b.depositNote}
                  </>
                ) : null}
              </>
            ) : (
              <>
                <b style={{ color: "var(--text)" }}>{dateLabel}</b>{" "}
                {datesText || "—"}

                {b.note ? (
                  <>
                    <br />
                    <b style={{ color: "var(--text)" }}>Notes:</b> {b.note}
                  </>
                ) : null}
              </>
            )}
          </p>

          {b.reserveSubject || b.picks || b.depositNote ? (
            <button
              className="btn primary"
              style={{ marginTop: 10 }}
              onClick={() =>
                (window.location.href = `mailto:${
                  SITE_DATA.brand.email
                }?subject=${encodeURIComponent(
                  reserveSubject
                )}&body=${encodeURIComponent(reserveBody)}`)
              }
            >
              Reserve a Pick
            </button>
          ) : null}

          {(b.studHero || b.damHero || dam.hero) ? (
            <>
              <div className="badge" style={{ marginTop: 14 }}>
                Dam & Stud
              </div>

              <ImageGrid
                items={[b.damHero || dam.hero, b.studHero].filter(Boolean)}
                onImage={onImage}
              />

              {b.studHero ? (
                <div style={{ marginTop: 10 }} className="badge">
                  Outside stud — not owned by BHB
                </div>
              ) : null}
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
        <p style={{ color: "var(--muted)" }}>
          Pending, confirmed, and planned breedings.
        </p>
      </div>

      <div className="section">
        <h2>Confirmed</h2>
        {!confirmed.length ? (
          <p style={{ color: "var(--muted)" }}>
            No confirmed breedings listed yet.
          </p>
        ) : null}
        {confirmed.map((dam) => (
          <BreedingCard key={dam.id} dam={dam} type="confirmed" />
        ))}
      </div>

      <div className="section">
        <h2>Pending</h2>
        {!pending.length ? (
          <p style={{ color: "var(--muted)" }}>
            No pending breedings listed right now.
          </p>
        ) : null}
        {pending.map((dam) => (
          <BreedingCard key={dam.id} dam={dam} type="pending" />
        ))}
      </div>

      <div className="section">
        <h2>Planned</h2>
        {!planned.length ? (
          <p style={{ color: "var(--muted)" }}>
            No planned breedings listed right now.
          </p>
        ) : null}
        {planned.map((dam) => (
          <BreedingCard key={dam.id} dam={dam} type="planned" />
        ))}
      </div>
    </div>
  );
}
