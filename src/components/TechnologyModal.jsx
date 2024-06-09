import { Modal, Button } from "react-bootstrap";
import { technologies, tools } from "../constants";
import { height, width } from "@fortawesome/free-solid-svg-icons/fa0";
import { Padding } from "@mui/icons-material";
import CancelIcon from "@mui/icons-material/Cancel";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

const TechnologyModal = ({ show, onHide, item, ballPosition }) => {
  const selectedItem =
    item.type === "technology"
      ? technologies.find((tech) => tech.name === item.name)
      : tools.find((tool) => tool.name === item.name);

  // console.log("Found technology:", selectedTechnology);

  const modalStyle = {
    position: "absolute",
    height: "auto",
    width: "auto",
    // top: ballPosition.y + 2100,
    // left: ballPosition.x - 200,
    top: item.type === "technology" ? ballPosition.y + 2000 : ballPosition.y + 2400,
    left: ballPosition.x - 200,
    // backgroundColor: "#979797",
    backgroundColor: "rgba(151, 151, 151, 0.836)",
    color: "#000000",
    zIndex: 10,
    padding: "1rem 2rem",
    // color: "text-white",
    borderRadius: "1rem",
  };

  const handleShowModal = () => {
    document.body.style.overflow = "auto";
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      onShow={handleShowModal}
      style={modalStyle}
    >
      <Modal.Header closeButton>
        <Tooltip title="Close" style={{ color: "red", float: "right" }}>
          <IconButton variant="secondary" onClick={onHide}>
            <CancelIcon />
          </IconButton>
        </Tooltip>
      </Modal.Header>
      <Modal.Body>
        <Modal.Title
          style={{ marginBottom: "1rem", fontSize: "22px", fontWeight: "bold" }}
        >
          {selectedItem.name}
        </Modal.Title>
        {/* Add additional information or resources here */}
      </Modal.Body>
      <Modal.Footer style={{ marginBottom: "0.5rem" }}>
        <p>{selectedItem.description}</p>
      </Modal.Footer>
    </Modal>
  );
};

export default TechnologyModal;
