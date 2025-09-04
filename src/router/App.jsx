import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './Components/MainLayout/MainLayout'
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'
import { postRoutes } from './posts.routes'
import { authRoutes } from './auth.routes'

const routes = createBrowserRouter([
    ...authRoutes,
    {
        path: "",
        element: <MainLayout />,
        children: [
            { index: true, element: <Home /> },
            ...postRoutes,
            { path: "*", element: <NotFound /> },
        ],
    },
]);
function App() {
    return (
        <>
            <RouterProvider router={routes}>
            </RouterProvider>
        </>
    );
}

export default App
