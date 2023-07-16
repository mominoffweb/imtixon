import React from "react";
import {useNavigate} from 'react-router-dom'

function Black({ data }) {

  const navigate = useNavigate();

  return (
    <div className="frome" onClick={() => navigate(`/country/${data.name.slug}`)}>
       
      <div className="img_wrap">
        <img className="" src={data.flags.png} alt="" />
      </div>

      <div
        style={{ height: "170px" }}
        className=" drown p-8 cursor-pointer shadow-xl rounded-md"
      >
        <h1 className=" text-lg  font-extrabold">{data.name.common}</h1>

        <div className=" font-light  text-sm">
          Population: <span>{data.population}</span>
        </div>

        <div className="text-sm  font-semibold">
          Region: <span>{data.continents}</span>
        </div>

        <div className=" text-sm  font-semibold">
          Capital: <span>{data.capital}</span>
        </div>
      </div>
    </div>
  );
}

export default Black;
