import Image from "next/image";
import Aos from "./components/aos";

export default function Home() {
  return (
    <>
      <Aos/>
      <main className="w-full flex flex-col items-center">
      <div className="hello p-6 flex flex-col h-[75vh] items-center justify-center md:flex-row md:container">
        <div className="profileAndWelcome flex-col" data-aos="fade-right"  >
          <div className="pic rounded-xl">
            <img className="rounded-full h-16" src="/aphrem.jpg" alt="" />
          </div>
          <div className="salutation text-4xl mt-4">
            Hello it&apos;s Aphrem Thomas
          </div>
        </div>
        <div className="intro flex flex-col justify-between mt-6 h-40 md:ml-20" data-aos="fade-right" 
        data-aos-duration="1000">
          <div className="introheader text-2xl">
            Web Developer based in Ottawa Canada.
          </div>
          <div className="introsubheader text-contrast-text-secondary">
              JavaScript | React | NodeJS Developer
          </div>
          <div className="connectButtons">
            <a href="/contact">
              <button className="h-10 w-32 rounded-md bg-contrast-button-main text-background">Let&apos;s Connect</button>
            </a>
          </div>
        </div>
      </div>
      <div className="boasting w-full bg-background-secondary h-96"></div>
    </main>
    </>
  );
}
