<template>
    <div>
        <h1>Add Employee Page</h1>
        <hr>
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
                    <button @click ="submit" class="btn btn-primary">Add Customer</button>
                </div>
            </div>
        <hr>
        <button @click="navigateToHome" class="btn btn-primary">Back to home</button>
        <hr>
        <!-- <router-view></router-view> -->
    </div>
</template>

<script>
    export default {
        data(){
            return {
                employee: 
                {
                    name: "",
                    salary: "",
                    age: "",
                }
            }
        },
        methods: {
            navigateToHome() {
                this.$router.push({ name: 'home' });
            },
            submit(){
                // console.log(this.user);
                this.$http.post('http://dummy.restapiexample.com/api/v1/create', this.employee)
                //  .then(_ => {
                //     this.$router.push('/showEmployees')
                //  })
                // .catch(err => {
                //     // eslint-disable-next-line
                //     console.log(err)
                // })

                .then(res =>{
                    console.log(res.json())
                    console.log(this.user)
                })
                .then(_ =>{
                    this.$router.push('/showEmployees')
                })
                .catch(err =>{
                    console.log(err)
                })
            }
        }
    }
</script>