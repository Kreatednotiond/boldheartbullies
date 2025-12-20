import React from "react";
import { SITE_DATA } from "../data/siteData.js";
import ImageGrid from "../components/ImageGrid.jsx";
export default function PastLitters({ onImage }) {
  const dams = SITE_DATA.dams.filter(d=>d.pastLitter);
  return (
    <div className="container">
      <div className="section"><h2>Past Litters</h2></div>
      {dams.map(d=>(
        <div className="card" key={d.id} style={{ marginTop:14 }}>
          <div className="pad">
            <div style={{ fontWeight:900 }}>{d.pastLitter.title}</div>

            {d.pastLitter.heroes && (
              <div className="row" style={{ marginTop: 12 }}>
                {d.pastLitter.heroes.map((img, i) => (
                  <img
                  key={i}
                  src={img}
                  alt="Parent"
                  className="thumb"
                  style={{
                    height: 220,
                    borderRadius: 14,
                    flex: 1,
                    objectFit: "cover"
                  }}
                />
              ))}
            </div>
          )}
            <p style={{ color:"var(--muted)", lineHeight:1.7 }}>
              Litter size: {d.pastLitter.count} ({d.pastLitter.males} males, {d.pastLitter.females} females)
            </p>
            <ImageGrid items={d.pastLitter.gallery} onImage={onImage} />
          </div>
        </div>
      ))}
    </div>
  );
}
