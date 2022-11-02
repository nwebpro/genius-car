import DashboardLayout from "../Layout/DashboardLayout"
import Main from "../Layout/Main"
import About from "../Pages/About/About"
import Blogs from "../Pages/Blog/Blogs"
import Checkout from "../Pages/Checkout/Checkout"
import Contact from "../Pages/Contact/Contact"
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard"
import ManageInventory from "../Pages/Dashboard/ManageInventory/ManageInventory"
import Order from "../Pages/Dashboard/Order/Order"
import OrderReview from "../Pages/Dashboard/OrderReview/OrderReview"
import ErrorPage from "../Pages/ErrorPage/ErrorPage"
import Home from "../Pages/Home/Home/Home"
import Login from "../Pages/Login/Login"
import Register from "../Pages/Register/Register"
import Services from "../Pages/Services/Services"
import ServiceDetail from "../Pages/Shared/ServiceDetails/ServiceDetail/ServiceDetail"
import PrivateRoute from "./PrivateRoute"

const { createBrowserRouter } = require("react-router-dom")

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/services',
                element: <Services />
            },
            {
                path: '/service-details/:serviceId',
                element: <ServiceDetail />
            },
            {
                path: '/blog',
                element: <Blogs />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/checkout/:serviceId',
                element: (
                    <PrivateRoute>
                        <Checkout />
                    </PrivateRoute>
                )
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            }
        ]
    },
    {
        path: '/dashboard',
        element: (
            <PrivateRoute>
                <DashboardLayout />
            </PrivateRoute>
        ),
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/dashboard',
                element: (
                    <PrivateRoute>
                        <Dashboard />
                    </PrivateRoute>
                )
            },
            {
                path: '/dashboard/order',
                element: (
                    <PrivateRoute>
                        <Order />
                    </PrivateRoute>
                )
            },
            {
                path: '/dashboard/order-review',
                element: (
                    <PrivateRoute>
                        <OrderReview />
                    </PrivateRoute>
                )
            },
            {
                path: '/dashboard/manage-inventory',
                element: (
                    <PrivateRoute>
                        <ManageInventory />
                    </PrivateRoute>
                )
            }
        ]
    }
])