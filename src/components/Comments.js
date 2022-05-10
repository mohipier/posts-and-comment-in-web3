import React from 'react';

// or less ideally
import { Container, Row , Card } from 'react-bootstrap';

import AddComment from './AddComment';

const Comments = () => {
  return (
	<>
		<Container>
			<h4>Comments</h4>
			<Row>
				<AddComment />
			</Row>
			<Card>			
				<Card.Title>Name</Card.Title>
				<Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Card.Text>
			</Card>
			<Card>			
				<Card.Title>Name</Card.Title>
				<Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Card.Text>
			</Card>
			<Card>			
				<Card.Title>Name</Card.Title>
				<Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Card.Text>
			</Card>
			<Card>			
				<Card.Title>Name</Card.Title>
				<Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Card.Text>
			</Card>
			<Card>			
				<Card.Title>Name</Card.Title>
				<Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Card.Text>
			</Card>
			<Card>			
				<Card.Title>Name</Card.Title>
				<Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Card.Text>
			</Card>
		</Container>
	</>
  )
}
export default Comments