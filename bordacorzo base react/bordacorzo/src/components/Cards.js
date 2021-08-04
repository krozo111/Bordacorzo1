import { Card, Image } from "semantic-ui-react";

export const Cards = (props) => {
  const { title, description, image } = props;

  return (
    <section id="cards" className="m-10 ">
      <Card>
        <Image src={image} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{title}</Card.Header>
          <Card.Meta>Info sobre bordados</Card.Meta>
          <Card.Description>{description}</Card.Description>
        </Card.Content>
      </Card>
    </section>
  );
};
export default Cards;
