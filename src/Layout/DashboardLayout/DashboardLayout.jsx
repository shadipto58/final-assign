import React, { useContext } from 'react';
import Header from '../../components/Header/Header';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../contex/AuthProvider';
import useAdmin from '../../hooks/useAdmin';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    //console.log(isAdmin);



    return (
        <div>
            <Header></Header>

            <div className="drawer lg:drawer-open">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content bg-[#F1F5F9] p-14">
                    {/* Page content here */}

                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-white text-base-content">
                        {/* Sidebar content here */}
                        <li><Link to='/dashboard'>My Appointments</Link></li>

                        {
                            isAdmin && <>
                                <li><Link to='/dashboard/allUsers'>All Users</Link></li>
                                <li><Link to='/dashboard/addDoctor'>Add a Doctor</Link></li>
                                <li><Link to='/dashboard/manageDoctor'>Manage Doctors</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;