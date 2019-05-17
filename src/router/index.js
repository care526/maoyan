import VueRouter from 'vue-router';

import Movie from '../pages/Movie.vue';
import HotMovies from '../components/HotMovies.vue';
import WillShow from '../components/WillShow.vue';
import Login from '../pages/Login.vue';
import Cinema from '../pages/Cinema.vue';
import Film from '../pages/Film.vue';
import User from '../pages/User.vue';
import Seach from '../pages/Seach.vue';
import CityList from '../pages/CityList.vue';
import City from '../pages/city.vue';
import store from '../store';


let router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: '/movie'
    },
    {
      path: '/movie',
      component: Movie,
      children: [
        {
          path: '',
          redirect: 'hotMovies'
        },
        {
          path: 'hotMovies',
          name: 'movie/hotMovies',
          component: HotMovies
        },
        {
          path: 'willShow',
          name: 'movie/willShow',
          component: WillShow
        }
      ]
    },
    {
      path: '/cinema',
      name: 'cinema',
      component: Cinema
    },
    {
      path: '/file/:id',
      name: 'file',
      component: Film
    },
    {
      path: '/seach',
      name: 'seach',
      component: Seach
    },
    {
      path: '/user',
      name: 'user',
      component: User,
      beforeEnter: (to, from, next) => {
        if (store.state.count) {
          next();
        } else {
          next('/login')
        }
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/cityList',
      name: 'cityList',
      component: CityList
    },
    {
      path: '/test',
      name: 'test',
      component: City
    },
    {
      path: '/*',
      redirect: '/movie',
      name: '404'
    }
  ]
})
export default router;