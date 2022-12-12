/*
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import * as Icons from "@heroicons/react/24/solid";
import useMeasure from "react-use-measure";

export default function Projects() {
  let [count, setCount] = useState(1);
  let previous = usePrevious(count);
  let [ref, { width }] = useMeasure();
  let direction = count > previous ? 1 : -1;

  return (
    <div  ref={ref} className="container-projects">
      
        <button
          onClick={() => setCount(count - 1)}
          className="prev-btn"
        >
          <Icons.ChevronLeftIcon className="icon" />
        </button>
        
    
      <div  
        className="box"
      >
        <AnimatePresence custom={{ direction, width }}>
          <motion.div
            key={count}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            custom={{ direction, width }}
            className={`${
              colors[Math.abs(count) % 4]
            } number`}
          >
            {count}
          </motion.div>
        </AnimatePresence>
      </div>
      <button
          onClick={() => setCount(count + 1)}
          className="next-btn"
        >
          <Icons.ChevronRightIcon className="icon" />
        </button>
    </div>
  );
}

let colors = ["bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500"];

let variants = {
  enter: ({ direction, width }) => ({
    x: direction * width,
  }),
  center: { x: 0 },
  exit: ({ direction, width }) => ({
    x: direction * -width,
  }),
};

function usePrevious(state) {
  let [tuple, setTuple] = useState([state, null]);
  if (tuple[1] !== state) {
    setTuple([tuple[1], state]);
  }

  return tuple[0];
}
*/