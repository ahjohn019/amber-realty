import { createWebHistory, createRouter } from 'vue-router';
// import * as AdminDashboard from '../modules/dashboard/router';
import * as LoginDashboard from '../modules/login/router';
import * as PostDashboard from '../modules/post/router';
import * as Property from '../modules/property/router';
import * as TestPage from '../modules/test/router';
import { useAdminAuthStore } from '@store_admin/base/auth.js';

const routes = [
    // {
    //     path: '/',
    //     component: AdminDashboard.MainPage,
    //     meta: { requiresAuth: true },
    //     name: 'home',
    // },
    {
        path: '/posts',
        component: PostDashboard.PostPage,
        meta: { requiresAuth: true },
        name: 'posts',
        children: [
            {
                path: '',
                component: PostDashboard.PostPageList,
                meta: { requiresAuth: true },
                name: 'posts.list',
            },
            {
                path: 'form',
                component: PostDashboard.PostPageForm,
                meta: { requiresAuth: true },
                name: 'posts.form',
                props: (route) => ({ type: route.query.type }),
            },
        ],
    },
    {
        path: '/',
        component: Property.BasePage,
        meta: { requiresAuth: true },
        name: 'property',
        children: [
            {
                path: '',
                component: Property.ListPage,
                meta: { requiresAuth: true },
                name: 'property.list',
            },
            {
                path: 'form',
                component: Property.FormPage,
                meta: { requiresAuth: true },
                name: 'property.form',
                props: (route) => ({ type: route.query.type }),
            },
            {
                path: 'detail/:id',
                component: Property.DetailPage,
                meta: { requiresAuth: true },
                name: 'property.detail',
            },
        ],
    },
    {
        path: '/login',
        component: LoginDashboard.LoginPage,
        meta: { requiresAuth: false },
        name: 'login',
    },
    {
        path: '/test',
        component: TestPage.TestPage,
        meta: { requiresAuth: false },
        name: 'test',
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
    const adminAuthStore = useAdminAuthStore();
    const getAuthToken = adminAuthStore.fetchSessionToken();

    if (to.path != '/login' && getAuthToken == null && to.meta.requiresAuth) {
        next('/login');
    } else {
        next();
    }
});

export default router;
