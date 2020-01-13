<template>
    <div>
        <h1>All Employee Detail Page</h1>
        <!-- <hr>
        <button @click ="showAll" class="btn btn-primary">Show Employees</button>
        <hr> -->
        <div class="container">          
                <table class="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Salary</th>
                            <th>Age</th>
                            <!-- <th>Email</th>-->
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="u in users[1]" :key="u.id">
                            <td> {{ u.id}} </td>
                           <td> {{ u.employee_name }}</td>
                           <td>{{ u.employee_salary }}</td>
                           <td>{{  u.employee_age }} </td>
                           <!-- <td> {{ u.c_email}} </td> -->
                           <td>
                             <router-link
                                tag="button"
                                :to="{name:'editUser', params: {id: u.id, user: u}}">
                                style="cursor: pointer" class="btn btn-primary">Edit</router-link>
                              <router-link
                                tag="button"
                                :to="'/u/delete/' + u.id"
                                style="cursor: pointer" class="btn btn-primary">Delete</router-link>
                            <!-- <a href="#" class="icon">
                            <i v-on:click="onEdit(product)" class="fa fa-pencil"></i>
                            </a> -->
                            </td>
                        </tr>
                    </tbody>
                </table>
        </div>

        <!-- <router-view></router-view> -->
    </div>
</template>

<script>
    export default {
        data(){
            return {
                users: [],
                info:'',
                // id:null
            }
        },
        props:['u'],
        created(){
            this.showAll();
            // this.id = this.$route.params.id 
            // if(this.id != null){
            //     then.deleteEmployee();
            // }   
        },
        methods: {
            showAll() {
                this.$http.get('http://dummy.restapiexample.com/api/v1/employees')
                    .then(res => res.json())
                    .then(data => {
                        const usersArray = [];
                        // console.log(data.customers)
                        for(let key in data){
                            usersArray.push(data[key])
                        }
                        this.users = usersArray
                        // console.log(this.users)
                    })
            },
            // deleteEmployee(){
            // // id of the article
            // this.$http.delete(`http://dummy.restapiexample.com/api/v1/delete/${this.id}`)
            //     .then(_ => {
            //         console.log(this.id)
            //     this.$router.push('/showEmployees')
            //     })
            //     .catch(err => {
            //     // eslint-disable-next-line
            //     console.log(err)
            // })
            // }
            // showAll(){
            //     axios
            //         .get('http://prashantrestapi.herokuapp.com/api/customers/')
            //         .then(response => (this.info = response))
            //         console.log(this.info)
            // }
        }
    }
</script>