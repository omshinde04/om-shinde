"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 1300); // total loader time

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed top-0 left-0 right-0 z-9999 pointer-events-none"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, delay: 1.2 }}
        >
          {/* ===== LOADING LINE ===== */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: 1.5,
              ease: [0.65, 0, 0.35, 1], // premium easing
            }}
            style={{ transformOrigin: "left" }}
            className="h-0.5 w-full bg-linear-to-r from-cyan-400 via-blue-500 to-indigo-500"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
