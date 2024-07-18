import React from 'react';
import { Navbar, Nav, Container, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


const Top = () => {
  return (
    <div>
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
                  <Nav.Item>
                    <Nav.Link to="/">Home</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Link to="/Top3" className="nav-link">About</Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Link to="/Top2" className="nav-link">What we do</Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Link to="/Top4" className="nav-link">Portfolio</Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Link to="/Top5" className="nav-link">Contact us</Link>
                  </Nav.Item>
                </Nav>
                
              </Navbar.Collapse>
            </Navbar>
          </Container>
        </header>
        <section className="slider_section position-relative">
          <Container>
            <Carousel>
              <Carousel.Item>
                <div className="row">
                  <div className="col">
                    <div className="detail-box">
                      <div>
                        <h2>Hello</h2>
                        <h1>This is my first React Project</h1>
                        <p>You can explore more dynamics portfolio here...</p>
                        <div>
                          <Link to="/Top4">Explore</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="row">
                  <div className="col">
                    <div className="detail-box">
                      <div>
                        <h2>welcome to</h2>
                        <h1>SPOOKIE</h1>
                        <p>
                          A place to Itegrate your business with Amazing Technologies
                        </p>
                        <div>
                          <Link to="/Top5">Contact us</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="row">
                  <div className="col">
                    <div className="detail-box">
                      <div>
                        <h2>We Craft</h2>
                        <h1>Your Ideas and Vision</h1>
                        <p>
                          We work continously to provide you the great customer satisfaction. Want to know more About us?..
                        </p>
                        <div>
                          <Link to="/Top3">More About us</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </Container>
        </section>
      </div>
      
  <section class="do_section layout_padding">
    <div class="container">
      <div class="heading_container">
        <h2>
          What we do
        </h2>
        <p>
          We Provide wide range of Technical business Solutions and provide your business a flawless operations
        </p>
      </div>
      <div class="do_container">
        <div class="box arrow-start arrow_bg">
          <div class="img-box">
            <img src="./media/d-1.png" alt=""/>
          </div>
          <div class="detail-box">
            <h6>
              Marketing
            </h6>
          </div>
        </div>
        <div class="box arrow-middle arrow_bg">
          <div class="img-box">
            <img src="./media/d-2.png" alt=""/>
          </div>
          <div class="detail-box">
            <h6>
              Development
            </h6>
          </div>
        </div>
        <div class="box arrow-middle arrow_bg">
          <div class="img-box">
            <img src="./media/d-3.png" alt=""/>
          </div>
          <div class="detail-box">
            <h6>
              Html5
            </h6>
          </div>
        </div>
        <div class="box arrow-end arrow_bg">
          <div class="img-box">
            <img src="./media/d-4.png" alt=""/>
          </div>
          <div class="detail-box">
            <h6>
              Css
            </h6>
          </div>
        </div>
        <div class="box ">
          <div class="img-box">
            <img src="./media/d-5.png" alt=""/>
          </div>
          <div class="detail-box">
            <h6>
              Wordpress
            </h6>
          </div>
        </div>
      </div>
    </div>
  </section>

 <hr></hr>
  <section class="who_section ">
    <div class="container">
      <div class="row">
        <div class="col-md-5">
          <div class="img-box">
            <img src="./media/about2.jpg" alt=""/>
          </div>
        </div>
        <div class="col-md-7">
          <div class="detail-box">
            <div class="heading_container">
              <h2>
                WHO WE ARE?
              </h2>
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
              <Link to="/Top3">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="work_section layout_padding">
    <div class="container">
      <div class="heading_container">
        <h2>
          CREATIVE WORKS
        </h2>
        <p>
        Discover Spookie’s diverse portfolio showcasing our expertise in IT solutions.
        From bespoke software development and IT consulting to advanced cybersecurity and 
        seamless cloud integration, our projects highlight our commitment to innovation and 
        excellence. Explore how we've empowered businesses across various industries, 
        delivering transformative results and driving growth. Partner with us to elevate your business.
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

  <section class="client_section">
    <div class="container">
      <div class="heading_container">
        <h2>
          HIGHLIGHTS
        </h2>
      </div>
      <Container>
        <Carousel>
     
       
          <Carousel.Item>
          <div class="item">
            <div class="box">
              <div class="img-box">
                <img src="./media/z1.jpg" alt=""/>
              </div>
              <div class="detail-box">
                <h5>
                  WORKING.. <br></br>
                  <span>
                    
                  </span>
                </h5>
                <img src="./media/quote.png" alt=""/>
                <p>
                  
                </p>
              </div>
            </div>
          </div>
          </Carousel.Item>
          <Carousel.Item>
          <div class="item">
            <div class="box">
              <div class="img-box">
                <img src="./media/z2.jpg" alt=""/>
              </div>
              <div class="detail-box">
                <h5>
                  WORKING.. <br></br>
                  <span>
                    
                  </span>
                </h5>
                <img src="./media/quote.png" alt=""/>
                <p>
                  
                </p>
              </div>
            </div>
          </div>
          </Carousel.Item>
          <Carousel.Item>
          <div class="item">
            <div class="box">
              <div class="img-box">
                <img src="./media/z3.jpg" alt=""/>
              </div>
              <div class="detail-box">
                <h5>
                  WORKING.. <br></br>
                  <span>
                    
                  </span>
                </h5>
                <img src="./media/quote.png" alt=""/>
                <p>
                  
                </p>
              </div>
            </div>
          </div>
          </Carousel.Item>
     
    
      </Carousel>
      </Container>
    </div>
  </section>

  <section class="target_section layout_padding2">
    <div class="container">
      <div class="row">
        <div class="col-md-3 col-sm-6">
          <div class="detail-box">
            <h2>
              0
            </h2>
            <h5>
              Years of Business
            </h5>
          </div>
        </div>
        <div class="col-md-3 col-sm-6">
          <div class="detail-box">
            <h2>
              NO
            </h2>
            <h5>
              Projects Delivered
            </h5>
          </div>
        </div>
        <div class="col-md-3 col-sm-6">
          <div class="detail-box">
            <h2>
              NO
            </h2>
            <h5>
              Satisfied Customers
            </h5>
          </div>
        </div>
        <div class="col-md-3 col-sm-6">
          <div class="detail-box">
            <h2>
              1500+
            </h2>
            <h5>
              Cups of Coffee
            </h5>
          </div>
        </div>
      </div>
    </div>
  </section>

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

      </div><br></br><br></br>
      <section class="container-fluid footer_section">
    <p>
      Crafted by Anshul Cluelessly
    </p>
  </section>
    </div>
  </section>



    </div>
  );
};

export default Top;
