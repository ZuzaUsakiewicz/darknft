import React from "react";
import LoadingSection from "../components/Reusables/LoadingSection";

function Community() {
  return (
    <LoadingSection
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    />
  );
}

export default Community;
