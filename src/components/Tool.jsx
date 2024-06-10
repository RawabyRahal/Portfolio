// import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
// import { technologies, tools } from "../constants"; // Import both from constants
// import { motion } from "framer-motion";
// import { textVariant } from "../utils/motion";
// import { styles } from "../styles";
// import Tooltip from "@mui/material/Tooltip";
// import TechnologyModal from "./TechnologyModal";
// import { useState } from "react";

const Tool = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [selectedItem, setSelectedItem] = useState(null);
//   const [ballPosition, setBallPosition] = useState({ x: 0, y: 0 });

//   const handleItemClick = (item, event) => {
//     const rect = event.target.getBoundingClientRect();
//     setBallPosition({ x: rect.left, y: rect.top });
//     setSelectedItem(item);
//     setShowModal(true);
//   };

//   return (
//     <>
//       <motion.div variants={textVariant()}>
//         <h2 className={`${styles.sectionHeadText} text-center`}>
//           Tools Suite.
//         </h2>
//       </motion.div>

//       <div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
//         {tools.map((tool) => (
//           <Tooltip
//             key={`tool-${tool.name}`} // Ensure unique keys
//             placement="bottom"
//             title={tool.name}
//             style={{ cursor: "pointer" }}
//           >
//             <div
//               className="w-28 h-28"
//               onClick={(e) => handleItemClick({ ...tool, type: "tool" }, e)}
//             >
//               <BallCanvas icon={tool.icon} />
//             </div>
//           </Tooltip>
//         ))}
//         {showModal && (
//           <TechnologyModal
//             show={showModal}
//             onHide={() => setShowModal(false)}
//             item={selectedItem}
//             ballPosition={ballPosition}
//           />
//         )}
//       </div>
//     </>
//   );
};

export default SectionWrapper(Tool, "tools");
