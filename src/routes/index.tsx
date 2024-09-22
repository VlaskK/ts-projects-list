import { RouteObject } from 'react-router-dom';
import MainLayout from '../components/main-layout/MainLayout';


export default [
    {
        path: '/',
        element: <MainLayout></MainLayout>,
    },
    {
        path: '*',
        element: <div>404</div>,
    },
] as RouteObject[];
