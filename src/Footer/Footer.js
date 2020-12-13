import React from 'react'
import './Footer.css'
import '../Home.css'
import { copyright, facebook, linkedin, instagram, twitter } from 'react-icons-kit/fa/';
import { Row, Col } from 'reactstrap'
import { Icon } from 'react-icons-kit'
import lclogo from "../logo/lclogo.png"

class Footer extends React.Component {
    render() {
        return (
            <Row >
                <Col className="footerRow" >
                    <Row style={{ borderBottom: "1px solid gray", paddingBottom: "25px" }}>
                        <Col md="3" style={{ textAlign: "center",padding:"30px",margin:"auto"}}>
                            <img style={{ borderRadius: "500px" }} src={lclogo} alt="" />
                        </Col>
                        
                        <Col md="4" style={{ textAlign: "center" }}>
                            <Row >
                                <Col>
                                    <h3 style={{ fontFamily: "cursive" }}>We are here to help you!</h3>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <input placeholder="Name*" className="footerinp" />
                                </Col>

                            </Row>
                            <Row>
                                <Col>
                                    <input placeholder="Email*" className="footerinp" />
                                </Col>

                            </Row>
                            <Row>
                                <Col>
                                    <input placeholder="Subject" className="footerinp" />
                                </Col>

                            </Row>
                            <Row>
                                <Col>
                                    <input placeholder="Message" className="footerinp" style={{ height: "160px" }} />
                                </Col>

                            </Row>
                            <Row >
                                <Col style={{ textAlign: "center" }}>
                                    <button className="footersendbtn" >Send</button>
                                </Col>

                            </Row>

                        </Col>

                        <Col >
                            <Row>
                                <Col>
                                    <button className="footerListButton footerListButtonxl" style={{ fontWeight: "700", fontSize: "20px" }}>About Us</button>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <a href="https://www.leaderclasses.com/contact" className="footerListButton ">Contact us</a>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <a href="https://www.leaderclasses.com/terms-and-conditions" className="footerListButton ">Terms</a>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <a href="https://www.leaderclasses.com/privacy" className="footerListButton ">Privacy</a>
                                </Col>
                            </Row>


                        </Col>


                        <Col >
                            <Row>
                                <Col>
                                    <button className="footerListButton footerListButtonxl" style={{ fontWeight: "700", fontSize: "20px" }}>Service</button>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <button className="footerListButton bluexl ">Financial consultancy</button>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <button className="footerListButton greenxl">Funding</button>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <button className="footerListButton purplexl">Investment management</button>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <button className="footerListButton redxl">Career</button>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <button className="footerListButton brownxl">FAQs</button>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <button className="footerListButton yellowxl">Advertise</button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>


                    <Row style={{ padding: "8px 5px "}}>
                        <Col md="3" xs="4" style={{display:"flex",alignItems:"center", justifyContent:"space-evenly"}} >
                            <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.facebook.com%2FLeaderClasses-105817960762777%2F%3Fmodal%3Dadmin_todo_tour&amp;src=sdkpreparse">
                                <Icon icon={facebook} size={22} />
                            </a>
                            <a href="https://twitter.com/home?status=https%3A//twitter.com/leaderclasses">
                                <Icon  icon={twitter} size={22} />
                            </a>
                            <a href="https://www.instagram.com/leaderclassesofficial">
                                <Icon  icon={instagram} size={22} />
                            </a>
                            <a href="https://www.linkedin.com/shareArticle?mini=true&url=linkedin.com/company/leaderclasses&title=&summary=&source=">
                                <Icon  icon={linkedin} size={22} />
                            </a>

                        </Col>
                        <Col md="6" xs="8" style={{ textAlign: "center" }}>
                            <button className="footerListButton footerListButtonxl" >Employee Policy</button>
                            <button className="footerListButton footerListButtonxl ml" >User Policy</button>
                            <button className="footerListButton footerListButtonxl ml" >Ethics</button>
                        </Col>
                        <Col md="3" xs="12" style={{ display: "flex", flexDirection: "row-reverse",alignItems:"center",justifyContent:"center" }}>
                            <span className="fontxl" style={{ fontSize: "8px"}}>2020 LeaderClasses(Awesome Firms)</span>
                            <Icon icon={copyright} size={22} />

                        </Col>

                    </Row>
                </Col>
            </Row>
        );
    }
}
export default Footer;

