import React, { Children } from 'react'
import useAuth from '../../Hooks/useAuth'
import { Navigate } from 'react-router-dom'

function PrivateRoutes({Children}) {

    const {user, loading} = useAuth()

    if (loading) {
     return <div><span className="loading loading-bars loading-xl"></span>
</div>   
    }

    if (!user) {
        return <Navigate to="/login"></Navigate>
    }

    return Children;

}

export default PrivateRoutes
