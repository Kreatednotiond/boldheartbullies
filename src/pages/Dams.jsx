import React from "react";
import { SITE_DATA } from "../data/siteData.js";
import DogCard from "../components/DogCard.jsx";
import ImageGrid from "../components/ImageGrid.jsx";

function fmtDate(iso){
  if(!iso) return "";
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString(undefined,{year:"numeric",month:"long",day:"numeric"});
}

export default function Dams({ route, go, onImage }) {
  const dams = SITE_DATA.dams;

  if (route.startsWith("/dams/")) {
    const id = route.split("/")[2];
    const dog = dams.find(d=>d.id===id);
    if(!dog) return <div className="container">Not found.</div>;

    return (
      <div className="container">
        <div className="grid">
          <div style={{ gridColumn:"span 5" }}>
            <div className="card">
              <img className="thumb" src={dog.hero} alt={dog.name} style={{ cursor:"pointer" }} onClick={()=>onImage(dog.hero)} />
              <div className="pad">
                <div style={{ fontSize:20, fontWeight:900 }}>{dog.name}</div>
                <small style={{ color:"var(--muted)" }}>{dog.breed}{dog.class?` • ${dog.class}`:""}{dog.registry?` • ${dog.registry}`:""}</small>
                {dog.status ? <div style={{ marginTop:10 }} className="badge">{dog.status}</div> : null}
              </div>
            </div>
          </div>

          <div style={{ gridColumn:"span 7" }}>
            <div className="card"><div className="pad">
              <div className="kv">
                {dog.dob ? <div><b>DOB:</b> {fmtDate(dog.dob)}</div> : null}
                {dog.color ? <div><b>Color:</b> {dog.color}</div> : null}
                {dog.owner ? <div><b>Owner:</b> {dog.owner}</div> : null}
              </div>

              {dog.note ? (<><hr /><div className="badge">Notes</div><p style={{ color:"var(--muted)", lineHeight:1.7, marginTop:10 }}>{dog.note}</p></>) : null}

              {dog.pendingBreeding ? (
                <>
                  <hr /><div className="badge">Pending Breeding</div>
                  <p style={{ color:"var(--muted)", lineHeight:1.7, marginTop:10 }}>
                    <b style={{ color:"var(--text)" }}>Stud:</b> {dog.pendingBreeding.stud}<br/>
                    <b style={{ color:"var(--text)" }}>Method:</b> {dog.pendingBreeding.method}<br/>
                    <b style={{ color:"var(--text)" }}>Dates:</b> {dog.pendingBreeding.dates.map(fmtDate).join(", ")}<br/>
                    <b style={{ color:"var(--text)" }}>Status:</b> {dog.pendingBreeding.status}
                  </p>
                  {dog.pendingBreeding.studHero ? <ImageGrid items={[dog.pendingBreeding.studHero]} onImage={onImage} /> : null}
                  <div style={{ marginTop:10 }} className="badge">Outside stud — not owned by BHB</div>
                </>
              ) : null}

              {dog.plannedBreeding ? (
                <>
                  <hr /><div className="badge">Planned Breeding</div>
                  <p style={{ color:"var(--muted)", lineHeight:1.7, marginTop:10 }}>
                    <b style={{ color:"var(--text)" }}>Stud:</b> {dog.plannedBreeding.stud}<br/>
                    <b style={{ color:"var(--text)" }}>Timing:</b> {dog.plannedBreeding.timing}<br/>
                    {dog.plannedBreeding.note ? <><b style={{ color:"var(--text)" }}>Notes:</b> {dog.plannedBreeding.note}</> : null}
                  </p>
                  {dog.plannedBreeding.studHero ? <ImageGrid items={[dog.plannedBreeding.studHero]} onImage={onImage} /> : null}
                  <div style={{ marginTop:10 }} className="badge">Outside stud — not owned by BHB</div>
                </>
              ) : null}

              {dog.dna ? (
                <>
                  <hr /><div className="badge">DNA / Pedigree</div>
                  <div style={{ marginTop:12 }} className="card">
                    <img style={{ width:"100%", height:"auto", display:"block", cursor:"pointer" }} src={dog.dna} alt="DNA" onClick={()=>onImage(dog.dna)} />
                  </div>
                </>
              ) : null}

              {dog.gallery ? (<><hr /><div className="badge">Gallery</div><ImageGrid items={dog.gallery} onImage={onImage} /></>) : null}

              {dog.pastLitter ? (
                <>
                  <hr />
                  <div className="badge">Past Litter</div>

                  <p style={{ color: "var(--muted)", lineHeight: 1.7, marginTop: 10 }}>
                    <span style={{ color: "var(--text)" }}>Pairing:</span>{" "}
                    {dog.pastLitter.title}
                    <br />
                    <span style={{ color: "var(--text)" }}>Litter size:</span>{" "}
                    {dog.pastLitter.count} (
                    {dog.pastLitter.males} males, {dog.pastLitter.females} females)
                  </p>

                  {/* OUTSIDE STUD HERO (PAST LITTER) */}
                  {dog.pastLitter.studHero ? (
                    <>
                      <ImageGrid
                        items={[dog.pastLitter.studHero]}
                        onImage={onImage}
                      />
                      <div style={{ marginTop: 10 }} className="badge">
                        Outside stud — not owned by BHB
                      </div>
                    </>
                  ) : null}

                  {/* PUPPY GALLERY */}
                  <ImageGrid items={dog.pastLitter.gallery} onImage={onImage} />
                </>
              ) : null}


            </div></div>
          </div>
        </div>

        <div className="section"><button className="btn" onClick={()=>go("/dams")}>← Back</button></div>
      </div>
    );
  }

  const bullies = dams.filter(d=>d.breed==="American Bully");
  const frenchies = dams.filter(d=>d.breed==="French Bulldog");

  return (
    <div className="container">
      <div className="section"><h2>Dams</h2><p style={{ color:"var(--muted)" }}>American Bullies and French Bulldogs.</p></div>

      <div className="section"><h2>American Bully Dams</h2></div>
      <div className="grid">
        {bullies.map(d=>(
          <div key={d.id} style={{ gridColumn:"span 4" }}>
            <DogCard dog={d} onOpen={()=>go(`/dams/${d.id}`)} onImage={onImage} />
          </div>
        ))}
      </div>

      <div className="section"><h2>French Bulldog Dams</h2></div>
      <div className="grid">
        {frenchies.map(d=>(
          <div key={d.id} style={{ gridColumn:"span 4" }}>
            <DogCard dog={d} onOpen={()=>go(`/dams/${d.id}`)} onImage={onImage} />
          </div>
        ))}
      </div>
    </div>
  );
}
