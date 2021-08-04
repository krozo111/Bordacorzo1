//import { Link } from 'react-router-dom';
//import NotFound from './NotFound';

export default function About(props) {
  return (
    <section id="about " className="">
      <div className="bg-green-700">
        <div className=" mx-auto flex px-10 py-3 flex-col items-center">
          <div className="md:w-1/2 flex flex-col md:items-start md:text-center md:mb-0 items-center text-center">
            <h1 className="mt-5 lg:container sm:text-4xl text-3xl mb-4 font-bold text-white text-center">
              Calidad y Cumplimiento
            </h1>
            <p className="mb-5 leading-relaxed text-white">
              Somos una empresa líder en Bordados y digitalizacion, nos caracterizamos por entregar
              logos perfectos al cliente. Somos una empresa líder en Bordados y digitalizacion, nos caracterizamos por entregar
              logos perfectos al cliente.
            </p>

            <div className="container m-5">
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
        </div>
      </div>
    </section>
  );
}
