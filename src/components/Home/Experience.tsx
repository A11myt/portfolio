"use client";
import React, { useState, useEffect } from "react";
import { JobCard } from "@/src/components/Card";
import data from "@/data/Experience.json";
import { Job, Language } from "@/src/types/Types";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "@/src/components/Modal";

export default function Experience(props: { lang: Language }) {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [hoveredJob, setHoveredJob] = useState<string | null>(null);
  const label: string[] = props.lang == "de" ? labelStore["de"] : labelStore["en"];

  useEffect(() => {
    const typedData: Job[] = data;
    setJobs(typedData);
  }, []);

  return (
    <div className="flex flex-col gap-y-4 pb-10">
      {jobs.map((job) => (
        <div
          key={job.Company}
          onMouseEnter={() => setHoveredJob(job.Company)}
          onMouseLeave={() => setHoveredJob(null)}
          onTouchStart={() => setHoveredJob(job.Company)}
          onTouchEnd={() => setHoveredJob(null)}
          className={`duration-300 ${
            hoveredJob && hoveredJob !== job.Company ? "opacity-50" : ""
          }`}
        >
          {selectedJob && selectedJob.Company === job.Company && (
            <Modal
              job={selectedJob}
              lang={props.lang}
              onClose={() => setSelectedJob(null)}
            />
          )}
          <JobCard
            job={job}
            lang={props.lang}
            onClick={() => setSelectedJob(job)}
          />
        </div>
      ))}
      <div className="group flex flex-row py-2 gap-2 cursor-pointer items-center hover:text-[#ffa001]">
        {label[0]}
          <FontAwesomeIcon
            icon={faArrowRight}
            className="relative w-4 h-4 text-white -rotate-45 duration-300 group-hover:pb-2 group-hover:pl-2 group-hover:text-[#ffa001]"
          />
        </div>
    </div>
  );
}

const labelStore = {
  de: ["Siehe kompletten Lebenslauf"],
  en: ["View full CV"],
};
