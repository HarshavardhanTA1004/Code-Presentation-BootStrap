import React from 'react';

const CardComponent = props => {
 
  const printOnConsoleHandler = e => {
    console.log('Card button is clicked', e.target.value);
  };

  return (
    <React.Fragment>
      <h2>Bootstrap Card Component</h2>
      <hr></hr>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
        <Button variant="primary" onClick={printOnConsoleHandler}>Go somewhere</Button>
      </Card.Body>
    </Card>
    </React.Fragment>
  );
};

export default CardComponent;
