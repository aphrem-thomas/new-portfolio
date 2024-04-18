import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full md:container">
      <div className="hello p-2 flex flex-col h-[75vh] items-center justify-center md:flex-row">
        <div className="profileAndWelcome flex-col">
          <div className="pic rounded-xl">
            <img className="rounded-full h-16" src="/aphrem.jpg" alt="" />
          </div>
          <div className="salutation text-4xl mt-4">
            Hello it&apos;s Aphrem Thomas
          </div>
        </div>
        <div className="intro flex flex-col justify-between mt-6 h-40">
          <div className="introheader text-2xl">
            Web Developer based in Ottawa Canada.
          </div>
          <div className="introsubheader text-contrast-text-secondary">
              JavaScript | React | NodeJS Developer
          </div>
          <div className="connectButtons">
            <button className="h-10 w-32 rounded-md bg-contrast-button-main text-background">Let's Connect</button>
          </div>
        </div>
      </div>
      <div className="boasting bg-background-secondary h-96"></div>
    </main>
  );
}
