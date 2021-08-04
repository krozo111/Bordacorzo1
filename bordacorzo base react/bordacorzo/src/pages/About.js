//import { Link } from 'react-router-dom';
//import NotFound from './NotFound';

export default function About(props) {
  return (
    <section id="about " className="container bg-green-400  max-w-8xl mx-auto">
      <div className="container p-10 mt-5 flex-col text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white ">
            Calidad y Cumplimiento
          </h1>
          <p className="text-2xl lg:text-4xl leading-relaxed text-white ">
            Somos una empresa líder en Bordados y digitalizacion, nos
            caracterizamos por entregar logos perfectos al cliente. 
            Somos una empresa líder en Bordados y digitalizacion, nos
            caracterizamos por entregar logos perfectos al cliente. 
          </p>

          <div className="">
            <a
              href="/"
              className="mr-2.5 cursor-pointer bg-blue-600 hover:bg-blue-500 shadow-xl px-5 py-2 inline-block text-blue-100 hover:text-white rounded"
            >
              Primary
            </a>
            <a
              href="/"
              className="cursor-pointer bg-gray-700 hover:bg-gray-600 shadow-xl px-5 py-2 inline-block text-blue-100 hover:text-white rounded"
            >
              No hay nada
            </a>
          </div>
          </div>
    </section>
  );
}
