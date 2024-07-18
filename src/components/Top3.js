import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Top3 = () => {
  return (
    <div>
      <div className="sub_page">
        <div className="hero_area">
          <header className="header_section">
            <Container fluid>
              <Navbar expand="lg" className="custom_nav-container pt-3">
                <Navbar.Brand as={Link} to="/">
                  <span>SPOOKIE</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarSupportedContent" />
                <Navbar.Collapse id="navbarSupportedContent">
                  <Nav className="ml-auto flex-column flex-lg-row align-items-center">
                    <Nav.Item>
                      <Nav.Link as={Link} to="/">Home <span className="sr-only">(current)</span></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link as={Link} to="/Top3">About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link as={Link} to="/Top2">What we do</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link as={Link} to="/Top4">Portfolio</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link to="contact.html">Contact us</Nav.Link>
                    </Nav.Item>
                  </Nav>
                 
                </Navbar.Collapse>
              </Navbar>
            </Container>
          </header>
        </div>
        <section className="who_section layout_padding">
          <Container>
            <Row>
              <Col md={5}>
                <div className="img-box">
                  <img src="./media/about2.jpg" alt="" />
                </div>
              </Col>
              <Col md={7}>
                <div className="detail-box">
                  <div className="heading_container">
                    <h2>WHO WE ARE?</h2>
                  </div>
                  <p>
                  At Spookie, we are dedicated to transforming your business through innovative IT solutions.
                  Our mission is to provide a comprehensive range of IT services tailored to meet your unique needs,
                  helping you achieve your business goals with ease. From cutting-edge software development and IT 
                  consulting to robust cybersecurity and cloud solutions, we are committed to delivering excellence 
                  in every project. With a team of experienced professionals and a passion for technology, Spookie 
                  is your trusted partner in driving business growth and staying ahead in the competitive digital 
                  landscape. Let us help you unlock your full potential and elevate your business to new heights.
                  </p>
                  <div>
                    <Link to="">Read More</Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="info_section">
          <Container>
            <Row>
              <Col md={3}>
                <div className="info_contact">
                  <h5>Contact</h5>
                  <div>
                    <div className="img-box">
                      <img src="./media/location-white.png" width="18px" alt="" />
                    </div>
                    <p>Address</p>
                  </div>
                  <div>
                    <div className="img-box">
                      <img src="./media/telephone-white.png" width="12px" alt="" />
                    </div>
                    <p>+91 77730-xxxxx</p>
                  </div>
                  <div>
                    <div className="img-box">
                      <img src="./media/envelope-white.png" width="18px" alt="" />
                    </div>
                    <p>virtualSpookie2@gmail.com</p>
                  </div>
                </div>
              </Col>
              <Col md={3}>
                
              </Col>
              <Col md={3}>
                <div className="info_insta">
                  <h5>Instagram</h5>
                  <div className="insta_container">
                    <div>
                      <Link to="">
                        <div className="insta-box b-1">
                          <img src="./media/insta.png" alt="" />
                        </div>
                      </Link>
                      <Link to="">
                        <div className="insta-box b-2">
                          <img src="./media/insta.png" alt="" />
                        </div>
                      </Link>
                    </div>
                    <div>
                      <Link to="">
                        <div className="insta-box b-3">
                          <img src="./media/insta.png" alt="" />
                        </div></Link>
                      <Link to="">
                        <div className="insta-box b-4">
                          <img src="./media/insta.png" alt="" />
                        </div>
                      </Link>
                    </div>
                    <div>
                      <Link to="">
                        <div className="insta-box b-3">
                          <img src="./media/insta.png" alt="" />
                        </div>
                      </Link>
                      <Link to="">
                        <div className="insta-box b-4">
                          <img src="./media/insta.png" alt="" />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={3}>
                <div className="info_form">
                  <h5>Newsletter</h5>
                  <Form action="">
                    <Form.Control type="email" placeholder="Enter your email" />
                    <Button type="submit">Subscribe</Button>
                  </Form>
                  <div className="social_box">
                    <Link to="">
                      <img src="./media/fb.png" alt="" />
                    </Link>
                    <Link to="">
                      <img src="./media/twitter.png" alt="" />
                    </Link>
                    <Link to="">
                      <img src="./media/linkedin.png" alt="" />
                    </Link>
                    <Link to="">
                      <img src="./media/youtube.png" alt="" />
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </div>
  );
};

export default Top3;
