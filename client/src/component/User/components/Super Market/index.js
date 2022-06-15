import { React, useState } from "react";

import { Container } from "react-bootstrap";

import DailyExpence from "./components/DailyExpence";
import Sale from "./components/Sale";

import { EXPENCE, SALE } from "./constants";

import "./super.scss";

const SuperMarketPage = () => {
  const [component, setComponent] = useState(EXPENCE);

  const [data, setData] = useState({
    date: "",
    cash: "",
    expence: "",
    sale: "",
    deposit: "",
  });

  const [tally, setTally] = useState("");

  const updateData = (data) => {
    setData((previousState) => ({
      ...previousState,
      ...data,
    }));
  };

  const renderComponent = {
    [EXPENCE]: (
      <DailyExpence
        setComponent={setComponent}
        data={data}
        updateData={updateData}
      />
    ),
    [SALE]: (
      <Sale
        data={data}
        updateData={updateData}
        setData={setData}
        tally={tally}
        setTally={setTally}
      />
    ),
  };

  return (
    <Container className="super-market-page-container-wrapper">
      {renderComponent[component]}
    </Container>
  );
};
export default SuperMarketPage;
