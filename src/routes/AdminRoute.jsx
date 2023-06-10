
import { Navigate, useLocation } from 'react-router'
import Loader from '../Pages/Shared/Loader/Loader'
import useAuth from '../hook/useAuth'
import UseAdmin from '../hook/UseAdmin'

const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const [isAdmin, isAdminLoading] = UseAdmin()
    const location = useLocation()

    if (loading || isAdminLoading) {
        return <Loader></Loader>
    }

    if (user && isAdmin) {
        return children
    }
    return <Navigate to='/' state={{ from: location }} replace></Navigate>
}

export default AdminRoute;

