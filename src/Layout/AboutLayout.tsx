import { useRef } from "react";
import { dataTextAbout, photo1, photo2 } from "../data/Data";
import { motion, useInView } from "framer-motion";
import { VariantOpacity } from "../data/DataVariants";

export const AboutLayout = () => {
  const reff = useRef(null);
  const isInView = useInView(reff, { amount: 0.5, once: true });
  return (
    <main className="py-10 flex flex-col gap-5 border-t">
      <GridImages />
      <motion.div
        className="end flex flex-col gap-3"
        ref={reff}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ staggerChildren: 0.5 }}
      >
        <motion.h1 className="font-medium text-2xl"
          variants={VariantOpacity}
        >It's about youuu</motion.h1>
        {dataTextAbout.map((item) => (
          <motion.div className="text-justify" key={item.id} variants={VariantOpacity} >
            {item.text}
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
};

const GridImages = () => {
  return (
    <div>
      <div className="mb-2 flex items-end justify-center gap-2">
        <div className="img w-[40%] h-max">
          <img
            src={photo1}
            className="w-full object-cover border-8 border-neutral-100 shadowGridImage"
          />
        </div>
        <div className="img w-[45%]">
          <img
            src={photo2}
            className="border-8 border-neutral-100 shadowGridImage  "
          />
        </div>
      </div>
      <div className="flex items-start justify-center gap-2">
        <div className="img w-[45%]">
          <img
            src={photo2}
            className="border-8 border-neutral-100 shadowGridImage  "
          />
        </div>
        <div className="img w-[40%] h-max">
          <img
            src={photo1}
            className="w-full object-cover border-8 border-neutral-100 shadowGridImage   "
          />
        </div>
      </div>
    </div>
  );
};
