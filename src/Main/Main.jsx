import React, { useContext } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NavBar from '../pages/Shared/NavBar/NavBar';
import Footer from '../pages/Shared/Footer/Footer';
import { AuthContext } from '../providers/AuthProvider';



const Main = () => {

  const {  loading } = useContext(AuthContext);

  const location = useLocation();
    
    const noHeaderFooter = location.pathname.includes('signIn') || location.pathname.includes('register');

//   if (loading) {
//     return <div className="flex justify-center items-center">
//         <p className="loading loading-spinner text-[#026eb7] loading-lg   my-[200px]"></p>
//     </div>
// }
    return (
        <div>
       
          <div className=' bg-white'>
            {noHeaderFooter || <NavBar></NavBar>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
          
          </div>
            
        </div>
    );
};

export default Main;