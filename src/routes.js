// import Home from './components/Home.vue';
import Header from './components/Header.vue';
// import AddEmployee from './components/employee/AddEmployee.vue';
import AddEmployee from './components/customers/AddEmployee.vue';

// import EditEmployee from './components/employee/EditEmployee.vue';
// import DeleteEmployee from './components/employee/DeleteEmployee.vue';
import DeleteEmployee from './components/customers/DeleteEmployee.vue';


// import ShowEmployee from './components/employee/ShowEmployees.vue';
// import EditEmployee from './components/employee/EditEmployee.vue'
import EditEmployee from './components/customers/EditEmployee.vue'


// import ShowPagination from './components/employee/ShowPagination.vue'
// import AllPagination from './components/employee/AllPagination.vue
import AllPagination from './components/customers/AllPagination.vue'

//import EditC from './components/employee/EditCustomer.vue'
// import EditCard from './components/employee/CardEditEmployee.vue'
// import User from './components/employee/User.vue'
// import View from './components/employee/View.vue'
// import Form from './components/employee/FormComponent.vue'



export const routes = [
    { path: '/', name: 'allpagination', components: {
        default: AllPagination,
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
    // { path:'/', name:'allpagination', components:{
    //     default: AllPagination, 'header-top': Header } },
    // { path:'/pagination', name:'pagination', components:{
    //     default: ShowPagination, 'header-top': Header } },
    { path:'/edit/:id', name:'editUser', components:{
        default: EditEmployee, 'header-top': Header }, props:true},
    // { path:'/view/:id', name:'viewemployee', components:{
    //     default: AllPagination, 'header-top': Header }, props:true},
        
    // { path:'/editcard/:id', name:'editcard', components:{
    //     default: EditCard, 'header-top': Header }, props:true},
    // { path:'/editc/:u/:id', name:'editCUser', components:{
    //     default: EditC, 'header-top': Header }, props:true},
    // { path:'/showEmployees', name:'showEmployees', components:{
    //     default: ShowEmployee, 'header-top': Header } },
    // { path:'/editEmployee', name:'editEmployee', components:{
    //     default: CardEditC, 'header-top': Header } },
    { path:'/delete/:id', name:'deleteUser', component:DeleteEmployee ,props: true}

];