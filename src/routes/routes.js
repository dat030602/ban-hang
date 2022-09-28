import config from '~/config/';

//Layout

import Home from '~/pages/Home';
import ProductPage from '~/pages/Product';
import ProductsPage from '~/pages/Products';

const publicRoutes = [
    { path: config.routes.home, components: Home },
    { path: config.routes.products, components: ProductsPage },
    { path: config.routes.product, components: ProductPage },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
