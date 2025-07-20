// 'use client';

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
