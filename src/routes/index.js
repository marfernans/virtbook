import Header from '../templates/Header';
import Home from '../pages/Home';
import  Books from '../pages/Books';
import Error404 from '../pages/Error404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';



const routes = {
    '/': Home,
    '/:id': Books,
    'contact': 'Contact',

}

const router = async () => {
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');

    header.innerHTML = await Header();
}

export default router;