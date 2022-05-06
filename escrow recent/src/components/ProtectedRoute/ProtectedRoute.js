import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
    const name = localStorage.getItem('authtoken');
    if(name){
        console.log('Token exists');
        return true;
    }else{
        console.log('Token is not found');
        return false;
    }
};

const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;