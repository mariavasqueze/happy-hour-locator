import React from "react";
import { Row, Col } from "react-bootstrap";

import { Container, WhiteCenteredContainer } from "../common";

import "./style.css";

export default function About() {
  return (
    <div className="bground">
      <Row>
        <Col xs={12} sm={12}>
          <h2>A little about Software Inc.</h2>					
				</Col>
      </Row>
      <Row>
        <Col xs={12} sm={6}>
          <h3>What is the goal of the company?</h3>			
          <p>Vestibulum nec condimentum dolor. Cras viverra arcu nec scelerisque ornare. Quisque ut nulla ac eros egestas 
            sollicitudin. Duis ut urna iaculis, tincidunt dui vitae, scelerisque metus. Quisque malesuada non dui id faucibus.
             Sed sodales dapibus vestibulum. Phasellus imperdiet tellus ac mauris congue, sit amet condimentum augue elementum
          </p>		
				</Col>
        <Col xs={12} sm={6}>
          <h3>Why happy hours?</h3>			
          <p>Vestibulum nec condimentum dolor. Cras viverra arcu nec scelerisque ornare. Quisque ut nulla ac eros egestas 
            sollicitudin. Duis ut urna iaculis, tincidunt dui vitae, scelerisque metus. Quisque malesuada non dui id faucibus. 
            Sed sodales dapibus vestibulum. Phasellus imperdiet tellus ac mauris congue, sit amet condimentum augue elementum
          </p>		
				</Col>
      </Row>
      <Row>
        <Col xs={12} sm={6}>
          <h3>How did the company started?</h3>			
          <p>Vestibulum nec condimentum dolor. Cras viverra arcu nec scelerisque ornare. Quisque ut nulla ac eros egestas 
            sollicitudin. Duis ut urna iaculis, tincidunt dui vitae, scelerisque metus. Quisque malesuada non dui id faucibus.
             Sed sodales dapibus vestibulum. Phasellus imperdiet tellus ac mauris congue, sit amet condimentum augue elementum
          </p>		
				</Col>
        <Col xs={12} sm={6}>
          <h3>What about the future?</h3>			
          <p>Vestibulum nec condimentum dolor. Cras viverra arcu nec scelerisque ornare. Quisque ut nulla ac eros egestas 
            sollicitudin. Duis ut urna iaculis, tincidunt dui vitae, scelerisque metus. Quisque malesuada non dui id faucibus. 
            Sed sodales dapibus vestibulum. Phasellus imperdiet tellus ac mauris congue, sit amet condimentum augue elementum
          </p>		
				</Col>
      </Row>
      
    </div>
  );
}
