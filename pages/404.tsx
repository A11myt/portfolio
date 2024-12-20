import Link from "next/link";
import Head from "next/head";

export default function Custom404() {
  return (
    <div className="bg-grid" style={{ width: "100%", height: "100vh" }}>
      <Head>
        <title>404 - Page Not Found</title>
        <meta name="description" content="The page you are looking for might have been removed or is temporarily unavailable." />
      </Head>
      <main className="flex flex-col items-center justify-center h-screen text-[#e1e4eb]">
        <h2 className="text-5xl font-extrabold">404 - Page Not Found</h2>
        <p className="text-2xl mt-4">The page you are looking for might have been removed or is temporarily unavailable.</p>
        <Link href="/">
          <p>Back to Home</p>
        </Link>
      </main>
    </div>
  );
}