// Layouts
import { JustHeader } from '~/components/Layout';

// Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile, layout: null },
    { path: '/upload', component: Upload, layout: JustHeader },
    { path: '/search', component: Search },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };