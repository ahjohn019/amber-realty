import { createWebHistory, createRouter } from 'vue-router';
import * as Master from '../modules/main/router';
import Property from '../modules/property/router';

const routes = [
    {
        path: '/',
        component: Master.MainPage,
        meta: { requiresAuth: false },
        name: 'main',
    },
    {
        path: '/property',
        component: Property.ListPage,
        meta: { requiresAuth: false },
        name: 'property.list',
    },
    {
        path: '/property/details/:id',
        component: Property.DetailsPage,
        meta: { requiresAuth: false },
        name: 'property.details',
    },
    {
        path: '/about-us',
        component: Master.AboutUs,
        meta: { requiresAuth: false },
        name: 'property.about_us',
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach(async (to, from, next) => {
    next();
});

export default router;
