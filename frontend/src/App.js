import "./App.css";
import Favourites from "./components/Favourites";
import GetApples from "./components/GetApples";

function App() {
  return (
    <div className="App">
      <GetApples />
      <Favourites />
    </div>
  );
}

export default App;
