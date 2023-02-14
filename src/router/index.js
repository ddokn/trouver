import { createWebHistory, createRouter } from "vue-router";
import main from '../views/MainView.vue'
import home from '../views/HomeView.vue'
import plan from '../views/PlanView.vue'
import feed from '../views/FeedView.vue'
import mypage from '../views/MyPage.vue'

const routes = [
  {
    path: "/",
    name: "main",
    component: main,
    props: true
  },
  {
    path: "/home",
    name: "home",
    component: home,
    props: true
  },
  {
    path: "/plan",
    name: "plan",
    component: plan,
    props: true
  },
  {
    path: "/feed",
    name: "feed",
    component: feed,
    props: true
  },
  {
    path: "/mypage",
    name: "mypage",
    component: mypage,
    props: true
  }
];


const router = createRouter ({
  history: createWebHistory(),
  routes,
  scrollBehavior(){
    return { top: 0 }
  },
});

export default router; 
