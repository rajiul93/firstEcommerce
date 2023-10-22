// import React, { useContext } from 'react';
// import { Navigate, Outlet, useLocation } from 'react-router-dom';
// import { userContext } from '../context/UserContext';


// function PrivetOutlet() {
//     const { useFirebase } = useContext(userContext)
//     const {  user } = useFirebase;
//     const location = useLocation()
//     return (user?.email ? <Outlet />:<Navigate to="/login"  state={{from:location}} replace />  )
// }

// export default PrivetOutlet