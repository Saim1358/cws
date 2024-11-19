"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import React from "react";

const Motion: React.FC<HTMLMotionProps<"div">> = ({ children, ...props }) => {
  return <motion.div {...props}>{children}</motion.div>;
};

export default Motion;
