import { Col, Container, Row } from "reactstrap";

import Logo from '../../assets/img/chama-orig.png';
import "./aboutUs.scss";
  
function AboutUs() {
    return (
        <div className="about-us">
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
                <Row className="instagram">
                </Row>
            </Container>
        </div>
    );
}

export default AboutUs;


