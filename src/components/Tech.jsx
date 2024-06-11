import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { tools } from "../constants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import Tooltip from "@mui/material/Tooltip";
import TechnologyModal from "./TechnologyModal";
import { useState } from "react";

const Tech = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [ballPosition, setBallPosition] = useState({ x: 0, y: 0 });

  const handleItemClick = (item, event) => {
    const rect = event.target.getBoundingClientRect();
    setBallPosition({ x: rect.left, y: rect.top });
    setSelectedItem(item);
    setShowModal(true);
  };

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
          <Tooltip
            key={technology.name}
            placement="bottom"
            title={technology.name}
            style={{ cursor: "pointer" }}
          >
            <div
              className="w-28 h-28"
              key={technology.name}
              onClick={(e) =>
                handleItemClick({ ...technology, type: "technology" }, e)
              }
            >
              <BallCanvas icon={technology.icon} />
            </div>
          </Tooltip>
        ))}
        {showModal && (
          <TechnologyModal
            show={showModal}
            onHide={() => setShowModal(false)}
            item={selectedItem}
            ballPosition={ballPosition}
          />
        )}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "technologies");
