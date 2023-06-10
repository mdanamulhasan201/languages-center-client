
import { Navigate, useLocation } from 'react-router'
import Loader from '../Pages/Shared/Loader/Loader'
import useAuth from '../hook/useAuth'
import UseInstructor from '../hook/UseInstructor'

const InstructorRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const [isInstructor, isInstructorLoading] = UseInstructor()
    const location = useLocation()

    if (loading || isInstructorLoading) {
        return <Loader></Loader>
    }

    if (user && isInstructor) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
}

export default InstructorRoute;

