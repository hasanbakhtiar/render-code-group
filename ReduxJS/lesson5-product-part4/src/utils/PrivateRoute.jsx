import { useCookies } from "react-cookie";
import { Navigate, Outlet } from "react-router-dom";



const PrivateRoute = () => {
    const authUserData = () => {

    const [cookies] = useCookies(['token']);
        if (cookies.token === "hagsd7732hd8h23ueh832ads") {
            return true
        } else {
            return false
        }
    }

    if (authUserData()) {
        return <Outlet />
    } else {
        return <Navigate to={'/login'} />
    }

}

export default PrivateRoute