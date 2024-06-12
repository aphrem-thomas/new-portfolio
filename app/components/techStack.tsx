export function TechStack() {
  const tech = [
    { image: "css-3.svg", title: "css" },
    { image: "docker-3.svg", title: "docker" },
    { image: "golang-1.svg", title: "go" },
    { image: "html-1.svg", title: "html" },
    { image: "logo-javascript.svg", title: "JavaScript" },
    { image: "next-js.svg", title: "Next JS" },
    { image: "nodejs-3.svg", title: "Node JS" },
    { image: "react-2.svg", title: "React JS" },
  ];
  return (
    <>
    <div className="techstacktitle text-2xl mb-4">Tech Stack</div>
    <div className="tech flex flex-wrap justify-between">
      {tech.map((item) => (
        <div className="techwrapper bg-background rounded-md shadow-sm h-24 w-20 flex flex-col items-center justify-center mb-4" data-aos="fade-up">
          <div className="image h-10 w-10">
            <img className="image h-10 w-10" src={item.image} alt="" />
          </div>
          <div className="techtitle text-center">{item.title}</div>
        </div>
      ))}
    </div>
    </>
  );
}
