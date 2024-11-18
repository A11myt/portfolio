// import { useEffect, useState } from "react";

export default function About(props: { lang: string }) {
  return props.lang == "de" ? De() : En(); 
}

function De() {
  return (
    <div className="flex flex-col gap-4 py-2 lg:py-0">
      <p>
        Im Jahr 2016 habe ich im Rahmen eines HTML-Grundlagenkurses mit dem
        Programmieren begonnen und bin dabei schnell zur JavaScript- und
        Webentwicklung gekommen. Heute freue ich mich, dort weiterzumachen, wo
        ich damals begonnen habe – allerdings mit modernen Technologien wie
        TypeScript, Tailwind und C#.
      </p>
      <p>
        Mein Hauptaugenmerk liegt aktuell auf ganzheitlichen Lösungen, bei
        denen die Kommunikation zwischen Backend und Frontend schnell und
        effizient funktioniert. Besonders genieße ich es, komplexe Vorgänge
        einfach darzustellen und mithilfe einer gut strukturierten,
        benutzerfreundlichen Oberfläche selbsterklärend abzubilden.
      </p>
      <p>
        In meiner Freizeit setze ich mich gerne mit neuen Technologien
        auseinander und baue verschiedene Prototypen. Wenn ich nicht am Computer
        sitze oder Zeit mit meiner Familie verbringe, spiele ich Baseball,
        schaue Formel 1 oder sitze entspannt am Lagerfeuer – in Dark Souls.
      </p>
    </div>
  );
}

function En() {
  return (
    <div className="flex flex-col gap-4 py-2 lg:py-0">
      <p>
        In 2016, I started programming through a basic HTML course and quickly
        moved on to JavaScript and web development. Today, I&apos;m excited to
        continue where I began back then – but now with modern technologies like
        TypeScript, Tailwind, and C#.
      </p>
      <p>
        Currently, my focus is on holistic solutions where communication
        between the backend and frontend is fast and efficient. I especially
        enjoy simplifying complex processes and presenting them in a
        well-structured, user-friendly, and self-explanatory interface.
      </p>
      <p>
        In my free time, I like exploring new technologies and building various
        prototypes. When I’m not at the computer or spending time with my
        family, I play baseball, watch Formula 1, or relax by the campfire – in
        Dark Souls.
      </p>
    </div>
  );
}
