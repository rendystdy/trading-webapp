import { createBrowserRouter } from 'react-router-dom';
import Home from '@/features/Home/';

import NotFoundPage from '@/components/NotFound'
import Announcement from '@/features/Announcement';
import Layout from '@/components/Layout';
import DetailCategory from '@/features/Announcement/DetailCategory';
import VideoTutorial from '@/features/Education/VideoTutorial';
import Faq from '@/features/Education/Faq';
import FaqDetailByCategory from '@/features/Education/FaqDetailByCategory';
import TradingGuide from '@/features/Education/TradingGuide';

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
            },
            {
                path: 'education/faq',
                element: <Faq />,
            },
            {
                path: 'education/faq/:faqId',
                element: <FaqDetailByCategory />,
            },
            {
                path: 'education/trading-guide',
                element: <TradingGuide />,
            }
        ],
        errorElement: <NotFoundPage />
    },
]);


export default router;