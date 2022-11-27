import React from "react";
import { Row, Col, Button, Image } from "react-bootstrap";

import { Container } from "../common";
import Form from "react-bootstrap/Form";
import contactImg from "../../images/contactUs.jpg";

import "./style.css";

export default function Faq() {
  return (
    <Container className="bground">
      <Row>
        <Col xs={12} sm={6}>
          <div className="contactFrame">
            <Image className="contactUs" src={contactImg}></Image>
          </div>
        </Col>
        <Col xs={12} sm={6}>
          <Row>
            <h2 className="title">Have any inquires? Send us a message!</h2>
          </Row>
          <Row>
            <Form action="https://getform.io/f/9b69c504-706e-4724-bb64-d60d0d9d37dc" method="POST">
              <Row>
                <Col xs={12} sm={12}>                                    
                  <input 
                    className="contactForm question field"
                    as="textarea"
                    
                    placeholder="Your question"    
                                   
                  />
                </Col>
              </Row>
              <Row>
                <Col xs={12} sm={6}>
                  <input 
                    className="contactForm other field"
                    type="email"
                    placeholder="Your email"
                    name="email"
                  />
                </Col>

                <Col xs={12} sm={6}>
                  <input 
                    className="contactForm other field"
                    type="text"
                    placeholder="Name"
                    name="name"
                  />
                </Col>
              </Row>
              <Row>
                {["radio"].map((type) => (
                  <div key={`default-${type}`} className="radioBtn">
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={`Remember me`}
                    />
                  </div>
                ))}
              </Row>
            
            <Row>
              <Button className="Btn" type="submit">Leave a reply</Button>
            </Row>
            </Form>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
