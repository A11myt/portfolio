"use client";
import React, { useState, useEffect } from "react";
import { ProjectCard } from "@/src/components/Card";
import Link from "next/link";
import data from "@/data/Projects.json";
import { GithubProject, Language } from "@/src/types/Types";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Projects(props: { lang: Language }) {
  const [repos, setRepos] = useState<GithubProject[]>([]);
  const [hoveredJob, setHoveredProject] = useState<string | null>(null);
  const label: string[] =
    props.lang == "de" ? labelStore["de"] : labelStore["en"];

  useEffect(() => {
    const typedData: GithubProject[] = data;
    setRepos(typedData);
  }, []);

  return (
    <div className=" flex flex-col gap-3">
      {repos.map((repo) =>
        repo.frontPage ? (
          <div
            key={repo.Name}
            onMouseEnter={() => setHoveredProject(repo.Name)}
            onMouseLeave={() => setHoveredProject(null)}
            onTouchStart={() => setHoveredProject(repo.Name)}
            onTouchEnd={() => setHoveredProject(null)}
            className={`duration-300 ${
              hoveredJob && hoveredJob !== repo.Name ? "opacity-50" : ""
            }`}
          >
            <ProjectCard repo={repo} lang={props.lang} />
          </div>
        ) : null,
      )}
      <Link
        href={`/projects?lang=${props.lang}`}
        className="flex flex-row py-2 gap-3"
      >
      <div className="group flex flex-row py-2 gap-2 cursor-pointer items-center hover:text-[#ffa001]">
        {label[1]}
          <FontAwesomeIcon
            icon={faArrowRight}
            className="relative w-4 h-4 text-white -rotate-45 duration-300 group-hover:pb-2 group-hover:pl-2 group-hover:text-[#ffa001]"
          />
        </div>
      </Link>
    </div>
  );
}

const labelStore = {
  de: ["Projekt", "Projekt Archive"],
  en: ["Project", "All Projects"],
};
