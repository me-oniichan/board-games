import { useContext } from "react";
import { Container, Row, Col } from "reactstrap";
import animateContext from "./context/animateContext";
import dupContext from "./context/dupContext";
import sudokuContext from "./context/sudokuContext";
import { isvalid, verify } from "./utils";

export default function Board() {
  const [grid, setGrid] = useContext(sudokuContext);
  const [duplicate, setDuplicate] = useContext(dupContext);
  const animate = useContext(animateContext)[0];

  function setval(e, i, j) {
    setGrid(
      grid.map((val1, ind1) =>
        val1.map((val2, ind2) => {
          if (ind1 === i && ind2 === j) {
            if (!isNaN(e) && e !== "0") {
              if (!isvalid(grid, i, j, parseInt(e))) {
                duplicate.push([ind1, ind2]);
                setDuplicate(duplicate);
              }
              else {
                grid[ind1][ind2] = parseInt(e);
                setDuplicate(
                  duplicate.filter((row) =>
                    verify(grid, row[0], row[1], grid[row[0]][row[1]].value)
                  )
                );
              }
              val2 = {
                ...val2,
                value: parseInt(e),
                mode: "black",
              };
            } else if (e === "Backspace") {
              setDuplicate(duplicate.filter(row => (JSON.stringify(row) !== JSON.stringify([ind1, ind2]))))
              val2 = {
                ...val2,
                value: 0,
                mode: "#5b50b1",
              };
            }
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
              className={animate[ind1][ind2] ? "animate" : ""}
              key={ind1.toString() + ind2.toString()}
              onKeyDown={(e) => {
                setval(e.key, ind1, ind2);
              }}
            >
              <input
                className={`${duplicate.some(
                  (row) =>
                    JSON.stringify(row) ===
                    JSON.stringify([ind1, ind2])
                ) ? "dup" : "valid"} cell`}
                type="text"
                inputMode="numeric"
                value={val2.value ? val2.value : ""}
                onChange={(e) => {
                  e.target.value = val2.value
                    ? val2.value
                    : "";
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
