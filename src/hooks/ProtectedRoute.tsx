import { type JSX } from 'react'
import { Navigate } from 'react-router'

const ProtectedRoute = ({children}: {children: JSX.Element}) => {
    const token = localStorage.getItem('token')
    const isLoggedIn = !!token

    if (!isLoggedIn) {
        alert("Fitur khusus untuk pengguna login")
        return <Navigate to={"/"} />
    }

    return children
}

export default ProtectedRoute