import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import * as Icons from "@heroicons/react/24/solid";
import useMeasure from "react-use-measure";
import elements from "./Carouselitems";

let variants = {
  enter: ({ direction, width }) => ({
    x: direction * width,
  }),
  center: {
    x: 0,
  },
  exit: ({ direction, width }) => ({
    x: direction * -width,
  }),
};

export default function Projects() {
  // Initialize the count variable to 1
  let [count, setCount] = useState(1);
  let previous = usePrevious(count);
  let [ref, { width }] = useMeasure();
  let direction = count > previous ? 1 : -1;

  return (
    <div ref={ref} className="container-projects">
      <button
        onClick={() => {
          // Decrement the count variable by 1, but if it is already at 1, set it to 2
          setCount(count === 1 ? 2 : count - 1);
        }}
        className="prev-btn"
      >
        <Icons.ChevronLeftIcon className="icon" />
      </button>

      <div className="box">
        <AnimatePresence custom={{ direction, width }}>
          {elements.map((element, index) => (
            <motion.div
              key={index}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              custom={{ direction, width }}
              className="number"
            >
              {element}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <button
        onClick={() => {
          setCount(count === 2 ? 1 : count + 1);
        }}
        className="next-btn"
      >
        <Icons.ChevronRightIcon className="icon" />
      </button>
    </div>
  );
}

function usePrevious(state) {
  let [tuple, setTuple] = useState([state, null]);
  if (tuple[1] !== state) {
    setTuple([tuple[1], state]);
  }

  return tuple[0];
}
