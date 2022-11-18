import React from "react";
import { Row, Col, Button, Image} from "react-bootstrap";
import { Container } from "../common";
import "./style.css";
import Form from 'react-bootstrap/Form';
import contactImg from "../../images/contactUs.jpg";


export default function Faq() {
  return <div className="bground">
     <Row>
        <Col xs={12} sm={6}>
          <div className="contactFrame">            
            <Image className="contactUs"  src={contactImg}></Image>
          </div>
				</Col>
        <Col xs={12} sm={6}>
          <Row>
              <h2 className="title">Have any inquires? Send us a message!</h2>
          </Row>
          <Row>
          <Form> 
            <Row>
            <Col xs={12} sm={12}>
                    <Form.Control className="contactForm" as="textarea" rows={3} placeholder="Your question" />
                </Col>
            </Row>
            <Row>
            <Col xs={12} sm={6}>
                    <Form.Control className="contactForm" type="email" placeholder="Your email" />
                </Col> 
                
                <Col xs={12} sm={6}>
                    <Form.Control className="contactForm" type="text" placeholder="Name" />
                </Col> 
            </Row>    
            <Row>
                {['radio'].map((type) => (
                  <div key={`default-${type}`} className="radioBtn">
                    <Form.Check 
                      type={type}
                      id={`default-${type}`}
                      label={`Remember me`}
                    />
                  </div>
                ))} 
            </Row>   
            </Form>
            <Row>
                <Button className="Btn">
                    Leave a reply
                </Button>
            </Row>


          </Row> 	
            
				</Col>
    </Row>
  </div>;
}
