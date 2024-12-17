import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Owner from "@/src/components/Home/Owner";
import About from "@/src/components/Home/About";
import Experience from "@/src/components/Home/Experience";
import Projects from "@/src/components/Home/Projects";
import applyMouseGlow from "@/src/utils/MouseGlow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { Language } from "@/src/types/Types";
import Head from "next/head";


export default function Home() {
  applyMouseGlow("hover-container");
  const [locationHash, setLocationHash] = useState("#about");

  const router = useRouter();
  const { lang } = router.query;
  const [language, setLanguage] = useState<Language>("de");

  useEffect(() => {
    if (lang) {
      setLanguage(lang as Language);
    }
  }, [lang]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash;
      setLocationHash(hash);
      if (hash) {
        const element = document.getElementById(hash.replace("#", ""));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  }, []);

  const handleItemClick = (hash: string) => {
    setLocationHash(hash);
    const element = document.getElementById(hash.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        window.history.replaceState(null, hash);
      }, 300);
    }
  };

  useEffect(() => {
    const createObserver = () => {
      const thresholdValue = window.innerWidth <= 768 ? 0 : 0.5; // No threshold on mobile

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const id = entry.target.getAttribute("id");
              if (id && `#${id}` !== window.location.hash) {
                window.history.replaceState(null, `#${id}`);
                setLocationHash(`#${id}`);
              }
            }
          });
        },
        { threshold: thresholdValue },
      );

      const sections = document.querySelectorAll("section");
      sections.forEach((section) => observer.observe(section));

      return observer;
    };

    let observer = createObserver();

    const handleResize = () => {
      observer.disconnect();
      observer = createObserver();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  const toggleLanguage = () => {
    setLanguage(language === "de" ? "en" : "de");
  };

  return (
    <div className={`bg-grid overflow-auto w-full h-[100vh] fixed`}>
      <Head>
        <title>Jason Johnson - Portfolio</title>
        <meta name="description" content="Jason Johnson's portfolio website" />
        <meta name="keywords" content="Jason Johnson, Portfolio, Web Developer" />

        <meta property="og:title" content="Jason Johnson - Portfolio" />
        <meta property="og:description" content="Jason Johnson's portfolio website" />
        <meta property="og:image" content="/opengraph-image.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

      </Head>
      <div className="" id="hover-container">
        <main className="mx-auto h-full w-full min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0 text-[#e1e4eb]">
          <div className="lg:flex h-full lg:justify-between lg:gap-4">
            <Owner
              location={locationHash}
              handleItemClick={handleItemClick}
              language={language}
            />
            <div className="flex flex-col h-full w-full gap-y-4">
              <section className=" lg:pb-20 lg:py-24" id="about" title="About">
                <About lang={language} />
              </section>
              <section id="experience" title="Experience">
                <Experience lang={language} />
              </section>
              <section id="projects" title="Projects">
                <Projects lang={language} />
              </section>
              <div className="pb-4 xl:pb-24">
                <p>
                  &copy; {new Date().getFullYear()} Jason Johnson. All Rights
                  Reserved.
                </p>
              </div>
            </div>
          </div>
          <div className="z-10 fixed right-4 top-4 cursor-pointer">
            <FontAwesomeIcon
              icon={faLanguage}
              className=" h-10"
              onClick={() => toggleLanguage()}
            />
          </div>
        </main>
      </div>
    </div>
  );
}
