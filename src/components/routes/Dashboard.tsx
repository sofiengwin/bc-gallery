import * as React from 'react';
// I had plans to create a separate layer for mobile and desktop but i turned out I did not
// have to that to get the needed responsive behaviour. But if there layout differences between mobile and desktop
// this is the approach i normal take.
import DesktopDashboard from '../Desktop/Dashboard';

const Dashboard: React.SFC = () => {
  return (
    <div>
      <DesktopDashboard />
    </div>
  );
}

export default Dashboard;