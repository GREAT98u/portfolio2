import React from 'react'
import { Navbar, Nav, Container,  Form, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Top4 = () => {
  return (
    <div>
        
        <body class="sub_page">
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

  <section class="work_section layout_padding">
    <div class="container">
      <div class="heading_container">
        <h2>
          CREATIVE WORKS
        </h2>
        <p>
        Discover Spookie’s diverse portfolio showcasing our expertise in IT solutions. From bespoke software development and IT consulting to advanced cybersecurity and seamless cloud integration, our projects highlight our commitment to innovation and excellence. Explore how we've empowered businesses across various industries, delivering transformative results and driving growth. Partner with us to elevate your business.
        </p>
      </div>
      <div class="work_container layout_padding2">
        <div class="box b-1">
          <img src="./media/s1.jpg" alt=""/>
        </div>
        <div class="box b-2">
          <img src="./media/s2.jpg" alt=""/>

        </div>
        <div class="box b-3">
          <img src="./media/s3.jpg" alt=""/>

        </div>
        <div class="box b-4">
          <img src="./media/s4.jpg" alt=""/>

        </div>
      </div>
    </div>
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
        </body>
    </div>
  )
}

export default Top4