import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import Home from '../../Componants/Home/Home/Home'
import Blog from "../../Componants/Blog/Blog";
import Details from "../../Componants/Details/Details";

export const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/details/:id',
                element: <Details></Details>,
                loader: ({ params }) => fetch(` https://porfolio-server-site-ayakub.vercel.app/projectdata/${params.id}`)
            }
        ]
    }
])