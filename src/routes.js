import Home from './components/Home.vue';
import Header from './components/Header.vue';
import AddEmployee from './components/employee/AddEmployee.vue';
// import EditEmployee from './components/employee/EditEmployee.vue';
import DeleteEmployee from './components/employee/DeleteEmployee.vue';
import ShowEmployee from './components/employee/ShowEmployees.vue';
import EditEmployee from './components/employee/EditEmployee.vue'

export const routes = [
    { path: '', name: 'home', components: {
        default: Home,
        'header-top': Header
    } },
    // { path: '/user', components: {
    //     default: User,
    //     'header-bottom': Header
    // }, children: [
    //     { path: '', component: UserStart },
    //     { path: ':id', component: UserDetail },
    //     { path: ':id/edit', component: UserEdit, name: 'userEdit' }
    // ] },
    // { path: '/redirect-me', redirect: { name: 'home' } },


    { path: '*', redirect: '/' },
    { path:'/addUser', name:'addUser', components:{
        default: AddEmployee, 'header-top': Header } },
    { path:'/u/edit/:id', name:'editUser', components:{
        default: EditEmployee, 'header-top': Header } },
    { path:'/showEmployees', name:'showEmployees', components:{
        default: ShowEmployee, 'header-top': Header } },
    { path:'/u/delete/:id', name:'deleteUser', component:DeleteEmployee }

];