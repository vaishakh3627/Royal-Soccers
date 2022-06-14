import { React, useState } from "react";

import { Container } from "react-bootstrap";

import Soccer5s from "./components/Soccer5s";
import Soccer7s from "./components/Soccer7s";

import { SOCCER_5s, SOCCER_7s } from "./constants";

import "./soccer.scss";

const SoccerPage = () => {
  const [component, setComponent] = useState(SOCCER_5s);

  const [cash, setCash] = useState("");

  const [data, setData] = useState({
    date: "",
    total5s: "",
    discount5s: "",
    amount5s: "",
    total7s: "",
    discount7s: "",
    amount7s: "",
    expence: "",
  });

  const updateData = (data) => {
    setData((previousState) => ({
      ...previousState,
      ...data,
    }));
  };

  const renderComponent = {
    [SOCCER_5s]: (
      <Soccer5s
        setComponent={setComponent}
        updateData={updateData}
        data={data}
      />
    ),
    [SOCCER_7s]: (
      <Soccer7s
        updateData={updateData}
        data={data}
        cash={cash}
        setCash={setCash}
      />
    ),
  };

  return (
    <Container className="soccer-container-wrapper">
      {renderComponent[component]}
    </Container>
  );
};
export default SoccerPage;
