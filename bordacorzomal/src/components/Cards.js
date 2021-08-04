import { Card, Icon, Image } from "semantic-ui-react";

export const Cards = () => {
  return (
    <section id="cards" className="m-10">
     
      <Card>
        <Image src="./assets/img/1.jpeg" wrapped ui={false} />
        <Card.Content>
          <Card.Header>Daniel</Card.Header>
          <Card.Meta>Joined in 2016</Card.Meta>
          <Card.Description>
            Daniel is a comedian living in Nashville.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="user" />
            10 Friends
          </a>
        </Card.Content>
      </Card>
      <div className="p-8 bg-orange-200">
        <div className="bg-white rounded-lg shadow-2xl md:flex">
          <img
            src="https://images.unsplash.com/photo-1526290766257-c015850e4629?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
            alt="Laptop on Desk"
            className="md:w-1/3 rounded-t-lg md:rounded-l-lg md:rounded-t-none"
          />
          <div className="p-6">
            <h2 className="font-bold text-xl md:text-3xl mb-2 text-orange-700">
              Bordado en prendas
            </h2>
            <p className="text-green-900">
              Realizamos bordados en todo tipo de prendas{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Cards;
