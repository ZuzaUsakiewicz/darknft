import React from "react";
import LoadingSection from "../components/Reusables/LoadingSection";

function Community() {
  return (
    <>
      <LoadingSection
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
      <p
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          fontSize: "12px",
          transform: "translate(-50%, 0)",
        }}
      >
        *Nothing's wrong here. I've made that page to show loading indicator.
      </p>
    </>
  );
}

export default Community;
