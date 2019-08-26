import Vue from 'vue';
import VueRouter from 'vue-router';
import AddUser from './components/AddUser';
import UserList from './components/UserList';

Vue.use(VueRouter);

export default new VueRouter({
 routes: [
   {
     path: '/',
     component: AddUser
   },
   {
     path: '/list',
     component: UserList,
   }
 ]
});