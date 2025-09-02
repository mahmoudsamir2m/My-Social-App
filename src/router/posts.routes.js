import Posts from './pages/Posts/Posts'
import PostDetails from './pages/PostDetails/PostDetails'


export const postRoutes = [
    { path: "posts", element: <Posts /> },
    { path: "post/:id", element: <PostDetails /> },
];
