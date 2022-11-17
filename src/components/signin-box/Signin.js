import React from "react";
import { Button, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import { WhiteCenteredContainer } from "../common";

import "./style.css";

export default function Signin() {
	return (
		<WhiteCenteredContainer id="specialWhiteCont">
			<h3 id="signinTitle">Sign-in here:</h3>
			<Form id="signinForm">
				<Form.Control
					className="inputForm"
					type="text"
					placeholder="Enter Username"
				/>
				<Form.Control
					className="inputForm"
					type="password"
					placeholder="Enter Password"
				/>

				<div id="signinBtns">
					<Button
						className="purpleBtn"
						variant="primary"
						size="lg"
						type="submit"
					>
						Sign In
					</Button>
					<Button
						id="googleBtn"
						className="purpleBtn"
						variant="primary"
						size="lg"
						type="submit"
					>
						Google Sign In
					</Button>	
					<NavLink id="linktoAdmin" to="/admin/login">Do you represent a Location? Go to Site!</NavLink>
				</div>
			</Form>
		</WhiteCenteredContainer>
	);
}
