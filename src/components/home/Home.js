import React from "react";

import { Row, Col } from "react-bootstrap";

import { Container, WhiteCenteredContainer } from "../common";

export default function Home() {
	return (
		<Container>
			<Row>
				<Col xs={12} sm={5}>
					<h1>Happy hour locator</h1>
				</Col>
				<Col xs={12} sm={7}>
					<WhiteCenteredContainer>
						Sign-in to see locations
					</WhiteCenteredContainer>
				</Col>
			</Row>
		</Container>
	);
}
