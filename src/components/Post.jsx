import React from 'react';

// or less ideally
import { Card, Row, Badge } from 'react-bootstrap';

import Comments from './Comments';

const Post = () => {
  return (
	<Card>
		<Row>
			<Card.Img variant="top" src="holder.js/100px160" />
			
			<Card.Body>
				<Card.Title>
					Title 
				</Card.Title>
				<Card.Text>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, nemo repellat officia debitis quas corrupti sequi corporis totam harum natus quo eaque molestiae fuga nam ea libero nobis eius. Commodi.
				</Card.Text>
				<Badge bg="primary">
					Likes: 3000
				</Badge>
				<Badge bg="secondary">
					Comments: 100
				</Badge>
				<Card.Footer>
					<small className="text-muted">Last updated 3 mins ago</small>
				</Card.Footer>
			</Card.Body>
			<Comments />
			
		</Row>
	</Card>
  )
}

export default Post
