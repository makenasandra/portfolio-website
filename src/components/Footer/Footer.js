import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
import { MailchimpForm } from "../MailchimpForm";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/github-logowhite.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center footer-content">
          <Col size={12} sm={6}>
            <div className="logo">Makena</div>
            {/* <img src={logo} alt="Logo" /> */}
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon footer-socials">
              <a
                href="https://www.linkedin.com/in/makenasandra/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon1} alt="" />
              </a>
              <a
                href="https://github.com/makenasandra"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon2} alt="" />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
