<template>
    <div>
        <h1>Edit Employee Page</h1>
        <!-- <p> {{ this.info }}</p> -->
        <!-- <router-link to="/delete/:id" tag="li" active-class="active"></router-link> -->
       <section>
        <b-field label="Name">
            <b-input v-model="name"></b-input>
        </b-field>
        <b-field label="Salary">
            <b-input v-model="salary"></b-input>
        </b-field>
        <b-field label="Age">
            <b-input v-model="age"></b-input>
        </b-field>
        <!-- <b-button @click ="Update" type="is-success">Edit Customer</b-button> -->
        </section>
    </div>
        <!-- <router-view></router-view> -->
</template>

<script>
    export default {
       data(){
            return {
                name: "",
                salary: "",
                age: "",
                id:"",
                info:'',
                isComponentModalActive: false,
                formProps: {
                    name: this.name,
                    salary:this.salary,
                    age: this.age
                }
            }
        },
        mounted() {
            this.id = this.$route.params.id // id of the article
            //this.fetchData(this.id)
            this.$http.get(`http://dummy.restapiexample.com/api/v1/employee/${this.id}`)
            .then(response => {
                // this.info = response.data.data
                this.name =  response.data.data.employee_name
                this.salary = response.data.data.employee_salary
                this.age =  response.data.data.employee_age
            })
        },
        methods: {
             success() {
                this.$buefy.toast.open({
                    message: 'Employee edited',
                    type: 'is-success'
                })
            }
        }
    }
</script>