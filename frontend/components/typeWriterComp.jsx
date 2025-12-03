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
    <div className={`flex flex-col gap-2 h-auto ${appendClass}`}>
      {/* Первая строка - статический текст */}
      {prefix || hats[currentHat].prep ? (
        <div className="text-xl md:text-3xl text-white text-center whitespace-nowrap">
          {prefix}
          {hats[currentHat].prep ? ` ${hats[currentHat].prep}` : ""}
        </div>
      ) : null}
      
      {/* Вторая строка - анимированный typewriter */}
      <div className="flex justify-center">
        <div
          className={`font-bold text-2xl md:text-4xl border-b-2 border-b-blue-400 border-r-2 pr-1 animate-cursor overflow-hidden whitespace-nowrap transition-all ease-in-out duration-1000 text-white ${collapseClass}`}
        >
          {hats[currentHat].suffix}
        </div>
      </div>
    </div>
  );
}

export default TypeWriterComp;
