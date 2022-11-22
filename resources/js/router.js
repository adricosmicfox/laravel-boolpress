import Vue from "vue";
import VueRouter from "vue-router";
import ListPostComponent from "./components/ListPostComponent";

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: ListPostComponent
        }
    ]
})
export default router;
