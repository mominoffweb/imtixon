import React, { useState } from "react";
import "../../src/main.css";
import "../../src/App.css";
import { useEffect } from "react";
import axios from "axios";

function main({ setCountris, setBtns, skipper }) {
  useEffect(() => {
    getData("");
  }, []);

  useEffect(() => {
    getData(region, skipper);
  }, [skipper]);

  const [limit, setLimit] = useState(8);
  const [val, setVal] = useState("");

  const [region, setRegion] = useState("");

  const getData = async (region, skipper, search) => {
    try {
      const res = await axios(
        ` http://13.51.196.53:8080/countries?limit=${limit}&skip=${skipper}&region=${region}&search=${
          val ? val : ""
        }`
      );
      const data = await res.data;
      setCountris(data);
      let a = Math.ceil(data.total / limit);
      setBtns(a);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className=" item flex justify-between py-20 , px-[5rem]">
      <form className="flex">
        <input
          className=" input search w-96 h-14 p-7  shadow-md "
          placeholder="Search for a country…"
          type="text"
          value={val}
          onChange={(e) => {
            setVal(e.target.value), getData(region, e.target.value);
          }}
        />
      </form>
      <select
        className="dropdown"
        onChange={(e) => {
          setRegion(e.target.value), getData(e.target.value);
        }}
      >
        <option value="">{region ? "All" : "Filter by Region"}</option>
        <option value="Africa">Afrika</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
}

export default main;
