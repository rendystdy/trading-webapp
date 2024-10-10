import { createBrowserRouter } from 'react-router-dom';
import Home from '@/features/Home/';

import NotFoundPage from '@/components/NotFound'
import Announcement from '@/features/Announcement';
import Layout from '@/components/Layout';
import DetailCategory from '@/features/Announcement/DetailCategory';

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
                element: <Announcement />,
            },
            {
                path: 'announcement/:postId',
                element: <DetailCategory />,
            }
        ],
        errorElement: <NotFoundPage />
    },
]);


export default router;