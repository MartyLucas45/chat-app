import React from "react";
import Contact from "./components/Contact";

const ligne = true;

const ligne2 = false;

function App() {
  return (
    <div className="App">
      <Contact
        img="https://randomuser.me/api/portraits/men/85.jpg"
        imgAlt="Peter Palmer"
        statutText={ligne ? "Online" : "Offline"}
        statut="status-online"
      />
      <Contact
        img="https://randomuser.me/api/portraits/women/86.jpg"
        imgAlt="Cathy Weaver"
        statutText={ligne2 ? "Online" : "Offline"}
        statut="status-offline"
      />
      <Contact
        img="https://randomuser.me/api/portraits/women/4.jpg"
        imgAlt="Lucille Kennedy"
        statutText={ligne ? "Online" : "Offline"}
        statut="status-online"
      />
    </div>
  );
}

export default App;