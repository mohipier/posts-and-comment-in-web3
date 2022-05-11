import React from 'react';

// or less ideally
import { Container, Navbar, Nav, Button } from 'react-bootstrap';

const NavBarItem = ({title, href, classProps}) => {
	return (
		<Nav.Link href={href} className={` ${classProps}`}>
			{title}
		</Nav.Link>
	)
}

const NavBar = () => {

	const connectWallet = () => {

	}

	let NavData = [
		["Home" , "/"] ,
		["Add Post","/add"],
		["My Posts","/my-posts"], 
		["My Comments","/my-comments"]
	];

  return (
	<>
		<Navbar bg="dark" variant="dark">
			<Container>
			<Navbar.Brand href="/">Posts & Comments by Crypto</Navbar.Brand>
				<Nav className="me-auto">
					{NavData.map((item,index) => {
						<NavBarItem key={item[0]+index} title={item[0]} href={item[1]} />
					})}
				</Nav>
				<Button 
					type="button"
					onClick={connectWallet}
				>
					Connect Wallet
				</Button>
			</Container>
		</Navbar>
	</>
  )
}

export default NavBar
