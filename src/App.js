import LyricsPage from "./pages/LyricsPage";
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import SpotifyCallback from "./auth/SpotifyCallback";
import {MainPage} from "./pages/MainPage";
import {Logo} from "./icons/Logo";
import LoginPage from "./pages/LoginPage";
import {TestPage} from "./pages/KaraokePage";

export const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <MainPage/>,
        },
        {
            path: "/main",
            element: <Navigate to={'/'}/>
        },
        {
            path: "/callback",
            element: <SpotifyCallback/>
        },
        {
            path: "/lyrics",
            element: <LyricsPage/>
        },
        {
            path: "/karaoke",
            element: <TestPage/>
        },
        {
            path: "/login",
            element: <LoginPage/>
        }
    ]);

    return <RouterProvider router={router}/>
}