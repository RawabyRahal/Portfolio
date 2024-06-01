import { styles } from "../styles";
import ComputersCanvas from "./canvas/Computers";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[160px] xs:max-w-12xl max-w-8xl gap-x-10 ml-20 mx-auto ${styles.paddingX} flex flex-row items-start`}
      >
        <div>
          <h1 className={`${styles.heroHeadText} text-white `}>
            Hi There! 👋🏻 <br className="sm:block hidden" />
            <div className=" sm:whitespace-nowrap">
              {" "}
              I'm <span className=" space-gradient">Rawaby Rahal</span>
            </div>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Full-stack & software developer, <br className="sm:block hidden" />
            skilled in creating robust solutions for web & software
            applications.
          </p>
        </div>
        <ComputersCanvas />
      </div>
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
