import { createRouter,  createWebHistory, RouteRecordRaw} from 'vue-router'
import demo1 from './demo1'
const routes: RouteRecordRaw[] = [
    ...demo1
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to) => {
    document.title = 'three' + to.meta.title as string
})
export default router