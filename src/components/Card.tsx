"use client";
import React from "react";
import { useState, useEffect } from "react";
import { GithubProject, Language, Job } from "../types/Types";

export function ProjectCard(props: { repo: GithubProject; lang: Language }) {
  
  const [description, setDescription] = useState<string>("");

  useEffect(() => {
    setDescription(props.repo.Description[props.lang]);
  }, [ props.repo.Description, props.lang]);

  const truncatedDescription =
    description.length > 255
      ? description.substring(0, 255) + "..."
      : description;
return (
    <div
      className={`w-full p-2 grid grid-cols-[33%_66%] min-h-40 rounded border border-transparent hover:bg-white/5 backdrop-blur hover:border-[#ffa001]/50 hover:shadow-[0_0_10px_#ffa001]`}
    >
      <div className="flex flex-row gap-4 h-full">
        <img
          src={props.repo.Image}
          alt={props.repo.Name}
          className="w-full self-center"
        />
</div>
        <div className="px-2 h-full gap-1 flex flex-col justify-between">
          <h2 className="font-bold text-lg"> {props.repo.Name}</h2>
        <p className="">{truncatedDescription} </p>
          <div className="flex gap-2 pt-3">
            {props.repo.BuiltWith.map((tech) => (
              <p className="flex  rounded-full  px-2 py-0.5 border bg-[#363b45]/50 border-blue-600/50">
                {tech}
              </p>
            ))}
          </div>
        </div>
      </div>
  );
}

export function JobCard(props: {
  job: Job;
  lang: Language;
  onClick: () => void;
}) {
  const [description, setDescription] = useState<string>("");

  useEffect(() => {
    setDescription(props.job.Description[props.lang]);
  }, [ props.job.Description, props.lang]);

  const truncatedDescription =
    description.length > 255
      ? description.substring(0, 255) + "..."
      : description;

  return (
    <div
      className={`duration-300 w-full grid grid-cols-[25%_75%] p-2 min-h-40 rounded border border-transparent hover:bg-white/5 backdrop-blur  cursor-pointer hover:shadow-[0_0_10px_#ffa001] `}
      onClick={props.onClick}
    >
      {props.job.Belonging}
      <div className="px-2 h-full gap-1 flex flex-col justify-between">
        <h2 className="font-bold text-lg">{props.job.Company}</h2>
        <p className="">{truncatedDescription} </p>
        <div className="flex gap-2 pt-3 flex-wrap ">
          {props.job.Stack.map((tech) => (
            <p className="flex  rounded-full  px-2 py-0.5 border bg-[#363b45]/50 border-blue-600/50">
              {tech}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
