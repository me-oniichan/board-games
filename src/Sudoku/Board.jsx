import { useContext } from "react";
import { Container, Row, Col } from "reactstrap";
import sudokuContext from "./sudokuContext";

export default function Board() {
  const [grid, setGrid] = useContext(sudokuContext);
  return (
    <Container className="text-bg-warning board text-center">
      {Object.entries(grid).map((item) => (
        <Row className="row" key={item[0]}>
          {Object.entries(item[1]).map((cell) => (
            <Col className="col" key={`${item[0]} ${cell[0]}}`}>
              {cell[1].val}
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  );
}
