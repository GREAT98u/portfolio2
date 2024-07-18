import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Button, Form, Row, Col } from 'react-bootstrap';

const Top2 = () => {
  return (
    <div>
      <div className="sub_page">
      <div className="hero_area">
        <header className="header_section">
          <Container fluid>
            <Navbar expand="lg" className="custom_nav-container pt-3">
              <Navbar.Brand href="index.html">
                <span>SPOOKIE</span>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarSupportedContent" />
              <Navbar.Collapse id="navbarSupportedContent">
                <Nav className="ml-auto flex-column flex-lg-row align-items-center">
                  <Nav.Item className="nav-item active">
                    <Nav.Link as={Link} to="/">Home <span className="sr-only">(current)</span></Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="nav-item">
                    <Nav.Link as={Link} to="/Top3">About</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="nav-item">
                    <Nav.Link as={Link} to="/Top2">What we do</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="nav-item">
                    <Nav.Link as={Link} to="/Top4">Portfolio</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="nav-item">
                    <Nav.Link as={Link} to="/Top5">Contact us</Nav.Link>
                  </Nav.Item>
                </Nav>
                
              </Navbar.Collapse>
            </Navbar>
          </Container>
        </header>
      </div>
      <section className="do_section layout_padding">
        <Container>
          <div className="heading_container">
            <h2>What we do</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            </p>
          </div>
          <div className="do_container">
            <div className="box arrow-start arrow_bg">
              <div className="img-box">
                <img src="./media/d-1.png" alt="" />
              </div>
              <div className="detail-box">
                <h6>Marketing</h6>
              </div>
            </div>
            <div className="box arrow-middle arrow_bg">
              <div className="img-box">
                <img src="./media/d-2.png" alt="" />
              </div>
              <div className="detail-box">
                <h6>Development</h6>
              </div>
            </div>
            <div className="box arrow-middle arrow_bg">
              <div className="img-box">
                <img src="./media/d-3.png" alt="" />
              </div>
              <div className="detail-box">
                <h6>Html5</h6>
              </div>
            </div>
            <div className="box arrow-end arrow_bg">
              <div className="img-box">
                <img src="./media/d-4.png" alt="" />
              </div>
              <div className="detail-box">
                <h6>Css</h6>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src="./media/d-5.png" alt="" />
              </div>
              <div className="detail-box">
                <h6>Wordpress</h6>
              </div>
            </div>
          </div>
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
}

export default Top2;
