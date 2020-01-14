<template>
    <section>
        <b-field label="Id">
            <b-input v-model="employee.id" type="text"></b-input>
        </b-field>
        <b-field label="Name">
            <b-input v-model="employee.employee_name" type="text"></b-input>
        </b-field>
        <b-field label="Salary">
            <b-input v-model="employee.employee_salary" type="text"></b-input>
        </b-field>
        <b-field label="Age">
            <b-input v-model="employee.employee_age" type="text"></b-input>
        </b-field>
        <p> {{ employees }} </p>
            
        <!-- <b-button @click ="submit" type="is-success">Add Customer</b-button> -->
        <b-button @click ="fileSubmit" type="is-success">Add Customer</b-button>
    </section>
</template>

<!--
<template>
    <div>
        <h1>Add Employee Page</h1>
        <hr>
        <section>
        <div class="container">
            <div class="col-xs-12">
                <div class="form-group">
                    <label for=""> Name</label>
                    <input type="text" v-model="employee.name" class="form-group" required>
                </div>
                <div class="form-group">
                    <label for="">Salry</label>
                    <input type="text" v-model="employee.salary" class="form-group" required>
                </div>
                <div class="form-group">
                    <label for="">Age</label>
                    <input type="text" v-model="employee.age" class="form-group" required >
                </div>
                    <b-button @click ="submit" class="btn btn-primary">Add Customer</b-button>
                </div>
            </div>
        <hr>
        <button @click="navigateToHome" class="btn btn-primary">Back to home</button>
        <hr>
        </section>
    </div>
</template>
-->
<script>
    import json from "D:/VueJSWebServices/src/assets/index.json";
    import { savefile } from './../../main.js'
    export default {
        data(){
            return {
                employee: 
                {
                    id:'',
                    employee_name: "",
                    employee_salary: "",
                    employee_age: "",
                },
                employees:json.data,
                msg:''
            }
        },
        methods: {
            navigateToHome() {
                this.$router.push({ name: 'home' });
            },
            success() {
            this.$buefy.toast.open({
                message: 'Employee Added',
                type: 'is-success'
            })
            },
            submit(){
                // console.log(this.user);
                this.$http.post('http://dummy.restapiexample.com/api/v1/create', this.employee)
                 .then(() => {
                     this.success();
                    this.$router.push('/allpagination')
                 })
                .catch(err => {
                    // eslint-disable-next-line
                    console.log(err)
                })
            },
            // file manipulation
            fileSubmit(){
                savefile(this.employee);
                this.success();
            }
                // .then(res =>{
                //     console.log(res.json())
                //     console.log(this.user)
                // })
                // .then(_ =>{
                //     this.$router.push('/showEmployees')
                // })
                // .catch(err =>{
                //     console.log(err)
                // })
            
        }
    }
</script>