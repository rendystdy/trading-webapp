import { createBrowserRouter } from 'react-router-dom';
import Home from '@/features/Home/';

import NotFoundPage from '@/components/NotFound'
import Announcement from '@/features/Announcement';
import Layout from '@/components/Layout';
import DetailCategory from '@/features/Announcement/DetailCategory';
import VideoTutorial from '@/features/Education/VideoTutorial';

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
                path: 'news/announcement',
                element: <Announcement />,
            },
            {
                path: 'news/announcement/:postId',
                element: <DetailCategory />,
            },
            {
                path: 'education/tutorial',
                element: <VideoTutorial />,
            }
        ],
        errorElement: <NotFoundPage />
    },
]);


export default router;