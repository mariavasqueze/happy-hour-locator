import React from "react";
import {Button, Form } from "react-bootstrap";

import { WhiteCenteredContainer } from "../common";

import "./style.css";

export default function Signin() {
	return (
		<WhiteCenteredContainer>
			<h3>Sign-in to see locations</h3>
			<Form>
				<Form.Control className="input" type="text" placeholder="Enter Username" />
				<Form.Control
					className="input mb-5"
					type="password"
					placeholder="Enter Password"
				/>

				<Form.Group className="mb-3" controlId="formBasicCheckbox">
					<Button
						className="purpleBtn"
						variant="primary"
						size="lg"
						type="submit"
					>
						Sign In
					</Button>
					<Button
						className="purpleBtn"
						variant="primary"
						size="lg"
						type="submit"
					>
						Google Sign In
					</Button>
				</Form.Group>
			</Form>
		</WhiteCenteredContainer>
	);
}
