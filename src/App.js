import './App.sass';
import LyricsPage from "./pages/LyricsPage";
import LoginPage from "./pages/LoginPage";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import SpotifyCallback from "./auth/SpotifyCallback";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <LoginPage/>,
        },
        {
            path: "/callback",
            element: <SpotifyCallback/>
        },
        {
            path: "/lyrics",
            element: <LyricsPage/>
        }
    ]);

    return (

        <RouterProvider router={router}/>
    );
}

export default App;
