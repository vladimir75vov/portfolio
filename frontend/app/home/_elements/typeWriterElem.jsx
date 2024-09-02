import React from "react";
import TypeWriterComp from "../../../components/typeWriterComp.jsx";

function TypeWriterElem() {
  const _hats = [
    {
      suffix: "Hello, my name is                   ",
    },
    {
      suffix: "const Vladimir = ( name, passion ) =>",
    },
  ];
  return <TypeWriterComp appendClass="float-left" hats={_hats} />;
}

export default TypeWriterElem;
