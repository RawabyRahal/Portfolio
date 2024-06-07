import { styles } from "../styles";
import ComputersCanvas from "./canvas/Computers";
import { motion } from "framer-motion";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 xl:top-[160px] xs:max-w-12xl xl:flex-row flex-col-reverse max-w-8xl  ml-20 mx-auto ${styles.paddingX} flex flex-row items-start`}
      >
        <div className="xs: mb-[120px]">
          <h1 className={`${styles.heroHeadText} text-white `}>
            Hi There! 👋🏻 <br className="sm:block hidden" />
            <div className=" sm:whitespace-nowrap">
              {" "}
              I'm <span className="space-gradient">Rawaby Rahal</span>
            </div>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Software Engineer and Full-Stack Developer,{" "}
            <br className="sm:block hidden" />
            skilled in creating effective solutions for web and software
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
