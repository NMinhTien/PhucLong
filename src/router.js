import { Route, Routes } from "react-router-dom";
import HomePage from "./Assets/User/HomePage";
import { ROUTERS } from "./utils/Router";
import MasterLayout from "./Assets/User/theme/masterLayout";
import ShowMore from "./component/ShowMore";
import Order from "./component/Order";
import Drink from "./component/Categories/Drink";
import ProductMobile from "./component/Categories/ProductMobile";
import Shop from "./component/Categories/Shop";
import Mail from "./component/Categories/Mail";
import Login from "./component/Categories/Login";

const userRouters = [
    {
        path: ROUTERS.USER.HOME,
        component: <HomePage />,
    },
    {
        path: ROUTERS.USER.SHOWMORE,
        component: <ShowMore />,
    },
    {
        path: ROUTERS.USER.ORDER,
        component: <Order />, // This will handle the product details
    },
    {
        path: ROUTERS.USER.DRINK,
        component: <Drink/>, // This will handle the product details
    },
    {
        path: ROUTERS.USER.PRODUCT,
        component: <ProductMobile/>, // This will handle the product details
    },
    {
        path: ROUTERS.USER.SHOP,
        component: <Shop/>, // This will handle the product details
    },
    {
        path: ROUTERS.USER.MAIL,
        component: <Mail/>, // This will handle the product details
    },
    {
        path: ROUTERS.USER.LOGIN,
        component: <Login/>, // This will handle the product details
    },
];

const RouterCustom = () => {
    return (
        <MasterLayout>
            <Routes>
                {userRouters.map((item, key) => (
                    <Route key={key} path={item.path} element={item.component} />
                ))}
            </Routes>
        </MasterLayout>
    );
};

export default RouterCustom;
