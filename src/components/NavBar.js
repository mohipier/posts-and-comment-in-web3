import React from 'react';

// or less ideally
import { Container, Navbar, Nav } from 'react-bootstrap';

const NavBar = () => {
  return (
	<>
		<Navbar bg="dark" variant="dark">
			<Container>
			<Navbar.Brand href="/">Posts & Comments by Crypto</Navbar.Brand>
				<Nav className="me-auto">
					<Nav.Link href="/">Home</Nav.Link>
					<Nav.Link href="/add">Add Post</Nav.Link>
					<Nav.Link href="/my-posts">My Posts</Nav.Link>
					<Nav.Link href="/my-comments">My Comments</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	</>
  )
}

export default NavBar
