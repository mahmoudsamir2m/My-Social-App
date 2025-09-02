import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './Components/MainLayout/MainLayout'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Posts from './pages/Posts/Posts'
import PostDetails from './pages/PostDetails/PostDetails'
import Profile from './pages/Profile/Profile'
import NotFound from './pages/NotFound/NotFound'
const routes = createBrowserRouter([
  {
    path: "",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "posts", element: <Posts /> },
      { path: "details/:id", element: <PostDetails /> },
      { path: "/profile", element: <Profile /> },
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
