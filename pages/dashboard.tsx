import React from "react";
import Layout from "../components/Layout";
import DashboardLanding from "../components/dashboard-grid";
import Group from "../components/dashboard/Groups/Groups";

function Dashboard() {
  return (
    <Layout title="Home ">
      <Group />
    </Layout>
  );
}

export default Dashboard;
