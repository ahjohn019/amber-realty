import { createWebHistory, createRouter } from 'vue-router';
import * as Master from '../modules/main/router';
import Property from '../modules/property/router';
import { usePropertyWebStore } from '../stores/auth/index.js';

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
    {
        path: '/profile',
        component: Property.ProfilePage,
        meta: { requiresAuth: true },
        name: 'property.profile',
    },
];

const router = createRouter({
    history: createWebHistory(),
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 };
    },
    routes,
});

router.beforeEach(async (to, from, next) => {
    // next();
    const userAuthStore = usePropertyWebStore();
    const getAuthToken = userAuthStore.fetchSessionToken();

    if (to.path != '/' && getAuthToken == null && to.meta.requiresAuth) {
        next('/');
    } else {
        next();
    }
});

export default router;
