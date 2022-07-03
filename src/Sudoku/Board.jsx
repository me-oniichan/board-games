import { useContext } from "react";
import { Container, Row, Col } from "reactstrap";
import sudokuContext from "./sudokuContext";

export default function Board() {
  const [grid, setGrid] = useContext(sudokuContext);

  function setval(e, i, j) {
    setGrid(grid.map((val1, ind1) => (
      val1.map((val2, ind2) => {
        if (ind1 === i && ind2 === j) {

          if(!isNaN(e)) val2 = { ...val2, value: e , mode : "black"}
          else if(e === "Backspace") val2 = { ...val2, value: 0 , mode : "#3838f9ed"}
        }
        return val2;
      })
    )))
  }

  return (
    <Container className="text-bg-warning text-center" id="board">
      {grid.map((val1, ind1) => (
        <Row key={ind1}>
          {val1.map((val2, ind2) => (
            <Col className={val2.class} key={ind1.toString() + ind2.toString()} tabIndex="0" onKeyDown={(e) => { setval(e.key, ind1, ind2) }}>
              <span style={{
                margin: "auto",
                color: val2.mode
              }}>{val2.value ? val2.value : ""}</span>
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  );
}
