import { projects } from "../Data";

export default function Projects() {
  return (
    <section id="projects" className="text-black body-font ">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <img
          alt="Nada"
            src="../../assets/icons/bordadora.png"
            className="mx-auto inline-block w-10 mb-4"
          />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-black">
            Nosotros
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Somos una empresa líder en Bordados, confección y distribución de
            elementos de seguridad industrial, nos caracterizamos por entregar
            logos perfectos al cliente. Ofrecemos servicio profesional
            computarizado para grandes y pequeñas empresas, tenemos los mas
            altos estándares en materiales de producción e insumos. Siempre
            cumplimos con los tiempos de entrega. Elaboramos tus prendas con
            estándares de calidad, materiales resistentes, cumpliendo con las
            normas establecidas.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4"
            >
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed text-white">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
