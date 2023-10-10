import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contex/AuthProvider';
import toast from 'react-hot-toast';

const Header = () => {
    const { user, userLogOut } = useContext(AuthContext);

    const handleSignOut = () => {
        userLogOut()
            .then(() => {
                toast.success('User Logout Successfull!');
            })
            .catch(error => console.log(error))

    }

    const menuItem = <React.Fragment>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/appointment">Appointment</Link></li>
        <li><Link to="/reviews">Reviews</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>

        {
            user?.uid ?
                <>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link>{user.displayName}</Link></li>
                    <li><button onClick={handleSignOut}>Sign Out</button></li>
                </> :
                <>
                    <li><Link to="/login">Login</Link></li>
                </>

        }
    </React.Fragment>

    return (
        <div className="navbar bg-base-100 flel justify-between">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItem}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItem}
                </ul>
            </div>
            <div>
                <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Header;