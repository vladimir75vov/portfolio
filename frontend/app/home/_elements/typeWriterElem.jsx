import React, { useContext } from "react";
import TypeWriterComp from "../../../components/typeWriterComp.jsx";
import { LanguageContext } from "../../../context/LanguageContext.jsx";

function TypeWriterElem() {
  const { t } = useContext(LanguageContext);
  const _hats = [
    {
      suffix: t("hero.hi"),
    },
    {
      suffix: "const Vladimir = ( name, passion ) =>",
    },
  ];
  return <TypeWriterComp appendClass="float-left" hats={_hats} />;
}

export default TypeWriterElem;
