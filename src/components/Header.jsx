import React, { useState } from "react";
import dark_light from "../../public/dark_light.svg";

function Header() {
  function dark() {
    const body = document.body;
    body.classList.toggle("dark");
  }
  return (
    <div className="dark-mode flex  justify-between w-100%   py-6 px-20  shadow">
      <h1 className="text-xl font-extrabold ">Where in the world?</h1>
      <button onClick={dark} className="flex flex-row-reverse gap-4">
        <span onClick={dark} className="text-base font-semibold">
          Dark Mode
        </span>
        <img src={dark_light} alt="" />
      </button>
    </div>
  );
}
export default Header;
