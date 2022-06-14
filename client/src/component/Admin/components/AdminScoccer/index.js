import { React, useState } from "react";

import { Container } from "react-bootstrap";

import "./asoccer.scss";

import { DAILY, MONTHLY, WEEKLY } from "../../constants";

import DailyReport from "./components/DaliyReport";
import WeeklyReport from "./components/WeeklyReport";
import MonthlyReport from "./components/MonthlyReport";

const AdminSoccerPage = () => {
  const [component, setComponent] = useState(DAILY);
  const renderComponent = {
    [DAILY]: <DailyReport setComponent={setComponent} />,
    [WEEKLY]: <WeeklyReport setComponent={setComponent} />,
    [MONTHLY]: <MonthlyReport setComponent={setComponent} />,
  };
  return (
    <Container className="admin-soccer-container-wrapper">
      {renderComponent[component]}
    </Container>
  );
};
export default AdminSoccerPage;
