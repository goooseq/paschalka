import {ShopRoute, HomeRoute, RegisterRoute, AuthRoute} from "./utils/const";
import ShopPage from "./pages/ShopPage";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/authPage";
import RegisterPage from "./pages/registerPage";

export const publicRoutes = [
    {
        path: ShopRoute,
        Element: ShopPage
    },
    {
        path: HomeRoute,
        Element: HomePage
    },
    {
        path: RegisterRoute,
        Element: RegisterPage
    },
    {
        path: AuthRoute,
        Element: AuthPage
    },
];