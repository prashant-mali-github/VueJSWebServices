<template>
    <div>
        <h1>Edit Employee Page</h1>
        <!-- <router-link to="/delete/:id" tag="li" active-class="active"></router-link> -->
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
                    <button @click ="Update" class="btn btn-primary">Edit Customer</button>
                </div>
            </div>
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
                },
                id:'',
                users: []
            }
        },
        methods: {
            Update() {
                this.id = this.$route.params.id // id of the article
                this.$http.put(`http://dummy.restapiexample.com/api/v1/update/${this.id}`, this.employee)
                .then(_ => {
                this.$router.push('/showEmployees')
                })
                .catch(err => {
                // eslint-disable-next-line
                console.log(err)
                })
            },
            deleteEmployee(){
                this.id = this.$route.params.id // id of the article
                this.$http.delete(`http://dummy.restapiexample.com/api/v1/delete/${this.id}`)
                    .then(_ => {
                        console.log(this.id)
                    this.$router.push('/showEmployees')
                    })
                    .catch(err => {
                    // eslint-disable-next-line
                    console.log(err)
                })
            }
        }
    }
</script>