import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Profile from './pages/Profile/Profile'


export const authRoutes = [
    { path: "login", element: <Login /> },
    { path: "register", element: <Register /> },
    { path: "profile", element: <Profile /> },
];
