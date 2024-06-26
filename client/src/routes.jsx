import {ShopRoute, HomeRoute, RegisterRoute, AuthRoute, ContactRoute, NewsRoute} from "./utils/const";
import ShopPage from "./pages/ShopPage";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/authPage";
import RegisterPage from "./pages/registerPage";
import ContactPage from "./pages/ContactPage";
import NewsPage from "./pages/NewsPage";

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
    {
        path: ContactRoute,
        Element: ContactPage
    },
    {
        path: NewsRoute,
        Element: NewsPage
    }
];