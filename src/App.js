import './App.css';
import Header from './Header';
import ListeLignes from './ListeLignes';
import Footer from './Footer';
import StatReseau from './StatReseau';

function App() {
  const lignes = [
    { id: 1, numero: "1", depart: "Parcelles Assainies", arrivee: "Plateau", arrets: 14, couleur: "green"  },
    { id: 2, numero: "7", depart: "Guediawaye", arrivee: "Place Obé", arrets: 18, couleur: "green"  },
    { id: 3, numero: "15", depart: "Pikine", arrivee: "Medina", arrets: 12, couleur: "blue" },
    { id: 4, numero: "23", depart: "Ouakam", arrivee: "Grand Dakar", arrets: 10, couleur: "red" },
    { id: 5, numero: "8", depart: "Almadies", arrivee: "Colobane", arrets: 16, couleur: "yellow" },
    { id: 6, numero: "12", depart: "Yoff", arrivee: "Sandaga", arrets: 11, couleur: "purple" },
    { id: 7, numero: "30", depart: "Fann", arrivee: "Liberté 6", arrets: 9, couleur: "orange" },
    { id: 8, numero: "31", depart: "HLM", arrivee: "Dieuppeul", arrets: 8, couleur: "pink" },
    { id: 9, numero: "32", depart: "Sicap", arrivee: "Médina", arrets: 13, couleur: "brown" },
    { id: 10, numero: "33", depart: "Liberté 5", arrivee: "Plateau", arrets: 15, couleur: "gray" }
  ];

  return (
    <div className="App">
      <Header />
      <main className="contenu">
        <StatReseau lignes={lignes} />
        <ListeLignes lignes={lignes} />
      </main>
      <Footer />
    </div>
  );
}

export default App;