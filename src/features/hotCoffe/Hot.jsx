import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import CardCoffe from "../../components/CardCoffe";
import { getHot } from "./hotSlice";

export default function Hot() {
  const { status, data } = useSelector((state) => state.hot);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(getHot());
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
