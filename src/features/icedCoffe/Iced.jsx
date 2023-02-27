import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import CardCoffe from "../../components/CardCoffe";
import { getIced } from "./icedSlice";

export default function Iced() {
  const { status, data } = useSelector((state) => state.iced);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(getIced());
    }
  }, [status]);

  if (status === "loading") {
    return <div>loading . . .</div>;
  }

  return (
    <Container>
      <Row>
        {data.map((item, i) => (
          <Col key={i} xs="6" md="4" lg="3">
            <CardCoffe item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
