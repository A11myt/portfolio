import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
// import { Language } from '@/src/types/Types';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Manifest',
  description: 'This page shows my manifest/mindset during programming.',
  keywords: 'projects, portfolio, Jason Johnson, Odenwald',
};

export type ChapterBlock =
  | {
      type: 'text';
      text: string;
    }
  | {
      type: 'exercise';
      text: string;
      content: string;
    };

export type Chapter = {
  chapter: string;
  title: string;
  content: ChapterBlock[];
};

export type Manifest = {
  version: string;
  name: string;
  description: string;
  content: Chapter[]; // <- wichtig: Array, keine { de, en } mehr
};

export default function Index() {
  const [manifest, setManifest] = useState<Manifest | null>(null);
  // const [language, setLanguage] = useState<"de" | "en">("de");

  // const [language, setLanguage] = useState<string | undefined>(undefined);
  // useEffect(() => {
  //   if (lang) {
  //     setLanguage(lang as Language);
  //   }
  // }, [lang]);

  useEffect(() => {
    import('../../data/manifest.json').then((mod) => setManifest(mod.default[0] as Manifest));
  }, []);

  if (!manifest) return <div>Lädt...</div>;

  return (
    <div style={{ fontFamily: 'sans-serif', margin: '2em' }}>
      <h1>{manifest.name}</h1>
      <p>{manifest.description}</p>
      {manifest.content.de.map((chapter) => (
        <div key={chapter.chapter}>
          <h2>{chapter.title}</h2>
          {Array.isArray(chapter.content) &&
            chapter.content.map((item, idx) => {
              if (item.type === 'heading') return <h3 key={idx}>{item.text}</h3>;
              if (item.type === 'paragraph') return <p key={idx}>{item.text}</p>;
              if (item.type === 'quote') return <blockquote key={idx}>{item.text}</blockquote>;
              return null;
            })}
        </div>
      ))}
    </div>
  );
}

// const labelStore = {
//   en: {
//     title: 'Manifest',
//     description: 'This page shows the manifest of the project.',
//     keywords: 'manifest, project, documentation',
//   },
//   de: {
//     title: 'Manifest',
//     description: 'Diese Seite zeigt das Manifest des Projekts.',
//     keywords: 'manifest, projekt, dokumentation',
//   },
// };
