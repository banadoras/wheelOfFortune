import { useEffect, useState } from "react";
import "./brain.css";

export default function Puzzle({ movies, selectedCs }) {
  const [characters, setCharacters] = useState([]);
  const [chosenMovie, setChosenMovie] = useState([]);
  const [result, setResult] = useState("");
  const [gMovie, setGMovie] = useState("");

  function finalize(movie) {
    var movieString = [];
    //console.log(movie)
    for (let index = 0; index < movie.length; index++) {
      if (movie[index] === " ") {
        movieString.push(" ");
      } else {
        movieString.push(movie[index].toUpperCase());
      }
    }
    return movieString;
  }

  function generatePuzzle(movie) {
    var movieString = [];
    //console.log(movie)
    for (let index = 0; index < movie.length; index++) {
      if (movie[index] === " ") {
        movieString.push(" ");
      } else {
        movieString.push("-");
      }
    }
    return movieString;
  }

  function compare() {
    var movieString = [];
    for (let index = 0; index < chosenMovie.length; index++) {
      if (selectedCs.includes(chosenMovie[index].toUpperCase())) {
        movieString.push(chosenMovie[index].toUpperCase());
      } else if (chosenMovie[index] === " ") {
        movieString.push(" ");
      } else {
        movieString.push("-");
      }
    }
    console.log("ms:", movieString);
    let wMovie = "";
    movieString.forEach((i) => {
      wMovie += i;
    });
    if (wMovie.toLowerCase() === chosenMovie.toLowerCase()) {
      setResult("Done!");
    }
    return movieString;
  }

  useEffect(() => {
    if (selectedCs.length === 0) {
      let x = Math.floor(Math.random() * (movies.length + 1));
      setChosenMovie(movies[x]);
      setCharacters(generatePuzzle(movies[x]));
      setResult("");
      setGMovie("");
    }
  }, [selectedCs]);

  useEffect(() => {
    if (selectedCs.length > 0) {
      setCharacters(compare());
    }
  }, [selectedCs]);

  return (
    <div>
      <div className="frame">
        {characters.map((c, index) => {
          if (c === " ") {
            return <div className="space"> </div>;
          } else if (c == "-") {
            return <div className="character dash">.</div>;
          } else {
            return <div className="character">{c}</div>;
          }
        })}
      </div>
      <div className="result">{result}</div>
      <input
        className="g-movie"
        type="text"
        value={gMovie}
        placeholder="Guess Movie"
        onChange={(e) => {
          setGMovie(e.target.value);
          if (e.target.value.toLowerCase() === chosenMovie.toLowerCase()) {
            setResult("Done!");
            setCharacters(finalize(chosenMovie));
            e.target.value = "";
          } else {
            setResult("");
          }
        }}
      />
      <p>
        If you're stuck and cannot find out what movie is this, press the button
        "Show Movie"
      </p>
      <button
        className="show-button"
        onClick={() => {
          setCharacters(finalize(chosenMovie));
        }}
      >
        Show Movie
      </button>
    </div>
  );
}
