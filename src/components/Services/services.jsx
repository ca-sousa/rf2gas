import { 
  Col, Container, Row,  Card, CardImg, 
  CardText, CardBody, CardTitle, CardSubtitle 
} from "reactstrap";

import Pipe from "../../assets/img/pipe.jpg"
import Gas from "../../assets/img/gas.jpg"
import Estanqueidade from "../../assets/img/tightness.jpg"
import Aquecedor from "../../assets/img/heater.jpeg"

import "./services.scss"

function Services() {
  return (
    <div className="services" id="services">
      <Container fluid>
        <h1>Serviços</h1>
        <Row>
          <Col sm={1}/>
          <Col>
            <Card>
              <CardImg top width="100%" src={Pipe} alt="Tubulação" />
              <CardBody>
                <CardTitle tag="h5">Tubulação</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Instalação e Manuntenção</CardSubtitle>
                <CardText>Flexível de cobre (tomback) de até 1.25m biarticulado ou fixo com adaptador conforme modelo e fabricante do fogão, 
                  e registro de segurança (abre e fecha) de fácil acesso no ambiente em que o equipamento se encontra.</CardText>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardImg top width="100%" src={Gas} alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">Cooktops, fornos e fogões </CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Adequação e Conversão</CardSubtitle>
                <CardText>No Brasil não se fabrica fogões para gás natural (GN) somente o padrão com uso de botijão (GLP) é produzido em território nacional.</CardText>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardImg top width="100%" src={Estanqueidade} alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">Estanqueidade</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Teste de Estanqueidade</CardSubtitle>
                <CardText>Teste utilizando ar comprimido de baixa pressão no qual detecta-se vazamentos por mínimo que seja.</CardText>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardImg top width="100%" src={Aquecedor} alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">Aquecedor</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Instalação e Manutenção</CardSubtitle>
                <CardText>Executamos os serviços de instalação, conversão e manutenção de água a gás, dentro da norma especificada em casa e apartamentos. 
                  Trocamos o aquecedor antigo por um novo como também trocamos flexível de gás e água e a fios se for necessário.</CardText>
              </CardBody>
            </Card>
          </Col>
          <Col sm={1}/>
        </Row>
      </Container>
    </div>
  );
}

export default Services;
