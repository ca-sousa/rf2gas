import { Container, Button } from "reactstrap";

import "./landHeader.scss"

function LandHeader() {
  return (
    <div className="landpage">
      <Container fluid>
        <div className="center-text">
            <h1>Não deixe de cozinhar pela a falta de Gás</h1>
            <h3>Instalamos fogões, cooktops e fornos</h3>
            <Button className="btn-know-more" color="neutral" outline>
              Conheça mais sobre nós
            </Button>
        </div>
      </Container>
    </div>
  );
}

export default LandHeader;
