import React, { useMemo } from "react";
import { SITE_DATA } from "./data.js";

function fmtDate(iso){
  if(!iso) return "";
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString(undefined,{year:"numeric",month:"long",day:"numeric"});
}

function Nav({route,setRoute}){
  const { brand } = SITE_DATA;
  return (
    <div className="nav">
      <div className="nav-inner">
        <a className="brand" href="#/" onClick={()=>setRoute("/")}>
          <img src="./assets/logo.png" alt="Bold Heart Bullies logo" />
          <span>{brand.name}</span>
        </a>
        <div className="links">
          <a href="#/studs" onClick={()=>setRoute("/studs")}>Studs</a>
          <a href="#/dams" onClick={()=>setRoute("/dams")}>Dams</a>
          <a href="#/breedings" onClick={()=>setRoute("/breedings")}>Breedings</a>
          <a href="#/past-litters" onClick={()=>setRoute("/past-litters")}>Past Litters</a>
          <a href="#/contracts" onClick={()=>setRoute("/contracts")}>Contracts</a>
          <a href="#/contact" onClick={()=>setRoute("/contact")}>Contact</a>
          <a href="#/privacy" onClick={()=>setRoute("/privacy")}>Privacy</a>
          <a href="#/terms" onClick={()=>setRoute("/terms")}>Terms</a>
        </div>
      </div>
    </div>
  );
}

function Card({children}){ return <div className="card">{children}</div>; }

function DogCard({dog, onOpen}){
  return (
    <Card>
      <img className="thumb" src={dog.hero} alt={dog.name} />
      <div className="pad">
        <div className="row" style={{justifyContent:"space-between",alignItems:"center"}}>
          <div>
            <div style={{fontWeight:800}}>{dog.name}</div>
            <small>{dog.breed}{dog.class?` • ${dog.class}`:""}{dog.registry?` • ${dog.registry}`:""}</small>
          </div>
          <button className="btn" onClick={onOpen}>View</button>
        </div>
        <div style={{marginTop:10}} className="badge">{dog.status || "Profile"}</div>
      </div>
    </Card>
  );
}

function OwnershipNote(){
  return (
    <div className="card">
      <div className="pad">
        <div className="badge">Ownership & transparency</div>
        <p style={{margin:"10px 0 0",color:"var(--muted)",lineHeight:1.6}}>
          Bold Heart Bullies proudly owns and stands <b style={{color:"var(--text)"}}>Spectrum’s Turbo</b>.
          All other studs referenced on this website are outside studs used for past or planned breedings and are <b style={{color:"var(--text)"}}>not owned</b> by Bold Heart Bullies.
        </p>
      </div>
    </div>
  );
}

function Home({setRoute}){
  const { brand, ownedStuds, dams } = SITE_DATA;
  const featuredStud = ownedStuds[0];
  const featuredDams = dams.slice(0,3);
  return (
    <div className="container">
      <div className="hero">
        <h1>{brand.name}</h1>
        <p>{brand.tagline} • {brand.location} • <a href={brand.instagram} target="_blank" rel="noreferrer">Instagram</a></p>
        <div className="row" style={{marginTop:16}}>
          <button className="btn primary" onClick={()=>setRoute("/studs")}>View Stud</button>
          <button className="btn" onClick={()=>setRoute("/dams")}>View Dams</button>
          <button className="btn" onClick={()=>setRoute("/breedings")}>Upcoming Breedings</button>
          <button className="btn" onClick={()=>setRoute("/contact")}>Contact</button>
        </div>
      </div>

      <div className="section">
        <h2>Featured Stud</h2>
        <div className="grid">
          <div style={{gridColumn:"span 12"}}>
            <DogCard dog={{...featuredStud, registry: featuredStud.registries?.join(" / ")}} onOpen={()=>setRoute(`/studs/${featuredStud.id}`)} />
          </div>
        </div>
      </div>

      <div className="section">
        <h2>Featured Dams</h2>
        <div className="grid">
          {featuredDams.map(d=>(
            <div key={d.id} style={{gridColumn:"span 4"}}>
              <DogCard dog={d} onOpen={()=>setRoute(`/dams/${d.id}`)} />
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <OwnershipNote />
      </div>

      <div className="footer">
        <div><b>{brand.name}</b> — {brand.location}</div>
        <div>Phone: {brand.phone} • Email: {brand.email}</div>
      </div>
    </div>
  );
}

function Detail({dog, extraTop, children}){
  return (
    <div className="container">
      <div className="grid">
        <div style={{gridColumn:"span 5"}}>
          <Card>
            <img className="thumb" src={dog.hero} alt={dog.name} />
            <div className="pad">
              <div style={{fontSize:20,fontWeight:900}}>{dog.name}</div>
              <small>{dog.breed}{dog.class?` • ${dog.class}`:""}{dog.registry?` • ${dog.registry}`:""}</small>
              <div style={{marginTop:10}} className="badge">{dog.status || "Profile"}</div>
              {extraTop}
            </div>
          </Card>
        </div>
        <div style={{gridColumn:"span 7"}}>
          <Card>
            <div className="pad">
              <div className="kv">
                {dog.dob && <div><b>DOB:</b> {fmtDate(dog.dob)}</div>}
                {dog.color && <div><b>Color:</b> {dog.color}</div>}
                {dog.height && <div><b>Height:</b> {dog.height}</div>}
                {dog.weight && <div><b>Weight:</b> {dog.weight}</div>}
                {dog.owner && <div><b>Owner:</b> {dog.owner}</div>}
                {dog.studFee && <div><b>Stud Fee:</b> {dog.studFee}</div>}
                {dog.parents && <div><b>Parents:</b> {dog.parents}</div>}
              </div>

              {children}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

function ImageGrid({items}){
  if(!items?.length) return null;
  return (
    <div className="grid" style={{marginTop:12}}>
      {items.map((src,idx)=>(
        <div key={idx} style={{gridColumn:"span 3"}}>
          <Card><img className="thumb" src={src} alt={`photo ${idx+1}`} /></Card>
        </div>
      ))}
    </div>
  );
}

function BreedingBlock({title, data}){
  if(!data) return null;
  return (
    <>
      <hr />
      <div className="badge">{title}</div>
      <p style={{color:"var(--muted)",lineHeight:1.6,marginTop:10}}>
        {data.stud && <><b style={{color:"var(--text)"}}>Stud:</b> {data.stud}<br/></>}
        {data.timing && <><b style={{color:"var(--text)"}}>Timing:</b> {data.timing}<br/></>}
        {data.method && <><b style={{color:"var(--text)"}}>Method:</b> {data.method}<br/></>}
        {data.status && <><b style={{color:"var(--text)"}}>Status:</b> {data.status}<br/></>}
        {data.dates && <><b style={{color:"var(--text)"}}>Dates:</b> {data.dates.map(d=>fmtDate(d)).join(", ")}<br/></>}
        {data.note && <><b style={{color:"var(--text)"}}>Notes:</b> {data.note}</>}
      </p>
      {data.studHero && <ImageGrid items={[data.studHero]} />}
    </>
  );
}

function DNASection({dna, title="DNA / Pedigree"}){
  if(!dna) return null;
  return (
    <>
      <hr />
      <div className="badge">{title}</div>
      <div style={{marginTop:12}}>
        <Card>
          <img style={{width:"100%",height:"auto",display:"block"}} src={dna} alt={title} />
        </Card>
      </div>
    </>
  );
}

function Studs({route,setRoute}){
  const studs = SITE_DATA.ownedStuds.map(s=>({...s, registry: s.registries?.join(" / ")}));
  if(route.startsWith("/studs/")){
    const id = route.split("/")[2];
    const dog = studs.find(s=>s.id===id);
    if(!dog) return <div className="container">Not found.</div>;
    return (
      <Detail dog={dog} extraTop={<div style={{marginTop:10}} className="badge">Owned & Standing Stud</div>}>
        <p style={{color:"var(--muted)",lineHeight:1.6,marginTop:12}}>
          Turbo is the only owned and standing stud at Bold Heart Bullies. Stud services are offered to approved females only and require a signed contract.
        </p>
        <DNASection dna={dog.dna} title="Turbo DNA / Pedigree" />
        <hr />
        <div className="badge">Gallery</div>
        <ImageGrid items={dog.gallery} />
      </Detail>
    );
  }
  return (
    <div className="container">
      <div className="section"><h2>Studs (Owned)</h2><OwnershipNote/></div>
      <div className="grid" style={{marginTop:14}}>
        {studs.map(s=>(
          <div key={s.id} style={{gridColumn:"span 4"}}>
            <DogCard dog={s} onOpen={()=>setRoute(`/studs/${s.id}`)} />
          </div>
        ))}
      </div>
    </div>
  );
}

function Dams({route,setRoute}){
  const dams = SITE_DATA.dams;
  if(route.startsWith("/dams/")){
    const id = route.split("/")[2];
    const dog = dams.find(d=>d.id===id);
    if(!dog) return <div className="container">Not found.</div>;
    return (
      <Detail dog={dog}>
        {dog.note && <p style={{color:"var(--muted)",lineHeight:1.6,marginTop:12}}>{dog.note}</p>}
        {dog.pastLitter && (
          <>
            <BreedingBlock title="Past Litter / Production" data={{
              stud: dog.pastLitter.sire,
              note: `${dog.pastLitter.count} puppies (${dog.pastLitter.males} males, ${dog.pastLitter.females} females).`
            }} />
            <ImageGrid items={dog.pastLitter.gallery} />
          </>
        )}
        {dog.pendingBreeding && <BreedingBlock title="Pending Breeding" data={dog.pendingBreeding} />}
        {dog.plannedBreeding && <BreedingBlock title="Planned Breeding" data={dog.plannedBreeding} />}
        <DNASection dna={dog.dna} />
        {dog.gallery && dog.gallery.length>1 && (
          <>
            <hr /><div className="badge">Gallery</div>
            <ImageGrid items={dog.gallery} />
          </>
        )}
      </Detail>
    );
  }

  const bullies = dams.filter(d=>d.breed==="American Bully");
  const frenchies = dams.filter(d=>d.breed==="French Bulldog");
  return (
    <div className="container">
      <div className="section"><h2>Dams</h2><p style={{color:"var(--muted)"}}>American Bullies and French Bulldogs.</p></div>

      <div className="section"><h2>American Bully Dams</h2></div>
      <div className="grid">
        {bullies.map(d=>(
          <div key={d.id} style={{gridColumn:"span 4"}}>
            <DogCard dog={d} onOpen={()=>setRoute(`/dams/${d.id}`)} />
          </div>
        ))}
      </div>

      <div className="section"><h2>French Bulldog Dams</h2></div>
      <div className="grid">
        {frenchies.map(d=>(
          <div key={d.id} style={{gridColumn:"span 4"}}>
            <DogCard dog={d} onOpen={()=>setRoute(`/dams/${d.id}`)} />
          </div>
        ))}
      </div>
    </div>
  );
}

function Breedings(){
  const dams = SITE_DATA.dams;
  const pending = dams.filter(d=>d.pendingBreeding);
  const planned = dams.filter(d=>d.plannedBreeding);
  return (
    <div className="container">
      <div className="section"><h2>Breedings</h2><OwnershipNote/></div>

      <div className="section"><h2>Pending</h2><p style={{color:"var(--muted)"}}>Breeding completed — awaiting confirmation.</p></div>
      {pending.map(d=>(
        <Card key={d.id}>
          <div className="pad">
            <div style={{fontWeight:900}}>{d.name} × {d.pendingBreeding.stud}</div>
            <small>{d.breed} • {d.registry}</small>
            <p style={{color:"var(--muted)",lineHeight:1.6}}>
              Method: {d.pendingBreeding.method} • Dates: {d.pendingBreeding.dates.map(fmtDate).join(", ")} • Status: {d.pendingBreeding.status}
            </p>
            <div className="row">
              <img className="thumb" style={{maxWidth:220,borderRadius:14}} src={d.hero} alt={d.name}/>
              {d.pendingBreeding.studHero && <img className="thumb" style={{maxWidth:220,borderRadius:14}} src={d.pendingBreeding.studHero} alt="Outside stud"/>}
            </div>
            <div style={{marginTop:10}} className="badge">Outside stud — not owned by BHB</div>
          </div>
        </Card>
      ))}

      <div className="section"><h2>Planned</h2><p style={{color:"var(--muted)"}}>Planned pairings for future litters. No outside stud pages will be created.</p></div>
      {planned.map(d=>(
        <Card key={d.id}>
          <div className="pad">
            <div style={{fontWeight:900}}>{d.name} × {d.plannedBreeding.stud}</div>
            <small>{d.breed} • {d.registry}</small>
            <p style={{color:"var(--muted)",lineHeight:1.6}}>
              Timing: {d.plannedBreeding.timing}{d.plannedBreeding.note?` • ${d.plannedBreeding.note}`:""}
            </p>
            <div className="row">
              <img className="thumb" style={{maxWidth:220,borderRadius:14}} src={d.hero} alt={d.name}/>
              {d.plannedBreeding.studHero && <img className="thumb" style={{maxWidth:220,borderRadius:14}} src={d.plannedBreeding.studHero} alt="Outside stud"/>}
            </div>
            <div style={{marginTop:10}} className="badge">Outside stud — not owned by BHB</div>
          </div>
        </Card>
      ))}

      <div className="footer">
        <small>Want a waitlist form for 2026 breedings? We can add it anytime.</small>
      </div>
    </div>
  );
}

function PastLitters(){
  const dams = SITE_DATA.dams.filter(d=>d.pastLitter);
  return (
    <div className="container">
      <div className="section"><h2>Past Litters</h2><p style={{color:"var(--muted)"}}>Archive only (proof of production). No pricing or availability listed here.</p></div>
      {dams.map(d=>(
        <Card key={d.id}>
          <div className="pad">
            <div style={{fontWeight:900}}>{d.name} — Past Litter</div>
            <p style={{color:"var(--muted)",lineHeight:1.6}}>
              {d.pastLitter.sire ? <>Sire: {d.pastLitter.sire}<br/></> : null}
              Litter size: {d.pastLitter.count} ({d.pastLitter.males} males, {d.pastLitter.females} females)
            </p>
            <ImageGrid items={d.pastLitter.gallery} />
          </div>
        </Card>
      ))}
    </div>
  );
}

function Contracts(){
  const { contracts } = SITE_DATA;
  return (
    <div className="container">
      <div className="section"><h2>Contracts</h2><p style={{color:"var(--muted)"}}>Downloadable PDFs.</p></div>
      <div className="grid">
        {contracts.map((c,idx)=>(
          <div key={idx} style={{gridColumn:"span 6"}}>
            <Card>
              <div className="pad">
                <div style={{fontWeight:900}}>{c.label}</div>
                <p style={{color:"var(--muted)"}}>{c.file}</p>
                <a className="btn primary" href={c.file} target="_blank" rel="noreferrer">Open PDF</a>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

function Contact(){
  const { brand } = SITE_DATA;
  return (
    <div className="container">
      <div className="section"><h2>Contact</h2></div>
      <Card>
        <div className="pad">
          <div className="kv">
            <div><b>Email:</b> {brand.email}</div>
            <div><b>Phone:</b> {brand.phone}</div>
            <div><b>Location:</b> {brand.location}</div>
            <div><b>Instagram:</b> <a href={brand.instagram} target="_blank" rel="noreferrer">boldheart_bullies</a></div>
          </div>
          <hr />
          <div className="badge">Inquiry note</div>
          <p style={{color:"var(--muted)",lineHeight:1.6}}>
            For puppy inquiries, planned breedings, or stud services (Turbo only), please email us with the dog/breeding you’re referencing.
          </p>
        </div>
      </Card>
    </div>
  );
}

function Privacy(){
  const { brand } = SITE_DATA;
  return (
    <div className="container">
      <div className="section"><h2>Privacy Policy</h2></div>
      <Card><div className="pad" style={{color:"var(--muted)",lineHeight:1.7}}>
        <p><b style={{color:"var(--text)"}}>{brand.name}</b> respects your privacy. This site may collect information you voluntarily provide (such as contacting us via email).</p>
        <p><b style={{color:"var(--text)"}}>Information we collect:</b> name/contact details you send us, and basic analytics provided by the hosting platform.</p>
        <p><b style={{color:"var(--text)"}}>How we use it:</b> to respond to inquiries, manage waitlists (if used), and improve the website.</p>
        <p><b style={{color:"var(--text)"}}>Sharing:</b> we do not sell your information. We may share it only when necessary to provide services you request or as required by law.</p>
        <p><b style={{color:"var(--text)"}}>Contact:</b> {brand.email}</p>
      </div></Card>
    </div>
  );
}

function Terms(){
  const { brand } = SITE_DATA;
  return (
    <div className="container">
      <div className="section"><h2>Terms of Use</h2></div>
      <Card><div className="pad" style={{color:"var(--muted)",lineHeight:1.7}}>
        <p>By using this website, you agree to use it lawfully and not to misuse content or media.</p>
        <p>All photos, logos, and written content are owned by <b style={{color:"var(--text)"}}>{brand.name}</b> unless otherwise noted and may not be reused without permission.</p>
        <p>Outside studs referenced for planned or past breedings are not owned by Bold Heart Bullies and do not imply availability for services.</p>
        <p>Contracts govern purchases and services. Website content is informational and may change.</p>
        <p><b style={{color:"var(--text)"}}>Contact:</b> {brand.email}</p>
      </div></Card>
    </div>
  );
}

export default function App(){
  const [route, setRoute] = React.useState(window.location.hash.replace("#","") || "/");
  React.useEffect(()=>{
    const onHash = ()=> setRoute(window.location.hash.replace("#","") || "/");
    window.addEventListener("hashchange", onHash);
    return ()=> window.removeEventListener("hashchange", onHash);
  },[]);
  const page = useMemo(()=>route.split("?")[0], [route]);
  const setR = (r)=>{ window.location.hash = "#" + r; setRoute(r); };

  return (
    <>
      <Nav route={page} setRoute={setR}/>
      {page === "/" && <Home setRoute={setR} />}
      {page.startsWith("/studs") && <Studs route={page} setRoute={setR} />}
      {page.startsWith("/dams") && <Dams route={page} setRoute={setR} />}
      {page === "/breedings" && <Breedings />}
      {page === "/past-litters" && <PastLitters />}
      {page === "/contracts" && <Contracts />}
      {page === "/contact" && <Contact />}
      {page === "/privacy" && <Privacy />}
      {page === "/terms" && <Terms />}
      {!["/","/breedings","/past-litters","/contracts","/contact","/privacy","/terms"].some(p=>page===p || page.startsWith(p+"/")) && !page.startsWith("/studs") && !page.startsWith("/dams") && (
        <div className="container">Page not found.</div>
      )}
    </>
  );
}
