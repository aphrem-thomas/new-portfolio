export function TechStack() {
  const tech = [
    { image: "devicon-css3-plain", title: "css" },
    { image: "devicon-docker-plain", title: "docker" },
    { image: "devicon-go-original-wordmark", title: "go" },
    { image: "devicon-html5-plain", title: "html" },
    { image: "devicon-javascript-plain", title: "JavaScript" },
    { image: "devicon-nextjs-plain colored", title: "Next JS" },
    { image: "devicon-nodejs-plain-wordmark", title: "Node JS" },
    { image: "devicon-react-original", title: "React JS" },
  ];
  return (
    <>
    <div className="techstacktitle text-2xl mb-4">Tech Stack</div>
    <div className="tech flex flex-wrap justify-between">
      {tech.map((item) => (
        <div key={item.title} className="techwrapper h-24 w-20 flex flex-col items-center justify-center mb-4" data-aos="fade-up">
          <div className="image h-10 w-10">
          <i className={`text-4xl ${item.image}`}></i>
          </div>
          <div className="techtitle text-center">{item.title}</div>
        </div>
      ))}
    </div>
    </>
  );
}
