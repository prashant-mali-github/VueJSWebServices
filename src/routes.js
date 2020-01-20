
import Header from './components/Header.vue';
import AddCustomer from './components/customers/AddCustomer.vue';
import DeleteEmployee from './components/customers/DeleteEmployee.vue';
import EditEmployee from './components/customers/EditEmployee.vue'
import AllPagination from './components/customers/AllPagination.vue'


export const routes = [
    { path: '/', name: 'allpagination', components: {
        default: AllPagination,
        'header-top': Header
    } },

    { path:'/addUser', name:'addUser', components:{
        default: AddCustomer, 'header-top': Header } },

    { path:'/edit/:id', name:'editUser', components:{
        default: EditEmployee, 'header-top': Header }, props:true},
    { path:'/delete/:id', name:'deleteUser', 
    component:DeleteEmployee ,props: true },
    { path: '*', redirect: '/' }

];