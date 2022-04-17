const { createContext, useState } = require("react");

const MovieContext = createContext();

const MovieProvider = function (props) {
  const [data, setData] = useState([]);
  return (
    <MovieContext.Provider value={[data, setData]}>
      {props.children}
    </MovieContext.Provider>
  );
};

export { MovieContext, MovieProvider };
