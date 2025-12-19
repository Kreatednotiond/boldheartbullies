import React, { useEffect, useState } from "react";
import Nav from "./components/Nav.jsx";
import Lightbox from "./components/Lightbox.jsx";

import Home from "./pages/Home.jsx";
import Puppies from "./pages/Puppies.jsx";
import Breedings from "./pages/Breedings.jsx";
import Dams from "./pages/Dams.jsx";
import Studs from "./pages/Studs.jsx";
import PastLitters from "./pages/PastLitters.jsx";
import Contracts from "./pages/Contracts.jsx";
import Contact from "./pages/Contact.jsx";
import Privacy from "./pages/Privacy.jsx";
import Terms from "./pages/Terms.jsx";

function getRouteFromHash() {
  const raw = window.location.hash || "#/";
  const path = raw.replace("#", "");
  return path === "" ? "/" : path;
}

export default function App() {
  const [route, setRoute] = useState(getRouteFromHash());
  const [lightboxSrc, setLightboxSrc] = useState(null);

  useEffect(() => {
    const onHash = () => setRoute(getRouteFromHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const go = (path) => {
    window.location.hash = path === "/" ? "#/" : `#${path}`;
    setRoute(path);
  };

  return (
    <>
      <Nav go={go} />

      {route === "/" && <Home go={go} onImage={setLightboxSrc} />}
      {route === "/puppies" && <Puppies go={go} onImage={setLightboxSrc} />}
      {route === "/breedings" && <Breedings onImage={setLightboxSrc} />}

      {route.startsWith("/dams") && <Dams route={route} go={go} onImage={setLightboxSrc} />}
      {route.startsWith("/studs") && <Studs route={route} go={go} onImage={setLightboxSrc} />}

      {route === "/past-litters" && <PastLitters onImage={setLightboxSrc} />}
      {route === "/contracts" && <Contracts onImage={setLightboxSrc} />}
      {route === "/contact" && <Contact />}
      {route === "/privacy" && <Privacy />}
      {route === "/terms" && <Terms />}

      <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />
    </>
  );
}
