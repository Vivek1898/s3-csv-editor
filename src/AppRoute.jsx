import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import User from './Users.jsx';
import UserDetails from "./UserDetails.jsx";
const AppRoute = () => {

    return(
        <Router>
            <Routes>
                <Route path="/user/list" element={<User />} />
                <Route path="/user/details/:id" element={<UserDetails />} />
            </Routes>
        </Router>
    )

}

export default AppRoute;