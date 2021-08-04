import React, { useState } from "react";

function Hero() {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <div className="relative w-full h-full">
        <div className="hidden md:block">
          <img
            className="absolute bg-cover bg-center w-full h-full inset-0"
            src="https://cdn.tuk.dev/assets/templates/prodify/background.png"
            alt= "imagen"
          />
        </div>
        <nav className="lg:hidden relative z-50">
          <div className="flex py-2 justify-between items-center px-4">
            <div>
            <img
                src="../../assets/img/logoborda2sm.jpg"
                alt="Bordacorzo"
                className=""
              />
            </div>
            <div className="visible flex items-center">
              <ul
                id="list"
                className={
                  menu
                    ? "top-100 p-2 border-r bg-white absolute rounded top-0 left-0 right-0 shadow mt-24"
                    : " hidden p-2 border-r bg-white absolute rounded top-0 left-0 right-0 shadow mt-24"
                }
              >
                <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                  <a href="/">
                    <span className="ml-2 font-bold">Inicio</span>
                  </a>
                </li>
                <li
                  className="flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center"
                  onclick="dropdownHandler(this)"
                >
                  <a href="/">
                    <span className="ml-2 font-bold">Nuestra Empresa</span>
                  </a>
                </li>
                <li className=" cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                  <a href="/">
                    <span className="ml-2 font-bold">Contacto</span>
                  </a>
                </li>
                <li
                  className=" flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center"
                  onclick="dropdownHandler(this)"
                >
                  <a href="/">
                    <span className="ml-2 font-bold">Recursos</span>
                  </a>
                </li>
                
              </ul>
              <div className="xl:hidden">
                {!menu && (
                  <svg
                    onClick={() => setMenu(true)}
                    id="open"
                    aria-haspopup="true"
                    aria-label="Main Menu"
                    xmlns="http://www.w3.org/2000/svg"
                    className="show-m-menu icon icon-tabler icon-tabler-menu"
                    width={28}
                    height={28}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <line x1={4} y1={8} x2={20} y2={8} />
                    <line x1={4} y1={16} x2={20} y2={16} />
                  </svg>
                )}
                {menu && (
                  <svg
                    onClick={() => setMenu(false)}
                    aria-label="Close"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <line x1={18} y1={6} x2={6} y2={18} />
                    <line x1={6} y1={6} x2={18} y2={18} />
                  </svg>
                )}
              </div>
            </div>
          </div>
        </nav>
        <nav className="  f-f-l relative z-10">
          <div className="relative z-10 mx-auto container hidden w-full px-4 xl:px-0 lg:flex justify-between items-center py-11">
            <div>
            <img
                src="../../assets/img/logoborda2sm.jpg"
                alt="Bordacorzo"
                className=""
              />
            </div>
            <div className="flex  items-center text-white text-lg font-bold ">
              <ul className="flex  items-center pr-3 xl:pr-12">
                <li className="cursor-pointer">
                  <a href="/">Inicio</a>
                </li>
                <li className="pl-3 lg:pl-5 xl:pl-8 cursor-pointer">
                  <a href="/">Nuestra Empresa</a>
                </li>
                <li className="pl-3 lg:pl-5 xl:pl-8 cursor-pointer">
                  <a href="/">Contacto</a>
                </li>
                <li className="pl-3 lg:pl-5 xl:pl-8 cursor-pointer">
                  <a href="/">Recursos</a>
                </li>
              </ul>
              
            </div>
          </div>
        </nav>
        <div className="relative px-4 xl:px-0  container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 pt-16 lg:pt-36 gap-8">
          <div className="text-color">
            <h1 className="text-6xl w-1/2 xl:w-full xl:text-9xl font-black f-f-l">
              Calidad y Cumplimiento.
            </h1>
            <div className="f-f-r text-xl lg:text-3xl pb-20 sm:pb-0 pt-10 xl:pt-20">
              <h2>Como una empresa lider en bordados y digitalizacion.</h2>
              <h2>Mas info</h2>
              <h2> continua info</h2>
            </div>
            <button className="hover:opacity-90 text-xl w-full xl:text-3xl xl:w-10/12 mt-4 xl:mt-11 f-f-r py-6 bg-indigo-700 text-white text-bold">
              Let's Build
            </button>
          </div>
          <div className>
            <img
              className="w-full lg:-ml-16 xl:-ml-44"
              src="./assets/img/1.jpeg"
              alt= "Imagen"
            />
          </div>
        </div>
      </div>

      <style>{`
        .top-100 {
            animation: slideDown .5s ease-in-out;
        }

        @keyframes slideDown {
            0% {
                top: -50%;
            }

            100% {
                top: 0;
            }
        }

        * {
            outline: none !important;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            -webkit-tap-highlight-color: transparent;
        } `}</style>
    </>
  );
}

export default Hero;
