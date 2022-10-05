import React from "react";
import { motion } from "framer-motion";

const NftCardModal = ({ item }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.3 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.5, transition: { delay: 1 } }}
    >
      {item.name}
    </motion.div>
  );
};

export default NftCardModal;
