import React from "react";
import { SITE_DATA } from "../data/siteData.js";
import DogCard from "../components/DogCard.jsx";
import ImageGrid from "../components/ImageGrid.jsx";

function fmtDate(iso){
  if(!iso) return "";
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString(undefined,{year:"numeric",month:"long",day:"numeric"});
}

export default function Studs({ route, go, onImage }) {
  const studs = SITE_DATA.ownedStuds;

  if (route.startsWith("/studs/")) {
    const id = route.split("/")[2];
    const dog = studs.find(s=>s.id===id);
    if(!dog) return <div className="container">Not found.</div>;

    return (
      <div className="container">
        <div className="grid">
          <div style={{ gridColumn:"span 5" }}>
            <div className="card">
              <img className="thumb" src={dog.hero} alt={dog.name} style={{ cursor:"pointer" }} onClick={()=>onImage(dog.hero)} />
              <div className="pad">
                <div style={{ fontSize:20, fontWeight:900 }}>{dog.name}</div>
                <small style={{ color:"var(--muted)" }}>{dog.breed} • {dog.class} • {dog.registry}</small>
                <div style={{ marginTop:10 }} className="badge">Owned & Standing Stud</div>
              </div>
            </div>
          </div>
          <div style={{ gridColumn:"span 7" }}>
            <div className="card"><div className="pad">
              <div className="kv">
                <div><b>DOB:</b> {fmtDate(dog.dob)}</div>
                <div><b>Color:</b> {dog.color}</div>
                <div><b>Height:</b> {dog.height}</div>
                <div><b>Weight:</b> {dog.weight}</div>
                <div><b>Owner:</b> {dog.owner}</div>
                <div><b>Stud Fee:</b> {dog.studFee}</div>
              </div>
              {dog.dna ? (
                <>
                  <hr />
                  <div className="badge">DNA</div>
                  <div style={{ marginTop:12 }} className="card">
                    <img style={{ width:"100%", height:"auto", display:"block", cursor:"pointer" }} src={dog.dna} alt="DNA" onClick={()=>onImage(dog.dna)} />
                  </div>
                </>
              ) : null}
              <hr />
              <div className="badge">Gallery</div>
              <ImageGrid items={dog.gallery} onImage={onImage} />
            </div></div>
          </div>
        </div>
        <div className="section"><button className="btn" onClick={()=>go("/studs")}>← Back</button></div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="section"><h2>Studs (Owned)</h2><p style={{ color:"var(--muted)" }}>Turbo is currently the only open, owned stud.</p></div>
      <div className="grid">
        {studs.map(s=>(
          <div key={s.id} style={{ gridColumn:"span 4" }}>
            <DogCard dog={s} onOpen={()=>go(`/studs/${s.id}`)} onImage={onImage} />
          </div>
        ))}
      </div>
    </div>
  );
}
