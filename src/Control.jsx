import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/foin";
import Home from "./Home";


function Control() {
  const [countris, setCountris] = useState([]);

  const [main, setmain] = useState([]);
  const limit = 8;
  const [skip,setSkip] = useState(0)

  const[btns,setBtns] = useState(0)

  console.log(skip);


  const [url, changeUrl] = useState(
    ` http://13.51.196.53:8080/countries?limit=${limit}&skip=${skip}&search=${main}`
  );

  return (
    <div className="App">
      <Header />
      <Main setCountris={setCountris} skipper={skip} setBtns={setBtns} />
      <Home countris={countris} skip={skip} btns={btns} setSkip={setSkip} changeUrl={changeUrl}></Home>
    </div>
  );
}

export default Control;
