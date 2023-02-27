import React, { useState } from "react";
import Layout from "../Layout";
import Tabs from "../components/Tabs";
import { Container } from "reactstrap";
import Hot from "../features/hotCoffe/Hot";
import Iced from "../features/icedCoffe/Iced";

export default function ListMenu() {
  const [tab, setTab] = useState(0);

  return (
    <Layout>
      <Container>
        <h1>List Menu</h1>
        <Tabs tab={tab} setTab={setTab} />
        {tab === 0 && <Iced />}
        {tab === 1 && <Hot />}
      </Container>
    </Layout>
  );
}
