import { dataMemoPhotos } from "../data/Data";
import { motion, useInView } from "framer-motion";
import { VarianttoTop } from "../data/DataVariants";
import { useRef } from "react";

export default function MemoriesLayout() {
  const reff = useRef(null)
  const isInView = useInView(reff, { amount: 0.5, once: true })
  return (
    <main className="py-10 flex flex-col gap-5 border-t">
      <div className="start">
        <h1 className="font-extrabold text-3xl mb-2">Very <span className="text-pink-500">precious</span> <br /> <span className="text-primary">memories</span> with you</h1>
        <p>Doing little things together with you is so much fun, yesss for real !!</p>
      </div>
      <motion.div className="center pt-5 border-t grid grid-cols-2 gap-2" ref={reff} initial="hidden" animate={isInView ? "visible" : "hidden"} transition={{staggerChildren: 0.6}}>
        {dataMemoPhotos.map((item) => (
          <motion.div key={item.id} variants={VarianttoTop} whileHover={{ scale: 0.7 }}>
            <img src={item.image} className="object-cover rounded-md shadow-xl " />
          </motion.div>
        ))}
      </motion.div>
    </main>
  )
}
