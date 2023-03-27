import React from 'react'
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
 const Cards = ({User}) => {
    console.log('user',User)
  return (
    <div >
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://icon2.cleanpng.com/20180920/att/kisspng-user-logo-information-service-design-5ba34f886b6700.1362345615374293844399.jpg" />
      <Card.Body>
        <Card.Title>{User.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    
    </div>
  )
}
export default Cards
