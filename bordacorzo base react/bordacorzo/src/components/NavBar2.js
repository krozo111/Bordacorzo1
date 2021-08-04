export default function NavBar2() {
  return (
    <>
      <header id="nav">
        <p className="text-black text-center ">
          <img
            alt="img"
            className="inline-flex"
            src="../../assets/icons/colombia7.png"
          ></img>
          &nbsp; Cra 4a Este 29-41 San Mateo, Soacha. Cundinamarca &nbsp;
          <img
            alt="img"
            className="inline-flex"
            src="../assets/icons/phone.png"
          ></img>
          &nbsp; 7812273
        </p>

        <nav className="container items-center inline-flex justify-around">
         
           
              <img
                src="../../assets/img/logoborda2sm.jpg"
                alt="Bordacorzo"
                className=""
              />
           
            <div className="hidden md:inline-flex ">
            <div className="mr-4">Inicio</div>
            <div className="mr-4">Servicios</div>
            <div className="">Contacto</div>
            </div>
          
        </nav>
      </header>
    </>
  );
}
