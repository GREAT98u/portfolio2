import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Top5 = () => {
  return (
    <div>
<body class="sub_page">
  <div class="hero_area">
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



  <section class="contact_section layout_padding">
    <div class="container">

      <div class="heading_container">
        <h2>
          Request A Call Back
        </h2>
      </div>
      <div class="">
        <div class="">
          <div class="row">
            <div class="col-md-9 mx-auto">
              <div class="contact-form">
                <form action="">
                  <div>
                    <input type="text" placeholder="Full Name "/>
                  </div>
                  <div>
                    <input type="text" placeholder="Phone Number"/>
                  </div>
                  <div>
                    <input type="email" placeholder="Email Address"/>
                  </div>
                  <div>
                    <input type="text" placeholder="Message" class="input_message"/>
                  </div>
                  <div class="d-flex justify-content-center">
                    <button type="submit" class="btn_on-hover">
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  </section>



  <section class="info_section ">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <div class="info_contact">
            <h5>
              Contact
            </h5>
            <div>
              <div class="img-box">
                <img src="./media/location-white.png" width="18px" alt=""/>
              </div>
              <p>
                Address
              </p>
            </div>
            <div>
              <div class="img-box">
                <img src="./media/telephone-white.png" width="12px" alt=""/>
              </div>
              <p>
                +91 77730-xxxxx
              </p>
            </div>
            <div>
              <div class="img-box">
                <img src="./media/envelope-white.png" width="18px" alt=""/>
              </div>
              <p>
                virtualSpookie@gmail.com
              </p>
            </div>
          </div>
        </div>
        

        <div class="col-md-3">
          <div class="info_insta">
            <h5>
              Instagram
            </h5>
            <div class="insta_container">
              <div>
                <Link to="">
                  <div class="insta-box b-1">
                    <img src="./media/insta.png" alt=""/>
                  </div>
                </Link>
                <Link to="">
                  <div class="insta-box b-2">
                    <img src="./media/insta.png" alt=""/>
                  </div>
                </Link>
              </div>

              <div>
                <Link to="">
                  <div class="insta-box b-3">
                    <img src="./media/insta.png" alt=""/>
                  </div>
                </Link>
                <Link to="">
                  <div class="insta-box b-4">
                    <img src="./media/insta.png" alt=""/>
                  </div>
                </Link>
              </div>
              <div>
                <Link to="">
                  <div class="insta-box b-3">
                    <img src="./media/insta.png" alt=""/>
                  </div>
                </Link>
                <Link to="">
                  <div class="insta-box b-4">
                    <img src="./media/insta.png" alt=""/>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="info_form ">
            <h5>
              Newsletter
            </h5>
            <form action="">
              <input type="email" placeholder="Enter your email"/>
              <button>
                Subscribe
              </button>
            </form>
            <div class="social_box">
              <Link to="">
                <img src="./media/fb.png" alt=""/>
              </Link>
              <Link to="">
                <img src="./media/twitter.png" alt=""/>
              </Link>
              <Link to="">
                <img src="./media/linkedin.png" alt=""/>
              </Link>
              <Link to="">
                <img src="./media/youtube.png" alt=""/>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</body>
    </div>
  )
}

export default Top5
