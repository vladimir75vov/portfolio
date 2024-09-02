import React from "react";

function LinkOpenNewTabComp({ url, children }) {
  function openInNewTab(_url) {
    window.open(_url, "_blank").focus();
  }
  return (
    <button type="button" onClick={() => openInNewTab(url)}>
      {children}
    </button>
  );
}

export default LinkOpenNewTabComp;
