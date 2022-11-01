import React from 'react'
import { Outlet } from 'react-router-dom'
import DashboardNavbar from '../Pages/Dashboard/DashboardNavbar/DashboardNavbar'

const DashboardLayout = () => {
    return (
        <>
            <DashboardNavbar />
            <Outlet />
        </>
    )
}

export default DashboardLayout