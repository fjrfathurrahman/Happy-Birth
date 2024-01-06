import { headline, pp, subHeadline } from "../data/Data";
import { ButtonCom } from "../components/button/ButtonCom";
import { motion } from "framer-motion";
import { BiSolidMessageDetail } from "react-icons/bi";

export default function IntroLayout(props: any) {
  const variantY = {
    initial: {
      y: -200,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 90 },
    },
  };

  return (
    <>
      <main className="py-24">
        <motion.div
          className="text-center flex flex-col mb-10"
          initial="initial"
          animate="animate"
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.div variants={variantY}>{headline}</motion.div>
          <motion.div variants={variantY}>{subHeadline}</motion.div>
          <motion.div variants={variantY} whileHover={{ rotate: 4 }}>
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
          initial={{ y : 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 120 }}
        >
          <img
            src={pp}
            className="rounded-full w-52 h-52 mx-auto shadowCostum border-8 border-neutral-100"
          />
        </motion.div>
      </main>
    </>
  );
}
