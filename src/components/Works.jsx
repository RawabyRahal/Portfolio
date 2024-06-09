import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import BuildIcon from "@mui/icons-material/Build";

import {
  LightningBoltIcon,
  GlobeAltIcon,
  DatabaseIcon,
  CodeIcon,
  DesktopComputerIcon,
  ServerIcon,
  TerminalIcon,
  ChipIcon,
  WifiIcon,
} from "@heroicons/react/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCogs } from "@fortawesome/free-solid-svg-icons";
import Tooltip from "@mui/material/Tooltip";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
        style={{
          zIndex:2,
          // boxShadow: '0px 4px 10px rgb(180, 171, 171)',
        }}
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end rounded-2xl m-2 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-2xl flex justify-center items-center cursor-pointer"
            >
              <Tooltip title="source code" placement="bottom">
                <img src={github} className="w-1/2 h-1/2 object-contain" />
              </Tooltip>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="ml-1 flex gap-3 mt-4">
          <Tooltip title="Technologies Used" placement="top">
            <div>
              <CodeIcon
                // icon={faCogs}
                className="h-7 w-7 text-yellow-500 "
                // size="xl"
              />
            </div>
          </Tooltip>
          <div className="flex flex-wrap gap-2 ml-1">
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                {tag.name} |
              </p>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>
          Explore my creative endeavors
        </p>
        <h2 className={`${styles.sectionHeadText}`}>My Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] "
        >
          Outlined below are several projects showcasing my programming
          proficiency and experience. Each project is accompanied by a link to
          its code repository, illustrating my capability to address complex
          challenges, adapt to diverse technologies, and manage project
          workflows effectively.
        </motion.p>
      </div>

      {/* <div className="flex justify-center space-x-4">
        <LightningBoltIcon className="h-6 w-6 text-yellow-500" />
        <GlobeAltIcon className="h-6 w-6 text-blue-500" />
        <DatabaseIcon className="h-6 w-6 text-green-500" />
        <DesktopComputerIcon className="h-6 w-6 text-gray-500" />
        <ServerIcon className="h-6 w-6 text-indigo-500" />
        <TerminalIcon className="h-6 w-6 text-yellow-500" />
        <ChipIcon className="h-6 w-6 text-red-500" />
        <WifiIcon className="h-6 w-6 text-blue-500" />
        <CodeIcon className="h-6 w-6 text-yellow-500" />
        <MicrochipIcon className="h-6 w-6 text-green-500" />
      </div> */}

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
