import DashboardLayout from "../Layout/DashboardLayout"
import Main from "../Layout/Main"
import About from "../Pages/About/About"
import Blogs from "../Pages/Blog/Blogs"
import Checkout from "../Pages/Checkout/Checkout"
import Contact from "../Pages/Contact/Contact"
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard"
import Login from "../Pages/Dashboard/Login/Login"
import ManageInventory from "../Pages/Dashboard/ManageInventory/ManageInventory"
import Order from "../Pages/Dashboard/Order/Order"
import OrderReview from "../Pages/Dashboard/OrderReview/OrderReview"
import Register from "../Pages/Dashboard/Register/Register"
import ErrorPage from "../Pages/ErrorPage/ErrorPage"
import Home from "../Pages/Home/Home/Home"
import Services from "../Pages/Services/Services"
import ServiceDetail from "../Pages/Shared/ServiceDetails/ServiceDetail/ServiceDetail"

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
                path: '/service-details',
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
                path: '/checkout',
                element: <Checkout />
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: '/dashboard/order',
                element: <Order />
            },
            {
                path: '/dashboard/order-review',
                element: <OrderReview />
            },
            {
                path: '/dashboard/manage-inventory',
                element: <ManageInventory />
            },
            {
                path: '/dashboard/login',
                element: <Login />
            },
            {
                path: '/dashboard/register',
                element: <Register />
            }
        ]
    }
])