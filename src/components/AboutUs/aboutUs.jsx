import { Col, Container, Row } from "reactstrap";

import Logo from '../../assets/img/chama-orig.png';
import TikTok from '../../assets/img/tik-tok.png';
import "./aboutUs.scss";
  
function AboutUs() {
    return (
        <div className="about-us" id="aboutus">
            <Container fluid style={{backgroundColor: "#a31d36"}}>
                <Row>
                    <Col md={9} className="text">
                        <h1>Quem Somos</h1>
                        <p>RF2GÁS empresa atuando no segmento de instalações de gás predial, 
                            residencial e comercial desde 2018. Com o objetivo de oferecer um serviço de qualidade, seguindo os padrões de segurança, estabelecendo relações de confiança e satisfação total com os seus clientes, 
                            sendo referência na solução de problemas com gás natural em São Paulo.</p>
                    </Col>
                    <Col md={3} className="logo">
                        <img src={Logo} alt="logo"/>
                    </Col>
                </Row>
                <Row className="title">
                    <Col md={2} />
                    <Col>
                        <h3>Conheça nossas redes sociais</h3>
                    </Col>
                    <Col md={2} />
                </Row>
                <Row className="footer">
                    <Col md={2} />
                    <Col>
                        <a href="https://www.instagram.com/rf2gas/" target="blank">
                            <i className="fa fa-instagram" />
                            @rf2gas
                        </a>
                        <br/> <br />
                        <a href="https://api.whatsapp.com/send?phone=5511982619325" target="blank">
                            <i className="fa fa-whatsapp" />
                            +55 11 98261-9325
                        </a>
                        <a href="https://vm.tiktok.com/ZMeQJPALe/" target="blank" className="tiktok">
                            <img src={TikTok} alt="tiktok"/>
                            @rf2gas
                        </a>
                    </Col>
                    <Col>
                        <div className="second-column">
                            <a href="https://www.facebook.com/RF2GAS" target="blank">
                                <i className="fa fa-facebook" />
                                /rf2gas
                            </a>
                            <br/> <br />
                            <a href="mailto:rf2gas@gmail.com?subject=Orçamento%20RF2Gás" target="blank">
                                <i className="fa fa-envelope" id="mail"/>
                                rf2gas@gmail.com
                            </a>
                        </div>
                    </Col>
                    <Col md={2} />
                </Row>
                <Row className="info">
                    <Col md={2} />
                    <Col md={8}>
                        <div className="info">
                            <p>Atendimento 24h</p>
                        </div>
                    </Col>
                    <Col md={2} />
                </Row>
            </Container>
        </div>
    );
}

export default AboutUs;


