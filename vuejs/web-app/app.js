// import '../bootstrap'
import { createApp } from 'vue';
import router from './router/index';
import axios from 'axios';
import VueAxios from 'vue-axios';
import { Quasar } from 'quasar';
// Import Quasar css
import 'quasar/dist/quasar.css';
// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css';
import '@quasar/extras/material-icons-outlined/material-icons-outlined.css';
import 'animate.css';
import VueNumber from 'vue-number-animation';
import { createPinia } from 'pinia';
import CKEditor from '@ckeditor/ckeditor5-vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
import VueSplide from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';

const app = createApp({});
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.use(VueNumber);
app.use(VueAxios, axios);

app.config.globalProperties.mainLogo = '/images/amber_realty_logo.png';

app.use(CKEditor);
app.use(
    AOS.init({
        // Global settings:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 800, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
    })
);
app.use(VueSplide);

app.use(Quasar, {
    plugins: {},
    config: {
        brand: {
            primary: '#ac0e14',
            secondary: '#ffd278',
            positive: '#26A69A',
        },
        screen: {
            xs: 576, // Extra small screen / phone
            sm: 768, // Small screen / tablet
            md: 992, // Medium screen / desktop
            lg: 1200, // Large screen / wide desktop
        },
    },
});

app.mount('#app');
