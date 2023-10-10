import React, { useContext } from 'react';
import { AuthContext } from '../../contex/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    const [isAdmin, isAdminLoading] = useAdmin(user?.email)


    // if (loading || isAdminLoading) {
    //     return <progress className="progress w-56"></progress>
    // }
    //console.log(isAdmin);
    if (user && isAdmin) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default AdminRoute;