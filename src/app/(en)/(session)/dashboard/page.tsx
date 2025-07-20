'use client';
import styled from "styled-components";

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export default function DashboardPage() {
  return (
    <DashboardContainer>
      <h1>Welcome to the Dashboard</h1>
      <p>This is a placeholder for the dashboard content.</p>
    </DashboardContainer>
  );
}

// import { useSession } from 'next-auth/react';
// import AdminDashboard from '../(admin)/_dashboardComponents/dashboard/AdminDashboard';
// import UserDashboard from '../(user)/_dashboardComponents/dashboard/UserDashboard';

// export default function DashboardPage() {
//   const { data: session, status } = useSession();

//   if (status === 'loading') return <div>Loading...</div>;
//   if (!session) return <div>Unauthorized</div>;

//   const role = session.user?.role;

//   if (role === 'admin') return <AdminDashboard />;
//   if (role === 'user') return <UserDashboard />;

//   return <div>Unknown role</div>;
// }
