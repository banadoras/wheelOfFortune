import Puzzle from "./brain";
import "./styles.css";
import movies from "./movies";
import Alphabet from "./alphabet";
import { useContext } from "react";
import { MovieContext } from "./movieContext";

export default function App() {
  const [selected, setSelected] = useContext(MovieContext);
  return (
    <div
      className="App"
      onKeyDown={(e) => {
        console.log("Key pressed", e.key);
      }}
    >
      <div className="header">
        <h1>MOVIE GUESS!</h1>

        <Puzzle movies={movies} selectedCs={selected} />
        <Alphabet />
        <h3>Number of Trials: {selected.length}</h3>
        <button
          className="reset"
          onClick={() => {
            //setMs(movies);
            setSelected([]);
            //setReset(false)
          }}
        >
          RESET
        </button>
      </div>
    </div>
  );
}
