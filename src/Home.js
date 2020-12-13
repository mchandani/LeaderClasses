import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap'
import './Home.css';
import Univ from './univ'
import enablers from './logo/enablers.png'
import hipo from './logo/hipo.png'
import five from './logo/500.jpg'
import leaders from './logo/leaders.jpg'
import leader2 from './logo/leader2.jfif'
import leader3 from './logo/leader3.jfif'
import Footer from './Footer/Footer'
import Card from './Card/Cards'
import funnel from './logo/funnel.png'
import drop from './logo/drop.png'
import MyGallery from './MyGallery'

class Home extends React.Component {
  render() {
    return (
      //---------------------------------------header----------------------------------------------
      <Container fluid  >
        <Row className="headerRow  ">
          <Col xs="4" md="6">
            <h3 className="leaderSpan">LeaderClasses</h3>

          </Col>

          <Col  style={{ display: "flex", flexDirection: "row-reverse" ,alignItems:"center"}}>


            <button className="signupButton buttonxl">Sign Up</button>
            <button className="loginButton buttonxl">Log In</button>
          </Col>
        </Row>

        <Row className=" header2 greytheme ">
          <Col style={{padding:"0px"}} >

            <Navbar bg="dark" variant="dark" style={{ color: "white", padding: "7px" }}>
              <Nav className="mr-auto FONTXL ">
                <Nav.Link className="navbarxl" href="https://www.leaderclasses.com/about-us">ABOUT</Nav.Link>
                <Nav.Link className="navbarxl" href="https://www.leaderclasses.com/membership">FAQ</Nav.Link>
                <Nav.Link className="navbarxl" href="https://www.leaderclasses.com/summits/career-advancement-leadership-development-summit">SUMMITS</Nav.Link>
                <Nav.Link className="navbarxl" href="https://www.leaderclasses.com/scholarships/career-advancement-leadership-development-scholarships">STUDENT SCHOLARSHIP</Nav.Link>
                <Nav.Link className="navbarxl" href="https://www.leaderclasses.com/careers">CAREERS</Nav.Link>
              </Nav>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
              </Form>
            </Navbar>
          </Col>
        </Row>
        {/* -----------------------------body----------------------------------------------------------------------- */}
        <MyGallery />
        <hr/>
        <Row className="fontxl" style={{ borderBottom: "solid 1px black", padding: "10px" }}>
          <Col className="textc">
            <p>Leader Classes harness the world's best Career Advancement & Leadership Development resources,helping you gain Expert Knowledge,Practical guidance and actionable insights from extraordinary leaders and world class institutuins through specialized,affordable,online and offline programs custom crafted to accelerate your career and business success while transforming you into a better and more effective leader.</p>
          </Col>
        </Row>

        <Row >
          <Col className="fontxl greytheme" md="12" style={{ border: "1px solid black", borderTop: "none", padding: "10px 10px" }}>

            <p >
              To see for yourself the quality of our Video Content and how it can help you,we invite you to view our Founder CEO's introductory Video providing "<a href="https://www.leaderclasses.com/videos/career-acceleration-insights-video">Expert Insights to Accelerate your Career</a>"if you have not done the same already.
            </p>

          </Col>
        </Row>
        <Row className="fontxl whitetheme" >
          <Col>
            <p>LeaderClasses relentlessly tracks and learns from </p>
            <p className="textDecor">100+ FULLTIME/EXECUTIVE DEVELOPMENT PROGRAMS AT PRE-EMINENT UNIVERSITIES</p>
            <Univ />
            <hr />
            <p className="textDecor">ECONOMY AND GLOBALIZATION ENABLERS</p>
            <img src={enablers} className="imgxl" alt="Logo" />
            <hr />
            <p className="textDecor">50+ RENOWNED HIGH POTENTIAL(HI-PO) AND EXECUTIVE LEADERSHIP DEVELOPMENT PROGRAMS OF TOP TIER ORGANIZATIONS </p>
            <img src={hipo} style={{ width: "100%", height: "auto" }} alt="Logo" />
            <hr />
            <p className="textDecor">THOUGHTS,ACTIONS,ADVICE,LIFE AND INSPIRATION OF</p>
            <img src={five} alt="Logo"  className="five00"/>
            <p className="textDecor">WORLD LEADERS</p>
            <img src={leaders} style={{ width: "100%" }} alt="Logo" />
            <img src={leader2} style={{ width: "100%" }} alt="Logo" />
            <img src={leader3} style={{ width: "100%" }} alt="Logo" />

          </Col>
        </Row>

        <hr />
        <Row >
          <Col style={{ textAlign: "center" }}>
            <Row className="fontxl whitetheme">
              <Col>
                <p className="textDecor">& Other Leaders par excellence ingesting an extra-ordinary amount of this exceptionally valuable content on 100+ topics Strategic importance from :-</p>
              </Col>
            </Row>


            <Row>
              <Col >
                <img src={funnel} alt="funnel" className="funnelimg" />
              </Col>
            </Row>
            <Row>
              <Col >
                <img src={drop} alt="drop" className="funnelimg" />
              </Col>
            </Row>
            <Row className="fontxl whitetheme">
              <Col style={{ textAlign: "center" }}>
                <Row>
                  <Col>
                    <h4>Delivered</h4>
                  </Col>
                  
                </Row>
                <Row>
                  <Col>
                  
                    <p> Via-Offline, extremely affordable,High Impact, One Day <a href="https://www.leaderclasses.com/summits/career-advancement-leadership-development-summit">"LeaderClasses Career Advancement & Leadership Development Summits"</a> held at multiple cities in India, designed to advance the career & Build / Strengthen the Leadership Foundations, of our program participants. </p>
                  </Col>
                </Row>
              </Col>
            </Row>

          </Col>
        </Row>


        <hr />
        <Row className="whitetheme" >
          <Col>
            <p className="textDecor">HIGH IMPACT OFFLINE EVENTS</p>
          </Col>
        </Row>

        <Row className="whitetheme container-fluid">
          <Col>
          <Card />
          </Col>
          

        </Row>

        {/* -------------------------------footer---------------------------------- */}
        <Footer />
      </Container>

    );
  }

}

export default Home;
