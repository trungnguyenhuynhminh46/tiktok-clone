// Layouts
import { JustHeader } from '~/layouts';

// Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
// Assets
import config from '~/config';
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: JustHeader },
    { path: config.routes.search, component: Search },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
