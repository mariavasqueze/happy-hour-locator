import React from "react";

import { motion } from "framer-motion";

export default function Container({ children, noFluid = false, className }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`container${noFluid ? "" : "-fluid"} ${
        className ? className : ""
      }`}
    >
      {children}
    </motion.div>
  );
}
