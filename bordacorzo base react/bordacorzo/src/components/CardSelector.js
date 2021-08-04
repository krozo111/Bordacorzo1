import Cards from "./Cards";
//import { dataCard1, dataCard2, dataCard3 } from "../Data";
import { projects } from "../Data";

const CardSelector = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {projects.map(function (d, idx) {
        return (
          <section key={idx}>
            <Cards
              title={d.title}
              description={d.description}
              image={d.image}
            />
          </section>
        );
      })}
    </div>
  );
};
export default CardSelector;
