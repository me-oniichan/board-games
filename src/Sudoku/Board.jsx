import { useContext } from "react";
import { Container, Row, Col } from "reactstrap";
import sudokuContext from "./sudokuContext";
import { isvalid } from "./utils";

export default function Board() {
  const [grid, setGrid] = useContext(sudokuContext);

  function setval(e, i, j) {
    setGrid(
      grid.map((val1, ind1) =>
        val1.map((val2, ind2) => {
          if (ind1 === i && ind2 === j) {
            if (!isNaN(e) && e !== "0") {
              val2 = { ...val2, value: parseInt(e), mode: "black" , class: isvalid(grid, i, j, parseInt(e))? "valid":"dup"};
            } else if (e === "Backspace")
              val2 = {
                ...val2,
                value: 0,
                mode: "#5b50b1",
                class: "valid"
              };
          }
          return val2;
        })
      )
    );
  }
  return (
    <Container className="text-bg-warning text-center" id="board">
      {grid.map((val1, ind1) => (
        <Row key={ind1}>
          {val1.map((val2, ind2) => (
            <Col
              key={ind1.toString() + ind2.toString()}
              onKeyDown={(e) => {
                setval(e.key, ind1, ind2);
              }}
            >
              <input
                className={`${val2.class} cell`}
                type="text"
                inputMode="numeric"
                value={val2.value ? val2.value : ""}
                onChange={(e) => {
                  e.target.value = val2.value ? val2.value : "";
                }}
                style={{
                  color: val2.mode,
                }}
              />
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  );
}
