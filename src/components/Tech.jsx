import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies, tools } from "../constants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Technologies I've Worked With
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          My Tech Stack.
        </h2>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <a title={technology.name} style={{ cursor: "pointer" }}>
              <BallCanvas icon={technology.icon} />
            </a>
          </div>
        ))}
      </div>

      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center mt-[100px]`}>
          Tools Suite.
        </h2>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
        {tools.map((tool) => (
          <div className="w-28 h-28" key={tool.name}>
            <a title={tool.name} style={{ cursor: "pointer" }}>
              <BallCanvas icon={tool.icon} />
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "technologies");
