import React from "react";

function Page({ setSkip, btns }) {
  function clicked(e) {
    return setSkip(+e.target.innerText);
  }
  return (
    <div className="drow">
      <>
       
        <div className="grid grid-cols-12 gap-4">
          {Array.from(Array(btns).keys()).map(p => {
            return (
              <button className="shadown " onClick={(e) => clicked(e)}>{p}</button>
            )
          })}
        </div>
      </>
    </div>
  );
}

export default Page;
