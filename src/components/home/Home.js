import React from "react";
import { Row, Col, Button } from "react-bootstrap";

import { Container } from "../common";
import Signin from "../signin-box/Signin";

import "./style.css";

export default function Home() {
	return (
		<Container>
			<Row>
				<Col className="leftColumn" xs={12} sm={5}>
					<h1>Happy hour locator</h1>
					<p>Heloooo</p>
					<p>Heloooo</p>
					<Button
						className="purpleBtn"
						variant="primary"
						size="lg"
						type="submit"
					>
						Change Card
					</Button>
				</Col>
				<Col xs={12} sm={7}>
					<Signin></Signin>
				</Col>
			</Row>
		</Container>
	);
}
