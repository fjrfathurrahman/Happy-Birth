import { headline, pp, subHeadline } from "../data/Data";
import { ButtonCom } from "../components/button/ButtonCom";
import { motion } from "framer-motion";
import { BiSolidMessageDetail } from "react-icons/bi";
import { VariantYtoBottom, VariantYtoTop } from "../data/DataVariants";

export default function IntroLayout(props: any) {
  return (
    <>
      <main className="py-24">
        <motion.div
          className="text-center flex flex-col mb-10"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.3 }}
        >
          <motion.div variants={VariantYtoTop}>{headline}</motion.div>
          <motion.div variants={VariantYtoTop}>{subHeadline}</motion.div>
          <motion.div
            variants={VariantYtoTop}
            whileHover={{ rotate: [0, 4, -4, 0] }}
          >
            <ButtonCom
              color="primary"
              variant="shadow"
              size="md"
              ClassName="w-72 font-semibold text-md mt-5"
              text="For Youuu"
              iconEnd={<BiSolidMessageDetail />}
              onPress={props.onPress}
            />
          </motion.div>
        </motion.div>
        <motion.div
          variants={VariantYtoBottom}
          initial="hidden"
          animate="visible"
          className="relative z-10"
        >
          <div className="absolute right-16 bottom-0 z-30 ">
            <motion.img width="64" className="shadow-image" src="https://img.icons8.com/3d-fluency/94/smiling-face-with-heart-eyes-2.png" alt="smiling-face-with-heart-eyes-2" 
              initial={{y : 24}}
              animate={{y : 0}}
              transition={{ repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut', duration: 1.2 }}
            />
          </div>
          <div className="absolute left-6 -rotate-6 bottom-24 z-30 ">
            <motion.img width="64" className="shadow-image" src="https://img.icons8.com/3d-fluency/94/star-struck-2.png" alt="star-struck-2" 
              initial={{y : 24}}
              animate={{y : 0}}
              transition={{ repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut', duration: 0.7 }}
            />
          </div>
          <div className="absolute right-10 rotate-12 top-0 -z-30 ">
            <motion.img width="64" className="shadow-image" src="https://img.icons8.com/3d-fluency/94/smiling-face-with-heart-eyes-2.png" alt="smiling-face-with-heart-eyes-2" 
              initial={{y : 24}}
              animate={{y : 0}}
              transition={{ repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut', duration: 1 }}
            />
          </div>
          <img
            src={pp}
            className="rounded-full w-52 h-52 mx-auto shadowCostum border-8 border-neutral-100"
          />
        </motion.div>
      </main>
    </>
  );
}

// initial={{ y: 28 }}
            // animate={{
            //   y: 0,
            //   transition: {
            //     repeatType: "reverse",
            //     duration: 1.5,
            //     repeat: Infinity,
            //     ease: "easeInOut",
            //   },
            // }}