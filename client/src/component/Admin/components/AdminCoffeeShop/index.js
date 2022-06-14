import { React, useState } from "react";

import { Container } from "react-bootstrap";

import "./acoffee.scss";

import { DAILY, MONTHLY, WEEKLY } from "../../constants";

import DailyReport from "./components/DaliyReport";
import WeeklyReport from "./components/WeeklyReport";
import MonthlyReport from "./components/MonthlyReport";

const AdminCoffeeShopPage = () => {
  const [component, setComponent] = useState(DAILY);
  const renderComponent = {
    [DAILY]: <DailyReport setComponent={setComponent} />,
    [WEEKLY]: <WeeklyReport setComponent={setComponent} />,
    [MONTHLY]: <MonthlyReport setComponent={setComponent} />,
  };
  return (
    <Container className="admin-coffee-shop-container-wrapper">
      {renderComponent[component]}
    </Container>
  );
};
export default AdminCoffeeShopPage;
