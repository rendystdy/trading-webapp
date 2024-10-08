import { createBrowserRouter } from 'react-router-dom';
import Home from '@/features/Home/';

import NotFoundPage from '@/components/NotFound'
import Announcement from '@/features/Announcement';
import Layout from '@/components/Layout';

let router = createBrowserRouter([
    {   
        id: 'root',
        path: "/",
        loader: () => ({ message: "Hello Data Router!" }),
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'announcement',
                element: <Announcement />
            }
        ],
        errorElement: <NotFoundPage />
    },
]);


export default router;