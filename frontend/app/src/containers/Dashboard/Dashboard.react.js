import React from 'react';
import DashboardBlock from '../../components/DashboardBlock/DashboardBlock.react.js';

const Dashboard = () => (
  <div>
    <h1>Dashboard</h1>

    <DashboardBlock title="Item Stats">
      <p>TODO: Item statistics. Total items, latest items, average items per day.</p>
    </DashboardBlock>

    <DashboardBlock title="Latest Item">
      <p>Summary of latest item.</p>
    </DashboardBlock>

    <DashboardBlock title="Dashboard Item">
      <p>Test dashboard item.</p>
    </DashboardBlock>

    <DashboardBlock title="Dashboard Item">
      <p>Test dashboard item.</p>
    </DashboardBlock>
  </div>
);

export default Dashboard;
