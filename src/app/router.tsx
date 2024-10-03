import { createBrowserRouter } from 'react-router-dom';
import App from '../App';

import { NotFoundPage } from '@/components'

let router = createBrowserRouter([
    {
        path: "/",
        loader: () => ({ message: "Hello Data Router!" }),
        Component() {
            // let data = useLoaderData() as { message: string };
            return <App />;
        },
        errorElement: <NotFoundPage />
    },
]);


export default router;