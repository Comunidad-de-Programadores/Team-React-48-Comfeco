import React from "react";
import Layout from "../components/Layout";
import DashboardLanding from "../components/dashboard-grid";
import Events from "../components/dashboard/Events";

function Dashboard() {
  return (
    <>
      <Layout title="Comfeco">
        {/* <DashboardLanding /> */}
        <Events />
      </Layout>
    </>
  );
}

export default Dashboard;
