/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from "react";

export const useDropdownAnimation = (open) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (open) {
      setAnimate(true);
    } else {
      const timer = setTimeout(() => setAnimate(false), 250);
      return () => clearTimeout(timer);
    }
  }, [open]);

  return animate;
};
