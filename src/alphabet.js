import { useEffect, useState, useContext } from "react";
import "./alphabet.css";
import { MovieContext } from "./movieContext";
export default function Alphabet() {
  const list = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0"
  ];

  const [selected, setSelected] = useContext(MovieContext);
  //const [r,setR] = useState(reset)
  useEffect(() => {});
  return (
    <div className="alphabet">
      {list.map((c) => {
        return (
          <div
            className={
              selected.includes(c) ? "c-alphabet selected" : "c-alphabet"
            }
            onClick={(e) => {
              console.log(e.target.innerText);
              // setR(false)
              setSelected((prevSelected) => [
                ...prevSelected,
                e.target.innerText
              ]);
              // e.target.style.backgroundColor = "grey";
              // e.target.style.pointerEvents = "none";
              //usecontext is the answer
            }}
          >
            {c}
          </div>
        );
      })}
    </div>
  );
}
