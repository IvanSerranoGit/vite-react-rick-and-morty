// Traemos datos en cuanto cargue la app
import CharacterList from "./components/CharacterList";
import Character from "./components/Character";

function App() {

  return <div className="bg-dark text-white">
    <h1 className="text-center display-1 py-4">Rick and Morty</h1>
    <CharacterList/>
  </div>
}

export default App
