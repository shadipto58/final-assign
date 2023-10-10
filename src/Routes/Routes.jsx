import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Appointment from '../components/Appointment/Appointment';
import Login from '../components/Login/Login';
import SignUp from '../components/SignUp/SignUp';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Dashboard from '../components/Dashboard/Dashboard';
import DashboardLayout from '../Layout/DashboardLayout/DashboardLayout';
import AllUsers from '../components/Dashboard/AllUsers/AllUsers';
import AddDoctor from '../components/Dashboard/AddDoctor/AddDoctor';
import ManageDoctor from '../components/Dashboard/ManageDoctor/ManageDoctor';
import AdminRoute from './AdminRoute/AdminRoute';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/Appointment',
                element: <PrivateRoute><Appointment /></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    }
    , {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/allUsers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/addDoctor',
                element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
            },
            {
                path: '/dashboard/manageDoctor',
                element: <AdminRoute><ManageDoctor></ManageDoctor></AdminRoute>
            },
        ]
    }
])

export default router;