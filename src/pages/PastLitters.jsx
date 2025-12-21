import React from "react";
import { SITE_DATA } from "../data/siteData.js";
import ImageGrid from "../components/ImageGrid.jsx";

export default function PastLitters({ onImage }) {
  const dams = SITE_DATA.dams.filter((d) => d.pastLitter);

  return (
    <div className="container">
      <div className="section">
        <h2>Past Litters</h2>
      </div>

      {dams.map((d) => {
        const litter = d.pastLitter;

        return (
          <div className="card" key={d.id} style={{ marginTop: 14 }}>
            <div className="pad">
              <div style={{ fontWeight: 900 }}>{litter.title}</div>

              {/* HERO / PARENTS (PAIRING) */}
              {Array.isArray(litter.heroes) && litter.heroes.length > 0 ? (
                <>
                  <div className="badge" style={{ marginTop: 12 }}>
                    Pairing
                  </div>
                  <ImageGrid items={litter.heroes} onImage={onImage} />
                </>
              ) : null}

              <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>
                Litter size: {litter.count} ({litter.males} males, {litter.females} females)
              </p>

              {/* PUPPY GALLERY */}
              <ImageGrid items={litter.gallery} onImage={onImage} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

