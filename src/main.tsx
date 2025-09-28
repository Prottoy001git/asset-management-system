import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/layout/Layout';
import Dashboard from './components/pages/Dashboard';
import Categories from './components/pages/assets/Categories';
import AssetReports from './components/pages/assets/AssetReports';
import AssignAssets from './components/pages/assignments/AssignAssets';
import MyAssets from './components/pages/assignments/MyAssets';
import AssignmentHistory from './components/pages/assignments/AssignmentHistory';
import MyRequisitions from './components/pages/requisitions/MyRequisitions';
import Approvals from './components/pages/requisitions/Approvals';
import MaintenanceLogs from './components/pages/maintenance/MaintenanceLogs';
import MaintenanceReports from './components/pages/maintenance/MaintenanceReports';
import UserManagement from './components/pages/users&roles/UserManagement';
import Departments from './components/pages/users&roles/Departments';
import Roles from './components/pages/users&roles/Roles';
import SystemActivity from './components/pages/audit/SystemActivity';
import ManageAssets from './components/pages/assets/ManageAssets';
// import 'bootstrap/dist/css/bootstrap.min.css';


const router = createBrowserRouter([
  {path: '/', element: <Layout />,
    children:[
      {index:true, element: <Dashboard />},
      {path:'/dashboard', element: <Dashboard />},
      {path:'/manage-assets', element: <ManageAssets />},
      {path:'/categories', element: <Categories />},
      {path:'/asset-reports', element: <AssetReports />},
      {path:'/assign-assets', element: <AssignAssets />},
      {path:'/my-assets', element: <MyAssets />},
      {path:'/assignment-history', element: <AssignmentHistory />},
      {path:'/my-requisitions', element: <MyRequisitions />},
      {path:'/approvals', element: <Approvals />},
      {path:'/maintenance-logs', element: <MaintenanceLogs />},
      {path:'/maintenance-reports', element: <MaintenanceReports />},
      {path:'/user-management', element: <UserManagement />},
      {path:'/departments', element: <Departments />},
      {path:'/roles', element: <Roles />},
      {path:'/system-activity', element: <SystemActivity />},
    ]
  },
  {path: '*', element: <h1>404 page not found</h1>}

]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
