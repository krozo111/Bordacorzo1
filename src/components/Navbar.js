import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <p className="text-black text-center ">
        <img
          alt="img"
          className="inline-flex "
          src="../../assets/icons/colombia7.png"
        ></img>
        &nbsp; Cra 4a Este 29-41 San Mateo, Soacha. Cundinamarca &nbsp;
        <img
          alt="img"
          className="inline-flex"
          src="../../assets/icons/phone.png"
        ></img>
        &nbsp; 7812273
      </p>

      <div className="w-screen items-center md:sticky top-0 z-10 bg-opacity-25 backdrop-filter backdrop-blur-lg p-1 inline-flex ">
        <img
          src="../../assets/img/logoborda2sm.png"
          alt="Bordacorzo"
          className="h-40px w-350px"
        />
        <ul className=""></ul>
        <li></li>
        <li></li>
        <li></li>
        <div className="ml-10 hidden lg:inline-flex ">
          <div className="lg:inline-flex lg:flex-row flex flex-col lg:h-auto ">
            <Link
              to="/about"
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black items-center justify-center hover:bg-gray-900 hover:text-white"
            >
              <span>Inicio</span>
            </Link>
            <a
              href="#projects"
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black items-center justify-center hover:bg-gray-900 hover:text-white"
            >
              <span>Empresa</span>
            </a>
            <a
              href="#about"
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black items-center justify-center hover:bg-gray-900 hover:text-white"
            >
              <span>Servicios</span>
            </a>
            <a
              href="#about"
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black items-center justify-center hover:bg-gray-900 hover:text-white"
            >
              <span>Galeria</span>
            </a>

            <a
              href="#contact"
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black items-center justify-center hover:bg-gray-900 hover:text-white"
            >
              <span>Contactenos</span>
            </a>
          </div>
        </div>
      </div>
      <br />
    </>
  );
}
