import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router/Routes';

const App = () => {
    return (
        <div className='px-[15px] lg:px-0'>
            <RouterProvider router={router} />
        </div>
    );
};

export default App;