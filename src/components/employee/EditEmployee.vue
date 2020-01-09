<template>
    <div>
        <h1>Edit Employee Page</h1>
        <p> {{ this.info }}</p>
        <!-- <router-link to="/delete/:id" tag="li" active-class="active"></router-link> -->
       <section>
        <b-field label="Name">
            <b-input v-model="employee.name"></b-input>
        </b-field>
        <b-field label="Salary">
            <b-input v-model="employee.salary"></b-input>
        </b-field>
        <b-field label="Age">
            <b-input v-model="employee.age"></b-input>
        </b-field>
        <b-button @click ="Update" type="is-success">Edit Customer</b-button>
        </section>
    </div>
        <!-- <router-view></router-view> -->
</template>

<script>
    export default {
        data(){
            return {
                employee: 
                {
                    name: "",
                    salary: "",
                    age: ""
                },
                id:"",
                info:''
            }
        },
         mounted() {
            this.id = this.$route.params.id // id of the article
            //this.fetchData(this.id)
            this.$http.get(`http://dummy.restapiexample.com/api/v1/employee/${this.id}`)
            .then(response => {
           // this.info = response.data
            this.employee.name =  response.data.employee_name
            this.employee.salary = response.data.employee_salary
            this.employee.age =  response.data.employee_age
            })
        },
        methods: {
             success() {
                this.$buefy.toast.open({
                    message: 'Employee edited',
                    type: 'is-success'
                })
            },
            Update() {
                this.id = this.$route.params.id // id of the article
                this.$http.put(`http://dummy.restapiexample.com/api/v1/update/${this.id}`, this.employee)
                .then(()=> {
                    this.success();
                    this.$router.push('/allpagination')
                })
                .catch(err => {
                // eslint-disable-next-line
                console.log(err)
                })
            },
            deleteEmployee(){
                this.id = this.$route.params.id // id of the article
                this.$http.delete(`http://dummy.restapiexample.com/api/v1/delete/${this.id}`)
                    .then(() => {
                        // console.log(this.id)
                    this.$router.push('/allpagination')
                    })
                    .catch(err => {
                    // eslint-disable-next-line
                    console.log(err)
                })
            },
            fetchData(id){
                 this.$http.get(`http://dummy.restapiexample.com/api/v1/employee/${id}`)
                    .then(res => {
                    // eslint-disable-next-line
                    const { employee_name, employee_salary, employee_age } = res.data
                    this.employee.name = employee_name
                    this.employee.salary = employee_salary
                    this.employee.age = employee_age
                    // eslint-disable-next-line
                   
                    })
                    .catch(err => {
                    // eslint-disable-next-line
                    console.log(err)
                    })
                }
            }
    }
</script>