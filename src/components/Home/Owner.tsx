import { useState, useEffect } from "react";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Owner(props: {
  location: string;
  language: string;
  handleItemClick: (hash: string) => void;
}) {
  const [windowLocation, setWindowLocation] = useState(props.location);

  useEffect(() => {
    setWindowLocation(props.location);
  }, [props.location]);

  const labels = props.language == "de" ? labelStore.de : labelStore.en;

  return (
    <div className="lg:sticky pt-8 md:pt-0 lg:top-0 lg:flex lg:max-h-screen lg:w-full lg:flex-col lg:justify-between lg:py-24">
      <div className="flex flex-col gap-2 pb-4 lg:pb-0">
        <h1 className="text-5xl md:text-6xl font-black md:leading-4 mb-4">Jason Johnson</h1>
        <h2 className="font-extrabold">Full Stack Developer</h2>
        <p className="pt-1 text-[#444955] text-sm font-bold">
          Passion for Technology - Focus on Results
        </p>
      </div>
      <div className="visible lg:hidden h-auto w-full z-10 fixed left-0 top-0">
        <div className="p-5 font-bold backdrop-blur">
          {windowLocation === "#about"
            ? labels[0]
            : windowLocation === "#experience"
            ? labels[1]
            : windowLocation === "#projects"
            ? labels[2]
            : ""}
        </div>
      </div>
      <ul className="hidden lg:visible lg:pb-10 lg:gap-y-4 lg:flex lg:flex-col">
        <li
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => props.handleItemClick("#about")}
        >
          <hr
            className={`duration-300 ${props.location === "#about" ? "w-10" : "w-4"}`}
          />
          {labels[0]}
        </li>
        <li
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => props.handleItemClick("#experience")}
        >
          <hr
            className={`duration-300 ${props.location === "#experience" ? "w-10" : "w-4"}`}
          />
          {labels[1]}
        </li>
        <li
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => props.handleItemClick("#projects")}
        >
          <hr
            className={`duration-300 ${props.location === "#projects" ? "w-10" : "w-4"}`}
          />
          {labels[2]}
        </li>
      </ul>

      <div className="flex gap-4">
        <a href="https://github.com/A11myt">
          <FontAwesomeIcon icon={faGithub} className="h-8" />
        </a>
        <a href="https://www.linkedin.com/in/jason-johnson-8b305b82/">
          <FontAwesomeIcon icon={faLinkedin} className="h-8" />
        </a>
        <a href="https://www.instagram.com/jason_jo94">
          <FontAwesomeIcon icon={faInstagram} className="h-8" />
        </a>
      </div>
    </div>
  );
}

const labelStore = {
  de: ["Über mich", "Erfahrung", "Projekte"],
  en: ["About", "Experience", "Projects"],
};
