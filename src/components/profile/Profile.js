import React from "react";
import { Row, Col, Button, Form, Image } from "react-bootstrap";

import { WhiteCenteredContainer } from "../common";
import profileImg from "../../images/myProfileImg.png";

import "./style.css";

export default function Profile() {
	return (
		<WhiteCenteredContainer className="special">
			<h2 className="m-3">My Profile</h2>
			<section id="profile info">
				<Image className="profileImg m-3" rounded src={profileImg}></Image>
				<Form>
					<Row className="m-3">
						<Col>
							<Form.Label className="label">Name</Form.Label>
						</Col>
						<Col xs={12} md={8}>
							<Form.Control
								className="inputForm"
								type="text"
								placeholder="Juanito"
							/>
						</Col>
					</Row>
					<Row className="m-3">
						<Col>
							<Form.Label className="label">Email address</Form.Label>
						</Col>
						<Col xs={12} md={8}>
							<Form.Control
								className="inputForm"
								type="email"
								placeholder="juanito@gmail.com"
							/>
						</Col>
					</Row>
					<Row className="m-3">
						<Col>
							<Form.Label className="label">Password</Form.Label>
						</Col>
						<Col xs={12} md={8}>
							<Form.Control
								className="inputForm mb-5"
								type="password"
								placeholder="******"
							/>
							<Button
								className="purpleBtn"
								variant="primary"
								size="lg"
								type="submit"
							>
								Update Information
							</Button>
						</Col>
					</Row>
				</Form>
			</section>
			<section id="paymentInfo">
				<Form>
					<Row className="m-3">
						<Col>
							<Form.Label className="paymentTitle">Payment Method</Form.Label>
							<Form.Control
								className="inputForm mb-3"
								id="paymentInput"
								type="text"
								placeholder="XX4242"
							/>
						</Col>
					</Row>
					<Row className="m-3">
						<Col xs={12} md={8}>
							<Button
								className="purpleBtn"
								variant="primary"
								size="lg"
								type="submit"
							>
								Change Card
							</Button>
						</Col>
					</Row>
					<Row className="m-3">
						<Form.Text className="text-muted m-2">
							Delete Account? - Please send us a request
						</Form.Text>
					</Row>
				</Form>
			</section>
		</WhiteCenteredContainer>
	);
}
