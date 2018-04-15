import Login from "./pages/login.vue";
import HomePage from './pages/home.vue';
import Tact from './pages/tact.vue';
import LineImage from './pages/lineImage.vue';
import ReadingFromCamera from './pages/readingFromCamera.vue';
import StationExclude from './pages/stationExclude.vue';
import Pcb from './pages/pcb.vue';
import EmployeesMesseges from './pages/employeesMesseges.vue';
import DynamicRoutePage from './pages/dynamic-route.vue';

export default [
  {
    path: '/login/',
    component: Login
  },
  {
    path: '/home/',
    component: HomePage,
  },
  {
    path: '/tact/',
    component: Tact
  },
  {
    path: '/lineImage/',
    component: LineImage
  },
  {
    path: '/readingFromCamera/',
    component: ReadingFromCamera
  },
  {
    path: '/stationExclude/',
    component: StationExclude
  },
  {
    path: '/pcb/',
    component: Pcb
  },
  {
    path: '/employeesMesseges/',
    component: EmployeesMesseges
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  }
];
