export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d823.5942787766048!2d-74.20512754740047!3d4.580851929890924!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9fcfeb7ec303%3A0x94368817f2a178ec!2sBordacorzo!5e0!3m2!1sen!2sau!4v1626056909519!5m2!1sen!2sau"
          />
          <div className="bg-gray-500 relative flex flex-wrap py-6 rounded shadow-md px-2">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                Cra 4a Este 29-41 <br />
                San Mateo, Soacha
              </p>
            </div>
            <div className="lg:w-1/2 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>

              <button className="text-black  leading-relaxed">
                bordacorzo@hotmail.com
              </button>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-3 ">
                TELEFONO
              </h2>
              <p className="leading-relaxed">1 7812273</p>
            </div>
          </div>
        </div>
        <form
          id="form1"
          name="contact"
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 bg-gray-50"
        >
          <h2 className="text-black sm:text-4xl text-3xl mb-1 font-medium title-font">
            Contactenos
          </h2>
          <p className="leading-relaxed mb-5">
            Envianos tu informacion para ponernos en contacto.
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="text-lg text-bold">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border border-gray-700 text-gray-800"
              placeholder="Ingresa tu Nombre"
              required
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-md text-bold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-700"
              placeholder="Ingresa email"
              required
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-md text-bold">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full border border-gray-700 h-32 py-1 px-3 resize-none"
              placeholder="Dejanos tu mensaje"
              required
            />
          </div>
          <button
            type="submit"
            form="form1"
            className="text-white bg-green-400 border-0 py-2 px-6 focus:outline-none hover:bg-green-500 rounded text-lg"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}
