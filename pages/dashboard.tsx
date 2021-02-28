import React from "react";
import Layout from "../components/Layout";
import DashboardLanding from "../components/dashboard-grid";

function Dashboard() {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <DashboardLanding />
    </Layout>
  );
}

export default Dashboard;