import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Sidebar = () => {
  return (
    <section className="fixed left-0 top-0 h-full bg-primary">
      <div className="flex flex-col justify-center items-start h-full ml-6">
        <a
          href="https://www.linkedin.com/in/rawaby-rahal-3aa508184/"
          className="mb-6"
          title="LinkedIn"
          target="_blank"
        >
          <LinkedInIcon style={{ color: "white", fontSize: 30 }} />
        </a>
        <a
          href="https://github.com/RawabyRahal"
          title="GitHub"
          target="_blank"
        >
          <GitHubIcon style={{ color: "white", fontSize: 30 }} />
        </a>
      </div>
    </section>
  );
};

export default Sidebar;
