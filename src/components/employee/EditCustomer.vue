<template>
    <div>
        <h1>Edit Employee Page</h1>
        <!-- <router-link to="/delete/:id" tag="li" active-class="active"></router-link> -->
       <section>
        <b-field label="Name">
            <b-input v-model="employee.customer_name" :value="props.customer_name"></b-input>
        </b-field>
        <b-field label="Salary">
            <b-input v-model="employee.c_address" value="c_address"></b-input>
        </b-field>
        <b-field label="Age">
            <b-input v-model="employee.c_email" value="c_email"></b-input>
        </b-field>
        <b-field label="Age">
            <b-input v-model="employee.c_mobileno" value="c_mobileno"></b-input>
        </b-field>
        <b-button @click ="Update" class="btn btn-primary">Edit Customer</b-button>
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
                    customer_name: "",
                    c_address: "",
                    c_email: "",
                    c_mobileno:""
                },
                id:'',
                users: [],
                props:['props']
            }
        },
        methods: {
            Update() {
                this.id = this.$route.params.id // id of the article
                this.$http.put(`http://dummy.restapiexample.com/api/v1/update/${this.id}`, this.employee)
                .then(()=> {
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
            }
        }
    }
</script>