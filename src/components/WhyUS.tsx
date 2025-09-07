import Title from "./Title";
import { motion } from "framer-motion";
import { list, childVariants, parentVariants } from "../assets/data/db";

function WhyUS() {
  return (
    <div className="w-full h-[480px] absolute top-[560px] left-0 z-10 flex flex-col items-center">
      <Title>why us?</Title>

      <motion.div
        variants={parentVariants}
        initial="hidden"
        whileInView="show"
        className="relative"
      >
        {list.map((item) => (
          <motion.div
            key={item.id}
            variants={childVariants}
            className={item.divClass}
          >
            <img src={item.src} alt={item.alt} className={item.imageClass} />
            <h3 className="text-white/85 font-medium text-2xl mt-5 text-center">
              {item.question}
            </h3>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default WhyUS;
