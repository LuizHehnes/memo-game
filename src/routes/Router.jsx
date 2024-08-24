import { createBrowserRouter } from "react-router-dom";
import Login from "../screens/Login";
import Registro from "../screens/Registro";
import Inicio from "../screens/Inicio";
import Jogo from "../screens/Jogo";
import Ranking from "../screens/Ranking";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Login /> 
    },
    {
        path: '/registro',
        element: <Registro/>
    },
    {
        path: "/inicio",
        element: <Inicio /> 
    },
    {
        path: "/jogo/:nivel",
        element: <Jogo /> 
    },
    {
        path: "/ranking",
        element: <Ranking /> 
    }
]);
