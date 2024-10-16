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
import Register from '@/features/Register';
import Profile from '@/features/Profile';
import LayoutProfile from '@/components/LayoutProfile';

let router = createBrowserRouter([
    {
        path: "/",
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
            },
        ],
        errorElement: <NotFoundPage />
    },
    {
        path: "register",
        element: <LayoutProfile />,
        children: [
            {
                index: true,
                element: <Register />
            }
        ],
        errorElement: <NotFoundPage />
    },
    {
        path: "profile",
        element: <LayoutProfile />,
        children: [
            {
                index: true,
                element: <Profile />
            }
        ],
        errorElement: <NotFoundPage />
    },
]);


export default router;