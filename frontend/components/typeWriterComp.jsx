import React, { useState, useEffect } from "react";

function TypeWriterComp({ appendClass, hats, prefix }) {
  const [currentHat, setCurrentHat] = useState(0);
  const [collapseClass, setCollapseClass] = useState("w-full");

  useEffect(() => {
    const incrementHat = async () => {
      setCollapseClass("w-0");
      setTimeout(() => {
        setCurrentHat((oldVal) => {
          let hatIndex;
          if (oldVal >= hats.length - 1) {
            hatIndex = 0;
          } else {
            hatIndex = oldVal + 1;
          }

          return hatIndex;
        });
      }, 1100);
      setTimeout(() => {
        setCollapseClass("w-full");
      }, 1000);
    };

    const id = setInterval(incrementHat, 8000);

    return () => clearInterval(id);
  }, [hats.length]);

  return (
    <div className={`flex flex-col gap-4 h-auto  ${appendClass}`}>
      <div className="flex gap-2 text-2xl md:text-4xl mx-auto">
        <div className=" whitespace-nowrap ml-auto">
          {prefix}
          {hats[currentHat].prep ? ` ${hats[currentHat].prep} ` : ""}
        </div>
        <div
          className={`font-bold border-b-2 border-b-blue-400 border-r-2 pr-1 animate-cursor overflow-hidden whitespace-nowrap transition-width ease-in-out duration-1000 mr-auto ${collapseClass}`}
        >
          {hats[currentHat].suffix}
        </div>
      </div>
    </div>
  );
}

export default TypeWriterComp;
