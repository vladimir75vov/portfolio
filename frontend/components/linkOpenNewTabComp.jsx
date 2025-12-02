import React from "react";

function LinkOpenNewTabComp({ url, children }) {
  function openInNewTab(_url) {
    window.open(_url, "_blank").focus();
  }
  
  return (
    <button
      type="button"
      onClick={() => openInNewTab(url)}
      className="inline-flex items-center justify-center w-10 h-10 text-xl text-gray-300 hover:text-blue-400 hover:bg-blue-400/10 rounded-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400/50"
      aria-label="Social link"
    >
      {children}
    </button>
  );
}

export default LinkOpenNewTabComp;
