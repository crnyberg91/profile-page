import React from "react";
// import "./style.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";


function PortfolioCard(props) {
    return (
<Card style={{ width: '18rem' }} key={props.key}>
  <Card.Img variant="top" src={props.img} />
  <Card.Body>
    <Card.Title>{props.name}</Card.Title>
    {/* <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text> */}
  </Card.Body>
  {/* <ListGroup className="list-group-flush">
    <ListGroupItem>Cras justo odio</ListGroupItem>
    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem>Vestibulum at eros</ListGroupItem>
  </ListGroup> */}
  <Card.Body>
    <Card.Link href={props.deploy}>Deploy</Card.Link>
    <Card.Link href={props.gitHub}>Git Hub</Card.Link>
  </Card.Body>
</Card>
    )
}

export default PortfolioCard;
