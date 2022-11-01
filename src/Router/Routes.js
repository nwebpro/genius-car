import Main from "../Layout/Main"
import Checkout from "../Pages/Checkout/Checkout"
import Contact from "../Pages/Contact/Contact"
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
                path: '/services',
                element: <Services />
            },
            {
                path: '/service-details',
                element: <ServiceDetail />
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
    }
])