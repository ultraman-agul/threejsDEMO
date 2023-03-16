import { RouteRecordRaw } from 'vue-router'
import Index from '../demo/demo1/index.vue'
import Index2 from '../demo/demo1/index2.vue'
import Index3 from '../demo/demo1/index3.vue'
import Index4 from '../demo/demo1/index4.vue'
import Index5 from '../demo/demo1/index5.vue'
import Index6 from '../demo/demo1/index6.vue'
const route: RouteRecordRaw[] = [
    { 
        path: '/',
        component: Index,
        meta: {
            title: '第一个场景'
        }
    },
    {
        path: '/demo1-2',
        component: Index2,
        meta: {
            title: '材质和光照'
        }
    },
    {
        path: '/demo1-3',
        component: Index3,
        meta: {
            title: '动画'
        }
    },
    {
        path: '/demo1-4',
        component: Index4,
        meta: {
            title: '性能监控'
        }
    },
    {
        path: '/demo1-5',
        component: Index5,
        meta: {
            title: '交互控制'
        }
    },
    {
        path: '/demo1-6',
        component: Index6,
        meta: {
            title: '响应窗口变化'
        }
    }
]

export default route
