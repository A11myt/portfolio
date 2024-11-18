import { useRouter } from "next/router";
import { GithubProject } from "@/src/types/Types";
import { useState, useEffect, useMemo } from "react";
import data from "../../data/Projects.json";
import Link from "next/link";
import { applyMouseGlow } from "@/src/utils/MouseGlow";
import { DateConverter } from "@/src/utils/DateConverter";
import {
  faArrowLeft,
  faLanguage,
  faArrowDownWideShort,
  faArrowUpWideShort,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Index() {
  const router = useRouter();
  const { lang } = router.query;
  const [language, setLanguage] = useState<string | undefined>(undefined);
  const labels = language == "de" ? labelStore.de : labelStore.en;
  useEffect(() => {
    if (lang) {
      setLanguage(lang as string);
    }
  }, [lang]);

  const [repos, setRepos] = useState<GithubProject[]>([]);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  applyMouseGlow("hover-container");
  useEffect(() => {
    const typedData: GithubProject[] = data;
    setRepos(typedData);
  }, []);

  const parseDate = (dateStr: string) => {
    const [month, year] = dateStr.split("-");
    const monthIndex = new Date(Date.parse(month + " 1, 2021")).getMonth();
    return new Date(parseInt(year), monthIndex);
  };

  const sortedRepos = useMemo(() => {
    return [...repos].sort((a, b) => {
      const dateA = parseDate(a.Year);
      const dateB = parseDate(b.Year);
      return sortOrder === "asc"
        ? dateA.getTime() - dateB.getTime()
        : dateB.getTime() - dateA.getTime();
    });
  }, [repos, sortOrder]);

  const toggleLanguage = () => {
    setLanguage(language === "de" ? "en" : "de");
  };

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };
  //add backdrop-blur but hold the splitting line
  return (
    <div className={`bg-grid `} style={{ width: "100%", height: "100vh" }}>
      <div className="" id="hover-container">
        <div className="mx-auto w-full min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0 text-[#e1e4eb]">
          <div className="flex flex-col pt-2 space-y-6">
            <Link href={`/?lang=${language}`}>
              <FontAwesomeIcon icon={faArrowLeft} className="group w-5 hover" />
              {labels[0]}
            </Link>
            <h2 className="text-5xl h-auto font-extrabold leading-4">
              {labels[1]}
            </h2>
            <div className="overflow-x-auto pt-6 w-full">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="font-bold text-left border-b border-[#e1e4eb] backdrop-blur bg-[#1f242b]/50">
                    <th
                      className="flex col items-center px-3 py-4 gap-2"
                      onClick={toggleSortOrder}
                    >
                      {labels[2]}
                      <FontAwesomeIcon
                        icon={
                          sortOrder == "asc"
                            ? faArrowUpWideShort
                            : faArrowDownWideShort
                        }
                      />{" "}
                    </th>
                    <th className="px-3 py-4">{labels[3]}</th>
                    <th className="px-3 py-4">{labels[4]}</th>
                    <th className="px-3 py-4">{labels[5]}</th>
                    <th className="px-3 py-4">{labels[6]}</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedRepos.map((repo, i) => (
                    <tr
                      key={i}
                      className="border-b border-[#e1e4eb]/20 even:bg-[#1f242b]/50 odd:bg-[#e1e4eb]/5 "
                    >
                      <td className="px-4 py-4">
                        {DateConverter("de", repo.Year)}
                      </td>
                      <td className="px-4 py-2">{repo.Name}</td>
                      <td className="px-4 py-2">{repo.MadeAt}</td>
                      <td className="px-4 py-2">{repo.BuiltWith}</td>
                      <td className="px-4 py-2">
                        <a
                          href={repo.Link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline"
                        >
                          {repo.Link}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="z-10 fixed right-4 top-4 cursor-pointer">
              <FontAwesomeIcon
                icon={faLanguage}
                className=" h-10"
                onClick={() => toggleLanguage()}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const labelStore = {
  de: [
    "Zurück zu Jason Johnson",
    "Alle Projekte",
    "Jahr",
    "Projekt",
    "Gemacht bei",
    "Gebaut mit",
    "Link",
  ],
  en: [
    "Back to Jason Johnson",
    "All Projects",
    "Year",
    "Project",
    "Made at",
    "Built with",
    "Link",
  ],
};
