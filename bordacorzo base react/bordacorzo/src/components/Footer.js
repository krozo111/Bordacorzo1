import { Container, List, Divider, Image } from "semantic-ui-react";
export const Footer = () => {
  return (
    <div className="m-auto">
    
      <Container textAlign="center">
        <Divider section />
        <Image src="./assets/img/logoborda1sm.jpg" centered size="medium" />
        <List horizontal divided link size="medium">
          <List.Item as="a" href="/">
            Site Map
          </List.Item>
          <List.Item as="a" href="/">
            Contact Us
          </List.Item>
          <List.Item as="a" href="/">
            Terms and Conditions
          </List.Item>
          <List.Item as="a" href="/">
            Privacy Policy
          </List.Item>
        </List>
      </Container>
    
    </div>
  );
};
export default Footer;
