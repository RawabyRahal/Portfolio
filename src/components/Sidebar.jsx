import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Tooltip from "@mui/material/Tooltip";

const Sidebar = () => {
  return (
    <section className="fixed left-0 top-0 h-full bg-primary">
      <div className="flex flex-col justify-center items-start h-full ml-6">
        <Tooltip title="LinkedIn" placement="right">
          <a
            href="https://www.linkedin.com/in/rawaby-rahal-3aa508184/"
            className="mb-6"
            target="_blank"
          >
            <LinkedInIcon style={{ color: "white", fontSize: 30 }} />
          </a>
        </Tooltip>

        <Tooltip title="GitHub" placement="right">
          <a href="https://github.com/RawabyRahal" target="_blank">
            <GitHubIcon style={{ color: "white", fontSize: 30 }} />
          </a>
        </Tooltip>
      </div>
    </section>
  );
};

export default Sidebar;
