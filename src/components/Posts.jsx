import React from 'react';

// or less ideally
import { Container, Card, Badge, Row, Col } from 'react-bootstrap';

import { Loader } from './';

const Posts = () => {
  return (
	<div>
		<Container>
			<h3>Posts</h3>

			{false? (
				<Loader />
			) : (
			<Row xs={1} md={3} className="g-4">
			{Array.from({ length: 4 }).map((_, idx) => (
				<Col>
				<Card>
					<Card.Img variant="top" src="holder.js/100px160" />
					<Card.Body>
					<Card.Link href="/post/">
						<Card.Title>Post title</Card.Title>
					</Card.Link>
					<Badge bg="primary">
						Likes: 3000
					</Badge>
					<Badge bg="secondary">
						Comments: 100
					</Badge>
					</Card.Body>
					<Card.Footer>
						<small className="text-muted">Last updated 3 mins ago</small>
					</Card.Footer>
				</Card>
				</Col>
			))}
			</Row>	
		)} 
		</Container>
		
	</div>
  )
}

export default Posts;